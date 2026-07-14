// Zentrale Registry: bündelt die Beispielinhalte und ordnet sie den beiden
// liturgischen Formen zu. Später wird hier nach Datum/Fest aufgelöst.
import { mass1962 } from './mass/mass1962'
import { massNovusOrdo } from './mass/massNovusOrdo'
import { laudes1962, laudesNeu } from './office/laudes'
import { komplet1962, kompletNeu } from './office/komplet'
import type { Hour, LiturgicalForm, MassFormulary } from './types'

export const massByForm: Record<LiturgicalForm, MassFormulary> = {
  '1962': mass1962,
  novusOrdo: massNovusOrdo,
}

// Horen in der natürlichen Tagesordnung (Laudes am Morgen … Komplet am Abend).
export const hoursByForm: Record<LiturgicalForm, Hour[]> = {
  '1962': [laudes1962, komplet1962],
  novusOrdo: [laudesNeu, kompletNeu],
}

export const FORM_LABEL: Record<LiturgicalForm, { de: string; la: string }> = {
  '1962': { de: 'Überlieferte Form (1962)', la: 'Forma extraordinaria' },
  novusOrdo: { de: 'Ordentliche Form (Novus Ordo)', la: 'Forma ordinaria' },
}
