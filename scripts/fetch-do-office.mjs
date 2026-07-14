#!/usr/bin/env node
// Importiert die zweisprachigen Tagesproprien des Stundengebets (Offizium) aus
// Divinum Officium (GitHub) — anders als die Messe hat das Offizium bei DO auch
// deutsche Texte (Antiphonen, Kurzlesung, Tagesgebet, Matutin-Lesungen).
//
// Quelle: web/www/horas/{Latin,Deutsch}/Tempora/<key>.txt
// Ergebnis: src/data/imported/office/do-<key>.json (Form wie ein Messformular)
//
// Nutzung:  npm run officium:fetch
import { writeFile, mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = resolve(__dirname, '../src/data/imported/office')
const RAW = 'https://raw.githubusercontent.com/DivinumOfficium/divinum-officium/master/web/www/horas'

// DO-Abschnitt -> unser Modell.  join='·' fügt mehrere Antiphonen getrennt zusammen.
const SECTION_MAP = [
  { do: 'Ant Vespera', id: 'ant-vespera', la: 'Ad Vesperas', de: 'Antiphonen zur Vesper', join: ' · ' },
  { do: 'Ant Laudes', id: 'ant-laudes', la: 'Ad Laudes', de: 'Antiphonen zu den Laudes', join: ' · ' },
  { do: 'Capitulum Laudes', id: 'capitulum-laudes', la: 'Capitulum', de: 'Kurzlesung (Laudes)' },
  { do: 'Oratio', id: 'oratio', la: 'Oratio', de: 'Tagesgebet' },
  { do: 'Lectio1', id: 'lectio1', la: 'Lectio I', de: '1. Lesung (Matutin)' },
  { do: 'Responsory1', id: 'resp1', la: 'Responsorium I', de: 'Responsorium I' },
]

const COLOR = (key) =>
  /^Adv|^Quad/.test(key) ? 'violet' : /^Pasc|^Nat|^Epi/.test(key) ? 'white' : /^Pent/.test(key) ? 'green' : 'green'

async function fetchText(url) {
  const res = await fetch(url)
  return res.ok ? await res.text() : null
}

function splitSections(text) {
  const out = {}
  let cur = null
  for (const line of text.split(/\r?\n/)) {
    const m = line.match(/^\[([^\]]+)\]/)
    if (m) {
      cur = m[1].trim()
      out[cur] = []
    } else if (cur) {
      out[cur].push(line)
    }
  }
  return out
}

function cleanSection(lines, join = ' ') {
  const refs = []
  const body = []
  for (let raw of lines) {
    let line = raw.trim()
    if (!line) continue
    if (line.startsWith('!')) {
      refs.push(line.slice(1).trim())
      continue
    }
    if (/^[&$@#%]/.test(line)) continue
    // DO-Bedingungsrubriken in Klammern überspringen, z.B. "(sed rubrica …)"
    if (/^\((?:sed|nisi|vel|aut|si)\b/i.test(line)) continue
    line = line.replace(/^[vrsVRS]\.\s*/, '')
    line = line.replace(/\/:/g, '').replace(/:\//g, '').replace(/[{}]/g, '')
    line = line.replace(/\s+/g, ' ').trim()
    if (line) body.push(line)
  }
  return { text: body.join(join), refs }
}

function dayName(sections) {
  const off = sections.Officium?.map((l) => l.trim()).find(Boolean)
  if (off) return off
  return sections.Rank?.[0]?.split(';;')[0]?.trim() || null
}

async function importKey(key) {
  const la = await fetchText(`${RAW}/Latin/Tempora/${key}.txt`)
  if (!la) return null
  const de = await fetchText(`${RAW}/Deutsch/Tempora/${key}.txt`)
  const laS = splitSections(la)
  const deS = de ? splitSections(de) : {}

  const sections = []
  for (const map of SECTION_MAP) {
    const cl = laS[map.do] ? cleanSection(laS[map.do], map.join) : { text: '', refs: [] }
    const dl = deS[map.do] ? cleanSection(deS[map.do], map.join) : { text: '', refs: [] }
    if (!cl.text && !dl.text) continue
    const refs = cl.refs.length ? cl.refs : dl.refs
    sections.push({
      id: map.id,
      kind: 'proprium',
      title: { la: map.la, de: map.de },
      text: { la: cl.text || undefined, de: dl.text || undefined },
      reference: refs.length ? { la: refs.join('; '), de: refs.join('; ') } : undefined,
    })
  }
  if (!sections.length) return null

  return {
    id: `do-${key}`,
    form: '1962',
    note: 'Stundengebet – Proprium des Tages aus Divinum Officium (gemeinfrei), Latein/Deutsch.',
    day: { title: { la: dayName(laS) || key, de: dayName(deS) || dayName(laS) || key }, color: COLOR(key) },
    sections,
  }
}

const TEMPORA = [
  'Adv1-0', 'Adv2-0', 'Adv3-0', 'Adv4-0',
  'Nat1-0', 'Nat2-0',
  'Epi1-0', 'Epi2-0', 'Epi3-0', 'Epi4-0', 'Epi5-0', 'Epi6-0',
  'Quadp1-0', 'Quadp2-0', 'Quadp3-0',
  'Quad1-0', 'Quad2-0', 'Quad3-0', 'Quad4-0', 'Quad5-0', 'Quad6-0',
  'Pasc0-0', 'Pasc1-0', 'Pasc2-0', 'Pasc3-0', 'Pasc4-0', 'Pasc5-0',
  ...Array.from({ length: 24 }, (_, i) => `Pent${String(i + 1).padStart(2, '0')}-0`),
]

async function main() {
  await mkdir(OUT_DIR, { recursive: true })
  const index = []
  let ok = 0
  for (const key of TEMPORA) {
    try {
      const off = await importKey(key)
      if (!off) {
        console.warn(`· ${key} übersprungen`)
        continue
      }
      await writeFile(resolve(OUT_DIR, `${off.id}.json`), JSON.stringify(off, null, 2) + '\n')
      index.push({ id: off.id, titleLa: off.day.title.la, titleDe: off.day.title.de, color: off.day.color })
      ok++
      console.log(`✓ ${key}  ->  ${off.day.title.de} (${off.sections.length} Teile)`)
    } catch (e) {
      console.warn(`✗ ${key}: ${e.message}`)
    }
  }
  await writeFile(resolve(OUT_DIR, 'index.json'), JSON.stringify(index, null, 2) + '\n')
  console.log(`\nFertig: ${ok} Offizium-Proprien nach src/data/imported/office/ importiert.`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
