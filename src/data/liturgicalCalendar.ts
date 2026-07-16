// Kompakte liturgische Kalender-Engine für beide Formen (1962 & Novus Ordo).
// Löst zu einem Datum die Saison, die liturgische Farbe und – wo einschlägig –
// das Fest/den Sonntag auf. Bewusst auf Zeiten + Hauptfeste fokussiert
// (nicht jede Gedächtnisfeier). Voll offline, ohne externe Abhängigkeit.
import { easterSunday, type SeasonColor } from './calendar'
import { sanctoraleFor } from './sanctorale'
import type { BilingualText, LiturgicalForm } from './types'

export interface Celebration {
  form: LiturgicalForm
  /** Name der Feier / des Sonntags. */
  title: BilingualText
  /** Rang, z.B. „Hochfest" bzw. „I. Klasse". */
  rank?: string
  /** Liturgische Farbe. */
  color: SeasonColor
  /** Name der liturgischen Zeit (deutsch). */
  season: string
  /** Mitgefeierte Gedächtnisse (Kommemorationen). */
  commemorations?: BilingualText[]
}

// ---- Datums-Hilfen ------------------------------------------------------
const DAY = 86_400_000
function d0(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}
function addDays(date: Date, n: number): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + n)
}
function diffDays(a: Date, b: Date): number {
  return Math.round((d0(a).getTime() - d0(b).getTime()) / DAY)
}
function sameDay(a: Date, b: Date): boolean {
  return a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}
/** 1. Adventssonntag eines Jahres (4. Sonntag vor dem 25.12.). */
function adventStart(year: number): Date {
  const christmas = new Date(year, 11, 25)
  const dow = christmas.getDay() // 0=So
  return addDays(christmas, -(dow === 0 ? 28 : dow + 21))
}

// ---- Bewegliche Schlüsseltage -------------------------------------------
interface Movable {
  easter: Date
  ashWed: Date
  palmSunday: Date
  ascension: Date
  pentecost: Date
  trinity: Date
  corpus1962: Date
  corpusNO: Date
  sacredHeart: Date
  septuagesima: Date
  adventThisYear: Date
  adventPrevYear: Date
  christKing1962: Date
  christKingNO: Date
}
function movable(year: number): Movable {
  const easter = d0(easterSunday(year))
  const advent = adventStart(year)
  // letzter Sonntag im Oktober
  let ck = new Date(year, 9, 31)
  while (ck.getDay() !== 0) ck = addDays(ck, -1)
  return {
    easter,
    ashWed: addDays(easter, -46),
    palmSunday: addDays(easter, -7),
    ascension: addDays(easter, 39),
    pentecost: addDays(easter, 49),
    trinity: addDays(easter, 56),
    corpus1962: addDays(easter, 60),
    corpusNO: addDays(easter, 63),
    sacredHeart: addDays(easter, 68),
    septuagesima: addDays(easter, -63),
    adventThisYear: advent,
    adventPrevYear: adventStart(year - 1),
    christKing1962: ck,
    christKingNO: addDays(advent, -7),
  }
}

// ---- Rangbezeichnungen des Sanktorale -----------------------------------
// Klasse 1–4 der Rubriken von 1960 → deutsche Bezeichnung.
const CLASS_LABEL: Record<1 | 2 | 3 | 4, string> = {
  1: 'I. Klasse',
  2: 'II. Klasse',
  3: 'III. Klasse',
  4: 'Kommemoration',
}

// ---- Saison + Sonntagsordnung -------------------------------------------
const WEEKDAY_LA = ['Dominica', 'feria II', 'feria III', 'feria IV', 'feria V', 'feria VI', 'sabbato']

function ordinalDe(n: number): string {
  return `${n}.`
}

