// Vollständiges Sanktorale des römischen Kalenders (Calendarium Romanum 1962).
// Für (fast) jeden Tag des Jahres das Fest bzw. den Heiligen mit Rangklasse,
// liturgischer Farbe und lateinischem/deutschem Namen. Kommemorationen (an
// höheren Festen nur „gedacht") stehen als `comm` beim Hauptfest.
//
// Rangklassen der Rubriken von 1960:
//   1 = I. Klasse (Hochfest)   2 = II. Klasse (Fest)
//   3 = III. Klasse (Gedenktag) 4 = IV. Klasse / Kommemoration
//
// Bewegliche Hochfeste (Ostern, Fronleichnam …) und der zeitliche Festkreis
// (Sonntage, Ferien) werden weiterhin in liturgicalCalendar.ts berechnet; hier
// steht ausschließlich der feste Jahreskreis der Heiligen.
import type { SeasonColor } from './calendar'

export interface Commemoration {
  la: string
  de: string
}

export interface SanctoraleEntry {
  /** Monat 1–12. */
  m: number
  /** Tag im Monat. */
  d: number
  /** Rangklasse (1 = I. Klasse … 4 = Kommemoration). */
  cls: 1 | 2 | 3 | 4
  /** Liturgische Farbe. */
  color: SeasonColor
  /** Lateinischer Name. */
  la: string
  /** Deutscher Name. */
  de: string
  /** Gedächtnisse, die am selben Tag mitgefeiert werden. */
  comm?: Commemoration[]
  /** Vigil (violett) – vor einem Hochfest. */
  vigil?: boolean
}

// ---------------------------------------------------------------------------
// Januar
// ---------------------------------------------------------------------------
const JANUARY: SanctoraleEntry[] = [
  { m: 1, d: 1, cls: 1, color: 'white', la: 'In Circumcisione Domini', de: 'Beschneidung des Herrn' },
  { m: 1, d: 5, cls: 4, color: 'white', la: 'Vigilia Epiphaniæ', de: 'Vigil von Erscheinung', vigil: true },
  { m: 1, d: 6, cls: 1, color: 'white', la: 'In Epiphania Domini', de: 'Erscheinung des Herrn' },
  { m: 1, d: 13, cls: 2, color: 'white', la: 'Commemoratio Baptismatis D.N.I.C.', de: 'Taufe des Herrn' },
  { m: 1, d: 14, cls: 3, color: 'white', la: 'S. Hilarii ep. conf. doct.', de: 'Hl. Hilarius', comm: [{ la: 'S. Felicis mart.', de: 'Hl. Felix' }] },
  { m: 1, d: 15, cls: 3, color: 'white', la: 'S. Pauli primi eremitæ conf.', de: 'Hl. Paulus der Einsiedler', comm: [{ la: 'S. Mauri abb.', de: 'Hl. Maurus' }] },
  { m: 1, d: 16, cls: 3, color: 'red', la: 'S. Marcelli I papæ mart.', de: 'Hl. Papst Marcellus I.' },
  { m: 1, d: 17, cls: 3, color: 'white', la: 'S. Antonii abbatis', de: 'Hl. Antonius der Große' },
  { m: 1, d: 18, cls: 4, color: 'red', la: 'S. Priscæ virg. mart.', de: 'Hl. Prisca' },
  { m: 1, d: 19, cls: 4, color: 'red', la: 'Ss. Marii, Marthæ et soc. mart.', de: 'Hll. Marius u. Gefährten', comm: [{ la: 'S. Canuti regis mart.', de: 'Hl. König Knut' }] },
  { m: 1, d: 20, cls: 3, color: 'red', la: 'Ss. Fabiani papæ et Sebastiani mart.', de: 'Hll. Fabian u. Sebastian' },
  { m: 1, d: 21, cls: 3, color: 'red', la: 'S. Agnetis virg. mart.', de: 'Hl. Agnes' },
  { m: 1, d: 22, cls: 3, color: 'red', la: 'Ss. Vincentii et Anastasii mart.', de: 'Hll. Vinzenz u. Anastasius' },
  { m: 1, d: 23, cls: 3, color: 'white', la: 'S. Raymundi de Peñafort conf.', de: 'Hl. Raimund von Peñafort', comm: [{ la: 'S. Emerentianæ virg. mart.', de: 'Hl. Emerentiana' }] },
  { m: 1, d: 24, cls: 3, color: 'red', la: 'S. Timothei ep. mart.', de: 'Hl. Timotheus' },
  { m: 1, d: 25, cls: 3, color: 'white', la: 'In Conversione S. Pauli ap.', de: 'Bekehrung des hl. Paulus', comm: [{ la: 'S. Petri ap.', de: 'Hl. Petrus' }] },
  { m: 1, d: 26, cls: 3, color: 'red', la: 'S. Polycarpi ep. mart.', de: 'Hl. Polykarp' },
  { m: 1, d: 27, cls: 3, color: 'white', la: 'S. Ioannis Chrysostomi ep. conf. doct.', de: 'Hl. Johannes Chrysostomus' },
  { m: 1, d: 28, cls: 3, color: 'white', la: 'S. Petri Nolasci conf.', de: 'Hl. Petrus Nolascus', comm: [{ la: 'S. Agnetis secundo', de: 'Hl. Agnes (zweites Fest)' }] },
  { m: 1, d: 29, cls: 3, color: 'white', la: 'S. Francisci Salesii ep. conf. doct.', de: 'Hl. Franz von Sales' },
  { m: 1, d: 30, cls: 3, color: 'red', la: 'S. Martinæ virg. mart.', de: 'Hl. Martina' },
  { m: 1, d: 31, cls: 3, color: 'white', la: 'S. Ioannis Bosco conf.', de: 'Hl. Johannes Bosco' },
]

