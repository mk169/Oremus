// Zentrale Registry: bündelt die Beispielinhalte und ordnet sie den beiden
// liturgischen Formen zu. Später wird hier nach Datum/Fest aufgelöst.
import { mass1962 } from './mass/mass1962'
import { massNovusOrdo } from './mass/massNovusOrdo'
import { komplet1962, kompletNeu } from './office/komplet'
import type { Hour, LiturgicalForm, MassFormulary } from './types'

export const massByForm: Record<LiturgicalForm, MassFormulary> = {
  '1962': mass1962,
  novusOrdo: massNovusOrdo,
}

export const hoursByForm: Record<LiturgicalForm, Hour[]> = {
  '1962': [komplet1962],
  novusOrdo: [kompletNeu],
}

export const FORM_LABEL: Record<LiturgicalForm, { de: string; la: string }> = {
  '1962': { de: 'Überlieferte Form (1962)', la: 'Forma extraordinaria' },
  novusOrdo: { de: 'Ordentliche Form (Novus Ordo)', la: 'Forma ordinaria' },
}
