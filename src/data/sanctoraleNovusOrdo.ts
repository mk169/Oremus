// Sanktorale des Römischen Generalkalenders in der ordentlichen Form
// (Novus Ordo, Editio typica 2002/2008, mit den Ergänzungen bis 2021).
// Deutsche Namen; Ränge nach der Grundordnung des Kirchenjahres:
//   1 = Hochfest            2 = Fest
//   3 = Gebotener Gedenktag 4 = Nichtgebotener Gedenktag
//
// Bewegliche Feste (Ostern, Dreifaltigkeit, Fronleichnam, Taufe des Herrn,
// Heilige Familie …) und der zeitliche Festkreis werden in
// liturgicalCalendar.ts berechnet; hier steht der feste Jahreskreis.
//
// Fällt auf einen Tag ein weiterer nichtgebotener Gedenktag zur Auswahl, ist er
// als `comm` beim Haupteintrag vermerkt.
import type { SanctoraleEntry } from './sanctorale'

const JANUARY: SanctoraleEntry[] = [
  { m: 1, d: 1, cls: 1, color: 'white', la: 'Sollemnitas S. Dei Genetricis Mariæ', de: 'Hochfest der Gottesmutter Maria' },
  { m: 1, d: 2, cls: 3, color: 'white', la: 'Ss. Basilii Magni et Gregorii Nazianzeni ep. doct.', de: 'Hll. Basilius der Große u. Gregor von Nazianz' },
  { m: 1, d: 3, cls: 4, color: 'white', la: 'Ss.mi Nominis Iesu', de: 'Heiligster Name Jesu' },
  { m: 1, d: 6, cls: 1, color: 'white', la: 'In Epiphania Domini', de: 'Erscheinung des Herrn' },
  { m: 1, d: 7, cls: 4, color: 'white', la: 'S. Raymundi de Peñafort presb.', de: 'Hl. Raimund von Peñafort' },
  { m: 1, d: 13, cls: 4, color: 'white', la: 'S. Hilarii ep. doct.', de: 'Hl. Hilarius von Poitiers' },
  { m: 1, d: 17, cls: 3, color: 'white', la: 'S. Antonii abbatis', de: 'Hl. Antonius der Große, Abt' },
  { m: 1, d: 20, cls: 4, color: 'red', la: 'S. Fabiani papæ mart.', de: 'Hl. Fabian, Papst u. Märtyrer', comm: [{ la: 'S. Sebastiani mart.', de: 'Hl. Sebastian, Märtyrer' }] },
  { m: 1, d: 21, cls: 3, color: 'red', la: 'S. Agnetis virg. mart.', de: 'Hl. Agnes, Jungfrau u. Märtyrin' },
  { m: 1, d: 22, cls: 4, color: 'red', la: 'S. Vincentii diac. mart.', de: 'Hl. Vinzenz, Diakon u. Märtyrer' },
  { m: 1, d: 24, cls: 3, color: 'white', la: 'S. Francisci de Sales ep. doct.', de: 'Hl. Franz von Sales, Bischof u. Kirchenlehrer' },
  { m: 1, d: 25, cls: 2, color: 'white', la: 'In Conversione S. Pauli ap.', de: 'Bekehrung des Apostels Paulus' },
  { m: 1, d: 26, cls: 3, color: 'white', la: 'Ss. Timothei et Titi ep.', de: 'Hll. Timotheus u. Titus, Bischöfe' },
  { m: 1, d: 27, cls: 4, color: 'white', la: 'S. Angelæ Mericiæ virg.', de: 'Hl. Angela Merici, Jungfrau' },
  { m: 1, d: 28, cls: 3, color: 'white', la: 'S. Thomæ de Aquino presb. doct.', de: 'Hl. Thomas von Aquin, Priester u. Kirchenlehrer' },
  { m: 1, d: 31, cls: 3, color: 'white', la: 'S. Ioannis Bosco presb.', de: 'Hl. Johannes Bosco, Priester' },
]