// ---------------------------------------------------------------------------
// Februar
// ---------------------------------------------------------------------------
const FEBRUARY: SanctoraleEntry[] = [
  { m: 2, d: 1, cls: 3, color: 'red', la: 'S. Ignatii ep. mart.', de: 'Hl. Ignatius von Antiochien' },
  { m: 2, d: 2, cls: 2, color: 'white', la: 'In Purificatione B.M.V.', de: 'Darstellung des Herrn (Lichtmess)' },
  { m: 2, d: 3, cls: 4, color: 'red', la: 'S. Blasii ep. mart.', de: 'Hl. Blasius' },
  { m: 2, d: 4, cls: 3, color: 'white', la: 'S. Andreæ Corsini ep. conf.', de: 'Hl. Andreas Corsini' },
  { m: 2, d: 5, cls: 3, color: 'red', la: 'S. Agathæ virg. mart.', de: 'Hl. Agatha' },
  { m: 2, d: 6, cls: 3, color: 'white', la: 'S. Titi ep. conf.', de: 'Hl. Titus', comm: [{ la: 'S. Dorotheæ virg. mart.', de: 'Hl. Dorothea' }] },
  { m: 2, d: 7, cls: 3, color: 'white', la: 'S. Romualdi abbatis', de: 'Hl. Romuald' },
  { m: 2, d: 8, cls: 3, color: 'white', la: 'S. Ioannis de Matha conf.', de: 'Hl. Johannes von Matha' },
  { m: 2, d: 9, cls: 3, color: 'white', la: 'S. Cyrilli Alexandrini ep. conf. doct.', de: 'Hl. Cyrill von Alexandrien', comm: [{ la: 'S. Apolloniæ virg. mart.', de: 'Hl. Apollonia' }] },
  { m: 2, d: 10, cls: 3, color: 'white', la: 'S. Scholasticæ virg.', de: 'Hl. Scholastika' },
  { m: 2, d: 11, cls: 3, color: 'white', la: 'In Apparitione B.M.V. Immaculatæ', de: 'Erscheinung der Gottesmutter (Lourdes)' },
  { m: 2, d: 12, cls: 3, color: 'white', la: 'Ss. Septem Fundatorum Ordinis Servorum B.M.V.', de: 'Hll. Sieben Gründer des Servitenordens' },
  { m: 2, d: 14, cls: 4, color: 'red', la: 'S. Valentini presb. mart.', de: 'Hl. Valentin' },
  { m: 2, d: 15, cls: 4, color: 'red', la: 'Ss. Faustini et Iovitæ mart.', de: 'Hll. Faustinus u. Jovita' },
  { m: 2, d: 18, cls: 4, color: 'red', la: 'S. Simeonis ep. mart.', de: 'Hl. Simeon' },
  { m: 2, d: 22, cls: 2, color: 'white', la: 'In Cathedra S. Petri ap.', de: 'Kathedra Petri' },
  { m: 2, d: 23, cls: 3, color: 'white', la: 'S. Petri Damiani ep. conf. doct.', de: 'Hl. Petrus Damiani' },
  { m: 2, d: 24, cls: 2, color: 'red', la: 'S. Matthiæ ap.', de: 'Hl. Apostel Matthias' },
  { m: 2, d: 27, cls: 3, color: 'white', la: 'S. Gabrielis a Virgine Perdolente conf.', de: 'Hl. Gabriel von der schmerzhaften Mutter' },
]

// ---------------------------------------------------------------------------
// März
// ---------------------------------------------------------------------------
const MARCH: SanctoraleEntry[] = [
  { m: 3, d: 4, cls: 3, color: 'white', la: 'S. Casimiri conf.', de: 'Hl. Kasimir', comm: [{ la: 'S. Lucii I papæ mart.', de: 'Hl. Papst Lucius I.' }] },
  { m: 3, d: 6, cls: 3, color: 'red', la: 'Ss. Perpetuæ et Felicitatis mart.', de: 'Hll. Perpetua u. Felizitas' },
  { m: 3, d: 7, cls: 3, color: 'white', la: 'S. Thomæ de Aquino conf. doct.', de: 'Hl. Thomas von Aquin' },
  { m: 3, d: 8, cls: 3, color: 'white', la: 'S. Ioannis de Deo conf.', de: 'Hl. Johannes von Gott' },
  { m: 3, d: 9, cls: 3, color: 'white', la: 'S. Franciscæ Romanæ vid.', de: 'Hl. Franziska von Rom' },
  { m: 3, d: 10, cls: 3, color: 'red', la: 'Ss. Quadraginta Martyrum', de: 'Vierzig Märtyrer von Sebaste' },
  { m: 3, d: 12, cls: 3, color: 'white', la: 'S. Gregorii I papæ conf. doct.', de: 'Hl. Papst Gregor der Große' },
  { m: 3, d: 17, cls: 3, color: 'white', la: 'S. Patricii ep. conf.', de: 'Hl. Patrick' },
  { m: 3, d: 18, cls: 3, color: 'white', la: 'S. Cyrilli Hierosolymitani ep. conf. doct.', de: 'Hl. Cyrill von Jerusalem' },
  { m: 3, d: 19, cls: 1, color: 'white', la: 'S. Ioseph Sponsi B.M.V.', de: 'Hl. Josef, Bräutigam Mariens' },
  { m: 3, d: 21, cls: 3, color: 'white', la: 'S. Benedicti abbatis', de: 'Hl. Benedikt' },
  { m: 3, d: 24, cls: 3, color: 'white', la: 'S. Gabrielis Archangeli', de: 'Hl. Erzengel Gabriel' },
  { m: 3, d: 25, cls: 1, color: 'white', la: 'In Annuntiatione B.M.V.', de: 'Verkündigung des Herrn' },
  { m: 3, d: 27, cls: 3, color: 'white', la: 'S. Ioannis Damasceni conf. doct.', de: 'Hl. Johannes von Damaskus' },
  { m: 3, d: 28, cls: 3, color: 'white', la: 'S. Ioannis a Capistrano conf.', de: 'Hl. Johannes von Capestrano' },
]

// ---------------------------------------------------------------------------
// April
// ---------------------------------------------------------------------------
const APRIL: SanctoraleEntry[] = [
  { m: 4, d: 2, cls: 3, color: 'white', la: 'S. Francisci de Paula conf.', de: 'Hl. Franz von Paola' },
  { m: 4, d: 4, cls: 3, color: 'white', la: 'S. Isidori ep. conf. doct.', de: 'Hl. Isidor von Sevilla' },
  { m: 4, d: 5, cls: 3, color: 'white', la: 'S. Vincentii Ferrerii conf.', de: 'Hl. Vinzenz Ferrer' },
  { m: 4, d: 11, cls: 3, color: 'white', la: 'S. Leonis I papæ conf. doct.', de: 'Hl. Papst Leo der Große' },
  { m: 4, d: 13, cls: 3, color: 'red', la: 'S. Hermenegildi mart.', de: 'Hl. Hermenegild' },
  { m: 4, d: 14, cls: 3, color: 'red', la: 'S. Iustini mart.', de: 'Hl. Justin der Märtyrer', comm: [{ la: 'Ss. Tiburtii, Valeriani et Maximi mart.', de: 'Hll. Tiburtius, Valerian u. Maximus' }] },
  { m: 4, d: 17, cls: 4, color: 'red', la: 'S. Aniceti papæ mart.', de: 'Hl. Papst Anicetus' },
  { m: 4, d: 21, cls: 3, color: 'white', la: 'S. Anselmi ep. conf. doct.', de: 'Hl. Anselm von Canterbury' },
  { m: 4, d: 22, cls: 3, color: 'red', la: 'Ss. Soteris et Caii paparum mart.', de: 'Hll. Päpste Soter u. Cajus' },
  { m: 4, d: 23, cls: 4, color: 'red', la: 'S. Georgii mart.', de: 'Hl. Georg' },
  { m: 4, d: 24, cls: 3, color: 'red', la: 'S. Fidelis a Sigmaringen mart.', de: 'Hl. Fidelis von Sigmaringen' },
  { m: 4, d: 25, cls: 2, color: 'red', la: 'S. Marci Evangelistæ', de: 'Hl. Evangelist Markus' },
  { m: 4, d: 26, cls: 3, color: 'red', la: 'Ss. Cleti et Marcellini paparum mart.', de: 'Hll. Päpste Kletus u. Marcellinus' },
  { m: 4, d: 27, cls: 3, color: 'white', la: 'S. Petri Canisii conf. doct.', de: 'Hl. Petrus Canisius' },
  { m: 4, d: 28, cls: 3, color: 'white', la: 'S. Pauli a Cruce conf.', de: 'Hl. Paul vom Kreuz', comm: [{ la: 'S. Vitalis mart.', de: 'Hl. Vitalis' }] },
  { m: 4, d: 29, cls: 3, color: 'red', la: 'S. Petri mart.', de: 'Hl. Petrus von Verona' },
  { m: 4, d: 30, cls: 3, color: 'white', la: 'S. Catharinæ Senensis virg.', de: 'Hl. Katharina von Siena' },
]

