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
import { writeFile, mkdir, readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = resolve(__dirname, '../src/data/imported/mass')
const RAW = 'https://raw.githubusercontent.com/DivinumOfficium/divinum-officium/master/web/www/missa'
// Die „Gemeinsamen Messen" (Commune) liegen bei DO im Offiziums-Zweig (horas);
// dort enthalten die Commune-Dateien auch die Messteile ([Introitus]…[Evangelium]…).
const RAW_COMMUNE = 'https://raw.githubusercontent.com/DivinumOfficium/divinum-officium/master/web/www/horas/Latin/Commune'

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

const fileCache = new Map()
async function fetchText(url) {
  const res = await fetch(url)
  if (!res.ok) return null
  return await res.text()
}

/** Holt eine Latein-Datei (Sancti/Tempora) und zerlegt sie – mit Cache. */
async function getLatinSections(path) {
  if (fileCache.has(path)) return fileCache.get(path)
  const txt = await fetchText(`${RAW}/Latin/${path}.txt`)
  const secs = txt ? splitSections(txt) : null
  fileCache.set(path, secs)
  return secs
}

const communeCache = new Map()
/** Holt eine Commune-Datei (Gemeinsame Messe) und zerlegt sie – mit Cache. */
async function getCommuneSections(key) {
  if (communeCache.has(key)) return communeCache.get(key)
  const txt = await fetchText(`${RAW_COMMUNE}/${key}.txt`)
  const secs = txt ? splitSections(txt) : null
  communeCache.set(key, secs)
  return secs
}

/** Bestimmt das einschlägige Commune eines Festes: bevorzugt „vide C…" aus
 *  [Rank]/[Rule], sonst ein explizites @Commune/C… aus den Abschnitten. */
function communeKeyFor(laS) {
  for (const field of ['Rank', 'Rule']) {
    const joined = (laS[field] || []).join(' ')
    const m = joined.match(/vide\s+(C\w+)/i)
    if (m) return m[1]
  }
  for (const name of Object.keys(laS)) {
    const line = (laS[name] || []).map((l) => l.trim()).find((l) => /^@Commune\//.test(l))
    const m = line && line.match(/^@Commune\/(\S+)/)
    if (m) return m[1]
  }
  return null
}

/**
 * Löst einen Abschnitt auf: liefert die bereinigten Zeilen. Ist der Abschnitt leer,
 * aber verweist per @Sancti/... bzw. @Tempora/... auf einen anderen, wird dieser
 * (eine Ebene tief) nachgeladen. Common-Verweise (ex C1) bleiben offen.
 */
async function resolveSection(rawLines, name, depth = 0) {
  const cleaned = cleanSection(rawLines || [])
  if (cleaned.text || depth > 2 || !rawLines) return cleaned
  const ref = rawLines.map((l) => l.trim()).find((l) => /^@(Sancti|Tempora|Commune)\//.test(l))
  if (!ref) return cleaned
  const m = ref.match(/^@((?:Sancti|Tempora|Commune)\/[^:\s]+)(?::(.+))?$/)
  if (!m) return cleaned
  const secs = m[1].startsWith('Commune/')
    ? await getCommuneSections(m[1].slice('Commune/'.length))
    : await getLatinSections(m[1])
  if (!secs) return cleaned
  const targetName = (m[2] || name).trim()
  return resolveSection(secs[targetName], targetName, depth + 1)
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

  // 1) Abschnitte aus dem eigenen Proprium des Festes.
  const byName = {}
  for (const name of ORDER) {
    if (!laS[name]) continue
    const cleaned = await resolveSection(laS[name], name)
    if (!cleaned.text) continue
    byName[name] = { cleaned, deClean: deS[name] ? cleanSection(deS[name]) : null }
  }
  // 2) Fehlende Messteile aus der Gemeinsamen Messe (Commune) ergänzen.
  const commune = communeKeyFor(laS)
  if (commune) {
    const cs = await getCommuneSections(commune)
    if (cs) {
      for (const name of ORDER) {
        if (byName[name] || !cs[name]) continue
        const cleaned = await resolveSection(cs[name], name)
        if (!cleaned.text) continue
        byName[name] = { cleaned, deClean: null }
      }
    }
  }
  // 3) In liturgischer Reihenfolge ausgeben.
  const sections = []
  for (const name of ORDER) {
    const e = byName[name]
    if (!e) continue
    const map = SECTION_MAP[name]
    sections.push({
      id: map.id,
      kind: 'proprium',
      title: { la: map.la, de: map.de },
      text: { la: e.cleaned.text, de: e.deClean?.text || undefined },
      reference: e.cleaned.refs.length ? { la: e.cleaned.refs.join('; '), de: e.cleaned.refs.join('; ') } : undefined,
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
// Feste des Sanctorale (überlieferter Kalender). Die Datumsliste wird direkt
// aus src/data/sanctorale.ts abgeleitet, damit Kalender und Formular-Bestand
// synchron bleiben. Tage ohne eigenes Proprium bei DO (reine Commemorationen
// „ex Commune") liefern keine Abschnitte und werden übersprungen.
async function sanctoraleDates() {
  const src = await readFile(resolve(__dirname, '../src/data/sanctorale.ts'), 'utf8')
  const set = new Set()
  const re = /\bm:\s*(\d+),\s*d:\s*(\d+)/g
  let m
  while ((m = re.exec(src))) set.add(`${String(+m[1]).padStart(2, '0')}-${String(+m[2]).padStart(2, '0')}`)
  return [...set].sort()
}

function indexEntry(form) {
  return { id: form.id, titleLa: form.day.title.la, titleDe: form.day.title.de, color: form.day.color, rank: form.day.rank }
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true })
  const SANCTI = await sanctoraleDates()
  const index = []
  let imported = 0
  let kept = 0
  for (const [cat, keys] of [['Tempora', TEMPORA], ['Sancti', SANCTI]]) {
    for (const key of keys) {
      const id = `do-${key}`
      const filePath = resolve(OUT_DIR, `${id}.json`)
      // Vorhandene Formulare (inkl. bereits gefüllter Melodien) unangetastet lassen;
      // nur die Index-Metadaten aus der Datei übernehmen.
      if (existsSync(filePath)) {
        try {
          const j = JSON.parse(await readFile(filePath, 'utf8'))
          index.push(indexEntry(j))
          kept++
          continue
        } catch {
          // defekte Datei: neu importieren
        }
      }
      try {
        const form = await importKey(cat, key)
        if (!form) {
          console.warn(`· ${cat}/${key} übersprungen (nicht gefunden/leer)`)
          continue
        }
        await writeFile(filePath, JSON.stringify(form, null, 2) + '\n')
        index.push(indexEntry(form))
        imported++
        console.log(`✓ ${cat}/${key}  ->  ${form.day.title.de} (${form.sections.length} Teile)`)
      } catch (e) {
        console.warn(`✗ ${cat}/${key}: ${e.message}`)
      }
    }
  }
  // Index in stabiler Reihenfolge (Temporale zuerst, dann Sanktorale nach Datum).
  await writeFile(resolve(OUT_DIR, 'index.json'), JSON.stringify(index, null, 2) + '\n')
  console.log(`\nFertig: ${imported} neu importiert, ${kept} vorhandene behalten → src/data/imported/mass/`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