const FEBRUARY: SanctoraleEntry[] = [
  { m: 2, d: 2, cls: 2, color: 'white', lord: true, la: 'In Præsentatione Domini', de: 'Darstellung des Herrn (Lichtmess)' },
  { m: 2, d: 3, cls: 4, color: 'red', la: 'S. Blasii ep. mart.', de: 'Hl. Blasius, Bischof u. Märtyrer', comm: [{ la: 'S. Ansgarii ep.', de: 'Hl. Ansgar, Bischof' }] },
  { m: 2, d: 5, cls: 3, color: 'red', la: 'S. Agathæ virg. mart.', de: 'Hl. Agatha, Jungfrau u. Märtyrin' },
  { m: 2, d: 6, cls: 3, color: 'red', la: 'Ss. Pauli Miki et soc. mart.', de: 'Hll. Paul Miki u. Gefährten, Märtyrer' },
  { m: 2, d: 8, cls: 4, color: 'white', la: 'S. Hieronymi Emiliani', de: 'Hl. Hieronymus Emiliani', comm: [{ la: 'S. Iosephinæ Bakhita virg.', de: 'Hl. Josefine Bakhita, Jungfrau' }] },
  { m: 2, d: 10, cls: 3, color: 'white', la: 'S. Scholasticæ virg.', de: 'Hl. Scholastika, Jungfrau' },
  { m: 2, d: 11, cls: 4, color: 'white', la: 'B. Mariæ Virg. de Lourdes', de: 'Unsere Liebe Frau in Lourdes' },
  { m: 2, d: 14, cls: 2, color: 'white', la: 'Ss. Cyrilli monachi et Methodii ep.', de: 'Hll. Cyrill u. Methodius, Europapatrone' },
  { m: 2, d: 17, cls: 4, color: 'white', la: 'Ss. Septem Fundatorum Ordinis Servorum B.M.V.', de: 'Sieben hll. Gründer des Servitenordens' },
  { m: 2, d: 21, cls: 4, color: 'white', la: 'S. Petri Damiani ep. doct.', de: 'Hl. Petrus Damiani, Bischof u. Kirchenlehrer' },
  { m: 2, d: 22, cls: 2, color: 'white', la: 'Cathedra S. Petri ap.', de: 'Kathedra Petri' },
  { m: 2, d: 23, cls: 3, color: 'red', la: 'S. Polycarpi ep. mart.', de: 'Hl. Polykarp, Bischof u. Märtyrer' },
  { m: 2, d: 27, cls: 4, color: 'white', la: 'S. Gregorii Narecensis abb. doct.', de: 'Hl. Gregor von Narek, Abt u. Kirchenlehrer' },
]

const MARCH: SanctoraleEntry[] = [
  { m: 3, d: 4, cls: 4, color: 'white', la: 'S. Casimiri', de: 'Hl. Kasimir' },
  { m: 3, d: 7, cls: 3, color: 'red', la: 'Ss. Perpetuæ et Felicitatis mart.', de: 'Hll. Perpetua u. Felizitas, Märtyrinnen' },
  { m: 3, d: 8, cls: 4, color: 'white', la: 'S. Ioannis de Deo rel.', de: 'Hl. Johannes von Gott, Ordensmann' },
  { m: 3, d: 9, cls: 4, color: 'white', la: 'S. Franciscæ Romanæ rel.', de: 'Hl. Franziska von Rom, Ordensfrau' },
  { m: 3, d: 17, cls: 4, color: 'white', la: 'S. Patricii ep.', de: 'Hl. Patrick, Bischof' },
  { m: 3, d: 18, cls: 4, color: 'white', la: 'S. Cyrilli Hierosolymitani ep. doct.', de: 'Hl. Cyrill von Jerusalem, Bischof u. Kirchenlehrer' },
  { m: 3, d: 19, cls: 1, color: 'white', la: 'S. Ioseph Sponsi B.M.V.', de: 'Hl. Josef, Bräutigam der Gottesmutter' },
  { m: 3, d: 23, cls: 4, color: 'white', la: 'S. Turibii de Mogrovejo ep.', de: 'Hl. Turibio von Mogrovejo, Bischof' },
  { m: 3, d: 25, cls: 1, color: 'white', lord: true, la: 'In Annuntiatione Domini', de: 'Verkündigung des Herrn' },
]

const APRIL: SanctoraleEntry[] = [
  { m: 4, d: 2, cls: 4, color: 'white', la: 'S. Francisci de Paula erem.', de: 'Hl. Franz von Paola, Einsiedler' },
  { m: 4, d: 4, cls: 4, color: 'white', la: 'S. Isidori ep. doct.', de: 'Hl. Isidor von Sevilla, Bischof u. Kirchenlehrer' },
  { m: 4, d: 5, cls: 4, color: 'white', la: 'S. Vincentii Ferrer presb.', de: 'Hl. Vinzenz Ferrer, Priester' },
  { m: 4, d: 7, cls: 3, color: 'white', la: 'S. Ioannis Baptistæ de la Salle presb.', de: 'Hl. Johannes Baptist de la Salle, Priester' },
  { m: 4, d: 11, cls: 3, color: 'red', la: 'S. Stanislai ep. mart.', de: 'Hl. Stanislaus, Bischof u. Märtyrer' },
  { m: 4, d: 13, cls: 4, color: 'red', la: 'S. Martini I papæ mart.', de: 'Hl. Martin I., Papst u. Märtyrer' },
  { m: 4, d: 21, cls: 4, color: 'white', la: 'S. Anselmi ep. doct.', de: 'Hl. Anselm von Canterbury, Bischof u. Kirchenlehrer' },
  { m: 4, d: 23, cls: 4, color: 'red', la: 'S. Adalberti ep. mart.', de: 'Hl. Adalbert, Bischof u. Märtyrer', comm: [{ la: 'S. Georgii mart.', de: 'Hl. Georg, Märtyrer' }] },
  { m: 4, d: 24, cls: 4, color: 'red', la: 'S. Fidelis a Sigmaringen presb. mart.', de: 'Hl. Fidelis von Sigmaringen, Priester u. Märtyrer' },
  { m: 4, d: 25, cls: 2, color: 'red', la: 'S. Marci Evangelistæ', de: 'Hl. Markus, Evangelist' },
  { m: 4, d: 28, cls: 4, color: 'red', la: 'S. Petri Chanel presb. mart.', de: 'Hl. Petrus Chanel, Priester u. Märtyrer', comm: [{ la: 'S. Ludovici Mariæ Grignion de Montfort presb.', de: 'Hl. Ludwig Maria Grignion de Montfort, Priester' }] },
  { m: 4, d: 29, cls: 2, color: 'white', la: 'S. Catharinæ Senensis virg. doct.', de: 'Hl. Katharina von Siena, Europapatronin' },
  { m: 4, d: 30, cls: 4, color: 'white', la: 'S. Pii V papæ', de: 'Hl. Pius V., Papst' },
]