/** Bewegliche Hochfeste, die den Wochentag/Sonntag überlagern. */
function movableSolemnity(date: Date, m: Movable, form: LiturgicalForm): Celebration | null {
  const base = (title: BilingualText, color: SeasonColor, season: string): Celebration => ({
    form,
    title,
    color,
    rank: 'Hochfest',
    season,
  })
  if (sameDay(date, m.easter)) return base({ la: 'Dominica Resurrectionis', de: 'Ostersonntag' }, 'white', 'Osterzeit')
  if (sameDay(date, m.ascension)) return base({ la: 'In Ascensione Domini', de: 'Christi Himmelfahrt' }, 'white', 'Osterzeit')
  if (sameDay(date, m.pentecost)) return base({ la: 'Dominica Pentecostes', de: 'Pfingstsonntag' }, 'red', 'Osterzeit')
  if (sameDay(date, m.trinity)) return base({ la: 'Sanctissimæ Trinitatis', de: 'Dreifaltigkeitssonntag' }, 'white', 'Zeit im Jahreskreis')
  if (sameDay(date, form === '1962' ? m.corpus1962 : m.corpusNO))
    return base({ la: 'Sanctissimi Corporis Christi', de: 'Fronleichnam' }, 'white', 'Zeit im Jahreskreis')
  if (sameDay(date, m.sacredHeart)) return base({ la: 'Sacratissimi Cordis Iesu', de: 'Heiligstes Herz Jesu' }, 'white', 'Zeit im Jahreskreis')
  if (sameDay(date, form === '1962' ? m.christKing1962 : m.christKingNO))
    return base({ la: 'D.N. Iesu Christi Regis', de: 'Christkönig' }, 'white', 'Zeit im Jahreskreis')
  if (sameDay(date, m.palmSunday)) return base({ la: 'Dominica in Palmis', de: 'Palmsonntag' }, 'red', 'Fastenzeit')
  return null
}

/**
 * Rangklasse des zeitlichen Festkreises an einem Tag (1 = höchste).
 * Bestimmt, ob ein Sonntag/eine Ferie ein Heiligenfest verdrängt.
 */
function temporalClass(d: Date, m: Movable, isSunday: boolean): 1 | 2 | 3 | 4 {
  // Aschermittwoch und die Karwoche verdrängen jedes Fest.
  if (sameDay(d, m.ashWed)) return 1
  if (d > m.palmSunday && d < m.easter) return 1

  if (isSunday) {
    // I. Klasse: Sonntage des Advents, der Fastenzeit/Passionszeit,
    // Weißer Sonntag (Oktavtag von Ostern).
    if (d >= m.adventThisYear && d < new Date(d.getFullYear(), 11, 25)) return 1
    if (d >= m.ashWed && d < m.easter) return 1
    if (sameDay(d, addDays(m.easter, 7))) return 1
    // Übrige Sonntage (nach Erscheinung / nach Pfingsten / im Jahreskreis).
    return 2
  }

  // Gebotene Ferien des Advents (17.–23.12.) und der Fastenzeit werden
  // an Festen kommemoriert → Klasse 3.
  const isDec = d.getMonth() === 11
  if (isDec && d.getDate() >= 17 && d.getDate() <= 23) return 3
  if (d >= m.ashWed && d < m.easter) return 3

  return 4
}

/**
 * Löst zu einem Datum die Feier in der gewünschten Form auf.
 * Berücksichtigt die Rangordnung zwischen zeitlichem Festkreis
 * (Sonntage/Ferien), beweglichen Hochfesten und dem Sanktorale.
 */