// ---------------------------------------------------------------------------
// Mai
// ---------------------------------------------------------------------------
const MAY: SanctoraleEntry[] = [
  { m: 5, d: 1, cls: 1, color: 'white', la: 'S. Ioseph Opificis', de: 'Hl. Josef der Arbeiter' },
  { m: 5, d: 2, cls: 3, color: 'white', la: 'S. Athanasii ep. conf. doct.', de: 'Hl. Athanasius' },
  { m: 5, d: 3, cls: 4, color: 'red', la: 'Ss. Alexandri et soc. mart.', de: 'Hll. Alexander u. Gefährten' },
  { m: 5, d: 4, cls: 3, color: 'white', la: 'S. Monicæ vid.', de: 'Hl. Monika' },
  { m: 5, d: 5, cls: 3, color: 'white', la: 'S. Pii V papæ conf.', de: 'Hl. Papst Pius V.' },
  { m: 5, d: 7, cls: 3, color: 'red', la: 'S. Stanislai ep. mart.', de: 'Hl. Stanislaus' },
  { m: 5, d: 9, cls: 3, color: 'white', la: 'S. Gregorii Nazianzeni ep. conf. doct.', de: 'Hl. Gregor von Nazianz' },
  { m: 5, d: 10, cls: 3, color: 'white', la: 'S. Antonini ep. conf.', de: 'Hl. Antoninus von Florenz', comm: [{ la: 'Ss. Gordiani et Epimachi mart.', de: 'Hll. Gordianus u. Epimachus' }] },
  { m: 5, d: 11, cls: 2, color: 'red', la: 'Ss. Philippi et Iacobi app.', de: 'Hll. Apostel Philippus u. Jakobus' },
  { m: 5, d: 12, cls: 3, color: 'red', la: 'Ss. Nerei, Achillei, Domitillæ et Pancratii mart.', de: 'Hll. Nereus, Achilleus, Domitilla u. Pankratius' },
  { m: 5, d: 13, cls: 3, color: 'white', la: 'S. Roberti Bellarmino ep. conf. doct.', de: 'Hl. Robert Bellarmin' },
  { m: 5, d: 14, cls: 4, color: 'red', la: 'S. Bonifatii mart.', de: 'Hl. Bonifatius (Märtyrer)' },
  { m: 5, d: 15, cls: 3, color: 'white', la: 'S. Ioannis Baptistæ de la Salle conf.', de: 'Hl. Johannes Baptist de la Salle' },
  { m: 5, d: 16, cls: 3, color: 'white', la: 'S. Ubaldi ep. conf.', de: 'Hl. Ubald' },
  { m: 5, d: 17, cls: 3, color: 'white', la: 'S. Paschalis Baylon conf.', de: 'Hl. Paschalis Baylon' },
  { m: 5, d: 18, cls: 3, color: 'red', la: 'S. Venantii mart.', de: 'Hl. Venantius' },
  { m: 5, d: 19, cls: 3, color: 'white', la: 'S. Petri Cælestini papæ conf.', de: 'Hl. Papst Coelestin V.', comm: [{ la: 'S. Pudentianæ virg.', de: 'Hl. Pudentiana' }] },
  { m: 5, d: 20, cls: 3, color: 'white', la: 'S. Bernardini Senensis conf.', de: 'Hl. Bernhardin von Siena' },
  { m: 5, d: 25, cls: 3, color: 'white', la: 'S. Gregorii VII papæ conf.', de: 'Hl. Papst Gregor VII.', comm: [{ la: 'S. Urbani I papæ mart.', de: 'Hl. Papst Urban I.' }] },
  { m: 5, d: 26, cls: 3, color: 'white', la: 'S. Philippi Nerii conf.', de: 'Hl. Philipp Neri', comm: [{ la: 'S. Eleutherii papæ mart.', de: 'Hl. Papst Eleutherius' }] },
  { m: 5, d: 27, cls: 3, color: 'white', la: 'S. Bedæ Venerabilis conf. doct.', de: 'Hl. Beda Venerabilis', comm: [{ la: 'S. Ioannis I papæ mart.', de: 'Hl. Papst Johannes I.' }] },
  { m: 5, d: 28, cls: 3, color: 'white', la: 'S. Augustini Cantuariensis ep. conf.', de: 'Hl. Augustinus von Canterbury' },
  { m: 5, d: 29, cls: 3, color: 'white', la: 'S. Mariæ Magdalenæ de Pazzis virg.', de: 'Hl. Maria Magdalena von Pazzi' },
  { m: 5, d: 30, cls: 4, color: 'red', la: 'S. Felicis I papæ mart.', de: 'Hl. Papst Felix I.' },
  { m: 5, d: 31, cls: 2, color: 'white', la: 'B.M.V. Reginæ', de: 'Maria Königin', comm: [{ la: 'S. Petronillæ virg.', de: 'Hl. Petronilla' }] },
]

