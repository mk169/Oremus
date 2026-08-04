#!/usr/bin/env node
// Importiert die GEMEINSAMEN und VOTIV-MESSEN (Commune, 1962) aus dem
// Divinum-Officium-Datenbestand. Die Commune-Dateien liegen im Offiziums-Zweig
// (horas) und enthalten neben dem Offizium auch die vollständigen Messteile
// ([Introitus]…[Postcommunio]). Ergebnis: src/data/imported/mass/do-C*.json
// (gleiche Form wie die Tagesproprien) plus commune-index.json.
//
// Enthält u.a. das Requiem (Messe für die Verstorbenen) und die Marienmesse am
// Samstag – die klassischen Votivmessen – sowie die Commons der Heiligen.
//
// Nutzung:  npm run commune:fetch
import { writeFile, readFile, mkdir, stat } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve, join } from 'node:path'
import { tmpdir } from 'node:os'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = resolve(__dirname, '../src/data/imported/mass')
const CACHE_DIR = join(tmpdir(), 'oremus-do-commune-cache')
const RAW = 'https://raw.githubusercontent.com/DivinumOfficium/divinum-officium/master/web/www/horas'

// DO-Abschnitt → unser Modell (Reihenfolge = Ablauf des Propriums).
const SECTION_MAP = {
  Introitus: { id: 'introitus', la: 'Introitus', de: 'Eröffnungsvers', chant: true },
  Oratio: { id: 'collecta', la: 'Oratio', de: 'Tagesgebet' },
  Lectio: { id: 'lectio', la: 'Lectio', de: 'Lesung' },
  Epistola: { id: 'epistola', la: 'Epistola', de: 'Epistel' },
  Graduale: { id: 'graduale', la: 'Graduale', de: 'Graduale', chant: true },
  Tractus: { id: 'tractus', la: 'Tractus', de: 'Traktus', chant: true },
  Alleluia: { id: 'alleluia', la: 'Allelúia', de: 'Halleluja', chant: true },
  Sequentia: { id: 'sequentia', la: 'Sequentia', de: 'Sequenz', chant: true },
  Evangelium: { id: 'evangelium', la: 'Evangelium', de: 'Evangelium' },
  Offertorium: { id: 'offertorium', la: 'Offertorium', de: 'Gabenvers', chant: true },
  Secreta: { id: 'secreta', la: 'Secreta', de: 'Stillgebet (Secreta)' },
  Communio: { id: 'communio', la: 'Communio', de: 'Kommunionvers', chant: true },
  Postcommunio: { id: 'postcommunio', la: 'Postcommunio', de: 'Schlussgebet' },
}
const ORDER = Object.keys(SECTION_MAP)

// Die zu importierenden Commune-/Votivformulare mit deutschem Titel und Farbe.
const KEYS = [
  { key: 'C2', de: 'Ein Märtyrer-Bischof', color: 'red' },
  { key: 'C3', de: 'Mehrere Märtyrer-Bischöfe', color: 'red' },
  { key: 'C3a', de: 'Mehrere Märtyrer', color: 'red' },
  { key: 'C3b', de: 'Mehrere Päpste (Märtyrer)', color: 'red' },
  { key: 'C4', de: 'Ein Bekenner-Bischof', color: 'white' },
  { key: 'C4a', de: 'Kirchenlehrer (Bischof)', color: 'white' },
  { key: 'C4b', de: 'Päpste (Bekenner)', color: 'white' },
  { key: 'C5', de: 'Ein Bekenner (kein Bischof)', color: 'white' },
  { key: 'C6', de: 'Eine Jungfrau und Märtyrin', color: 'red' },
  { key: 'C7', de: 'Eine heilige Frau (Märtyrin)', color: 'red' },
  { key: 'C8', de: 'Kirchweihe', color: 'white' },
  { key: 'C9', de: 'Requiem – Messe für die Verstorbenen', color: 'black' },
  { key: 'C10', de: 'Marienmesse am Samstag (Votivmesse)', color: 'white' },
  { key: 'C11', de: 'Marienfeste (gemeinsame Messe)', color: 'white' },
]