export function resolveCelebration(date: Date, form: LiturgicalForm): Celebration {
  const d = d0(date)
  const year = d.getFullYear()
  const m = movable(year)
  const dow = d.getDay()
  const isSunday = dow === 0

  // 1) Bewegliche Hochfeste (Osterkreis) haben stets Vorrang.
  const sol = movableSolemnity(d, m, form)
  if (sol) {
    const sanct = sanctoraleFor(d)
    if (sanct) sol.commemorations = [{ la: sanct.la, de: sanct.de }]
    return sol
  }

  // 2) Zeitlicher Festkreis (Saison + Sonntag/Feria) als Grundlage.
  const season = seasonName(d, m, form)
  const temporal = temporalTitle(d, m, form, isSunday, dow)
  const tCls = temporalClass(d, m, isSunday)
  const temporalCel: Celebration = {
    form,
    title: temporal,
    color: season.color,
    season: season.de,
    rank: isSunday ? `Sonntag · ${CLASS_LABEL[tCls]}` : undefined,
  }

  // 3) Sanktorale (Heiligenkalender) und Präzedenz.
  const sanct = sanctoraleFor(d)
  if (!sanct) return temporalCel

  const sanctWins = sanct.cls < tCls || (sanct.cls === tCls && !isSunday && tCls >= 3)

  if (sanctWins) {
    const commemorations: BilingualText[] = []
    // Verdrängter Sonntag wird kommemoriert.
    if (isSunday) commemorations.push({ la: temporal.la, de: temporal.de })
    // Eigene Gedächtnisse des Festes.
    if (sanct.comm) for (const c of sanct.comm) commemorations.push({ la: c.la, de: c.de })
    return {
      form,
      title: { la: sanct.la, de: sanct.de },
      rank: CLASS_LABEL[sanct.cls],
      color: sanct.color,
      season: season.de,
      commemorations: commemorations.length ? commemorations : undefined,
    }
  }

  // Zeitlicher Festkreis siegt – Heiligenfest (bis III. Klasse) wird kommemoriert.
  if (sanct.cls <= 3) {
    temporalCel.commemorations = [{ la: sanct.la, de: sanct.de }]
  }
  return temporalCel
}

interface SeasonInfo {
  de: string
  la: string
  color: SeasonColor
}
function seasonName(d: Date, m: Movable, form: LiturgicalForm): SeasonInfo {
  const year = d.getFullYear()
  const advent = m.adventThisYear
  const christmas = new Date(year, 11, 25)

  if (d >= advent && d < christmas) return { de: 'Advent', la: 'Adventus', color: 'violet' }
  if (d >= christmas || d < new Date(year, 0, 6)) return { de: 'Weihnachtszeit', la: 'Nativitas', color: 'white' }
  // Epiphaniezeit bis Septuagesima (1962) bzw. bis Fastenzeit (NO)
  if (form === '1962' && d >= m.septuagesima && d < m.ashWed)
    return { de: 'Vorfastenzeit (Septuagesima)', la: 'Septuagesima', color: 'violet' }
  if (d >= m.ashWed && d < m.easter) {
    if (d >= addDays(m.easter, -14)) return { de: 'Passionszeit', la: 'Tempus Passionis', color: 'violet' }
    return { de: 'Fastenzeit', la: 'Quadragesima', color: 'violet' }
  }
  if (d >= m.easter && d <= m.pentecost) return { de: 'Osterzeit', la: 'Tempus Paschale', color: 'white' }
  if (d < m.ashWed) {
    return form === '1962'
      ? { de: 'Zeit nach Erscheinung', la: 'Post Epiphaniam', color: 'green' }
      : { de: 'Zeit im Jahreskreis', la: 'Per annum', color: 'green' }
  }
  return form === '1962'
    ? { de: 'Zeit nach Pfingsten', la: 'Post Pentecosten', color: 'green' }
    : { de: 'Zeit im Jahreskreis', la: 'Per annum', color: 'green' }
}

