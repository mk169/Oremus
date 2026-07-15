#!/usr/bin/env node
// Füllt die echten GABC-Melodien aus dem GregoBase-Datenbank-Dump, der als
// gemeinfreier (CC0) Korpus auf GitHub liegt: bacor/gregobasecorpus. Damit
// brauchen wir KEINEN Netzzugang zu gregobase.selapa.net.
//
// Ablauf:
//  1. SQL-Dump laden (von GitHub-raw oder aus lokaler Datei via Argument).
//  2. Tabelle gregobase_chants parsen → Map  id → gabc.
//  3. scripts/gregobase-map.json (Abschnitts-ID → GregoBase-ID) auflösen.
//  4. src/data/gabc/gregobase.json schreiben (Abschnitts-ID → GABC) – das ist
//     der Override, den `gabcFor` in der App bevorzugt.
//
// Nutzung:  npm run gabc:dump            (lädt den Dump von GitHub)
//           node scripts/gregobase-from-dump.mjs /pfad/zum/dump.sql
import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const MAP_PATH = resolve(__dirname, 'gregobase-map.json')
const OUT_PATH = resolve(__dirname, '../src/data/gabc/gregobase.json')
const DUMP_URL =
  'https://raw.githubusercontent.com/bacor/gregobasecorpus/v0.4/gregobase_dumps/gregobase_20191024.sql'

async function loadDump() {
  const localArg = process.argv[2]
  if (localArg) return readFile(localArg, 'utf8')
  const res = await fetch(DUMP_URL)
  if (!res.ok) throw new Error(`Dump-Download fehlgeschlagen: HTTP ${res.status}`)
  return res.text()
}

/**
 * Wandelt den (noch MySQL-escapten) gabc-Feldinhalt in echtes GABC um.
 * Der Dump speichert gabc als JSON-String (mit \uXXXX, \r\n, umschließenden "),
 * zusätzlich MySQL-escaped. Daher: minimal MySQL-entschärfen, dann JSON.parse.
 */
function decodeGabc(raw) {
  if (raw == null) return ''
  // MySQL-Escapes für Backslash/Quotes zurücknehmen (JSON-Escapes bleiben erhalten).
  const literal = raw.replace(/\\([\\'"])/g, '$1')
  const t = literal.trim()
  if (t.startsWith('"')) {
    try {
      return JSON.parse(t)
    } catch {
      /* Rückfall unten */
    }
  }
  // Kein JSON-String → vollständige MySQL-Entschärfung.
  return literal.replace(/\\(.)/g, (_, c) =>
    c === 'n' ? '\n' : c === 'r' ? '\r' : c === 't' ? '\t' : c === '0' ? '' : c,
  )
}

/**
 * Parst alle Zeilen der Tabelle gregobase_chants und liefert Map id→gabc.
 * gabc ist die 11. Spalte (Index 10).
 */
function parseChants(sql) {
  const map = new Map()
  const marker = 'INSERT INTO `gregobase_chants`'
  let pos = 0
  while ((pos = sql.indexOf(marker, pos)) !== -1) {
    const valuesAt = sql.indexOf('VALUES', pos)
    let i = sql.indexOf('(', valuesAt)
    // Tupel bis zum abschließenden ';' der Anweisung lesen.
    const stmtEnd = sql.indexOf(';\n', valuesAt)
    const end = stmtEnd === -1 ? sql.length : stmtEnd
    while (i !== -1 && i < end) {
      // ein Tupel (…) parsen
      const fields = []
      let field = ''
      let inStr = false
      let j = i + 1
      for (; j < end; j++) {
        const ch = sql[j]
        if (inStr) {
          if (ch === '\\') {
            field += ch + sql[j + 1]
            j++
          } else if (ch === "'") {
            inStr = false
          } else field += ch
        } else {
          if (ch === "'") {
            inStr = true
          } else if (ch === ',') {
            fields.push(field)
            field = ''
          } else if (ch === ')') {
            fields.push(field)
            break
          } else field += ch
        }
      }
      const id = Number(String(fields[0]).trim())
      const gabc = decodeGabc(fields[10])
      if (Number.isFinite(id) && gabc) map.set(id, gabc)
      // nächstes Tupel
      i = sql.indexOf('(', j + 1)
      if (i === -1 || i > end) break
    }
    pos = end
  }
  return map
}

async function main() {
  const sql = await loadDump()
  const chants = parseChants(sql)
  console.log(`GregoBase-Dump: ${chants.size} Gesänge mit GABC gelesen.`)

  const { map } = JSON.parse(await readFile(MAP_PATH, 'utf8'))
  let out = {}
  try {
    out = JSON.parse(await readFile(OUT_PATH, 'utf8'))
  } catch {
    /* leer */
  }

  let filled = 0
  const missing = []
  for (const [sectionId, gregobaseId] of Object.entries(map)) {
    if (typeof gregobaseId !== 'number') continue
    const gabc = chants.get(gregobaseId)
    if (gabc) {
      out[sectionId] = gabc.trim()
      filled++
    } else {
      missing.push(`${sectionId}=#${gregobaseId}`)
    }
  }

  await writeFile(OUT_PATH, JSON.stringify(out, null, 2) + '\n')
  console.log(`Melodien übernommen: ${filled} → src/data/gabc/gregobase.json`)
  if (missing.length) console.log(`Ohne Treffer (${missing.length}): ${missing.slice(0, 8).join(', ')}…`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