async function fetchText(relPath) {
  const cacheKey = relPath.replace(/[^a-z0-9]+/gi, '_')
  const cacheFile = join(CACHE_DIR, cacheKey)
  try {
    await stat(cacheFile)
    return await readFile(cacheFile, 'utf8')
  } catch {
    /* nicht im Cache */
  }
  const res = await fetch(`${RAW}/${relPath.split('/').map(encodeURIComponent).join('/')}`)
  if (!res.ok) return null
  const text = await res.text()
  await mkdir(CACHE_DIR, { recursive: true })
  await writeFile(cacheFile, text)
  return text
}

function splitSections(text) {
  const out = {}
  let cur = null
  for (const line of text.split(/\r?\n/)) {
    const m = line.match(/^\[([^\]]+)\]\s*$/)
    if (m) {
      cur = m[1]
      out[cur] = []
    } else if (cur) {
      out[cur].push(line)
    }
  }
  return out
}

// Referenzen (!) sammeln, Makros/Includes/Rubriken entfernen.
function cleanSection(lines) {
  const refs = []
  const body = []
  for (let raw of lines || []) {
    let line = raw.trim()
    if (!line) continue
    if (line.startsWith('!')) {
      refs.push(line.slice(1).trim())
      continue
    }
    if (/^[&$@#%]/.test(line)) continue
    if (/^\(.*\)$/.test(line)) continue // reine Rubrik-Zeile (Bedingung)
    line = line.replace(/^[vrsVRS]\.\s*/, '')
    line = line.replace(/\/:/g, '').replace(/:\//g, '').replace(/[{}]/g, '')
    line = line.replace(/\s+/g, ' ').trim()
    if (line) body.push(line)
  }
  return { text: body.join(' '), refs }
}

function dayName(sections) {
  return sections.Officium?.map((l) => l.trim()).find(Boolean) || null
}

async function importCommune(entry) {
  const la = await fetchText(`Latin/Commune/${entry.key}.txt`)
  if (!la) return null
  const de = await fetchText(`Deutsch/Commune/${entry.key}.txt`)
  const laS = splitSections(la)
  const deS = de ? splitSections(de) : {}

  const sections = []
  for (const name of ORDER) {
    if (!laS[name]) continue
    const cleaned = cleanSection(laS[name])
    if (!cleaned.text) continue
    const deClean = deS[name] ? cleanSection(deS[name]) : null
    const map = SECTION_MAP[name]
    sections.push({
      id: map.id,
      kind: 'proprium',
      title: { la: map.la, de: map.de },
      text: { la: cleaned.text, de: deClean?.text || undefined },
      reference: cleaned.refs.length
        ? { la: cleaned.refs.join('; '), de: cleaned.refs.join('; ') }
        : undefined,
      chant: map.chant ? { chantable: true } : undefined,
    })
  }
  if (!sections.length) return null

  const nameLa = dayName(laS) || entry.key
  return {
    id: `do-${entry.key}`,
    form: '1962',
    source: 'Divinum Officium (gemeinfrei); Proprium Latein. Deutsche Übersetzung folgt, wo nicht vorhanden.',
    day: { title: { la: nameLa, de: entry.de }, color: entry.color, rank: 'Votivmesse / Commune' },
    sections,
  }
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true })
  const index = []
  for (const entry of KEYS) {
    process.stdout.write(`  · ${entry.key} — ${entry.de} … `)
    const form = await importCommune(entry)
    if (!form) {
      console.log('übersprungen (keine Messteile)')
      continue
    }
    await writeFile(join(OUT_DIR, `${form.id}.json`), JSON.stringify(form, null, 2) + '\n', 'utf8')
    index.push({
      id: form.id,
      titleLa: form.day.title.la,
      titleDe: form.day.title.de,
      color: entry.color,
      parts: form.sections.length,
    })
    console.log(`${form.sections.length} Teile`)
  }
  await writeFile(join(OUT_DIR, 'commune-index.json'), JSON.stringify(index, null, 2) + '\n', 'utf8')
  console.log(`\nFertig. ${index.length} Votiv-/Gemeinschaftsmessen nach ${OUT_DIR}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