function temporalTitle(d: Date, m: Movable, form: LiturgicalForm, isSunday: boolean, dow: number): BilingualText {
  const s = seasonName(d, m, form)

  // Advent-Sonntage
  if (s.de === 'Advent') {
    const n = Math.floor(diffDays(d, m.adventThisYear) / 7) + 1
    if (isSunday) return { la: `Dominica ${n} Adventus`, de: `${ordinalDe(n)} Adventssonntag` }
    return { la: `${WEEKDAY_LA[dow]}, hebd. ${n} Adventus`, de: `Wochentag der ${ordinalDe(n)} Adventswoche` }
  }

  // Fasten-/Passionssonntage
  if (s.color === 'violet' && d >= m.ashWed && d < m.easter) {
    if (isSunday) {
      const n = Math.floor(diffDays(d, addDays(m.ashWed, 4)) / 7) + 1
      return { la: `Dominica ${n} in Quadragesima`, de: `${ordinalDe(n)} Fastensonntag` }
    }
    return { la: WEEKDAY_LA[dow] + ' in Quadragesima', de: 'Wochentag der Fastenzeit' }
  }

  // Osterzeit-Sonntage
  if (s.de === 'Osterzeit') {
    const n = Math.floor(diffDays(d, m.easter) / 7) + 1
    if (isSunday && n > 1) return { la: `Dominica ${n} Paschæ`, de: `${ordinalDe(n)} Sonntag der Osterzeit` }
    if (!isSunday) return { la: WEEKDAY_LA[dow] + ' temporis paschalis', de: 'Wochentag der Osterzeit' }
  }

  // nach Pfingsten (1962) bzw. Jahreskreis (NO), grün
  if (s.color === 'green' && d >= m.ashWed) {
    if (form === '1962') {
      const n = Math.floor(diffDays(d, m.pentecost) / 7)
      if (isSunday) return { la: `Dominica ${n} post Pentecosten`, de: `${ordinalDe(n)} Sonntag nach Pfingsten` }
      return { la: WEEKDAY_LA[dow] + ' post Pentecosten', de: 'Wochentag nach Pfingsten' }
    }
    // NO: rückwärts vom Christkönigssonntag (34.)
    const n = 34 - Math.round(diffDays(m.christKingNO, d) / 7)
    if (isSunday) return { la: `Dominica ${n} per annum`, de: `${ordinalDe(n)} Sonntag im Jahreskreis` }
    return { la: `hebd. ${n} per annum`, de: `Wochentag der ${ordinalDe(n)} Woche im Jahreskreis` }
  }

  // grün vor der Fastenzeit
  if (s.color === 'green') {
    if (form === '1962') {
      const n = Math.max(1, Math.floor(diffDays(d, addDays(new Date(d.getFullYear(), 0, 6), 1)) / 7) + 1)
      if (isSunday) return { la: `Dominica ${n} post Epiphaniam`, de: `${ordinalDe(n)} Sonntag nach Erscheinung` }
      return { la: WEEKDAY_LA[dow] + ' post Epiphaniam', de: 'Wochentag nach Erscheinung' }
    }
    const n = Math.max(2, Math.floor(diffDays(d, new Date(d.getFullYear(), 0, 6)) / 7) + 1)
    if (isSunday) return { la: `Dominica ${n} per annum`, de: `${ordinalDe(n)} Sonntag im Jahreskreis` }
    return { la: `hebd. ${n} per annum`, de: `Wochentag der ${ordinalDe(n)} Woche im Jahreskreis` }
  }

  // Weihnachtszeit / Septuagesima / Fallback
  if (isSunday) return { la: 'Dominica', de: 'Sonntag' }
  return { la: WEEKDAY_LA[dow], de: 'Wochentag' }
}

/** Übersicht: die nächsten `count` Tage ab `from` in der gewünschten Form. */
export function upcomingCelebrations(from: Date, count: number, form: LiturgicalForm): { date: Date; cel: Celebration }[] {
  const out: { date: Date; cel: Celebration }[] = []
  for (let i = 0; i < count; i++) {
    const date = addDays(d0(from), i)
    out.push({ date, cel: resolveCelebration(date, form) })
  }
  return out
}

export interface CalendarDay {
  date: Date
  cel: Celebration
}

/** Alle Tage eines Kalendermonats (0 = Januar) mit ihrer Feier. */
export function monthCelebrations(year: number, month: number, form: LiturgicalForm): CalendarDay[] {
  const days = new Date(year, month + 1, 0).getDate()
  const out: CalendarDay[] = []
  for (let day = 1; day <= days; day++) {
    const date = new Date(year, month, day)
    out.push({ date, cel: resolveCelebration(date, form) })
  }
  return out
}

/** Das komplette Kalenderjahr, nach Monaten gruppiert. */
export function yearCelebrations(year: number, form: LiturgicalForm): CalendarDay[][] {
  const out: CalendarDay[][] = []
  for (let month = 0; month < 12; month++) out.push(monthCelebrations(year, month, form))
  return out
}
