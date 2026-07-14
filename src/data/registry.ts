// Zentrale Registry: bündelt die Beispielinhalte und ordnet sie den beiden
// liturgischen Formen zu. Später wird hier nach Datum/Fest aufgelöst.
import { mass1962 } from './mass/mass1962'
import { massNovusOrdo } from './mass/massNovusOrdo'
import { matutin1962, lesehoreNeu } from './office/matutin'
import { laudes1962, laudesNeu } from './office/laudes'
import { prim1962, terz1962, sext1962, non1962, terzNeu, sextNeu, nonNeu } from './office/littleHours'
import { vesper1962, vesperNeu } from './office/vesper'
import { komplet1962, kompletNeu } from './office/komplet'
import importedMassIndex from './imported/mass/index.json'
import importedOfficeIndex from './imported/office/index.json'
import type { Hour, LiturgicalForm, MassFormulary } from './types'

export const massByForm: Record<LiturgicalForm, MassFormulary> = {
  '1962': mass1962,
  novusOrdo: massNovusOrdo,
}

// Aus Divinum Officium importierte Tagesproprien (überlieferte Messe, 1962).
const importedModules = import.meta.glob<{ default: MassFormulary }>('./imported/mass/do-*.json', {
  eager: true,
})
export const importedMassById: Record<string, MassFormulary> = Object.fromEntries(
  Object.values(importedModules).map((m) => [m.default.id, m.default]),
)

/** Liste der importierten Messformulare in liturgischer Reihenfolge. */
export interface ImportedMassEntry {
  id: string
  titleLa: string
  titleDe: string
  color: string
  rank?: string
}
export const importedMassList = importedMassIndex as ImportedMassEntry[]

// Aus Divinum Officium importierte Tagesproprien des Stundengebets (Latein/Deutsch).
const importedOfficeModules = import.meta.glob<{ default: MassFormulary }>(
  './imported/office/do-*.json',
  { eager: true },
)
export const importedOfficeById: Record<string, MassFormulary> = Object.fromEntries(
  Object.values(importedOfficeModules).map((m) => [m.default.id, m.default]),
)
export const importedOfficeList = importedOfficeIndex as { id: string; titleLa: string; titleDe: string; color: string }[]

// Horen in der natürlichen Tagesordnung (Nachtwache/Morgen … Abend/Nacht).
// 1962: Matutin, Laudes, Prim, Terz, Sext, Non, Vesper, Komplet.
// Neu: Lesehore, Laudes, Terz, Sext, Non, Vesper, Komplet (Prim entfällt).
export const hoursByForm: Record<LiturgicalForm, Hour[]> = {
  '1962': [matutin1962, laudes1962, prim1962, terz1962, sext1962, non1962, vesper1962, komplet1962],
  novusOrdo: [lesehoreNeu, laudesNeu, terzNeu, sextNeu, nonNeu, vesperNeu, kompletNeu],
}

export const FORM_LABEL: Record<LiturgicalForm, { de: string; la: string }> = {
  '1962': { de: 'Überlieferte Form (1962)', la: 'Forma extraordinaria' },
  novusOrdo: { de: 'Ordentliche Form (Novus Ordo)', la: 'Forma ordinaria' },
}