const MAY: SanctoraleEntry[] = [
  { m: 5, d: 1, cls: 4, color: 'white', la: 'S. Ioseph Opificis', de: 'Hl. Josef der Arbeiter' },
  { m: 5, d: 2, cls: 3, color: 'white', la: 'S. Athanasii ep. doct.', de: 'Hl. Athanasius, Bischof u. Kirchenlehrer' },
  { m: 5, d: 3, cls: 2, color: 'red', la: 'Ss. Philippi et Iacobi app.', de: 'Hll. Philippus u. Jakobus, Apostel' },
  { m: 5, d: 12, cls: 4, color: 'red', la: 'Ss. Nerei et Achillei mart.', de: 'Hll. Nereus u. Achilleus, Märtyrer', comm: [{ la: 'S. Pancratii mart.', de: 'Hl. Pankratius, Märtyrer' }] },
  { m: 5, d: 13, cls: 4, color: 'white', la: 'B. Mariæ Virg. de Fatima', de: 'Unsere Liebe Frau in Fatima' },
  { m: 5, d: 14, cls: 2, color: 'red', la: 'S. Matthiæ ap.', de: 'Hl. Matthias, Apostel' },
  { m: 5, d: 18, cls: 4, color: 'red', la: 'S. Ioannis I papæ mart.', de: 'Hl. Johannes I., Papst u. Märtyrer' },
  { m: 5, d: 20, cls: 4, color: 'white', la: 'S. Bernardini Senensis presb.', de: 'Hl. Bernhardin von Siena, Priester' },
  { m: 5, d: 21, cls: 4, color: 'red', la: 'Ss. Christophori Magallanes et soc. mart.', de: 'Hll. Christophorus Magallanes u. Gefährten, Märtyrer' },
  { m: 5, d: 22, cls: 4, color: 'white', la: 'S. Ritæ de Cascia rel.', de: 'Hl. Rita von Cascia, Ordensfrau' },
  { m: 5, d: 25, cls: 4, color: 'white', la: 'S. Bedæ Venerabilis presb. doct.', de: 'Hl. Beda der Ehrwürdige, Priester u. Kirchenlehrer', comm: [{ la: 'S. Gregorii VII papæ', de: 'Hl. Gregor VII., Papst' }] },
  { m: 5, d: 26, cls: 3, color: 'white', la: 'S. Philippi Neri presb.', de: 'Hl. Philipp Neri, Priester' },
  { m: 5, d: 27, cls: 4, color: 'white', la: 'S. Augustini Cantuariensis ep.', de: 'Hl. Augustinus von Canterbury, Bischof' },
  { m: 5, d: 31, cls: 2, color: 'white', lord: true, la: 'In Visitatione B.M.V.', de: 'Mariä Heimsuchung' },
]