// ---------------------------------------------------------------------------
// Juni
// ---------------------------------------------------------------------------
const JUNE: SanctoraleEntry[] = [
  { m: 6, d: 1, cls: 3, color: 'white', la: 'S. Angelæ Mericiæ virg.', de: 'Hl. Angela Merici' },
  { m: 6, d: 2, cls: 4, color: 'red', la: 'Ss. Marcellini, Petri et Erasmi mart.', de: 'Hll. Marcellinus, Petrus u. Erasmus' },
  { m: 6, d: 4, cls: 3, color: 'white', la: 'S. Francisci Caracciolo conf.', de: 'Hl. Franz Caracciolo' },
  { m: 6, d: 5, cls: 3, color: 'red', la: 'S. Bonifatii ep. mart.', de: 'Hl. Bonifatius, Bischof' },
  { m: 6, d: 6, cls: 3, color: 'white', la: 'S. Norberti ep. conf.', de: 'Hl. Norbert' },
  { m: 6, d: 9, cls: 4, color: 'red', la: 'Ss. Primi et Feliciani mart.', de: 'Hll. Primus u. Felicianus' },
  { m: 6, d: 10, cls: 3, color: 'white', la: 'S. Margaritæ reginæ vid.', de: 'Hl. Königin Margareta von Schottland' },
  { m: 6, d: 11, cls: 3, color: 'red', la: 'S. Barnabæ ap.', de: 'Hl. Apostel Barnabas' },
  { m: 6, d: 12, cls: 3, color: 'white', la: 'S. Ioannis a S. Facundo conf.', de: 'Hl. Johannes von Sahagún', comm: [{ la: 'Ss. Basilidis, Cyrini, Naboris et Nazarii mart.', de: 'Hll. Basilides u. Gefährten' }] },
  { m: 6, d: 13, cls: 3, color: 'white', la: 'S. Antonii de Padua conf. doct.', de: 'Hl. Antonius von Padua' },
  { m: 6, d: 14, cls: 3, color: 'white', la: 'S. Basilii Magni ep. conf. doct.', de: 'Hl. Basilius der Große' },
  { m: 6, d: 15, cls: 4, color: 'red', la: 'Ss. Viti, Modesti et Crescentiæ mart.', de: 'Hll. Vitus, Modestus u. Crescentia' },
  { m: 6, d: 18, cls: 3, color: 'white', la: 'S. Ephræm Syri conf. doct.', de: 'Hl. Ephräm der Syrer', comm: [{ la: 'Ss. Marci et Marcelliani mart.', de: 'Hll. Markus u. Marcellianus' }] },
  { m: 6, d: 19, cls: 3, color: 'white', la: 'S. Iulianæ de Falconeriis virg.', de: 'Hl. Juliana Falconieri', comm: [{ la: 'Ss. Gervasii et Protasii mart.', de: 'Hll. Gervasius u. Protasius' }] },
  { m: 6, d: 20, cls: 4, color: 'red', la: 'S. Silverii papæ mart.', de: 'Hl. Papst Silverius' },
  { m: 6, d: 21, cls: 3, color: 'white', la: 'S. Aloisii Gonzagæ conf.', de: 'Hl. Aloisius von Gonzaga' },
  { m: 6, d: 22, cls: 3, color: 'white', la: 'S. Paulini ep. conf.', de: 'Hl. Paulinus von Nola' },
  { m: 6, d: 23, cls: 4, color: 'violet', la: 'Vigilia S. Ioannis Bapt.', de: 'Vigil der Geburt Johannes des Täufers', vigil: true },
  { m: 6, d: 24, cls: 1, color: 'white', la: 'In Nativitate S. Ioannis Baptistæ', de: 'Geburt Johannes des Täufers' },
  { m: 6, d: 25, cls: 3, color: 'white', la: 'S. Gulielmi abbatis', de: 'Hl. Wilhelm von Vercelli' },
  { m: 6, d: 26, cls: 3, color: 'red', la: 'Ss. Ioannis et Pauli mart.', de: 'Hll. Johannes u. Paulus' },
  { m: 6, d: 28, cls: 3, color: 'red', la: 'S. Irenæi ep. mart.', de: 'Hl. Irenäus von Lyon', comm: [{ la: 'Vigilia Ss. Petri et Pauli', de: 'Vigil der Apostel Petrus u. Paulus' }] },
  { m: 6, d: 29, cls: 1, color: 'red', la: 'Ss. Petri et Pauli app.', de: 'Hll. Apostel Petrus u. Paulus' },
  { m: 6, d: 30, cls: 3, color: 'red', la: 'In Commemoratione S. Pauli ap.', de: 'Gedächtnis des hl. Paulus', comm: [{ la: 'S. Petri ap.', de: 'Hl. Petrus' }] },
]

