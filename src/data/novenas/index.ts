import type { Novena } from '../types'
import { sacredHeart } from './herzJesu'
import { holySpirit } from './heiligerGeist'
import { immaculata } from './immaculata'
import { stJoseph } from './hlJosef'
import { christmas } from './weihnachten'
import { surrender } from './hingabe'

// Sammlung der Novenen. Weitere Novenen lassen sich als eigene Datei anlegen
// und hier ergänzen.
export const novenas: Novena[] = [sacredHeart, holySpirit, immaculata, stJoseph, christmas, surrender]

/** Novene per id finden. */
export function novenaById(id: string | undefined): Novena | undefined {
  return id ? novenas.find((n) => n.id === id) : undefined
}