const JUNE: SanctoraleEntry[] = [
  { m: 6, d: 1, cls: 3, color: 'red', la: 'S. Iustini mart.', de: 'Hl. Justin, Märtyrer' },
  { m: 6, d: 2, cls: 4, color: 'red', la: 'Ss. Marcellini et Petri mart.', de: 'Hll. Marcellinus u. Petrus, Märtyrer' },
  { m: 6, d: 3, cls: 3, color: 'red', la: 'Ss. Caroli Lwanga et soc. mart.', de: 'Hll. Karl Lwanga u. Gefährten, Märtyrer' },
  { m: 6, d: 5, cls: 3, color: 'red', la: 'S. Bonifatii ep. mart.', de: 'Hl. Bonifatius, Bischof u. Märtyrer' },
  { m: 6, d: 6, cls: 4, color: 'white', la: 'S. Norberti ep.', de: 'Hl. Norbert, Bischof' },
  { m: 6, d: 9, cls: 4, color: 'white', la: 'S. Ephræm diac. doct.', de: 'Hl. Ephräm der Syrer, Diakon u. Kirchenlehrer' },
  { m: 6, d: 11, cls: 3, color: 'red', la: 'S. Barnabæ ap.', de: 'Hl. Barnabas, Apostel' },
  { m: 6, d: 13, cls: 3, color: 'white', la: 'S. Antonii de Padua presb. doct.', de: 'Hl. Antonius von Padua, Priester u. Kirchenlehrer' },
  { m: 6, d: 19, cls: 4, color: 'white', la: 'S. Romualdi abbatis', de: 'Hl. Romuald, Abt' },
  { m: 6, d: 21, cls: 3, color: 'white', la: 'S. Aloisii Gonzaga rel.', de: 'Hl. Aloisius von Gonzaga, Ordensmann' },
  { m: 6, d: 22, cls: 4, color: 'white', la: 'S. Paulini Nolani ep.', de: 'Hl. Paulinus von Nola, Bischof', comm: [{ la: 'Ss. Ioannis Fisher ep. et Thomæ More mart.', de: 'Hll. John Fisher u. Thomas More, Märtyrer' }] },
  { m: 6, d: 24, cls: 1, color: 'white', lord: true, la: 'In Nativitate S. Ioannis Baptistæ', de: 'Geburt Johannes des Täufers' },
  { m: 6, d: 27, cls: 4, color: 'white', la: 'S. Cyrilli Alexandrini ep. doct.', de: 'Hl. Cyrill von Alexandrien, Bischof u. Kirchenlehrer' },
  { m: 6, d: 28, cls: 3, color: 'red', la: 'S. Irenæi ep. mart. doct.', de: 'Hl. Irenäus von Lyon, Bischof u. Kirchenlehrer' },
  { m: 6, d: 29, cls: 1, color: 'red', la: 'Ss. Petri et Pauli app.', de: 'Hll. Petrus u. Paulus, Apostel' },
  { m: 6, d: 30, cls: 4, color: 'red', la: 'Ss. Protomartyrum Ecclesiæ Romanæ', de: 'Erste hll. Märtyrer der Kirche von Rom' },
]

const JULY: SanctoraleEntry[] = [
  { m: 7, d: 3, cls: 2, color: 'red', la: 'S. Thomæ ap.', de: 'Hl. Thomas, Apostel' },
  { m: 7, d: 4, cls: 4, color: 'white', la: 'S. Elisabeth Lusitaniæ', de: 'Hl. Elisabeth von Portugal' },
  { m: 7, d: 5, cls: 4, color: 'white', la: 'S. Antonii Mariæ Zaccaria presb.', de: 'Hl. Antonius Maria Zaccaria, Priester' },
  { m: 7, d: 6, cls: 4, color: 'red', la: 'S. Mariæ Goretti virg. mart.', de: 'Hl. Maria Goretti, Jungfrau u. Märtyrin' },
  { m: 7, d: 9, cls: 4, color: 'red', la: 'Ss. Augustini Zhao Rong et soc. mart.', de: 'Hll. Augustinus Zhao Rong u. Gefährten, Märtyrer' },
  { m: 7, d: 11, cls: 2, color: 'white', la: 'S. Benedicti abbatis', de: 'Hl. Benedikt, Abt, Europapatron' },
  { m: 7, d: 13, cls: 4, color: 'white', la: 'S. Henrici', de: 'Hl. Heinrich' },
  { m: 7, d: 14, cls: 4, color: 'white', la: 'S. Camilli de Lellis presb.', de: 'Hl. Kamillus von Lellis, Priester' },
  { m: 7, d: 15, cls: 3, color: 'white', la: 'S. Bonaventuræ ep. doct.', de: 'Hl. Bonaventura, Bischof u. Kirchenlehrer' },
  { m: 7, d: 16, cls: 4, color: 'white', la: 'B. Mariæ Virg. de Monte Carmelo', de: 'Unsere Liebe Frau auf dem Berge Karmel' },
  { m: 7, d: 20, cls: 4, color: 'red', la: 'S. Apollinaris ep. mart.', de: 'Hl. Apollinaris, Bischof u. Märtyrer' },
  { m: 7, d: 21, cls: 4, color: 'white', la: 'S. Laurentii a Brundusio presb. doct.', de: 'Hl. Laurentius von Brindisi, Priester u. Kirchenlehrer' },
  { m: 7, d: 22, cls: 2, color: 'white', la: 'S. Mariæ Magdalenæ', de: 'Hl. Maria Magdalena' },
  { m: 7, d: 23, cls: 2, color: 'white', la: 'S. Birgittæ rel.', de: 'Hl. Birgitta von Schweden, Europapatronin' },
  { m: 7, d: 24, cls: 4, color: 'white', la: 'S. Sharbel Makhluf presb.', de: 'Hl. Scharbel Machluf, Priester' },
  { m: 7, d: 25, cls: 2, color: 'red', la: 'S. Iacobi ap.', de: 'Hl. Jakobus, Apostel' },
  { m: 7, d: 26, cls: 3, color: 'white', la: 'Ss. Ioachim et Annæ', de: 'Hll. Joachim u. Anna, Eltern der Gottesmutter' },
  { m: 7, d: 29, cls: 3, color: 'white', la: 'Ss. Marthæ, Mariæ et Lazari', de: 'Hll. Marta, Maria u. Lazarus' },
  { m: 7, d: 30, cls: 4, color: 'white', la: 'S. Petri Chrysologi ep. doct.', de: 'Hl. Petrus Chrysologus, Bischof u. Kirchenlehrer' },
  { m: 7, d: 31, cls: 3, color: 'white', la: 'S. Ignatii de Loyola presb.', de: 'Hl. Ignatius von Loyola, Priester' },
]