// ---------------------------------------------------------------------------
// Juli
// ---------------------------------------------------------------------------
const JULY: SanctoraleEntry[] = [
  { m: 7, d: 1, cls: 1, color: 'red', la: 'Pretiosissimi Sanguinis D.N.I.C.', de: 'Kostbares Blut Christi' },
  { m: 7, d: 2, cls: 2, color: 'white', la: 'In Visitatione B.M.V.', de: 'Mariä Heimsuchung', comm: [{ la: 'Ss. Processi et Martiniani mart.', de: 'Hll. Prozessus u. Martinianus' }] },
  { m: 7, d: 3, cls: 3, color: 'white', la: 'S. Leonis II papæ conf.', de: 'Hl. Papst Leo II.' },
  { m: 7, d: 5, cls: 3, color: 'white', la: 'S. Antonii Mariæ Zaccaria conf.', de: 'Hl. Antonius Maria Zaccaria' },
  { m: 7, d: 7, cls: 3, color: 'white', la: 'Ss. Cyrilli et Methodii ep. conf.', de: 'Hll. Cyrill u. Method' },
  { m: 7, d: 8, cls: 3, color: 'white', la: 'S. Elisabeth reginæ vid.', de: 'Hl. Königin Elisabeth von Portugal' },
  { m: 7, d: 10, cls: 3, color: 'red', la: 'Ss. Septem Fratrum mart. ac Rufinæ et Secundæ virg. mart.', de: 'Sieben Brüder u. Hll. Rufina u. Secunda' },
  { m: 7, d: 11, cls: 4, color: 'red', la: 'S. Pii I papæ mart.', de: 'Hl. Papst Pius I.' },
  { m: 7, d: 12, cls: 3, color: 'white', la: 'S. Ioannis Gualberti abbatis', de: 'Hl. Johannes Gualbert', comm: [{ la: 'Ss. Naboris et Felicis mart.', de: 'Hll. Nabor u. Felix' }] },
  { m: 7, d: 14, cls: 3, color: 'white', la: 'S. Bonaventuræ ep. conf. doct.', de: 'Hl. Bonaventura' },
  { m: 7, d: 15, cls: 3, color: 'white', la: 'S. Henrici imp. conf.', de: 'Hl. Kaiser Heinrich' },
  { m: 7, d: 16, cls: 3, color: 'white', la: 'B.M.V. de Monte Carmelo', de: 'Unsere Liebe Frau vom Berge Karmel' },
  { m: 7, d: 17, cls: 4, color: 'white', la: 'S. Alexii conf.', de: 'Hl. Alexius' },
  { m: 7, d: 18, cls: 3, color: 'white', la: 'S. Camilli de Lellis conf.', de: 'Hl. Kamillus von Lellis', comm: [{ la: 'Ss. Symphorosæ et septem filiorum mart.', de: 'Hl. Symphorosa u. ihre Söhne' }] },
  { m: 7, d: 19, cls: 3, color: 'white', la: 'S. Vincentii a Paulo conf.', de: 'Hl. Vinzenz von Paul' },
  { m: 7, d: 20, cls: 3, color: 'white', la: 'S. Hieronymi Æmiliani conf.', de: 'Hl. Hieronymus Ämiliani', comm: [{ la: 'S. Margaritæ virg. mart.', de: 'Hl. Margareta' }] },
  { m: 7, d: 21, cls: 3, color: 'white', la: 'S. Laurentii de Brundusio conf. doct.', de: 'Hl. Laurentius von Brindisi', comm: [{ la: 'S. Praxedis virg.', de: 'Hl. Praxedis' }] },
  { m: 7, d: 22, cls: 3, color: 'white', la: 'S. Mariæ Magdalenæ pænit.', de: 'Hl. Maria Magdalena' },
  { m: 7, d: 23, cls: 3, color: 'red', la: 'S. Apollinaris ep. mart.', de: 'Hl. Apollinaris', comm: [{ la: 'S. Liborii ep. conf.', de: 'Hl. Liborius' }] },
  { m: 7, d: 24, cls: 4, color: 'red', la: 'S. Christinæ virg. mart.', de: 'Hl. Christina', comm: [{ la: 'Vigilia S. Iacobi', de: 'Vigil des hl. Jakobus' }] },
  { m: 7, d: 25, cls: 2, color: 'red', la: 'S. Iacobi ap.', de: 'Hl. Apostel Jakobus d. Ä.', comm: [{ la: 'S. Christophori mart.', de: 'Hl. Christophorus' }] },
  { m: 7, d: 26, cls: 2, color: 'white', la: 'S. Annæ matris B.M.V.', de: 'Hl. Anna, Mutter Mariens' },
  { m: 7, d: 27, cls: 4, color: 'red', la: 'S. Pantaleonis mart.', de: 'Hl. Pantaleon' },
  { m: 7, d: 28, cls: 3, color: 'red', la: 'Ss. Nazarii et Celsi, Victoris I et Innocentii I mart.', de: 'Hll. Nazarius, Celsus, Viktor I. u. Innozenz I.' },
  { m: 7, d: 29, cls: 3, color: 'white', la: 'S. Marthæ virg.', de: 'Hl. Martha', comm: [{ la: 'Ss. Felicis, Simplicii et soc. mart.', de: 'Hll. Felix, Simplicius u. Gefährten' }] },
  { m: 7, d: 30, cls: 4, color: 'red', la: 'Ss. Abdon et Sennen mart.', de: 'Hll. Abdon u. Sennen' },
  { m: 7, d: 31, cls: 3, color: 'white', la: 'S. Ignatii de Loyola conf.', de: 'Hl. Ignatius von Loyola' },
]

// ---------------------------------------------------------------------------
// August
// ---------------------------------------------------------------------------
const AUGUST: SanctoraleEntry[] = [
  { m: 8, d: 1, cls: 4, color: 'red', la: 'Ss. Machabæorum mart.', de: 'Hll. Makkabäer' },
  { m: 8, d: 2, cls: 3, color: 'white', la: 'S. Alfonsi Mariæ de Ligorio ep. conf. doct.', de: 'Hl. Alfons von Liguori', comm: [{ la: 'S. Stephani I papæ mart.', de: 'Hl. Papst Stephan I.' }] },
  { m: 8, d: 4, cls: 3, color: 'white', la: 'S. Dominici conf.', de: 'Hl. Dominikus' },
  { m: 8, d: 5, cls: 3, color: 'white', la: 'In Dedicatione S. Mariæ ad Nives', de: 'Maria Schnee (Weihe von S. Maria Maggiore)' },
  { m: 8, d: 6, cls: 2, color: 'white', la: 'In Transfiguratione D.N.I.C.', de: 'Verklärung des Herrn' },
  { m: 8, d: 7, cls: 3, color: 'white', la: 'S. Cajetani conf.', de: 'Hl. Kajetan', comm: [{ la: 'S. Donati ep. mart.', de: 'Hl. Donatus' }] },
  { m: 8, d: 8, cls: 3, color: 'white', la: 'S. Ioannis Mariæ Vianney conf.', de: 'Hl. Johannes Maria Vianney', comm: [{ la: 'Ss. Cyriaci, Largi et Smaragdi mart.', de: 'Hll. Cyriacus u. Gefährten' }] },
  { m: 8, d: 9, cls: 4, color: 'violet', la: 'Vigilia S. Laurentii', de: 'Vigil des hl. Laurentius', vigil: true, comm: [{ la: 'S. Romani mart.', de: 'Hl. Romanus' }] },
  { m: 8, d: 10, cls: 2, color: 'red', la: 'S. Laurentii mart.', de: 'Hl. Laurentius' },
  { m: 8, d: 11, cls: 4, color: 'red', la: 'Ss. Tiburtii et Susannæ mart.', de: 'Hll. Tiburtius u. Susanna' },
  { m: 8, d: 12, cls: 3, color: 'white', la: 'S. Claræ virg.', de: 'Hl. Klara' },
  { m: 8, d: 13, cls: 4, color: 'red', la: 'Ss. Hippolyti et Cassiani mart.', de: 'Hll. Hippolyt u. Cassian' },
  { m: 8, d: 14, cls: 3, color: 'violet', la: 'Vigilia Assumptionis B.M.V.', de: 'Vigil von Mariä Aufnahme', vigil: true, comm: [{ la: 'S. Eusebii conf.', de: 'Hl. Eusebius' }] },
  { m: 8, d: 15, cls: 1, color: 'white', la: 'In Assumptione B.M.V.', de: 'Mariä Aufnahme in den Himmel' },
  { m: 8, d: 16, cls: 3, color: 'white', la: 'S. Ioachim patris B.M.V. conf.', de: 'Hl. Joachim, Vater Mariens' },
  { m: 8, d: 17, cls: 3, color: 'white', la: 'S. Hyacinthi conf.', de: 'Hl. Hyazinth' },
  { m: 8, d: 18, cls: 4, color: 'red', la: 'S. Agapiti mart.', de: 'Hl. Agapitus' },
  { m: 8, d: 19, cls: 3, color: 'white', la: 'S. Ioannis Eudes conf.', de: 'Hl. Johannes Eudes' },
  { m: 8, d: 20, cls: 3, color: 'white', la: 'S. Bernardi abbatis conf. doct.', de: 'Hl. Bernhard von Clairvaux' },
  { m: 8, d: 21, cls: 3, color: 'white', la: 'S. Ioannæ Franciscæ Fremiot de Chantal vid.', de: 'Hl. Johanna Franziska von Chantal' },
  { m: 8, d: 22, cls: 2, color: 'white', la: 'Immaculati Cordis B.M.V.', de: 'Unbeflecktes Herz Mariens', comm: [{ la: 'Ss. Timothei, Hippolyti et Symphoriani mart.', de: 'Hll. Timotheus, Hippolyt u. Symphorian' }] },
  { m: 8, d: 23, cls: 3, color: 'white', la: 'S. Philippi Benitii conf.', de: 'Hl. Philipp Benizi' },
  { m: 8, d: 24, cls: 2, color: 'red', la: 'S. Bartholomæi ap.', de: 'Hl. Apostel Bartholomäus' },
  { m: 8, d: 25, cls: 3, color: 'white', la: 'S. Ludovici regis conf.', de: 'Hl. König Ludwig IX.' },
  { m: 8, d: 26, cls: 4, color: 'red', la: 'S. Zephyrini papæ mart.', de: 'Hl. Papst Zephyrinus' },
  { m: 8, d: 27, cls: 3, color: 'white', la: 'S. Ioseph Calasanctii conf.', de: 'Hl. Josef von Calasanz' },
  { m: 8, d: 28, cls: 3, color: 'white', la: 'S. Augustini ep. conf. doct.', de: 'Hl. Augustinus', comm: [{ la: 'S. Hermetis mart.', de: 'Hl. Hermes' }] },
  { m: 8, d: 29, cls: 3, color: 'red', la: 'In Decollatione S. Ioannis Bapt.', de: 'Enthauptung Johannes des Täufers', comm: [{ la: 'S. Sabinæ mart.', de: 'Hl. Sabina' }] },
  { m: 8, d: 30, cls: 3, color: 'white', la: 'S. Rosæ Limanæ virg.', de: 'Hl. Rosa von Lima', comm: [{ la: 'Ss. Felicis et Adaucti mart.', de: 'Hll. Felix u. Adauctus' }] },
  { m: 8, d: 31, cls: 3, color: 'white', la: 'S. Raymundi Nonnati conf.', de: 'Hl. Raimund Nonnatus' },
]

