#!/usr/bin/env node
// Importiert die Proprien der überlieferten Messe (1962) aus dem
// Divinum-Officium-Datenbestand (GitHub) in unser Datenmodell.
//
// Quelle: https://github.com/DivinumOfficium/divinum-officium
//  - Latein:  web/www/missa/Latin/{Tempora,Sancti}/<key>.txt   (Proprium vollständig)
//  - Deutsch: web/www/missa/Deutsch/.../<key>.txt              (nur Tagesname [Officium])
//
// Das Mess-Proprium ist bei DO nur auf Latein vorhanden; die deutsche Spalte
// bleibt daher leer (die App zeigt im Deutsch-Modus einen Hinweis). Titel/Tagesname
// werden zweisprachig übernommen (deutscher Name aus der [Officium]-Zeile).
//
// Nutzung:  npm run missa:fetch
import { writeFile, mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = resolve(__dirname, '../src/data/imported/mass')
const RAW = 'https://raw.githubusercontent.com/DivinumOfficium/divinum-officium/master/web/www/missa'

// DO-Abschnittsname -> unser Modell (Reihenfolge = Ablauf des Proopriums)
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

const COLOR = (key) =>
  /^Adv|^Quad/.test(key) ? 'violet' : /^Pasc|^Nat|^Epi/.test(key) ? 'white' : /^Pent/.test(key) ? 'green' : 'green'

async function fetchText(url) {
  const res = await fetch(url)
  if (!res.ok) return null
  return await res.text()
}

/** Zerlegt eine DO-Datei in { [Section]: rawLines[] }. */
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

/** Säubert die Textzeilen eines Abschnitts: Referenzen (!) getrennt sammeln,
 *  Marker/Makros entfernen, Rubrik-Markierungen strippen. */
function cleanSection(lines) {
  const refs = []
  const body = []
  for (let raw of lines) {
    let line = raw.trim()
    if (!line) continue
    if (line.startsWith('!')) {
      refs.push(line.slice(1).trim())
      continue
    }
    // Makros/Includes/Kommentare überspringen
    if (/^[&$@#%]/.test(line)) continue
    // Versikel-Marker am Zeilenanfang entfernen (v. r. s. V. R.)
    line = line.replace(/^[vrsVRS]\.\s*/, '')
    // Rubrik-Markierungen /:...:/ und rote Markierungen entfernen
    line = line.replace(/\/:/g, '').replace(/:\//g, '').replace(/[{}]/g, '')
    line = line.replace(/\s+/g, ' ').trim()
    if (line) body.push(line)
  }
  return { text: body.join(' '), refs }
}

function dayName(sections) {
  // Name steht i.d.R. in [Officium]; im Sanctorale teils in [Rank] (Feld 1).
  const off = sections.Officium?.map((l) => l.trim()).find(Boolean)
  if (off) return off
  const rankName = sections.Rank?.[0]?.split(';;')[0]?.trim()
  if (rankName) return rankName
  return null
}

function dayRank(sections) {
  const parts = sections.Rank?.[0]?.split(';;')
  return parts && parts[1] ? parts[1].trim() : undefined
}

async function importKey(cat, key) {
  const la = await fetchText(`${RAW}/Latin/${cat}/${key}.txt`)
  if (!la) return null
  const de = await fetchText(`${RAW}/Deutsch/${cat}/${key}.txt`)
  const laS = splitSections(la)
  const deS = de ? splitSections(de) : {}

  const sections = []
  for (const name of ORDER) {
    if (!laS[name]) continue
    const cleaned = cleanSection(laS[name])
    if (!cleaned.text) continue
    const map = SECTION_MAP[name]
    const deClean = deS[name] ? cleanSection(deS[name]) : null
    sections.push({
      id: map.id,
      kind: 'proprium',
      title: { la: map.la, de: map.de },
      text: { la: cleaned.text, de: deClean?.text || undefined },
      reference: cleaned.refs.length ? { la: cleaned.refs.join('; '), de: cleaned.refs.join('; ') } : undefined,
      chant: map.chant ? { chantable: true } : undefined,
    })
  }
  if (!sections.length) return null

  const nameLa = dayName(laS) || key
  const nameDe = dayName(deS) || nameLa
  const rank = dayRank(laS)

  return {
    id: `do-${key}`,
    form: '1962',
    source: 'Divinum Officium (gemeinfrei); Proprium Latein. Deutsche Übersetzung des Proopriums folgt.',
    day: { title: { la: nameLa, de: nameDe }, color: COLOR(key), rank },
    sections,
  }
}

// Kandidaten: Temporale (Sonntage) + Hauptfeste des Sanctorale.
const TEMPORA = [
  'Adv1-0', 'Adv2-0', 'Adv3-0', 'Adv4-0',
  'Nat1-0', 'Nat2-0',
  'Epi1-0', 'Epi2-0', 'Epi3-0', 'Epi4-0', 'Epi5-0', 'Epi6-0',
  'Quadp1-0', 'Quadp2-0', 'Quadp3-0',
  'Quad1-0', 'Quad2-0', 'Quad3-0', 'Quad4-0', 'Quad5-0', 'Quad6-0',
  'Pasc0-0', 'Pasc1-0', 'Pasc2-0', 'Pasc3-0', 'Pasc4-0', 'Pasc5-0',
  ...Array.from({ length: 24 }, (_, i) => `Pent${String(i + 1).padStart(2, '0')}-0`),
]
const SANCTI = ['12-25', '01-06', '02-02', '03-19', '03-25', '06-24', '06-29', '08-15', '09-08', '11-01', '12-08']

async function main() {
  await mkdir(OUT_DIR, { recursive: true })
  const index = []
  let ok = 0
  for (const [cat, keys] of [['Tempora', TEMPORA], ['Sancti', SANCTI]]) {
    for (const key of keys) {
      try {
        const form = await importKey(cat, key)
        if (!form) {
          console.warn(`· ${cat}/${key} übersprungen (nicht gefunden/leer)`)
          continue
        }
        const file = `${form.id}.json`
        await writeFile(resolve(OUT_DIR, file), JSON.stringify(form, null, 2) + '\n')
        index.push({ id: form.id, titleLa: form.day.title.la, titleDe: form.day.title.de, color: form.day.color, rank: form.day.rank })
        ok++
        console.log(`✓ ${cat}/${key}  ->  ${form.day.title.de} (${form.sections.length} Teile)`)
      } catch (e) {
        console.warn(`✗ ${cat}/${key}: ${e.message}`)
      }
    }
  }
  await writeFile(resolve(OUT_DIR, 'index.json'), JSON.stringify(index, null, 2) + '\n')
  console.log(`\nFertig: ${ok} Messformulare nach src/data/imported/mass/ importiert.`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