const AUGUST: SanctoraleEntry[] = [
  { m: 8, d: 1, cls: 3, color: 'white', la: 'S. Alfonsi Mariæ de Ligorio ep. doct.', de: 'Hl. Alfons Maria von Liguori, Bischof u. Kirchenlehrer' },
  { m: 8, d: 2, cls: 4, color: 'white', la: 'S. Eusebii Vercellensis ep.', de: 'Hl. Eusebius von Vercelli, Bischof', comm: [{ la: 'S. Petri Iuliani Eymard presb.', de: 'Hl. Petrus Julianus Eymard, Priester' }] },
  { m: 8, d: 4, cls: 3, color: 'white', la: 'S. Ioannis Mariæ Vianney presb.', de: 'Hl. Johannes Maria Vianney, Priester' },
  { m: 8, d: 5, cls: 4, color: 'white', la: 'In Dedicatione Basilicæ S. Mariæ', de: 'Weihe der Basilika Santa Maria Maggiore' },
  { m: 8, d: 6, cls: 2, color: 'white', lord: true, la: 'In Transfiguratione Domini', de: 'Verklärung des Herrn' },
  { m: 8, d: 7, cls: 4, color: 'red', la: 'Ss. Xysti II papæ et soc. mart.', de: 'Hl. Sixtus II., Papst, u. Gefährten, Märtyrer', comm: [{ la: 'S. Caietani presb.', de: 'Hl. Kajetan, Priester' }] },
  { m: 8, d: 8, cls: 3, color: 'white', la: 'S. Dominici presb.', de: 'Hl. Dominikus, Priester' },
  { m: 8, d: 9, cls: 2, color: 'red', la: 'S. Teresiæ Benedictæ a Cruce virg. mart.', de: 'Hl. Teresia Benedicta vom Kreuz (Edith Stein), Europapatronin' },
  { m: 8, d: 10, cls: 2, color: 'red', la: 'S. Laurentii diac. mart.', de: 'Hl. Laurentius, Diakon u. Märtyrer' },
  { m: 8, d: 11, cls: 3, color: 'white', la: 'S. Claræ virg.', de: 'Hl. Klara, Jungfrau' },
  { m: 8, d: 12, cls: 4, color: 'white', la: 'S. Ioannæ Franciscæ de Chantal rel.', de: 'Hl. Johanna Franziska von Chantal, Ordensfrau' },
  { m: 8, d: 13, cls: 4, color: 'red', la: 'Ss. Pontiani papæ et Hippolyti presb. mart.', de: 'Hll. Pontianus u. Hippolyt, Märtyrer' },
  { m: 8, d: 14, cls: 3, color: 'red', la: 'S. Maximiliani Mariæ Kolbe presb. mart.', de: 'Hl. Maximilian Maria Kolbe, Priester u. Märtyrer' },
  { m: 8, d: 15, cls: 1, color: 'white', la: 'In Assumptione B.M.V.', de: 'Aufnahme Mariens in den Himmel' },
  { m: 8, d: 16, cls: 4, color: 'white', la: 'S. Stephani Hungariæ', de: 'Hl. Stephan von Ungarn' },
  { m: 8, d: 19, cls: 4, color: 'white', la: 'S. Ioannis Eudes presb.', de: 'Hl. Johannes Eudes, Priester' },
  { m: 8, d: 20, cls: 3, color: 'white', la: 'S. Bernardi abbatis doct.', de: 'Hl. Bernhard von Clairvaux, Abt u. Kirchenlehrer' },
  { m: 8, d: 21, cls: 3, color: 'white', la: 'S. Pii X papæ', de: 'Hl. Pius X., Papst' },
  { m: 8, d: 22, cls: 3, color: 'white', la: 'B.M.V. Reginæ', de: 'Maria Königin' },
  { m: 8, d: 23, cls: 4, color: 'white', la: 'S. Rosæ de Lima virg.', de: 'Hl. Rosa von Lima, Jungfrau' },
  { m: 8, d: 24, cls: 2, color: 'red', la: 'S. Bartholomæi ap.', de: 'Hl. Bartholomäus, Apostel' },
  { m: 8, d: 25, cls: 4, color: 'white', la: 'S. Ludovici', de: 'Hl. Ludwig', comm: [{ la: 'S. Ioseph de Calasanz presb.', de: 'Hl. Josef von Calasanz, Priester' }] },
  { m: 8, d: 27, cls: 3, color: 'white', la: 'S. Monicæ', de: 'Hl. Monika' },
  { m: 8, d: 28, cls: 3, color: 'white', la: 'S. Augustini ep. doct.', de: 'Hl. Augustinus, Bischof u. Kirchenlehrer' },
  { m: 8, d: 29, cls: 3, color: 'red', la: 'In Passione S. Ioannis Baptistæ', de: 'Enthauptung Johannes des Täufers' },
]