// ---------------------------------------------------------------------------
// September
// ---------------------------------------------------------------------------
const SEPTEMBER: SanctoraleEntry[] = [
  { m: 9, d: 1, cls: 4, color: 'white', la: 'S. Ægidii abbatis', de: 'Hl. Ägidius', comm: [{ la: 'Ss. duodecim Fratrum mart.', de: 'Zwölf heilige Brüder' }] },
  { m: 9, d: 2, cls: 3, color: 'white', la: 'S. Stephani regis conf.', de: 'Hl. König Stephan von Ungarn' },
  { m: 9, d: 3, cls: 3, color: 'white', la: 'S. Pii X papæ conf.', de: 'Hl. Papst Pius X.' },
  { m: 9, d: 5, cls: 3, color: 'white', la: 'S. Laurentii Iustiniani ep. conf.', de: 'Hl. Laurentius Justinian' },
  { m: 9, d: 8, cls: 2, color: 'white', la: 'In Nativitate B.M.V.', de: 'Mariä Geburt', comm: [{ la: 'S. Hadriani mart.', de: 'Hl. Hadrian' }] },
  { m: 9, d: 9, cls: 4, color: 'red', la: 'S. Gorgonii mart.', de: 'Hl. Gorgonius' },
  { m: 9, d: 10, cls: 3, color: 'white', la: 'S. Nicolai de Tolentino conf.', de: 'Hl. Nikolaus von Tolentino' },
  { m: 9, d: 11, cls: 4, color: 'red', la: 'Ss. Proti et Hyacinthi mart.', de: 'Hll. Protus u. Hyazinth' },
  { m: 9, d: 12, cls: 3, color: 'white', la: 'Ss.mi Nominis B.M.V.', de: 'Mariä Namen' },
  { m: 9, d: 14, cls: 2, color: 'red', la: 'In Exaltatione S. Crucis', de: 'Kreuzerhöhung' },
  { m: 9, d: 15, cls: 2, color: 'white', la: 'Septem Dolorum B.M.V.', de: 'Sieben Schmerzen Mariens', comm: [{ la: 'S. Nicomedis mart.', de: 'Hl. Nikomedes' }] },
  { m: 9, d: 16, cls: 3, color: 'red', la: 'Ss. Cornelii papæ et Cypriani ep. mart.', de: 'Hll. Cornelius u. Cyprian', comm: [{ la: 'Ss. Euphemiæ, Luciæ et Geminiani mart.', de: 'Hll. Euphemia, Lucia u. Geminianus' }] },
  { m: 9, d: 17, cls: 4, color: 'white', la: 'Impressionis Stigmatum S. Francisci', de: 'Wundmale des hl. Franziskus' },
  { m: 9, d: 18, cls: 3, color: 'white', la: 'S. Iosephi a Cupertino conf.', de: 'Hl. Josef von Copertino' },
  { m: 9, d: 19, cls: 3, color: 'red', la: 'Ss. Ianuarii ep. et soc. mart.', de: 'Hl. Januarius u. Gefährten' },
  { m: 9, d: 20, cls: 4, color: 'violet', la: 'Vigilia S. Matthæi', de: 'Vigil des hl. Matthäus', vigil: true, comm: [{ la: 'Ss. Eustachii et soc. mart.', de: 'Hll. Eustachius u. Gefährten' }] },
  { m: 9, d: 21, cls: 2, color: 'red', la: 'S. Matthæi ap. et Evang.', de: 'Hl. Apostel u. Evangelist Matthäus' },
  { m: 9, d: 22, cls: 3, color: 'white', la: 'S. Thomæ de Villanova ep. conf.', de: 'Hl. Thomas von Villanova', comm: [{ la: 'Ss. Mauritii et soc. mart.', de: 'Hl. Mauritius u. Gefährten' }] },
  { m: 9, d: 23, cls: 3, color: 'red', la: 'S. Lini papæ mart.', de: 'Hl. Papst Linus', comm: [{ la: 'S. Theclæ virg. mart.', de: 'Hl. Thekla' }] },
  { m: 9, d: 26, cls: 4, color: 'red', la: 'Ss. Cypriani et Iustinæ mart.', de: 'Hll. Cyprian u. Justina' },
  { m: 9, d: 27, cls: 3, color: 'red', la: 'Ss. Cosmæ et Damiani mart.', de: 'Hll. Kosmas u. Damian' },
  { m: 9, d: 28, cls: 3, color: 'red', la: 'S. Wenceslai ducis mart.', de: 'Hl. Herzog Wenzel' },
  { m: 9, d: 29, cls: 1, color: 'white', la: 'In Dedicatione S. Michaelis Archangeli', de: 'Weihe des hl. Erzengels Michael' },
  { m: 9, d: 30, cls: 3, color: 'white', la: 'S. Hieronymi conf. doct.', de: 'Hl. Hieronymus' },
]

