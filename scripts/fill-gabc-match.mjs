#!/usr/bin/env node
// Füllt fehlende GESANG-Melodien (GABC) der importierten Messformulare aus dem
// gemeinfreien GregoBase-Dump (CC0, bacor/gregobasecorpus) – per INCIPIT-Abgleich.
//
// Anders als fill-proper-melodies (Tag → feste GregoBase-ID über jgabc) deckt
// dieser Matcher alle Formulare ab (Sanktorale, Commune/Votiv …): Für jeden noch
// melodielosen Gesang-Abschnitt wird in der passenden Gattung (Introitus,
// Graduale, Alleluia, Traktus, Offertorium, Communio, Sequenz) ein GregoBase-
// Gesang gesucht, dessen Incipit den Anfang unseres Textes bildet.
//
// Nutzung (Stück für Stück, Datei-Präfix wählbar):
//   node scripts/fill-gabc-match.mjs do-C           # Dry-Run für Commune/Votiv
//   node scripts/fill-gabc-match.mjs do-C --write    # schreibt die Treffer
//   node scripts/fill-gabc-match.mjs do- --write     # alle Formulare
import { readFile, writeFile, readdir, mkdir, stat } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve, join } from 'node:path'
import { tmpdir } from 'node:os'

const __dirname = dirname(fileURLToPath(import.meta.url))
const MASS_DIR = resolve(__dirname, '../src/data/imported/mass')
const DUMP_URL =
  'https://raw.githubusercontent.com/bacor/gregobasecorpus/v0.4/gregobase_dumps/gregobase_20191024.sql'
const CACHE = join(tmpdir(), 'oremus-gregobase-dump.sql')

// Abschnitts-ID → GregoBase office-part-Code(s), in Vorzugsreihenfolge.
// Traktus dürfen auf die Graduale-Fassung desselben Textes zurückfallen
// (gleiche Worte; in GregoBase oft nur als Graduale geführt).
const OFFICE = {
  introitus: ['in'],
  graduale: ['gr'],
  alleluia: ['al'],
  tractus: ['tr', 'gr'],
  offertorium: ['of'],
  communio: ['co'],
  sequentia: ['se'],
}

async function loadDump() {
  try {
    await stat(CACHE)
    return readFile(CACHE, 'utf8')
  } catch {
    /* laden */
  }
  const res = await fetch(DUMP_URL)
  if (!res.ok) throw new Error(`Dump-Download fehlgeschlagen: HTTP ${res.status}`)
  const t = await res.text()
  await mkdir(dirname(CACHE), { recursive: true })
  await writeFile(CACHE, t)
  return t
}

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

/** GABC-Header (bis einschl. %%) entfernen, Notation als einzeilig zurückgeben. */
function stripHeader(gabc) {
  const idx = gabc.indexOf('%%')
  const body = idx >= 0 ? gabc.slice(idx + 2) : gabc
  return body.replace(/\s+/g, ' ').trim()
}

/** Text normalisieren: Akzente weg, Ligaturen und mittelalterliche Schreibweisen
 *  vereinheitlichen (æ→ae, œ→oe, j→i, v→u), nur Buchstaben+Leerzeichen, klein.
 *  So greifen Incipit-Vergleiche unabhängig von Ligatur-/j/v-Varianten. */
function norm(s) {
  return (s || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/\([^)]*\)/g, ' ')
    .toLowerCase()
    .replace(/æ/g, 'ae')
    .replace(/œ/g, 'oe')
    .replace(/j/g, 'i')
    .replace(/v/g, 'u')
    .replace(/[^a-z\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function parseChants(sql) {
  const byOffice = new Map()
  const marker = 'INSERT INTO `gregobase_chants`'
  let pos = 0
  while ((pos = sql.indexOf(marker, pos)) !== -1) {
    const valuesAt = sql.indexOf('VALUES', pos)
    let i = sql.indexOf('(', valuesAt)
    const stmtEnd = sql.indexOf(';\n', valuesAt)
    const end = stmtEnd === -1 ? sql.length : stmtEnd
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
        } else {
          if (ch === "'") inStr = true
          else if (ch === ',') {
            fields.push(field)
            field = ''
          } else if (ch === ')') {
            fields.push(field)
            break
          } else field += ch
        }
      }
      const office = String(fields[5] ?? '').replace(/'/g, '').trim()
      const incipit = norm(decodeGabc(fields[3]))
      const gabc = stripHeader(decodeGabc(fields[10]))
      const mode = String(fields[6] ?? '').replace(/'/g, '').trim()
      if (office && incipit && gabc && OFFICE_CODES.has(office)) {
        if (!byOffice.has(office)) byOffice.set(office, [])
        byOffice.get(office).push({ incipit, gabc, mode })
      }
      i = sql.indexOf('(', j + 1)
      if (i === -1 || i > end) break
    }
    pos = end
  }
  return byOffice
}
const OFFICE_CODES = new Set(Object.values(OFFICE).flat())

/** Besten GregoBase-Treffer finden: Incipit ist Präfix unseres Textes.
 *  Prüft die Gattungen in Vorzugsreihenfolge; die erste mit Treffer gewinnt. */
function match(index, offices, text) {
  const target = norm(text)
  if (target.length < 6) return null
  for (const office of offices) {
    const cands = index.get(office)
    if (!cands) continue
    let best = null
    for (const c of cands) {
      if (c.incipit.length < 6) continue
      // Der Gesang-Incipit muss den Anfang unseres Propriumtextes bilden.
      if (target.startsWith(c.incipit)) {
        if (!best || c.incipit.length > best.incipit.length) best = c
      }
    }
    if (best) return { ...best, office }
  }
  return null
}

async function main() {
  const prefix = process.argv[2] || 'do-'
  const write = process.argv.includes('--write')

  console.log('Lade GregoBase-Dump …')
  const index = parseChants(await loadDump())
  console.log(
    'Gesänge je Gattung:',
    [...index.entries()].map(([o, a]) => `${o}:${a.length}`).join(' '),
  )

  const files = (await readdir(MASS_DIR)).filter(
    (f) => f.startsWith(prefix) && f.endsWith('.json') && f !== 'index.json' && f !== 'commune-index.json',
  )
  let filesChanged = 0
  let filled = 0
  let missing = 0
  for (const f of files) {
    const path = join(MASS_DIR, f)
    const mass = JSON.parse(await readFile(path, 'utf8'))
    let changed = false
    for (const s of mass.sections || []) {
      if (!s.chant?.chantable || s.chant.gabc) continue
      const office = OFFICE[s.id]
      if (!office) continue
      const hit = match(index, office, s.text?.la)
      if (hit) {
        s.chant.gabc = hit.gabc
        if (hit.mode && !s.chant.mode) s.chant.mode = hit.mode
        filled++
        changed = true
      } else {
        missing++
      }
    }
    if (changed) {
      filesChanged++
      if (write) await writeFile(path, JSON.stringify(mass, null, 2) + '\n', 'utf8')
    }
  }
  console.log(
    `${write ? 'Geschrieben' : 'Dry-Run'}: ${filled} Melodien in ${filesChanged} Dateien gefüllt; ${missing} ohne Treffer.`,
  )
  if (!write) console.log('(Zum Schreiben --write anhängen.)')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
