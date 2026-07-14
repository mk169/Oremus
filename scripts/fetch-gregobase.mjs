#!/usr/bin/env node
// Holt echte gregorianische Melodien (GABC) von GregoBase und schreibt sie nach
// src/data/gabc/gregobase.json. Diese Overrides haben in der App Vorrang vor den
// eingebetteten Incipits (siehe src/data/gabc/index.ts).
//
// Voraussetzung: Netzzugang zu gregobase.selapa.net muss in den Netzwerk-
// Einstellungen der Umgebung freigegeben sein (siehe docs/gregobase.md).
//
// Nutzung:
//   1. scripts/gregobase-map.json ausfüllen (section.id -> GregoBase chant-ID)
//   2. npm run gabc:fetch
import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const MAP_PATH = resolve(__dirname, 'gregobase-map.json')
const OUT_PATH = resolve(__dirname, '../src/data/gabc/gregobase.json')

// GregoBase-Endpunkt für den GABC-Quelltext eines Gesangs.
const gabcUrl = (id) => `https://gregobase.selapa.net/download.php?id=${id}&format=gabc`

/** Entfernt den GABC-Header (bis einschließlich `%%`), behält die Notation. */
function stripHeader(gabc) {
  const idx = gabc.indexOf('%%')
  const body = idx >= 0 ? gabc.slice(idx + 2) : gabc
  return body.replace(/\s+/g, ' ').trim()
}

async function main() {
  const { map } = JSON.parse(await readFile(MAP_PATH, 'utf8'))
  const entries = Object.entries(map).filter(([, id]) => typeof id === 'number')

  if (entries.length === 0) {
    console.error('Keine GregoBase-IDs in scripts/gregobase-map.json eingetragen. Nichts zu tun.')
    process.exit(1)
  }

  let out = {}
  try {
    out = JSON.parse(await readFile(OUT_PATH, 'utf8'))
  } catch {
    /* leere Datei */
  }

  let ok = 0
  for (const [sectionId, id] of entries) {
    try {
      const res = await fetch(gabcUrl(id))
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const raw = await res.text()
      const gabc = stripHeader(raw)
      if (!gabc.includes('(')) throw new Error('keine GABC-Notation erkannt')
      out[sectionId] = gabc
      ok++
      console.log(`✓ ${sectionId}  <- GregoBase #${id}`)
    } catch (err) {
      console.warn(`✗ ${sectionId} (#${id}): ${err.message}`)
    }
  }

  await writeFile(OUT_PATH, JSON.stringify(out, null, 2) + '\n')
  console.log(`\nFertig: ${ok}/${entries.length} Melodien nach src/data/gabc/gregobase.json geschrieben.`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