// ---------------------------------------------------------------------------
// Oktober
// ---------------------------------------------------------------------------
const OCTOBER: SanctoraleEntry[] = [
  { m: 10, d: 1, cls: 4, color: 'white', la: 'S. Remigii ep. conf.', de: 'Hl. Remigius' },
  { m: 10, d: 2, cls: 3, color: 'white', la: 'Ss. Angelorum Custodum', de: 'Heilige Schutzengel' },
  { m: 10, d: 3, cls: 3, color: 'white', la: 'S. Teresiæ a Iesu Infante virg.', de: 'Hl. Therese vom Kinde Jesu' },
  { m: 10, d: 4, cls: 3, color: 'white', la: 'S. Francisci Assisiensis conf.', de: 'Hl. Franz von Assisi' },
  { m: 10, d: 5, cls: 4, color: 'red', la: 'Ss. Placidi et soc. mart.', de: 'Hll. Placidus u. Gefährten' },
  { m: 10, d: 6, cls: 3, color: 'white', la: 'S. Brunonis conf.', de: 'Hl. Bruno' },
  { m: 10, d: 7, cls: 2, color: 'white', la: 'B.M.V. a Rosario', de: 'Rosenkranzfest', comm: [{ la: 'S. Marci papæ conf.', de: 'Hl. Papst Markus' }] },
  { m: 10, d: 8, cls: 3, color: 'white', la: 'S. Birgittæ vid.', de: 'Hl. Birgitta von Schweden' },
  { m: 10, d: 9, cls: 3, color: 'white', la: 'S. Ioannis Leonardi conf.', de: 'Hl. Johannes Leonardi', comm: [{ la: 'Ss. Dionysii, Rustici et Eleutherii mart.', de: 'Hll. Dionysius, Rusticus u. Eleutherius' }] },
  { m: 10, d: 10, cls: 3, color: 'white', la: 'S. Francisci Borgiæ conf.', de: 'Hl. Franz Borgia' },
  { m: 10, d: 11, cls: 2, color: 'white', la: 'Maternitatis B.M.V.', de: 'Fest der Mutterschaft Mariens' },
  { m: 10, d: 13, cls: 3, color: 'white', la: 'S. Eduardi regis conf.', de: 'Hl. König Eduard der Bekenner' },
  { m: 10, d: 14, cls: 3, color: 'red', la: 'S. Callisti I papæ mart.', de: 'Hl. Papst Kallixtus I.' },
  { m: 10, d: 15, cls: 3, color: 'white', la: 'S. Teresiæ virg.', de: 'Hl. Theresia von Ávila' },
  { m: 10, d: 16, cls: 3, color: 'white', la: 'S. Hedwigis vid.', de: 'Hl. Hedwig' },
  { m: 10, d: 17, cls: 3, color: 'white', la: 'S. Margaritæ Mariæ Alacoque virg.', de: 'Hl. Margareta Maria Alacoque' },
  { m: 10, d: 18, cls: 2, color: 'red', la: 'S. Lucæ Evangelistæ', de: 'Hl. Evangelist Lukas' },
  { m: 10, d: 19, cls: 3, color: 'white', la: 'S. Petri de Alcantara conf.', de: 'Hl. Petrus von Alcántara' },
  { m: 10, d: 20, cls: 3, color: 'white', la: 'S. Ioannis Cantii conf.', de: 'Hl. Johannes Cantius' },
  { m: 10, d: 21, cls: 4, color: 'white', la: 'S. Hilarionis abbatis', de: 'Hl. Hilarion', comm: [{ la: 'Ss. Ursulæ et soc. virg. mart.', de: 'Hl. Ursula u. Gefährtinnen' }] },
  { m: 10, d: 23, cls: 3, color: 'white', la: 'S. Antonii Mariæ Claret ep. conf.', de: 'Hl. Antonius Maria Claret' },
  { m: 10, d: 24, cls: 3, color: 'white', la: 'S. Raphaelis Archangeli', de: 'Hl. Erzengel Raphael' },
  { m: 10, d: 25, cls: 4, color: 'red', la: 'Ss. Chrysanthi et Dariæ mart.', de: 'Hll. Chrysanthus u. Daria' },
  { m: 10, d: 28, cls: 2, color: 'red', la: 'Ss. Simonis et Iudæ app.', de: 'Hll. Apostel Simon u. Judas Thaddäus' },
]

