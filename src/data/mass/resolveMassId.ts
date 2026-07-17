import { importedMassById } from '../registry'
import { resolveCelebration } from '../liturgicalCalendar'

// Löst zu einem Datum die Kennung des passenden Tagesproprium-Formulars
// (überlieferte Messe, 1962) auf. Feste mit festem Datum haben Vorrang; sonst
// bestimmt der „regierende" Sonntag der laufenden Woche das Formular (Ferialtage
// wiederholen die Sonntagsmesse). Fehlt ein Formular im Bestand, wird auf das
// nächstliegende zurückgegriffen.

function d0(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}
function pad(n: number): string {
  return String(n).padStart(2, '0')
}
function has(id: string, fallback: string): string {
  return importedMassById[id] ? id : fallback
}
/** Nächstniedrigeres vorhandenes „post Pentecosten"-Formular. */
function pickPent(n: number): string {
  for (let k = Math.min(Math.max(n, 1), 24); k >= 1; k--) {
    const id = `do-Pent${pad(k)}-0`
    if (importedMassById[id]) return id
  }
  return 'do-Pent01-0'
}

export function resolveMassId(date: Date = new Date()): string {
  const d = d0(date)

  // 1) Fest mit festem Datum (do-MM-DD) hat Vorrang.
  const fixed = `do-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
  if (importedMassById[fixed]) return fixed

  // 2) Regierender Sonntag der laufenden Woche.
  const sunday = new Date(d)
  sunday.setDate(d.getDate() - d.getDay())
  const la = resolveCelebration(sunday, '1962').title.la ?? ''

  let m: RegExpMatchArray | null
  if ((m = la.match(/Dominica\s+(\d+)\s+Adventus/))) return has(`do-Adv${m[1]}-0`, 'do-Adv1-0')
  if ((m = la.match(/Dominica\s+(\d+)\s+post Epiphaniam/))) return has(`do-Epi${m[1]}-0`, 'do-Epi1-0')
  if ((m = la.match(/Dominica\s+(\d+)\s+in Quadragesima/))) return has(`do-Quad${m[1]}-0`, 'do-Quad1-0')
  if (/Dominica in Palmis/.test(la)) return has('do-Quad6-0', 'do-Quad5-0')
  if (/Resurrectionis/.test(la)) return has('do-Pasc0-0', 'do-Pasc1-0')
  if ((m = la.match(/Dominica\s+(\d+)\s+Pasch/))) return has(`do-Pasc${Math.max(0, +m[1] - 1)}-0`, 'do-Pasc1-0')
  if ((m = la.match(/Dominica\s+(\d+)\s+post Pentecosten/))) return pickPent(+m[1])

  // 3) Weihnachtszeit und Rückfälle.
  const month = d.getMonth() + 1
  if (month === 12 || month === 1) return has('do-Nat1-0', 'do-Epi1-0')
  return pickPent(6)
}
