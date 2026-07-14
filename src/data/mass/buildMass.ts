import type { LiturgicalSection, MassFormulary } from '../types'
import { ordinarium1962 } from './ordinarium1962'
import { aspersionFor } from './asperges'

const ORD = Object.fromEntries(ordinarium1962.map((s) => [s.id, s]))

/**
 * Setzt aus einem (importierten) Tagesproprium und dem festen Ordinarium einen
 * vollständigen Messablauf in kanonischer Reihenfolge zusammen. Sonntägliche
 * Formulare beginnen mit der Besprengung (Asperges / in der Osterzeit Vidi aquam).
 */
export function buildFullMass(proper: MassFormulary): MassFormulary {
  const p = Object.fromEntries(proper.sections.map((s) => [s.id, s]))
  const isSunday = /-0$/.test(proper.id.replace(/^do-/, '')) // Temporale-Sonntage enden auf -0
  const seq: (LiturgicalSection | undefined)[] = [
    isSunday ? aspersionFor(proper.id) : undefined,
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
