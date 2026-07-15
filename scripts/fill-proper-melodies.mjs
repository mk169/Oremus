#!/usr/bin/env node
// Füllt die GESANG-Melodien der Proprien (Introitus, Graduale, Alleluia, Tractus,
// Offertorium, Communio) in den importierten Messformularen (src/data/imported/mass/)
// mit echtem GABC aus dem gemeinfreien GregoBase-Korpus (CC0).
//
// Quelle der Zuordnung Tag→GregoBase-ID: bbloomf/jgabc `propersdata.js` (Objekt
// `proprium`, je Tag inID/grID/alID/trID/ofID/coID). Quelle des GABC: der
// GregoBase-SQL-Dump aus bacor/gregobasecorpus (wie scripts/gregobase-from-dump.mjs).
//
// Nutzung:  npm run propers:fetch            (lädt Quellen von GitHub)
//           node scripts/fill-proper-melodies.mjs /pfad/zum/dump.sql
import { readFile, writeFile, readdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const MASS_DIR = resolve(__dirname, '../src/data/imported/mass')
const PROPERS_URL = 'https://raw.githubusercontent.com/bbloomf/jgabc/master/propersdata.js'
const DUMP_URL =
  'https://raw.githubusercontent.com/bacor/gregobasecorpus/v0.4/gregobase_dumps/gregobase_20191024.sql'

// --- GregoBase-Dump lesen (id → gabc) -----------------------------------
function decodeGabc(raw) {
  if (raw == null) return ''
  const literal = raw.replace(/\\([\\'"])/g, '$1')
  const t = literal.trim()
  if (t.startsWith('"')) {
    try {
      return JSON.parse(t)
    } catch {
      /* Rückfall */
    }
  }
  return literal.replace(/\\(.)/g, (_, c) =>
    c === 'n' ? '\n' : c === 'r' ? '\r' : c === 't' ? '\t' : c === '0' ? '' : c,
  )
}

function parseChants(sql) {
  const map = new Map()
  const marker = 'INSERT INTO `gregobase_chants`'
  let pos = 0
  while ((pos = sql.indexOf(marker, pos)) !== -1) {
    const valuesAt = sql.indexOf('VALUES', pos)
    const stmtEnd = sql.indexOf(';\n', valuesAt)
    const end = stmtEnd === -1 ? sql.length : stmtEnd
    let i = sql.indexOf('(', valuesAt)
    while (i !== -1 && i < end) {
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
          } else if (ch === "'") inStr = false
          else field += ch
        } else if (ch === "'") inStr = true
        else if (ch === ',') {
          fields.push(field)
          field = ''
        } else if (ch === ')') {
          fields.push(field)
          break
        } else field += ch
      }
      const id = Number(String(fields[0]).trim())
      const gabc = decodeGabc(fields[10])
      if (Number.isFinite(id) && gabc) map.set(id, gabc)
      i = sql.indexOf('(', j + 1)
      if (i === -1 || i > end) break
    }
    pos = end
  }
  return map
}

// --- jgabc proprium-Zuordnung (Tag → GregoBase-IDs) ---------------------
function parseProprium(js) {
  const start = js.indexOf('var proprium = {')
  const body = js.slice(start)
  // Tag-Blöcke am 4-Leerzeichen-Einzug: `    "Key": {`
  const re = /^ {4}"([A-Za-z0-9]+)": \{$/gm
  const starts = []
  let m
  while ((m = re.exec(body))) starts.push({ key: m[1], at: m.index })
  const out = {}
  const num = (block, name) => {
    const mm = block.match(new RegExp(`"${name}":\\s*(\\d+|\\[\\s*(\\d+))`))
    return mm ? Number(mm[2] || mm[1]) : undefined
  }
  starts.forEach((s, idx) => {
    const block = body.slice(s.at, idx + 1 < starts.length ? starts[idx + 1].at : s.at + 800)
    out[s.key] = {
      introitus: num(block, 'inID'),
      graduale: num(block, 'grID'),
      alleluia: num(block, 'alID'),
      tractus: num(block, 'trID'),
      offertorium: num(block, 'ofID'),
      communio: num(block, 'coID'),
    }
  })
  return out
}

/** Unsere Import-ID (do-<K>-0 / do-MM-DD) → jgabc-Schlüssel. */
function jgabcKey(massId) {
  let k = massId.replace(/^do-/, '')
  k = k.replace(/-0$/, '')
  k = k.replace(/^Pent0(\d)$/, 'Pent$1') // Pent01 → Pent1
  const preLent = { Quadp1: '7a', Quadp2: '6a', Quadp3: '5a' }
  return preLent[k] || k
}

async function text(urlOrPath, isUrl = true) {
  if (!isUrl) return readFile(urlOrPath, 'utf8')
  const res = await fetch(urlOrPath)
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${urlOrPath}`)
  return res.text()
}

async function main() {
  const localDump = process.argv[2]
  const [dumpSql, propersJs] = await Promise.all([
    localDump ? text(localDump, false) : text(DUMP_URL),
    text(PROPERS_URL),
  ])
  const chants = parseChants(dumpSql)
  const proprium = parseProprium(propersJs)
  console.log(`Dump: ${chants.size} Gesänge; jgabc: ${Object.keys(proprium).length} Tage.`)

  const PARTS = ['introitus', 'graduale', 'alleluia', 'tractus', 'offertorium', 'communio']
  const files = (await readdir(MASS_DIR)).filter((f) => f.startsWith('do-') && f.endsWith('.json'))
  let daysFilled = 0
  let chantsFilled = 0

  for (const file of files) {
    const path = resolve(MASS_DIR, file)
    const mass = JSON.parse(await readFile(path, 'utf8'))
    const key = jgabcKey(mass.id)
    const ids = proprium[key]
    if (!ids) continue
    let touched = 0
    for (const sec of mass.sections) {
      if (!PARTS.includes(sec.id)) continue
      const gid = ids[sec.id]
      if (!gid) continue
      const gabc = chants.get(gid)
      if (!gabc) continue
      sec.chant = { chantable: true, gabc: gabc.trim() }
      touched++
      chantsFilled++
    }
    if (touched) {
      await writeFile(path, JSON.stringify(mass, null, 2) + '\n')
      daysFilled++
    }
  }
  console.log(`Proprium-Melodien gefüllt: ${chantsFilled} Gesänge in ${daysFilled} Messformularen.`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
