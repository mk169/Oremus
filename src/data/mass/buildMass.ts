import type { LiturgicalSection, MassFormulary } from '../types'
import { ordinarium1962 } from './ordinarium1962'

const ORD = Object.fromEntries(ordinarium1962.map((s) => [s.id, s]))

/**
 * Setzt aus einem (importierten) Tagesproprium und dem festen Ordinarium einen
 * vollständigen Messablauf in kanonischer Reihenfolge zusammen.
 */
export function buildFullMass(proper: MassFormulary): MassFormulary {
  const p = Object.fromEntries(proper.sections.map((s) => [s.id, s]))
  const seq: (LiturgicalSection | undefined)[] = [
    p.introitus,
    ORD.kyrie,
    ORD.gloria,
    p.collecta,
    p.lectio ?? p.epistola,
    p.graduale,
    p.tractus ?? p.alleluia,
    p.sequentia,
    p.evangelium,
    ORD.credo,
    p.offertorium,
    p.secreta,
    ORD.sanctus,
    ORD['pater-noster'],
    ORD['agnus-dei'],
    p.communio,
    p.postcommunio,
    ORD['ite-missa-est'],
  ]
  return { ...proper, sections: seq.filter((s): s is LiturgicalSection => Boolean(s)) }
}