// ---------------------------------------------------------------------------
// November
// ---------------------------------------------------------------------------
const NOVEMBER: SanctoraleEntry[] = [
  { m: 11, d: 1, cls: 1, color: 'white', la: 'Omnium Sanctorum', de: 'Allerheiligen' },
  { m: 11, d: 2, cls: 1, color: 'black', la: 'In Commemoratione Omnium Fidelium Defunctorum', de: 'Allerseelen' },
  { m: 11, d: 4, cls: 3, color: 'white', la: 'S. Caroli Borromæi ep. conf.', de: 'Hl. Karl Borromäus', comm: [{ la: 'Ss. Vitalis et Agricolæ mart.', de: 'Hll. Vitalis u. Agricola' }] },
  { m: 11, d: 8, cls: 4, color: 'red', la: 'Ss. Quatuor Coronatorum mart.', de: 'Vier gekrönte Märtyrer' },
  { m: 11, d: 9, cls: 2, color: 'white', la: 'In Dedicatione Archibasilicæ Ss.mi Salvatoris', de: 'Weihe der Lateranbasilika', comm: [{ la: 'S. Theodori mart.', de: 'Hl. Theodor' }] },
  { m: 11, d: 10, cls: 3, color: 'white', la: 'S. Andreæ Avellini conf.', de: 'Hl. Andreas Avellino', comm: [{ la: 'Ss. Tryphonis, Respicii et Nymphæ mart.', de: 'Hll. Tryphon, Respicius u. Nympha' }] },
  { m: 11, d: 11, cls: 3, color: 'white', la: 'S. Martini Turonensis ep. conf.', de: 'Hl. Martin von Tours', comm: [{ la: 'S. Mennæ mart.', de: 'Hl. Menas' }] },
  { m: 11, d: 12, cls: 3, color: 'red', la: 'S. Martini I papæ mart.', de: 'Hl. Papst Martin I.' },
  { m: 11, d: 13, cls: 3, color: 'white', la: 'S. Didaci conf.', de: 'Hl. Didakus (Diego)' },
  { m: 11, d: 14, cls: 3, color: 'red', la: 'S. Iosaphat ep. mart.', de: 'Hl. Josaphat' },
  { m: 11, d: 15, cls: 3, color: 'white', la: 'S. Alberti Magni ep. conf. doct.', de: 'Hl. Albertus Magnus' },
  { m: 11, d: 16, cls: 3, color: 'white', la: 'S. Gertrudis virg.', de: 'Hl. Gertrud die Große' },
  { m: 11, d: 17, cls: 3, color: 'white', la: 'S. Gregorii Thaumaturgi ep. conf.', de: 'Hl. Gregor der Wundertäter' },
  { m: 11, d: 18, cls: 3, color: 'white', la: 'In Dedicatione Basilicarum Ss. Petri et Pauli app.', de: 'Weihe der Basiliken St. Peter u. St. Paul' },
  { m: 11, d: 19, cls: 3, color: 'white', la: 'S. Elisabeth vid.', de: 'Hl. Elisabeth von Thüringen', comm: [{ la: 'S. Pontiani papæ mart.', de: 'Hl. Papst Pontianus' }] },
  { m: 11, d: 20, cls: 3, color: 'white', la: 'S. Felicis de Valois conf.', de: 'Hl. Felix von Valois' },
  { m: 11, d: 21, cls: 3, color: 'white', la: 'In Præsentatione B.M.V.', de: 'Mariä Opferung' },
  { m: 11, d: 22, cls: 3, color: 'red', la: 'S. Cæciliæ virg. mart.', de: 'Hl. Cäcilia' },
  { m: 11, d: 23, cls: 3, color: 'red', la: 'S. Clementis I papæ mart.', de: 'Hl. Papst Klemens I.', comm: [{ la: 'S. Felicitatis mart.', de: 'Hl. Felizitas' }] },
  { m: 11, d: 24, cls: 3, color: 'white', la: 'S. Ioannis a Cruce conf. doct.', de: 'Hl. Johannes vom Kreuz', comm: [{ la: 'S. Chrysogoni mart.', de: 'Hl. Chrysogonus' }] },
  { m: 11, d: 25, cls: 3, color: 'red', la: 'S. Catharinæ virg. mart.', de: 'Hl. Katharina von Alexandrien' },
  { m: 11, d: 26, cls: 3, color: 'white', la: 'S. Silvestri abbatis', de: 'Hl. Silvester Gozzolini', comm: [{ la: 'S. Petri Alexandrini ep. mart.', de: 'Hl. Petrus von Alexandrien' }] },
  { m: 11, d: 29, cls: 4, color: 'violet', la: 'Vigilia S. Andreæ ap.', de: 'Vigil des hl. Andreas', vigil: true, comm: [{ la: 'S. Saturnini mart.', de: 'Hl. Saturninus' }] },
  { m: 11, d: 30, cls: 2, color: 'red', la: 'S. Andreæ ap.', de: 'Hl. Apostel Andreas' },
]

// ---------------------------------------------------------------------------
// Dezember
// ---------------------------------------------------------------------------
const DECEMBER: SanctoraleEntry[] = [
  { m: 12, d: 2, cls: 3, color: 'red', la: 'S. Bibianæ virg. mart.', de: 'Hl. Bibiana' },
  { m: 12, d: 3, cls: 3, color: 'white', la: 'S. Francisci Xaverii conf.', de: 'Hl. Franz Xaver' },
  { m: 12, d: 4, cls: 3, color: 'white', la: 'S. Petri Chrysologi ep. conf. doct.', de: 'Hl. Petrus Chrysologus', comm: [{ la: 'S. Barbaræ virg. mart.', de: 'Hl. Barbara' }] },
  { m: 12, d: 5, cls: 4, color: 'red', la: 'S. Sabbæ abbatis', de: 'Hl. Sabbas' },
  { m: 12, d: 6, cls: 3, color: 'white', la: 'S. Nicolai ep. conf.', de: 'Hl. Nikolaus von Myra' },
  { m: 12, d: 7, cls: 3, color: 'white', la: 'S. Ambrosii ep. conf. doct.', de: 'Hl. Ambrosius' },
  { m: 12, d: 8, cls: 1, color: 'white', la: 'In Conceptione Immaculata B.M.V.', de: 'Mariä unbefleckte Empfängnis' },
  { m: 12, d: 10, cls: 4, color: 'red', la: 'S. Melchiadis papæ mart.', de: 'Hl. Papst Melchiades' },
  { m: 12, d: 11, cls: 3, color: 'white', la: 'S. Damasi I papæ conf.', de: 'Hl. Papst Damasus I.' },
  { m: 12, d: 13, cls: 3, color: 'red', la: 'S. Luciæ virg. mart.', de: 'Hl. Lucia' },
  { m: 12, d: 16, cls: 3, color: 'red', la: 'S. Eusebii ep. mart.', de: 'Hl. Eusebius von Vercelli' },
  { m: 12, d: 21, cls: 2, color: 'red', la: 'S. Thomæ ap.', de: 'Hl. Apostel Thomas' },
  { m: 12, d: 24, cls: 1, color: 'violet', la: 'In Vigilia Nativitatis Domini', de: 'Vigil von Weihnachten', vigil: true },
  { m: 12, d: 25, cls: 1, color: 'white', la: 'In Nativitate Domini', de: 'Geburt des Herrn (Weihnachten)' },
  { m: 12, d: 26, cls: 2, color: 'red', la: 'S. Stephani Protomartyris', de: 'Hl. Stephanus, Erzmärtyrer' },
  { m: 12, d: 27, cls: 2, color: 'white', la: 'S. Ioannis ap. et Evang.', de: 'Hl. Apostel u. Evangelist Johannes' },
  { m: 12, d: 28, cls: 2, color: 'red', la: 'Ss. Innocentium mart.', de: 'Unschuldige Kinder' },
  { m: 12, d: 29, cls: 3, color: 'red', la: 'S. Thomæ ep. mart.', de: 'Hl. Thomas Becket' },
  { m: 12, d: 31, cls: 3, color: 'white', la: 'S. Silvestri I papæ conf.', de: 'Hl. Papst Silvester I.' },
]

/** Das komplette Sanktorale, chronologisch geordnet. */
export const SANCTORALE: SanctoraleEntry[] = [
  ...JANUARY,
  ...FEBRUARY,
  ...MARCH,
  ...APRIL,
  ...MAY,
  ...JUNE,
  ...JULY,
  ...AUGUST,
  ...SEPTEMBER,
  ...OCTOBER,
  ...NOVEMBER,
  ...DECEMBER,
]

// Schneller Zugriff nach „Monat-Tag" (z.B. "3-19").
const BY_KEY = new Map<string, SanctoraleEntry>()
for (const e of SANCTORALE) BY_KEY.set(`${e.m}-${e.d}`, e)

/** Liefert den Sanktorale-Eintrag für ein Datum (oder null). */
export function sanctoraleFor(date: Date): SanctoraleEntry | null {
  return BY_KEY.get(`${date.getMonth() + 1}-${date.getDate()}`) ?? null
}
