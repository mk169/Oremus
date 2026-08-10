// Kompakte liturgische Kalender-Engine für beide Formen (1962 & Novus Ordo).
// Löst zu einem Datum die Saison, die liturgische Farbe und – wo einschlägig –
// das Fest/den Sonntag auf. Bewusst auf Zeiten + Hauptfeste fokussiert
// (nicht jede Gedächtnisfeier). Voll offline, ohne externe Abhängigkeit.
import { easterSunday, type SeasonColor } from './calendar'
import { sanctoraleFor } from './sanctorale'
import { sanctoraleNovusOrdoFor } from './sanctoraleNovusOrdo'
import type { BilingualText, LiturgicalForm } from './types'

/** Sanktorale-Eintrag der gewählten Form (Novus Ordo bzw. überliefert 1962). */
function sanctoraleForForm(date: Date, form: LiturgicalForm) {
  return form === 'novusOrdo' ? sanctoraleNovusOrdoFor(date) : sanctoraleFor(date)
}

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
  /** Kandidat-ID des Tagesmessformulars (do-*), ungeprüft. */
  massIdCandidate?: string
  /** Kandidat-ID des Tagesoffiziums (do-*), ungeprüft. */
  officeIdCandidate?: string
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

/**
 * Taufe des Herrn (Novus Ordo): Sonntag nach dem 6. Januar. Fällt der 6. Januar
 * selbst auf einen Sonntag, wird das Fest am folgenden Montag begangen.
 */
function baptismOfLord(year: number): Date {
  const epiphany = new Date(year, 0, 6)
  const dow = epiphany.getDay()
  return dow === 0 ? addDays(epiphany, 1) : addDays(epiphany, 7 - dow)
}

/**
 * Fest der Heiligen Familie (Novus Ordo): Sonntag in der Weihnachtsoktav.
 * Fällt Weihnachten auf einen Sonntag, wird es am 30. Dezember gefeiert.
 */
function holyFamily(year: number): Date {
  const christmas = new Date(year, 11, 25)
  const dow = christmas.getDay()
  return dow === 0 ? new Date(year, 11, 30) : addDays(christmas, 7 - dow)
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
  /** Fest der Heiligen Familie (Novus Ordo). */
  holyFamily: Date
  /** Taufe des Herrn (Novus Ordo) – Abschluss der Weihnachtszeit. */
  baptismOfLord: Date
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
    // Fronleichnam wird im deutschen Sprachraum auch im Novus Ordo am
    // Donnerstag (Ostern + 60) als gebotener Feiertag begangen.
    corpusNO: addDays(easter, 60),
    sacredHeart: addDays(easter, 68),
    septuagesima: addDays(easter, -63),
    adventThisYear: advent,
    adventPrevYear: adventStart(year - 1),
    christKing1962: ck,
    christKingNO: addDays(advent, -7),
    holyFamily: holyFamily(year),
    baptismOfLord: baptismOfLord(year),
  }
}