const SEPTEMBER: SanctoraleEntry[] = [
  { m: 9, d: 3, cls: 3, color: 'white', la: 'S. Gregorii Magni papæ doct.', de: 'Hl. Gregor der Große, Papst u. Kirchenlehrer' },
  { m: 9, d: 8, cls: 2, color: 'white', la: 'In Nativitate B.M.V.', de: 'Mariä Geburt' },
  { m: 9, d: 9, cls: 4, color: 'white', la: 'S. Petri Claver presb.', de: 'Hl. Petrus Claver, Priester' },
  { m: 9, d: 12, cls: 4, color: 'white', la: 'Ss.mi Nominis Mariæ', de: 'Mariä Namen' },
  { m: 9, d: 13, cls: 3, color: 'white', la: 'S. Ioannis Chrysostomi ep. doct.', de: 'Hl. Johannes Chrysostomus, Bischof u. Kirchenlehrer' },
  { m: 9, d: 14, cls: 2, color: 'red', lord: true, la: 'In Exaltatione S. Crucis', de: 'Kreuzerhöhung' },
  { m: 9, d: 15, cls: 3, color: 'white', la: 'B.M.V. Perdolentis', de: 'Gedächtnis der Schmerzen Mariens' },
  { m: 9, d: 16, cls: 3, color: 'red', la: 'Ss. Cornelii papæ et Cypriani ep. mart.', de: 'Hll. Kornelius u. Cyprian, Märtyrer' },
  { m: 9, d: 17, cls: 4, color: 'white', la: 'S. Roberti Bellarmino ep. doct.', de: 'Hl. Robert Bellarmin, Bischof u. Kirchenlehrer', comm: [{ la: 'S. Hildegardis Bingensis virg. doct.', de: 'Hl. Hildegard von Bingen, Jungfrau u. Kirchenlehrerin' }] },
  { m: 9, d: 19, cls: 4, color: 'red', la: 'S. Ianuarii ep. mart.', de: 'Hl. Januarius, Bischof u. Märtyrer' },
  { m: 9, d: 20, cls: 3, color: 'red', la: 'Ss. Andreæ Kim Taegon, Pauli Chong Hasang et soc. mart.', de: 'Hll. Andreas Kim Taegon, Paulus Chong Hasang u. Gefährten, Märtyrer' },
  { m: 9, d: 21, cls: 2, color: 'red', la: 'S. Matthæi ap. et evang.', de: 'Hl. Matthäus, Apostel u. Evangelist' },
  { m: 9, d: 23, cls: 3, color: 'white', la: 'S. Pii de Pietrelcina presb.', de: 'Hl. Pius von Pietrelcina (Pater Pio), Priester' },
  { m: 9, d: 26, cls: 4, color: 'red', la: 'Ss. Cosmæ et Damiani mart.', de: 'Hll. Kosmas u. Damian, Märtyrer' },
  { m: 9, d: 27, cls: 3, color: 'white', la: 'S. Vincentii de Paul presb.', de: 'Hl. Vinzenz von Paul, Priester' },
  { m: 9, d: 28, cls: 4, color: 'red', la: 'S. Venceslai mart.', de: 'Hl. Wenzel, Märtyrer', comm: [{ la: 'Ss. Laurentii Ruiz et soc. mart.', de: 'Hll. Laurentius Ruiz u. Gefährten, Märtyrer' }] },
  { m: 9, d: 29, cls: 2, color: 'white', la: 'Ss. Michaelis, Gabrielis et Raphaelis archang.', de: 'Hll. Erzengel Michael, Gabriel u. Raphael' },
  { m: 9, d: 30, cls: 3, color: 'white', la: 'S. Hieronymi presb. doct.', de: 'Hl. Hieronymus, Priester u. Kirchenlehrer' },
]

