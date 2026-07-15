#!/usr/bin/env node
// Baut den vollständigen Kyriale-Katalog (Choral-Ordinarium) aus der Datenbasis
// von Ben Bloomfields jgabc (öffentlich auf GitHub). jgabc verweist je Gesang auf
// eine GregoBase-chant-ID; die eigentliche GABC-Melodie liegt bei GregoBase.
//
// Ergebnis:
//  - src/data/kyriale/catalogue.json : alle Ordinarien (Missa I–XVIII u.a.),
//    Credo I–VII, marianische Antiphonen – je mit Namen, Saison und GregoBase-ID.
//  - scripts/gregobase-map.json wird um ALLE diese IDs ergänzt, sodass nach
//    Freischaltung von GregoBase `npm run gabc:fetch` alle Melodien zieht.
//
// Nutzung:  npm run kyriale:fetch
import { writeFile, readFile, mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = resolve(__dirname, '../src/data/kyriale')
const MAP_PATH = resolve(__dirname, 'gregobase-map.json')
const JGABC = 'https://raw.githubusercontent.com/bbloomf/jgabc/master'

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII']

// Englische jgabc-Saison → Deutsch.
const SEASON_DE = {
  'In Paschal Time': 'In der Osterzeit',
  'For 1st class feasts - 1.': 'Für Feste I. Klasse (1)',
  'For 1st class feasts - 2.': 'Für Feste I. Klasse (2)',
  'For 2nd class feasts - 1.': 'Für Feste II. Klasse (1)',
  'For 2nd class feasts - 2.': 'Für Feste II. Klasse (2)',
  'For 2nd class feasts - 3.': 'Für Feste II. Klasse (3)',
  'For 2nd class feasts - 4.': 'Für Feste II. Klasse (4)',
  'For 2nd class feasts - 5.': 'Für Feste II. Klasse (5)',
  'For feasts of the Blessed Virgin - 1.': 'Für Marienfeste (1)',
  'For feasts of the Blessed Virgin - 2.': 'Für Marienfeste (2)',
  'For Sundays throughout the year': 'Für die Sonntage im Jahreskreis',
  'For 3rd class feasts - 1.': 'Für Feste III. Klasse (1)',
  'For 3rd class feasts - 2.': 'Für Feste III. Klasse (2)',
  'For 3rd class feasts - 3.': 'Für Feste III. Klasse (3)',
  'For commemorations and ferias of the Christmas season':
    'Für Gedenktage und Ferien der Weihnachtszeit',
  'For ferias throughout the year': 'Für die Ferien im Jahreskreis',
  'For the Sundays of Advent and Lent': 'Für die Sonntage in Advent und Fastenzeit',
}
const seasonDe = (s) => SEASON_DE[s] || s || ''

async function fetchJs(name) {
  const res = await fetch(`${JGABC}/${name}`)
  if (!res.ok) throw new Error(`${name}: HTTP ${res.status}`)
  return await res.text()
}

function evalVar(code, expr) {
  return new Function(`${code}\n; return (${expr});`)()
}

async function main() {
  await mkdir(OUT, { recursive: true })
  const ordCode = await fetchJs('ordinarydata.js')
  const miscCode = await fetchJs('miscChants.js')

  const massOrdinary = evalVar(ordCode, 'massOrdinary')
  // Die Credo-Liste steht in ordinaryAdLib.credo.
  const ordinaryAdLib = evalVar(ordCode, 'typeof ordinaryAdLib !== "undefined" ? ordinaryAdLib : {}')
  const credoList = Array.isArray(ordinaryAdLib.credo) ? ordinaryAdLib.credo : []

  const gmap = JSON.parse(await readFile(MAP_PATH, 'utf8'))
  if (!gmap.map) gmap.map = {}

  const PART_LABEL = {
    kyrie: { la: 'Kyrie', de: 'Herr, erbarme dich' },
    gloria: { la: 'Gloria', de: 'Ehre sei Gott' },
    sanctus: { la: 'Sanctus', de: 'Heilig' },
    agnus: { la: 'Agnus Dei', de: 'Lamm Gottes' },
  }

  const catalogue = { masses: [], credos: [], marian: [] }

  // --- Ordinarien I–XVIII (die ersten 18 Einträge = Missa I…XVIII) ---
  massOrdinary.slice(0, 18).forEach((m, idx) => {
    const num = ROMAN[idx]
    const parts = []
    for (const key of ['kyrie', 'gloria', 'sanctus', 'agnus']) {
      let p = m[key]
      if (Array.isArray(p)) p = p[0]
      if (!p || !p.id) continue
      const sid = `ky-${num}-${key}`
      parts.push({ id: sid, part: key, title: PART_LABEL[key], sourceName: p.name, gregobaseId: p.id })
      gmap.map[sid] = p.id
    }
    catalogue.masses.push({
      id: `mass-${num}`,
      number: num,
      name: m.name || '',
      season: seasonDe(m.season),
      parts,
    })
  })

  // --- Credo I–VII ---
  for (const c of credoList) {
    const mm = c.name.match(/Credo\s+([IVX]+)/)
    if (!mm) continue
    const num = mm[1]
    const sid = `credo-${num}`
    catalogue.credos.push({ id: sid, number: num, name: c.name, gregobaseId: c.id })
    gmap.map[sid] = c.id
  }

  // --- Marianische Antiphonen (aus miscChants.js) ---
  // Struktur dort: { name: "Salve Regina", id: 2715 }, …
  const marianRe = /\{\s*name:\s*"((?:Salve Regina|Alma Redemptoris|Ave Regina c[æa]lorum|Regina c[æa]li)[^"]*)"\s*,\s*id:\s*(\d+)\s*\}/gi
  let mr
  const seen = new Set()
  while ((mr = marianRe.exec(miscCode))) {
    const name = mr[1]
    const id = Number(mr[2])
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    if (seen.has(slug)) continue
    seen.add(slug)
    const sid = `marian-${slug}`
    catalogue.marian.push({ id: sid, name, gregobaseId: id })
    gmap.map[sid] = id
  }

  await writeFile(resolve(OUT, 'catalogue.json'), JSON.stringify(catalogue, null, 2) + '\n')
  await writeFile(MAP_PATH, JSON.stringify(gmap, null, 2) + '\n')

  console.log(
    `Kyriale-Katalog: ${catalogue.masses.length} Ordinarien, ${catalogue.credos.length} Credo, ${catalogue.marian.length} marianische Antiphonen.`,
  )
  console.log(`GregoBase-Map ergänzt (${Object.keys(gmap.map).length} IDs) – bereit für npm run gabc:fetch.`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
