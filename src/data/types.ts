// Oremus – Domänen-Datenmodell für Liturgie und Stundenbuch.
// Bewusst schlank und generisch gehalten, damit Inhalte (jeder Tag,
// jedes Fest, Neumen) schrittweise – u.a. aus Divinum Officium – ergänzt
// werden können. Siehe docs/content-model.md und docs/divinum-officium-import.md.

/** Anzeigemodus der Sprache. */
export type LanguageMode = 'la' | 'de' | 'both'

/** Liturgische Form. */
export type LiturgicalForm = '1962' | 'novusOrdo'

/** Zweisprachiger Text (Latein / Deutsch). Beide optional, damit z.B.
 *  reine Rubriken oder rein deutsche Lesungen möglich sind. */
export interface BilingualText {
  la?: string
  de?: string
}

/**
 * Gesang-Information eines Abschnitts. `chantable` markiert, dass der
 * Abschnitt gesungen werden KANN; ob er tatsächlich gesungen wird, steuert
 * der Nutzer über die Einstellungen. `gabc` ist die Neumen-Quelle im
 * Gregorio-Format (später via exsurge.js darstellbar) – vorerst optional.
 */
export interface ChantInfo {
  chantable: boolean
  /** Kirchentonart, z.B. "VIII" oder "I". */
  mode?: string
  /** GABC-Quelle für die Neumen (später). */
  gabc?: string
}

/**
 * Ein einzelner Abschnitt einer Feier (Messe oder Hore), z.B. Introitus,
 * Kyrie, Lesung, Evangelium. Aus einer geordneten Folge solcher Abschnitte
 * komponiert der Renderer einen nahtlosen Ablauf.
 */
export interface LiturgicalSection {
  id: string
  /** Überschrift / Rubriktitel des Abschnitts. */
  title: BilingualText
  /** Fester Bestandteil (Ordinarium) oder Tagestext (Proprium). */
  kind: 'ordinarium' | 'proprium'
  /** Der eigentliche Text. */
  text: BilingualText
  /** Kurze Regieanweisung / Rubrik (rot dargestellt). */
  rubric?: BilingualText
  /** Quellenangabe, z.B. "Ps 42" oder "Joh 3,16". */
  reference?: BilingualText
  /** Falls der Abschnitt gesungen werden kann. */
  chant?: ChantInfo
}

/** Referenz auf einen liturgischen Tag / ein Formular. */
export interface LiturgicalDayRef {
  /** Anzeigename, z.B. "Dominica – vom Sonntag". */
  title: BilingualText
  /** Liturgische Farbe. */
  color?: 'green' | 'violet' | 'red' | 'white' | 'rose' | 'black'
  /** Rang/Klasse, z.B. "II. Klasse" bzw. "Gebotener Gedenktag". */
  rank?: string
}

/** Ein vollständiges Messformular (Ordinarium + Proprium des Tages). */
export interface MassFormulary {
  id: string
  form: LiturgicalForm
  day: LiturgicalDayRef
  /** Geordnete Abfolge der Messteile. */
  sections: LiturgicalSection[]
  /** Hinweis zur Herkunft/Lizenz der Texte. */
  note?: string
}

/** Namen der Horen des Stundengebets. */
export type HourId =
  | 'matutin'
  | 'laudes'
  | 'prim'
  | 'terz'
  | 'sext'
  | 'non'
  | 'vesper'
  | 'komplet'
  | 'lesehore'
  | 'mittagshore'

/** Eine Hore des Breviers/Stundenbuchs. */
export interface Hour {
  id: string
  form: LiturgicalForm
  hour: HourId
  name: BilingualText
  day: LiturgicalDayRef
  sections: LiturgicalSection[]
  note?: string
}

/** Rosenkranz. */
export interface RosaryMystery {
  id: string
  /** Der Geheimnis-Einschub ins Ave Maria (lateinischer Rosenkranz + Deutsch). */
  clause: BilingualText
  /** Name des Geheimnisses, z.B. „Annuntiatio" / „Verkündigung des Herrn". */
  name: BilingualText
  /** Bibelstellen-Angabe (Buch/Kapitel/Vers), z.B. „Lk 1,26–38". */
  ref?: string
  /** Vollständiger Text der Bibelstelle (Vulgata / gemeinfreie Allioli-Übersetzung). */
  passage: BilingualText
}

export interface RosarySet {
  id: string
  title: BilingualText
  /** Wochentage, an denen dieser Satz üblich ist. */
  days: BilingualText
  mysteries: RosaryMystery[]
}

/** Einzelnes Gebet. */
export interface Prayer {
  id: string
  title: BilingualText
  text: BilingualText
  rubric?: BilingualText
}

/** Novene über neun Tage. */
export interface NovenaDay {
  day: number
  title: BilingualText
  meditation: BilingualText
  prayer: BilingualText
}

export interface Novena {
  id: string
  title: BilingualText
  intro: BilingualText
  /** Gebet, das an jedem Tag gebetet wird. */
  dailyPrayer: Prayer
  days: NovenaDay[]
}