const OCTOBER: SanctoraleEntry[] = [
  { m: 10, d: 1, cls: 3, color: 'white', la: 'S. Teresiæ a Iesu Infante virg. doct.', de: 'Hl. Therese vom Kinde Jesu, Jungfrau u. Kirchenlehrerin' },
  { m: 10, d: 2, cls: 3, color: 'white', la: 'Ss. Angelorum Custodum', de: 'Heilige Schutzengel' },
  { m: 10, d: 4, cls: 3, color: 'white', la: 'S. Francisci Assisiensis', de: 'Hl. Franz von Assisi' },
  { m: 10, d: 6, cls: 4, color: 'white', la: 'S. Brunonis presb.', de: 'Hl. Bruno, Priester' },
  { m: 10, d: 7, cls: 3, color: 'white', la: 'B.M.V. a Rosario', de: 'Unsere Liebe Frau vom Rosenkranz' },
  { m: 10, d: 9, cls: 4, color: 'red', la: 'Ss. Dionysii ep. et soc. mart.', de: 'Hll. Dionysius u. Gefährten, Märtyrer', comm: [{ la: 'S. Ioannis Leonardi presb.', de: 'Hl. Johannes Leonardi, Priester' }] },
  { m: 10, d: 11, cls: 4, color: 'white', la: 'S. Ioannis XXIII papæ', de: 'Hl. Johannes XXIII., Papst' },
  { m: 10, d: 14, cls: 4, color: 'red', la: 'S. Callisti I papæ mart.', de: 'Hl. Kallistus I., Papst u. Märtyrer' },
  { m: 10, d: 15, cls: 3, color: 'white', la: 'S. Teresiæ a Iesu virg. doct.', de: 'Hl. Teresa von Ávila, Jungfrau u. Kirchenlehrerin' },
  { m: 10, d: 16, cls: 4, color: 'white', la: 'S. Hedvigis rel.', de: 'Hl. Hedwig, Ordensfrau', comm: [{ la: 'S. Margaritæ Mariæ Alacoque virg.', de: 'Hl. Margareta Maria Alacoque, Jungfrau' }] },
  { m: 10, d: 17, cls: 3, color: 'red', la: 'S. Ignatii Antiocheni ep. mart.', de: 'Hl. Ignatius von Antiochien, Bischof u. Märtyrer' },
  { m: 10, d: 18, cls: 2, color: 'red', la: 'S. Lucæ Evangelistæ', de: 'Hl. Lukas, Evangelist' },
  { m: 10, d: 19, cls: 4, color: 'red', la: 'Ss. Ioannis de Brébeuf, Isaac Jogues et soc. mart.', de: 'Hll. Johannes de Brébeuf, Isaak Jogues u. Gefährten, Märtyrer', comm: [{ la: 'S. Pauli a Cruce presb.', de: 'Hl. Paul vom Kreuz, Priester' }] },
  { m: 10, d: 22, cls: 4, color: 'white', la: 'S. Ioannis Pauli II papæ', de: 'Hl. Johannes Paul II., Papst' },
  { m: 10, d: 23, cls: 4, color: 'white', la: 'S. Ioannis de Capistrano presb.', de: 'Hl. Johannes von Capestrano, Priester' },
  { m: 10, d: 24, cls: 4, color: 'white', la: 'S. Antonii Mariæ Claret ep.', de: 'Hl. Antonius Maria Claret, Bischof' },
  { m: 10, d: 28, cls: 2, color: 'red', la: 'Ss. Simonis et Iudæ app.', de: 'Hll. Simon u. Judas, Apostel' },
]

const NOVEMBER: SanctoraleEntry[] = [
  { m: 11, d: 1, cls: 1, color: 'white', la: 'Omnium Sanctorum', de: 'Allerheiligen' },
  { m: 11, d: 2, cls: 1, color: 'black', la: 'In Commemoratione Omnium Fidelium Defunctorum', de: 'Gedächtnis aller Verstorbenen (Allerseelen)' },
  { m: 11, d: 3, cls: 4, color: 'white', la: 'S. Martini de Porres rel.', de: 'Hl. Martin von Porres, Ordensmann' },
  { m: 11, d: 4, cls: 3, color: 'white', la: 'S. Caroli Borromeo ep.', de: 'Hl. Karl Borromäus, Bischof' },
  { m: 11, d: 9, cls: 2, color: 'white', lord: true, la: 'In Dedicatione Basilicæ Lateranensis', de: 'Weihe der Lateranbasilika' },
  { m: 11, d: 10, cls: 3, color: 'white', la: 'S. Leonis Magni papæ doct.', de: 'Hl. Leo der Große, Papst u. Kirchenlehrer' },
  { m: 11, d: 11, cls: 3, color: 'white', la: 'S. Martini Turonensis ep.', de: 'Hl. Martin von Tours, Bischof' },
  { m: 11, d: 12, cls: 3, color: 'red', la: 'S. Iosaphat ep. mart.', de: 'Hl. Josaphat, Bischof u. Märtyrer' },
  { m: 11, d: 15, cls: 4, color: 'white', la: 'S. Alberti Magni ep. doct.', de: 'Hl. Albert der Große, Bischof u. Kirchenlehrer' },
  { m: 11, d: 16, cls: 4, color: 'white', la: 'S. Margaritæ Scotiæ', de: 'Hl. Margareta von Schottland', comm: [{ la: 'S. Gertrudis virg.', de: 'Hl. Gertrud, Jungfrau' }] },
  { m: 11, d: 17, cls: 3, color: 'white', la: 'S. Elisabeth Hungariæ rel.', de: 'Hl. Elisabeth von Thüringen, Ordensfrau' },
  { m: 11, d: 18, cls: 4, color: 'white', la: 'In Dedicatione Basilicarum Ss. Petri et Pauli app.', de: 'Weihe der Basiliken St. Peter u. St. Paul' },
  { m: 11, d: 21, cls: 3, color: 'white', la: 'In Præsentatione B.M.V.', de: 'Gedächtnis Unserer Lieben Frau in Jerusalem' },
  { m: 11, d: 22, cls: 3, color: 'red', la: 'S. Cæciliæ virg. mart.', de: 'Hl. Cäcilia, Jungfrau u. Märtyrin' },
  { m: 11, d: 23, cls: 4, color: 'red', la: 'S. Clementis I papæ mart.', de: 'Hl. Klemens I., Papst u. Märtyrer', comm: [{ la: 'S. Columbani abbatis', de: 'Hl. Kolumban, Abt' }] },
  { m: 11, d: 24, cls: 3, color: 'red', la: 'Ss. Andreæ Dung-Lac presb. et soc. mart.', de: 'Hll. Andreas Dung-Lac u. Gefährten, Märtyrer' },
  { m: 11, d: 25, cls: 4, color: 'red', la: 'S. Catharinæ Alexandrinæ virg. mart.', de: 'Hl. Katharina von Alexandrien, Jungfrau u. Märtyrin' },
  { m: 11, d: 30, cls: 2, color: 'red', la: 'S. Andreæ ap.', de: 'Hl. Andreas, Apostel' },
]

