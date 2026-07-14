import type { Prayer } from '../types'

// Gebete rund um die heilige Messe – klassische Kernauswahl aus dem
// Missale Romanum (gemeinfrei): Vorbereitung (Praeparatio ad Missam) und
// Danksagung (Gratiarum actio). Weitere Gebete werden ergänzt.

/** Vor der heiligen Messe. */
export const praeparatioPrayers: Prayer[] = [
  {
    id: 'aperi-domine',
    title: { la: 'Oratio "Aperi, Domine"', de: 'Gebet „Öffne, o Herr"' },
    rubric: { de: 'Zur Vorbereitung, vor Beginn der Feier.' },
    text: {
      la: 'Áperi, Dómine, os meum ad benedicéndum nomen sanctum tuum: munda quoque cor meum ab ómnibus vanis, pervérsis et aliénis cogitatiónibus; intelléctum illúmina, afféctum inflámma, ut digne, atténte ac devóte hoc Offícium recitáre váleam, et exaudíri mérear ante conspéctum divínæ Maiestátis tuæ. Per Christum Dóminum nostrum. Amen.',
      de: 'Öffne, o Herr, meinen Mund, deinen heiligen Namen zu preisen; reinige auch mein Herz von allen eitlen, verkehrten und fremden Gedanken; erleuchte meinen Verstand, entzünde mein Herz, damit ich würdig, aufmerksam und andächtig dieses Offizium verrichten kann und vor dem Angesicht deiner göttlichen Majestät Erhörung zu finden verdiene. Durch Christus, unseren Herrn. Amen.',
    },
  },
  {
    id: 'oratio-thomae-ante',
    title: { la: 'Oratio S. Thomae Aquinatis', de: 'Gebet des hl. Thomas von Aquin (vor der Messe)' },
    text: {
      la: 'Omnípotens sempitérne Deus, ecce accédo ad sacraméntum unigéniti Fílii tui, Dómini nostri Iesu Christi: accédo tamquam infírmus ad médicum vitæ, immúndus ad fontem misericórdiæ, cæcus ad lumen claritátis ætérnæ, pauper et egénus ad Dóminum cæli et terræ. Rogo ergo imménsæ largitátis tuæ abundántiam, quátenus meam curáre dignéris infirmitátem, laváre fœditátem, illumináre cæcitátem, ditáre paupertátem, tégere nuditátem. Amen.',
      de: 'Allmächtiger, ewiger Gott, siehe, ich trete hin zum Sakrament deines eingeborenen Sohnes, unseres Herrn Jesus Christus. Ich trete hin wie ein Kranker zum Arzt des Lebens, wie ein Unreiner zum Quell der Barmherzigkeit, wie ein Blinder zum Licht der ewigen Klarheit, wie ein Armer und Bedürftiger zum Herrn des Himmels und der Erde. Darum bitte ich deine unermessliche Freigebigkeit, dass du meine Krankheit heilen, meinen Schmutz abwaschen, meine Blindheit erleuchten, meine Armut bereichern und meine Blöße bedecken wollest. Amen.',
    },
  },
]

/** Nach der heiligen Messe. */
export const gratiarumActioPrayers: Prayer[] = [
  {
    id: 'anima-christi',
    title: { la: 'Anima Christi', de: 'Seele Christi' },
    rubric: { de: 'Zur Danksagung nach der Kommunion.' },
    text: {
      la: 'Anima Christi, sanctífica me. Corpus Christi, salva me. Sanguis Christi, inébria me. Aqua láteris Christi, lava me. Pássio Christi, confórta me. O bone Iesu, exáudi me. Intra tua vúlnera abscónde me. Ne permíttas me separári a te. Ab hoste malígno defénde me. In hora mortis meæ voca me, et iube me veníre ad te, ut cum Sanctis tuis laudem te in sǽcula sæculórum. Amen.',
      de: 'Seele Christi, heilige mich. Leib Christi, rette mich. Blut Christi, tränke mich. Wasser der Seite Christi, wasche mich. Leiden Christi, stärke mich. O guter Jesus, erhöre mich. Bei deinen Wunden birg mich. Von dir lass nimmer scheiden mich. Vor dem bösen Feind beschütze mich. In meiner Todesstunde rufe mich, und heiße mich kommen zu dir, dass ich mit deinen Heiligen dich lobe in alle Ewigkeit. Amen.',
    },
  },
  {
    id: 'en-ego',
    title: { la: 'Oratio "En ego, o bone Iesu"', de: 'Gebet vor dem Kruzifix' },
    rubric: { de: 'Vor einem Bild des Gekreuzigten, kniend.' },
    text: {
      la: 'En ego, o bone et dulcíssime Iesu, ante conspéctum tuum génibus me provólvo, ac máximo ánimi ardóre te oro atque obtéstor, ut meum in cor vívidos fídei, spei et caritátis sensus, atque veram peccatórum meórum pæniténtiam, éaque emendándi firmíssimam voluntátem velis imprímere; dum magno ánimi afféctu et dolóre tua quinque vúlnera mecum ípse consídero, ac mente contémplor, illud præ óculis habens, quod iam in ore ponébat tuo David prophéta de te, o bone Iesu: Fodérunt manus meas et pedes meos: dinumeravérunt ómnia ossa mea.',
      de: 'Siehe, o guter und liebreichster Jesus, ich werfe mich vor deinem Angesicht auf die Knie und bitte und beschwöre dich mit glühendem Verlangen: Präge in mein Herz lebendige Empfindungen des Glaubens, der Hoffnung und der Liebe, wahre Reue über meine Sünden und einen festen Vorsatz der Besserung, während ich mit großer Liebe und mit Schmerz deine fünf Wunden betrachte, jenes Wort vor Augen, das schon der Prophet David von dir gesprochen hat, o guter Jesus: Sie haben meine Hände und Füße durchbohrt; sie haben alle meine Gebeine gezählt.',
    },
  },
  {
    id: 'gratias-thomae',
    title: { la: 'Gratiarum actio S. Thomae', de: 'Danksagung des hl. Thomas von Aquin' },
    text: {
      la: 'Grátias tibi ago, Dómine, sancte Pater, omnípotens ætérne Deus, qui me peccatórem, indígnum fámulum tuum, nullis meis méritis, sed sola dignatióne misericórdiæ tuæ satiáre dignátus es pretióso Córpore et Sánguine Fílii tui, Dómini nostri Iesu Christi. Et precor, ut hæc sancta commúnio non sit mihi reátus ad pœnam, sed intercéssio salutáris ad véniam. Amen.',
      de: 'Ich danke dir, Herr, heiliger Vater, allmächtiger ewiger Gott, dass du mich Sünder, deinen unwürdigen Diener, nicht nach meinen Verdiensten, sondern allein aus dem Erbarmen deiner Güte mit dem kostbaren Leib und Blut deines Sohnes, unseres Herrn Jesus Christus, zu sättigen geruht hast. Und ich bitte, dass diese heilige Kommunion mir nicht zur Schuld und Strafe, sondern zur heilbringenden Fürsprache und Vergebung werde. Amen.',
    },
  },
]
