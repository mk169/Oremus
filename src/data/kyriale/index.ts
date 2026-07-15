import catalogue from './catalogue.json'
import { gabcFor } from '../gabc'
import { handGabc, ordinaryText, credoText, marianText } from './melodies'
import type { BilingualText, ChantInfo } from '../types'

export interface KyrialeChant {
  id: string
  title: BilingualText
  /** Herkunftsname aus der Quelle, z.B. „Kyrie VIII". */
  sourceName?: string
  text?: BilingualText
  chant: ChantInfo
  gregobaseId?: number
}

export interface KyrialeMass {
  id: string
  number: string
  name: string
  season: string
  parts: KyrialeChant[]
}

interface RawPart {
  id: string
  part: string
  title: BilingualText
  sourceName: string
  gregobaseId: number
}
interface RawMass {
  id: string
  number: string
  name: string
  season: string
  parts: RawPart[]
}
interface RawSimple {
  id: string
  number?: string
  name: string
  gregobaseId: number
}

const cat = catalogue as { masses: RawMass[]; credos: RawSimple[]; marian: RawSimple[] }

/** Baut eine ChantInfo: GregoBase-Override (falls geladen) vor Hand-GABC. */
function chantFor(id: string): ChantInfo {
  return { chantable: true, gabc: gabcFor(id, handGabc[id]) }
}

export const kyrialeMasses: KyrialeMass[] = cat.masses.map((m) => ({
  id: m.id,
  number: m.number,
  name: m.name,
  season: m.season,
  parts: m.parts.map((p) => ({
    id: p.id,
    title: p.title,
    sourceName: p.sourceName,
    text: ordinaryText[p.part],
    chant: chantFor(p.id),
    gregobaseId: p.gregobaseId,
  })),
}))

export const kyrialeCredos: KyrialeChant[] = cat.credos.map((c) => ({
  id: c.id,
  title: { la: c.name, de: c.name.replace('Credo', 'Credo') },
  sourceName: c.name,
  text: credoText,
  chant: chantFor(c.id),
  gregobaseId: c.gregobaseId,
}))

const marianBase = (id: string) =>
  id.replace(/^marian-/, '').replace(/-(simple-tone|monasticum)$/, '')

export const kyrialeMarian: KyrialeChant[] = cat.marian.map((a) => {
  const base = marianBase(a.id)
  const info = marianText[base]
  return {
    id: a.id,
    title: { la: a.name, de: info?.title.de ?? a.name },
    sourceName: a.name,
    text: info?.text,
    chant: chantFor(a.id),
    gregobaseId: a.gregobaseId,
  }
})