const DECEMBER: SanctoraleEntry[] = [
  { m: 12, d: 3, cls: 3, color: 'white', la: 'S. Francisci Xaverii presb.', de: 'Hl. Franz Xaver, Priester' },
  { m: 12, d: 4, cls: 4, color: 'white', la: 'S. Ioannis Damasceni presb. doct.', de: 'Hl. Johannes von Damaskus, Priester u. Kirchenlehrer' },
  { m: 12, d: 6, cls: 4, color: 'white', la: 'S. Nicolai ep.', de: 'Hl. Nikolaus, Bischof' },
  { m: 12, d: 7, cls: 3, color: 'white', la: 'S. Ambrosii ep. doct.', de: 'Hl. Ambrosius, Bischof u. Kirchenlehrer' },
  { m: 12, d: 8, cls: 1, color: 'white', la: 'In Conceptione Immaculata B.M.V.', de: 'Unbefleckte Empfängnis Mariens' },
  { m: 12, d: 9, cls: 4, color: 'white', la: 'S. Ioannis Didaci Cuauhtlatoatzin', de: 'Hl. Juan Diego Cuauhtlatoatzin' },
  { m: 12, d: 11, cls: 4, color: 'white', la: 'S. Damasi I papæ', de: 'Hl. Damasus I., Papst' },
  { m: 12, d: 12, cls: 4, color: 'white', la: 'B. Mariæ Virg. de Guadalupe', de: 'Unsere Liebe Frau von Guadalupe' },
  { m: 12, d: 13, cls: 3, color: 'red', la: 'S. Luciæ virg. mart.', de: 'Hl. Luzia, Jungfrau u. Märtyrin' },
  { m: 12, d: 14, cls: 3, color: 'white', la: 'S. Ioannis a Cruce presb. doct.', de: 'Hl. Johannes vom Kreuz, Priester u. Kirchenlehrer' },
  { m: 12, d: 21, cls: 4, color: 'white', la: 'S. Petri Canisii presb. doct.', de: 'Hl. Petrus Canisius, Priester u. Kirchenlehrer' },
  { m: 12, d: 23, cls: 4, color: 'white', la: 'S. Ioannis de Kęty presb.', de: 'Hl. Johannes von Krakau (Kanty), Priester' },
  { m: 12, d: 25, cls: 1, color: 'white', la: 'In Nativitate Domini', de: 'Geburt des Herrn (Weihnachten)' },
  { m: 12, d: 26, cls: 2, color: 'red', la: 'S. Stephani protomart.', de: 'Hl. Stephanus, erster Märtyrer' },
  { m: 12, d: 27, cls: 2, color: 'white', la: 'S. Ioannis ap. et evang.', de: 'Hl. Johannes, Apostel u. Evangelist' },
  { m: 12, d: 28, cls: 2, color: 'red', la: 'Ss. Innocentium mart.', de: 'Unschuldige Kinder, Märtyrer' },
  { m: 12, d: 29, cls: 4, color: 'red', la: 'S. Thomæ Becket ep. mart.', de: 'Hl. Thomas Becket, Bischof u. Märtyrer' },
  { m: 12, d: 31, cls: 4, color: 'white', la: 'S. Silvestri I papæ', de: 'Hl. Silvester I., Papst' },
]

/** Das komplette Novus-Ordo-Sanktorale, chronologisch geordnet. */
export const SANCTORALE_NOVUS_ORDO: SanctoraleEntry[] = [
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

const BY_KEY = new Map<string, SanctoraleEntry>()
for (const e of SANCTORALE_NOVUS_ORDO) BY_KEY.set(`${e.m}-${e.d}`, e)

/** Liefert den Novus-Ordo-Sanktorale-Eintrag für ein Datum (oder null). */
export function sanctoraleNovusOrdoFor(date: Date): SanctoraleEntry | null {
  return BY_KEY.get(`${date.getMonth() + 1}-${date.getDate()}`) ?? null
}
