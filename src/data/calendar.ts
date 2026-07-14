// Kleines Kalendermodul: berechnet das reale Datum, die liturgische Saison
// und Farbe für die Anzeige im Dashboard. Bewusst vereinfacht – ein
// vollständiger Kalender beider Formen (mit allen Festen) folgt später
// (siehe Plan / romcal + eigene 1962-Regeln).

export type SeasonColor = 'green' | 'violet' | 'red' | 'white' | 'rose' | 'black'

export interface LiturgicalDayInfo {
  date: Date
  /** Deutscher Wochentag. */
  weekdayDe: string
  /** Formatiertes Datum, deutsch. */
  formattedDe: string
  /** Name der Saison, deutsch. */
  seasonDe: string
  /** Liturgische Farbe der Saison. */
  color: SeasonColor
  /** Kurzer lateinischer Gruß nach Saison. */
  seasonLa: string
}

/** Gauß'sche Osterformel (gregorianisch). Liefert das Osterdatum eines Jahres. */
export function easterSunday(year: number): Date {
  const a = year % 19
  const b = Math.floor(year / 100)
  const c = year % 100
  const d = Math.floor(b / 4)
  const e = b % 4
  const f = Math.floor((b + 8) / 25)
  const g = Math.floor((b - f + 1) / 3)
  const h = (19 * a + b - d - g + 15) % 30
  const i = Math.floor(c / 4)
  const k = c % 4
  const l = (32 + 2 * e + 2 * i - h - k) % 7
  const m = Math.floor((a + 11 * h + 22 * l) / 451)
  const month = Math.floor((h + l - 7 * m + 114) / 31) // 3=März, 4=April
  const day = ((h + l - 7 * m + 114) % 31) + 1
  return new Date(year, month - 1, day)
}

const WEEKDAYS_DE = [
  'Sonntag',
  'Montag',
  'Dienstag',
  'Mittwoch',
  'Donnerstag',
  'Freitag',
  'Samstag',
]

function addDays(date: Date, days: number): Date {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d
}

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

/**
 * Sehr vereinfachte Saison-Bestimmung für die Anzeige.
 * Ordnet einem Datum grob die liturgische Zeit und Farbe zu.
 */
export function getSeason(date: Date): { seasonDe: string; seasonLa: string; color: SeasonColor } {
  const year = date.getFullYear()
  const today = startOfDay(date)
  const easter = startOfDay(easterSunday(year))

  const ashWednesday = addDays(easter, -46)
  const pentecost = addDays(easter, 49)
  const ascension = addDays(easter, 39)

  // Advent: 4. Sonntag vor Weihnachten
  const christmas = new Date(year, 11, 25)
  const christmasDow = christmas.getDay()
  const advent1 = addDays(startOfDay(christmas), -(christmasDow === 0 ? 21 : christmasDow + 21))

  const inRange = (from: Date, to: Date) => today >= from && today < to

  if (inRange(advent1, new Date(year, 11, 25))) {
    return { seasonDe: 'Advent', seasonLa: 'Adventus', color: 'violet' }
  }
  if (today >= new Date(year, 11, 25) || today < new Date(year, 0, 7)) {
    return { seasonDe: 'Weihnachtszeit', seasonLa: 'Nativitas', color: 'white' }
  }
  if (inRange(ashWednesday, easter)) {
    return { seasonDe: 'Fastenzeit', seasonLa: 'Quadragesima', color: 'violet' }
  }
  if (inRange(easter, addDays(pentecost, 1))) {
    const name = today >= ascension ? 'Osterzeit (nach Christi Himmelfahrt)' : 'Osterzeit'
    return { seasonDe: name, seasonLa: 'Tempus Paschale', color: 'white' }
  }
  return { seasonDe: 'Zeit im Jahreskreis', seasonLa: 'Tempus per annum', color: 'green' }
}

export function getLiturgicalDayInfo(date: Date = new Date()): LiturgicalDayInfo {
  const season = getSeason(date)
  const formattedDe = new Intl.DateTimeFormat('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)

  return {
    date,
    weekdayDe: WEEKDAYS_DE[date.getDay()],
    formattedDe,
    seasonDe: season.seasonDe,
    seasonLa: season.seasonLa,
    color: season.color,
  }
}
