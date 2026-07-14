// Kompakte liturgische Kalender-Engine für beide Formen (1962 & Novus Ordo).
// Löst zu einem Datum die Saison, die liturgische Farbe und – wo einschlägig –
// das Fest/den Sonntag auf. Bewusst auf Zeiten + Hauptfeste fokussiert
// (nicht jede Gedächtnisfeier). Voll offline, ohne externe Abhängigkeit.
import { easterSunday, type SeasonColor } from './calendar'
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

// ---- Feste mit festem Datum ---------------------------------------------
interface FixedFeast {
  m: number // 1-12
  d: number
  color: SeasonColor
  rank: string
  title1962: BilingualText
  titleNO: BilingualText
}
const FIXED: FixedFeast[] = [
  { m: 1, d: 1, color: 'white', rank: 'Hochfest', title1962: { la: 'In Circumcisione Domini', de: 'Beschneidung des Herrn' }, titleNO: { la: 'Sollemnitas S. Dei Genetricis Mariæ', de: 'Hochfest der Gottesmutter Maria' } },
  { m: 1, d: 6, color: 'white', rank: 'Hochfest', title1962: { la: 'In Epiphania Domini', de: 'Erscheinung des Herrn' }, titleNO: { la: 'In Epiphania Domini', de: 'Erscheinung des Herrn' } },
  { m: 2, d: 2, color: 'white', rank: 'Fest', title1962: { la: 'In Purificatione B.M.V.', de: 'Darstellung des Herrn (Lichtmess)' }, titleNO: { la: 'In Præsentatione Domini', de: 'Darstellung des Herrn' } },
  { m: 3, d: 19, color: 'white', rank: 'Hochfest', title1962: { la: 'S. Ioseph Sponsi B.M.V.', de: 'Hl. Josef' }, titleNO: { la: 'S. Ioseph', de: 'Hl. Josef' } },
  { m: 3, d: 25, color: 'white', rank: 'Hochfest', title1962: { la: 'In Annuntiatione B.M.V.', de: 'Verkündigung des Herrn' }, titleNO: { la: 'In Annuntiatione Domini', de: 'Verkündigung des Herrn' } },
  { m: 6, d: 24, color: 'white', rank: 'Hochfest', title1962: { la: 'In Nativitate S. Ioannis Bapt.', de: 'Geburt Johannes des Täufers' }, titleNO: { la: 'In Nativitate S. Ioannis Bapt.', de: 'Geburt Johannes des Täufers' } },
  { m: 6, d: 29, color: 'red', rank: 'Hochfest', title1962: { la: 'Ss. Petri et Pauli App.', de: 'Hl. Petrus und Paulus' }, titleNO: { la: 'Ss. Petri et Pauli App.', de: 'Hl. Petrus und Paulus' } },
  { m: 8, d: 15, color: 'white', rank: 'Hochfest', title1962: { la: 'In Assumptione B.M.V.', de: 'Mariä Aufnahme in den Himmel' }, titleNO: { la: 'In Assumptione B.M.V.', de: 'Mariä Aufnahme in den Himmel' } },
  { m: 9, d: 8, color: 'white', rank: 'Fest', title1962: { la: 'In Nativitate B.M.V.', de: 'Mariä Geburt' }, titleNO: { la: 'In Nativitate B.M.V.', de: 'Mariä Geburt' } },
  { m: 9, d: 14, color: 'red', rank: 'Fest', title1962: { la: 'In Exaltatione S. Crucis', de: 'Kreuzerhöhung' }, titleNO: { la: 'In Exaltatione S. Crucis', de: 'Kreuzerhöhung' } },
  { m: 11, d: 1, color: 'white', rank: 'Hochfest', title1962: { la: 'Omnium Sanctorum', de: 'Allerheiligen' }, titleNO: { la: 'Omnium Sanctorum', de: 'Allerheiligen' } },
  { m: 11, d: 2, color: 'violet', rank: 'Gedächtnis', title1962: { la: 'In Commemoratione Omnium Fidelium Defunctorum', de: 'Allerseelen' }, titleNO: { la: 'Omnium Fidelium Defunctorum', de: 'Allerseelen' } },
  { m: 12, d: 8, color: 'white', rank: 'Hochfest', title1962: { la: 'In Conceptione Immaculata B.M.V.', de: 'Mariä Empfängnis' }, titleNO: { la: 'In Conceptione Immaculata B.M.V.', de: 'Hochfest der ohne Erbsünde empfangenen Jungfrau Maria' } },
  { m: 12, d: 25, color: 'white', rank: 'Hochfest', title1962: { la: 'In Nativitate Domini', de: 'Geburt des Herrn (Weihnachten)' }, titleNO: { la: 'In Nativitate Domini', de: 'Geburt des Herrn (Weihnachten)' } },
  { m: 12, d: 26, color: 'red', rank: 'Fest', title1962: { la: 'S. Stephani Protomartyris', de: 'Hl. Stephanus' }, titleNO: { la: 'S. Stephani Protomartyris', de: 'Hl. Stephanus' } },
]

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
 * Löst zu einem Datum die Feier in der gewünschten Form auf.
 */
export function resolveCelebration(date: Date, form: LiturgicalForm): Celebration {
  const d = d0(date)
  const year = d.getFullYear()
  const m = movable(year)
  const dow = d.getDay()
  const isSunday = dow === 0

  // 1) Feste mit festem Datum (Hochfeste/Feste überlagern).
  for (const f of FIXED) {
    if (d.getMonth() + 1 === f.m && d.getDate() === f.d) {
      return {
        form,
        title: form === '1962' ? f.title1962 : f.titleNO,
        rank: f.rank,
        color: f.color,
        season: seasonName(d, m, form).de,
      }
    }
  }

  // 2) Bewegliche Hochfeste.
  const sol = movableSolemnity(d, m, form)
  if (sol) return sol

  // 3) Zeit + Sonntag/Feria.
  const season = seasonName(d, m, form)
  const title = temporalTitle(d, m, form, isSunday, dow)
  return { form, title, color: season.color, season: season.de, rank: isSunday ? 'Sonntag' : undefined }
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
