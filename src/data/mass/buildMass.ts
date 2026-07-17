import type { LiturgicalSection, MassFormulary } from '../types'
import { ordinarium1962 } from './ordinarium1962'
import { aspersionFor } from './asperges'
import { kyrialeMasses, kyrialeCredos } from '../kyriale'
import { stufengebet } from './ordoStufengebet'
import { salutatioAnteOrationem, mundaCor, perEvangelica } from './ordoWortgottesdienst'
import { salutatioOffertorium, offertoriumGebete } from './ordoOffertorium'
import { praefatioSanctus, canonRomanus } from './ordoCanon'
import { paterNosterIntro, postPaterNoster, postAgnus } from './ordoCommunio'
import { salutatioPostcommunio, salutatioAnteIte, conclusio } from './ordoConclusio'

const ORD = Object.fromEntries(ordinarium1962.map((s) => [s.id, s]))

interface BuildOptions {
  /** Kyriale-Messe fürs Ordinarium (Kyrie/Gloria/Sanctus/Agnus), z.B. „mass-XI". */
  ordinaryId?: string
  /** Credo-Weise, z.B. „credo-III". */
  credoId?: string
}

// Fallback-Abschnitt im festen Ordinarium (dortige ids weichen bei Agnus ab).
const FALLBACK_ID: Record<string, string> = {
  kyrie: 'kyrie',
  gloria: 'gloria',
  sanctus: 'sanctus',
  agnus: 'agnus-dei',
  credo: 'credo',
}

/** Ordinariums-Abschnitt (Kyrie/Gloria/Sanctus/Agnus/Credo) aus dem gewählten
 *  Kyriale bauen; ohne Auswahl oder ohne Melodie Rückfall auf das feste Ordinarium. */
function ordinaryPart(id: 'kyrie' | 'gloria' | 'sanctus' | 'agnus' | 'credo', opts: BuildOptions): LiturgicalSection {
  const fallback = ORD[FALLBACK_ID[id]]
  if (id === 'credo') {
    const credo = kyrialeCredos.find((c) => c.id === opts.credoId)
    if (credo?.chant.gabc) {
      return { id: 'credo', kind: 'ordinarium', title: fallback.title, text: fallback.text, chant: credo.chant }
    }
    return fallback
  }
  const mass = kyrialeMasses.find((m) => m.id === opts.ordinaryId)
  const part = mass?.parts.find((p) => p.id === `ky-${mass.number}-${id}`)
  if (part?.chant.gabc) {
    return { id, kind: 'ordinarium', title: fallback.title, text: fallback.text, rubric: fallback.rubric, chant: part.chant }
  }
  return fallback
}

/**
 * Setzt aus einem (importierten) Tagesproprium und dem gewählten Ordinarium einen
 * vollständigen Messablauf in kanonischer Reihenfolge zusammen. Sonntägliche
 * Formulare beginnen mit der Besprengung (Asperges / in der Osterzeit Vidi aquam).
 */
export function buildFullMass(proper: MassFormulary, opts: BuildOptions = {}): MassFormulary {
  const p = Object.fromEntries(proper.sections.map((s) => [s.id, s]))
  const isSunday = /-0$/.test(proper.id.replace(/^do-/, '')) // Temporale-Sonntage enden auf -0
  const seq: (LiturgicalSection | undefined)[] = [
    isSunday ? aspersionFor(proper.id) : undefined,
    p.introitus,
    ordinaryPart('kyrie', opts),
    ordinaryPart('gloria', opts),
    p.collecta,
    p.lectio ?? p.epistola,
    p.graduale,
    p.tractus ?? p.alleluia,
    p.sequentia,
    p.evangelium,
    ordinaryPart('credo', opts),
    p.offertorium,
    p.secreta,
    ordinaryPart('sanctus', opts),
    ORD['pater-noster'],
    ordinaryPart('agnus', opts),
    p.communio,
    p.postcommunio,
    ORD['ite-missa-est'],
  ]
  return { ...proper, sections: seq.filter((s): s is LiturgicalSection => Boolean(s)) }
}

/**
 * Setzt das **vollständige Ordo Missae 1962** zusammen: die festen Gebete des
 * Ordo (Stufengebet, Opferung, Kanon, Kommunion, Schlussevangelium – jedes
 * Gebet ein eigener Abschnitt, mit allen Dialogen/Antworten) verwoben mit dem
 * **Tagesproprium** (importiertes Formular) an den richtigen Stellen und dem
 * **gewählten Kyriale** (Kyrie/Gloria/Credo/Sanctus/Agnus mit echter Melodie).
 * Sonntägliche Formulare beginnen mit der Besprengung (Asperges / Vidi aquam).
 */
export function buildOrdo1962(proper: MassFormulary, opts: BuildOptions = {}): MassFormulary {
  const p = Object.fromEntries(proper.sections.map((s) => [s.id, s]))
  const isSunday = /-0$/.test(proper.id.replace(/^do-/, ''))
  const seq: (LiturgicalSection | undefined)[] = [
    isSunday ? aspersionFor(proper.id) : undefined,
    ...stufengebet,
    p.introitus,
    ordinaryPart('kyrie', opts),
    ordinaryPart('gloria', opts),
    ...salutatioAnteOrationem,
    p.collecta,
    p.lectio ?? p.epistola,
    p.graduale,
    p.tractus ?? p.alleluia,
    p.sequentia,
    ...mundaCor,
    p.evangelium,
    ...perEvangelica,
    ordinaryPart('credo', opts),
    ...salutatioOffertorium,
    p.offertorium,
    ...offertoriumGebete,
    p.secreta,
    ...praefatioSanctus,
    ordinaryPart('sanctus', opts),
    ...canonRomanus,
    ...paterNosterIntro,
    ORD['pater-noster'],
    ...postPaterNoster,
    ordinaryPart('agnus', opts),
    ...postAgnus,
    p.communio,
    ...salutatioPostcommunio,
    p.postcommunio,
    ...salutatioAnteIte,
    ORD['ite-missa-est'],
    ...conclusio,
  ]
  return { ...proper, sections: seq.filter((s): s is LiturgicalSection => Boolean(s)) }
}