// ---- Rangbezeichnungen des Sanktorale -----------------------------------
// Klasse 1–4 der Rubriken von 1960 → deutsche Bezeichnung.
const CLASS_LABEL_1962: Record<1 | 2 | 3 | 4, string> = {
  1: 'I. Klasse',
  2: 'II. Klasse',
  3: 'III. Klasse',
  4: 'Kommemoration',
}
// Ränge der ordentlichen Form (Grundordnung des Kirchenjahres).
const RANK_LABEL_NO: Record<1 | 2 | 3 | 4, string> = {
  1: 'Hochfest',
  2: 'Fest',
  3: 'Gebotener Gedenktag',
  4: 'Nichtgebotener Gedenktag',
}
function rankLabel(form: LiturgicalForm, cls: 1 | 2 | 3 | 4): string {
  return form === 'novusOrdo' ? RANK_LABEL_NO[cls] : CLASS_LABEL_1962[cls]
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
 * Bewegliche Herrenfeste der Weihnachtszeit im Novus Ordo (Fest der Heiligen
 * Familie und Taufe des Herrn). Sie verdrängen den Sonntag bzw. beschließen die
 * Weihnachtszeit.
 */
function novusOrdoChristmasFeast(date: Date, m: Movable): Celebration | null {
  if (sameDay(date, m.holyFamily))
    return {
      form: 'novusOrdo',
      title: { la: 'Sanctæ Familiæ Iesu, Mariæ et Ioseph', de: 'Fest der Heiligen Familie' },
      color: 'white',
      rank: 'Fest',
      season: 'Weihnachtszeit',
    }
  if (sameDay(date, m.baptismOfLord))
    return {
      form: 'novusOrdo',
      title: { la: 'In Baptismate Domini', de: 'Taufe des Herrn' },
      color: 'white',
      rank: 'Fest',
      season: 'Weihnachtszeit',
    }
  return null
}

/**
 * Entscheidet, ob das Heiligenfest den zeitlichen Festkreis verdrängt.
 * `tCls` ist die Rangklasse des Tages (1 = privilegiert: Aschermittwoch,
 * Kar-/Osterwoche, Sonntage von Advent/Fasten-/Osterzeit).
 */
function sanctoralWins(
  sanct: { cls: 1 | 2 | 3 | 4; lord?: boolean },
  tCls: 1 | 2 | 3 | 4,
  isSunday: boolean,
  form: LiturgicalForm,
): boolean {
  if (form === 'novusOrdo') {
    // Hochfest: verdrängt alles außer den privilegierten Tagen/Sonntagen.
    if (sanct.cls === 1) return tCls !== 1
    // Fest: verdrängt Wochentage; einen Jahreskreis-Sonntag nur als Herrenfest.
    if (sanct.cls === 2) return isSunday ? sanct.lord === true && tCls === 2 : tCls >= 3
    // Gebotener/Nichtgebotener Gedenktag: nie an Sonntagen oder privilegierten
    // Ferien; nur an gewöhnlichen (grünen) Wochentagen.
    return !isSunday && tCls === 4
  }
  // Überlieferte Form (1962).
  return sanct.cls < tCls || (sanct.cls === tCls && !isSunday && tCls >= 3)
}

/**
 * Rangklasse des zeitlichen Festkreises an einem Tag (1 = höchste).
 * Bestimmt, ob ein Sonntag/eine Ferie ein Heiligenfest verdrängt.
 */
function temporalClass(d: Date, m: Movable, isSunday: boolean): 1 | 2 | 3 | 4 {
  // Aschermittwoch, Karwoche und Osteroktav verdrängen jedes Fest.
  if (sameDay(d, m.ashWed)) return 1
  if (d > m.palmSunday && d < m.easter) return 1
  if (d > m.easter && d < addDays(m.easter, 7)) return 1

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
    const sanct = sanctoraleForForm(d, form)
    // In der überlieferten Form wird ein zusammentreffendes Fest kommemoriert;
    // im Novus Ordo entfällt das Heiligenfest an einem Hochfest ersatzlos.
    if (sanct && form === '1962') sol.commemorations = [{ la: sanct.la, de: sanct.de }]
    // Nur Ostern und Palmsonntag haben ein eigenes importiertes (1962-)Formular.
    if (form === '1962') {
      if (sameDay(d, m.easter)) {
        sol.massIdCandidate = 'do-Pasc0-0'
        sol.officeIdCandidate = 'do-Pasc0-0'
      } else if (sameDay(d, m.palmSunday)) {
        sol.massIdCandidate = 'do-Quad6-0'
        sol.officeIdCandidate = 'do-Quad6-0'
      }
    }
    return sol
  }

  // 1b) Novus Ordo: bewegliche Herrenfeste der Weihnachtszeit (Heilige Familie,
  // Taufe des Herrn) verdrängen den Sonntag bzw. beschließen die Weihnachtszeit.
  if (form === 'novusOrdo') {
    const nf = novusOrdoChristmasFeast(d, m)
    if (nf) return nf
  }

  // 2) Zeitlicher Festkreis (Saison + Sonntag/Feria) als Grundlage.
  const season = seasonName(d, m, form)
  const temporal = temporalTitle(d, m, form, isSunday, dow)
  const tCls = temporalClass(d, m, isSunday)
  // Die importierten Tagesformulare (do-*) sind ausschließlich 1962er Propria.
  const tempId = form === '1962' ? temporalFormularyId(d, m) : undefined
  const temporalCel: Celebration = {
    form,
    title: temporal,
    color: season.color,
    season: season.de,
    rank: isSunday
      ? form === 'novusOrdo'
        ? 'Sonntag'
        : `Sonntag · ${CLASS_LABEL_1962[tCls]}`
      : undefined,
    massIdCandidate: tempId,
    officeIdCandidate: tempId,
  }

  // 3) Sanktorale (Heiligenkalender) und Präzedenz.
  const sanct = sanctoraleForForm(d, form)
  if (!sanct) return temporalCel

  if (sanctoralWins(sanct, tCls, isSunday, form)) {
    const commemorations: BilingualText[] = []
    // Verdrängter Sonntag wird nur in der überlieferten Form kommemoriert.
    if (form === '1962' && isSunday) commemorations.push({ la: temporal.la, de: temporal.de })
    // Weitere Gedächtnisse bzw. (im NO) wählbare Gedenktage desselben Tages.
    if (sanct.comm) for (const c of sanct.comm) commemorations.push({ la: c.la, de: c.de })
    const mm = String(sanct.m).padStart(2, '0')
    const dd = String(sanct.d).padStart(2, '0')
    return {
      form,
      title: { la: sanct.la, de: sanct.de },
      rank: rankLabel(form, sanct.cls),
      color: sanct.color,
      season: season.de,
      commemorations: commemorations.length ? commemorations : undefined,
      // Nur die überlieferte Form hat importierte Heiligen-Messformulare.
      massIdCandidate: form === '1962' ? `do-${mm}-${dd}` : undefined,
    }
  }

  // Zeitlicher Festkreis siegt.
  if (form === '1962') {
    // Heiligenfest (bis III. Klasse) wird kommemoriert.
    if (sanct.cls <= 3) temporalCel.commemorations = [{ la: sanct.la, de: sanct.de }]
  } else if (!isSunday && tCls === 3 && sanct.cls === 3) {
    // Novus Ordo: an privilegierten Ferien (Advent 17.–24.12., Fastenzeit) wird
    // ein gebotener Gedenktag als Kommemoration angezeigt.
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
  // Weihnachtszeit: 1962 bis zum 6. Januar, im Novus Ordo bis zur Taufe des
  // Herrn (einschließlich).
  const christmasEnd = form === 'novusOrdo' ? addDays(m.baptismOfLord, 1) : new Date(year, 0, 6)
  if (d >= christmas || d < christmasEnd) return { de: 'Weihnachtszeit', la: 'Nativitas', color: 'white' }
  // Vorfastenzeit (Septuagesima) nur in der überlieferten Form.
  if (form === '1962' && d >= m.septuagesima && d < m.ashWed)
    return { de: 'Vorfastenzeit (Septuagesima)', la: 'Septuagesima', color: 'violet' }
  if (d >= m.ashWed && d < m.easter) {
    // Die eigene „Passionszeit" kennt nur die überlieferte Form; im Novus Ordo
    // bleibt es durchgehend Fastenzeit (die Karwoche beginnt mit Palmsonntag).
    if (form === '1962' && d >= addDays(m.easter, -14))
      return { de: 'Passionszeit', la: 'Tempus Passionis', color: 'violet' }
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
    // NO: Zählung ab der Taufe des Herrn – der erste Sonntag danach ist der
    // 2. Sonntag im Jahreskreis (die 1. Woche beginnt am Tag nach der Taufe).
    const n = Math.max(1, Math.floor(diffDays(d, m.baptismOfLord) / 7) + 1)
    if (isSunday) return { la: `Dominica ${n} per annum`, de: `${ordinalDe(n)} Sonntag im Jahreskreis` }
    return { la: `hebd. ${n} per annum`, de: `Wochentag der ${ordinalDe(n)} Woche im Jahreskreis` }
  }

  // Weihnachtszeit / Septuagesima / Fallback
  if (isSunday) return { la: 'Dominica', de: 'Sonntag' }
  return { la: WEEKDAY_LA[dow], de: 'Wochentag' }
}

/**
 * ID des temporalen Tagesmessformulars (`do-<Saison><Woche>-0`), sofern eines
 * existieren kann. Nur Sonntage (die importierten Temporalformulare enden auf
 * `-0`). Die Rechnung spiegelt `temporalTitle` und verwendet stets die
 * überlieferte (1962er) Zählung, da alle importierten Formulare 1962 sind.
 * Rückgabe ist ein *Kandidat* – die Existenz wird in der Registry geprüft.
 */
function temporalFormularyId(d: Date, m: Movable): string | undefined {
  if (d.getDay() !== 0) return undefined // nur Sonntagsformulare (…-0)
  const year = d.getFullYear()
  const christmas = new Date(year, 11, 25)

  // Advent (Adv1–Adv4)
  if (d >= m.adventThisYear && d < christmas) {
    const n = Math.floor(diffDays(d, m.adventThisYear) / 7) + 1
    return `do-Adv${n}-0`
  }
  // Weihnachtszeit – Sonntag in der Weihnachtsoktav (Nat1)
  if (d >= christmas || d < new Date(year, 0, 6)) return 'do-Nat1-0'
  // Vorfastenzeit / Septuagesima (Quadp1–Quadp3)
  if (d >= m.septuagesima && d < m.ashWed) {
    const n = Math.floor(diffDays(d, m.septuagesima) / 7) + 1
    return `do-Quadp${n}-0`
  }
  // Fasten- & Passionssonntage (Quad1–Quad6; Passion=5, Palm=6)
  if (d >= m.ashWed && d < m.easter) {
    const n = Math.floor(diffDays(d, addDays(m.ashWed, 4)) / 7) + 1
    return `do-Quad${n}-0`
  }
  // Osterzeit (Pasc0=Ostern, Pasc1=Weißer Sonntag …)
  if (d >= m.easter && d <= m.pentecost) {
    const n = Math.floor(diffDays(d, m.easter) / 7) + 1
    return `do-Pasc${n - 1}-0`
  }
  // Zeit nach Erscheinung (Epi1–Epi6)
  if (d < m.septuagesima) {
    const n = Math.max(1, Math.floor(diffDays(d, addDays(new Date(year, 0, 6), 1)) / 7) + 1)
    return `do-Epi${n}-0`
  }
  // Zeit nach Pfingsten (Pent01–Pent24, zweistellig)
  const n = Math.floor(diffDays(d, m.pentecost) / 7)
  if (n >= 1) return `do-Pent${String(n).padStart(2, '0')}-0`
  return undefined
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
