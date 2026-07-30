import type { Prayer } from '../types'

// Gebete rund um die heilige Messe – klassische Kernauswahl aus dem
// Missale Romanum (gemeinfrei): Vorbereitung (Praeparatio ad Missam),
// Kommuniongebet, Danksagung (Gratiarum actio) und allgemeine Gebete.
// Weitere Gebete werden ergänzt.

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

/** Zur heiligen Kommunion. */
export const communionPrayers: Prayer[] = [
  {
    id: 'anima-christi',
    title: { la: 'Anima Christi', de: 'Seele Christi' },
    rubric: { de: 'Zur Danksagung nach dem Empfang der heiligen Kommunion.' },
    text: {
      la: 'Anima Christi, sanctífica me. Corpus Christi, salva me. Sanguis Christi, inébria me. Aqua láteris Christi, lava me. Pássio Christi, confórta me. O bone Iesu, exáudi me. Intra tua vúlnera abscónde me. Ne permíttas me separári a te. Ab hoste malígno defénde me. In hora mortis meæ voca me, et iube me veníre ad te, ut cum Sanctis tuis laudem te in sǽcula sæculórum. Amen.',
      de: 'Seele Christi, heilige mich. Leib Christi, rette mich. Blut Christi, tränke mich. Wasser der Seite Christi, wasche mich. Leiden Christi, stärke mich. O guter Jesus, erhöre mich. Bei deinen Wunden birg mich. Von dir lass nimmer scheiden mich. Vor dem bösen Feind beschütze mich. In meiner Todesstunde rufe mich, und heiße mich kommen zu dir, dass ich mit deinen Heiligen dich lobe in alle Ewigkeit. Amen.',
    },
  },
]

/** Nach der heiligen Messe. */
export const gratiarumActioPrayers: Prayer[] = [
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

/** Allgemeine Gebete – die klassischen Grundgebete (gemeinfrei). */
export const allgemeineGebete: Prayer[] = [
  {
    id: 'signum-crucis',
    title: { la: 'Signum crucis', de: 'Kreuzzeichen' },
    text: {
      la: 'In nómine Patris, et Fílii, et Spíritus Sancti. Amen.',
      de: 'Im Namen des Vaters und des Sohnes und des Heiligen Geistes. Amen.',
    },
  },
  {
    id: 'pater-noster',
    title: { la: 'Pater noster', de: 'Vaterunser' },
    text: {
      la: 'Pater noster, qui es in cælis: sanctificétur nomen tuum; advéniat regnum tuum; fiat volúntas tua, sicut in cælo, et in terra. Panem nostrum cotidiánum da nobis hódie; et dimítte nobis débita nostra, sicut et nos dimíttimus debitóribus nostris; et ne nos indúcas in tentatiónem; sed líbera nos a malo. Amen.',
      de: 'Vater unser im Himmel, geheiligt werde dein Name. Dein Reich komme. Dein Wille geschehe, wie im Himmel so auf Erden. Unser tägliches Brot gib uns heute. Und vergib uns unsere Schuld, wie auch wir vergeben unsern Schuldigern. Und führe uns nicht in Versuchung, sondern erlöse uns von dem Bösen. Amen.',
    },
  },
  {
    id: 'ave-maria',
    title: { la: 'Ave Maria', de: 'Gegrüßet seist du, Maria' },
    text: {
      la: 'Ave María, grátia plena, Dóminus tecum; benedícta tu in muliéribus, et benedíctus fructus ventris tui, Iesus. Sancta María, Mater Dei, ora pro nobis peccatóribus, nunc et in hora mortis nostræ. Amen.',
      de: 'Gegrüßet seist du, Maria, voll der Gnade, der Herr ist mit dir. Du bist gebenedeit unter den Frauen, und gebenedeit ist die Frucht deines Leibes, Jesus. Heilige Maria, Mutter Gottes, bitte für uns Sünder jetzt und in der Stunde unseres Todes. Amen.',
    },
  },
  {
    id: 'gloria-patri',
    title: { la: 'Gloria Patri', de: 'Ehre sei dem Vater' },
    text: {
      la: 'Glória Patri, et Fílio, et Spirítui Sancto. Sicut erat in princípio, et nunc, et semper, et in sǽcula sæculórum. Amen.',
      de: 'Ehre sei dem Vater und dem Sohn und dem Heiligen Geist. Wie im Anfang, so auch jetzt und allezeit und in Ewigkeit. Amen.',
    },
  },
  {
    id: 'credo-apostolicum',
    title: { la: 'Symbolum Apostolorum', de: 'Apostolisches Glaubensbekenntnis' },
    text: {
      la: 'Credo in Deum, Patrem omnipoténtem, Creatórem cæli et terræ. Et in Iesum Christum, Fílium eius únicum, Dóminum nostrum: qui concéptus est de Spíritu Sancto, natus ex María Vírgine, passus sub Póntio Piláto, crucifíxus, mórtuus, et sepúltus: descéndit ad ínferos; tértia die resurréxit a mórtuis; ascéndit ad cælos; sedet ad déxteram Dei Patris omnipoténtis: inde ventúrus est iudicáre vivos et mórtuos. Credo in Spíritum Sanctum, sanctam Ecclésiam cathólicam, Sanctórum communiónem, remissiónem peccatórum, carnis resurrectiónem, vitam ætérnam. Amen.',
      de: 'Ich glaube an Gott, den Vater, den Allmächtigen, den Schöpfer des Himmels und der Erde, und an Jesus Christus, seinen eingeborenen Sohn, unsern Herrn, empfangen durch den Heiligen Geist, geboren von der Jungfrau Maria, gelitten unter Pontius Pilatus, gekreuzigt, gestorben und begraben, hinabgestiegen in das Reich des Todes, am dritten Tage auferstanden von den Toten, aufgefahren in den Himmel; er sitzt zur Rechten Gottes, des allmächtigen Vaters; von dort wird er kommen, zu richten die Lebenden und die Toten. Ich glaube an den Heiligen Geist, die heilige katholische Kirche, Gemeinschaft der Heiligen, Vergebung der Sünden, Auferstehung der Toten und das ewige Leben. Amen.',
    },
  },
  {
    id: 'salve-regina',
    title: { la: 'Salve Regina', de: 'Sei gegrüßt, o Königin' },
    rubric: { de: 'Marianische Antiphon, besonders nach der Komplet.' },
    text: {
      la: 'Salve, Regína, Mater misericórdiæ; vita, dulcédo, et spes nostra, salve. Ad te clamámus, éxsules fílii Hevæ. Ad te suspirámus, geméntes et flentes in hac lacrimárum valle. Eia ergo, advocáta nostra, illos tuos misericórdes óculos ad nos convérte. Et Iesum, benedíctum fructum ventris tui, nobis post hoc exsílium osténde. O clemens, o pia, o dulcis Virgo María.',
      de: 'Sei gegrüßt, o Königin, Mutter der Barmherzigkeit, unser Leben, unsere Wonne und unsere Hoffnung, sei gegrüßt. Zu dir rufen wir verbannte Kinder Evas. Zu dir seufzen wir trauernd und weinend in diesem Tal der Tränen. Wohlan denn, unsere Fürsprecherin, wende deine barmherzigen Augen uns zu und nach diesem Elend zeige uns Jesus, die gebenedeite Frucht deines Leibes. O gütige, o milde, o süße Jungfrau Maria.',
    },
  },
  {
    id: 'sub-tuum',
    title: { la: 'Sub tuum præsidium', de: 'Unter deinen Schutz und Schirm' },
    text: {
      la: 'Sub tuum præsídium confúgimus, sancta Dei Génetrix; nostras deprecatiónes ne despícias in necessitátibus nostris, sed a perículis cunctis líbera nos semper, Virgo gloriósa et benedícta. Amen.',
      de: 'Unter deinen Schutz und Schirm fliehen wir, o heilige Gottesmutter. Verschmähe nicht unser Gebet in unsern Nöten, sondern erlöse uns jederzeit von allen Gefahren, o du glorreiche und gebenedeite Jungfrau. Amen.',
    },
  },
  {
    id: 'angelus',
    title: { la: 'Angelus Domini', de: 'Der Engel des Herrn' },
    rubric: { de: 'Morgens, mittags und abends; in der Osterzeit „Regina cæli“.' },
    text: {
      la: 'V. Ángelus Dómini nuntiávit Maríæ. R. Et concépit de Spíritu Sancto. — Ave María … — V. Ecce ancílla Dómini. R. Fiat mihi secúndum verbum tuum. — Ave María … — V. Et Verbum caro factum est. R. Et habitávit in nobis. — Ave María … — V. Ora pro nobis, sancta Dei Génetrix. R. Ut digni efficiámur promissiónibus Christi. Orémus. Grátiam tuam, quǽsumus, Dómine, méntibus nostris infúnde; ut qui, Ángelo nuntiánte, Christi Fílii tui incarnatiónem cognóvimus, per passiónem eius et crucem, ad resurrectiónis glóriam perducámur. Per eúndem Christum Dóminum nostrum. Amen.',
      de: 'V. Der Engel des Herrn brachte Maria die Botschaft. R. Und sie empfing vom Heiligen Geist. — Gegrüßet seist du, Maria … — V. Maria sprach: Siehe, ich bin die Magd des Herrn. R. Mir geschehe nach deinem Wort. — Gegrüßet seist du, Maria … — V. Und das Wort ist Fleisch geworden. R. Und hat unter uns gewohnt. — Gegrüßet seist du, Maria … — V. Bitte für uns, heilige Gottesmutter. R. Auf dass wir würdig werden der Verheißungen Christi. Lasset uns beten. Allmächtiger Gott, gieße deine Gnade in unsere Herzen ein. Durch die Botschaft des Engels haben wir die Menschwerdung Christi, deines Sohnes, erkannt. Lass uns durch sein Leiden und Kreuz zur Herrlichkeit der Auferstehung gelangen. Darum bitten wir durch Christus, unsern Herrn. Amen.',
    },
  },
  {
    id: 'regina-caeli',
    title: { la: 'Regina cæli', de: 'Freu dich, du Himmelskönigin' },
    rubric: { de: 'In der Osterzeit anstelle des „Angelus“.' },
    text: {
      la: 'Regína cæli, lætáre, allelúia. Quia quem meruísti portáre, allelúia. Resurréxit, sicut dixit, allelúia. Ora pro nobis Deum, allelúia.',
      de: 'Freu dich, du Himmelskönigin, halleluja. Den du zu tragen würdig warst, halleluja, er ist erstanden, wie er gesagt, halleluja. Bitt Gott für uns, o Königin, halleluja.',
    },
  },
  {
    id: 'actus-contritionis',
    title: { la: 'Actus contritionis', de: 'Reueakt' },
    text: {
      la: 'Deus meus, ex toto corde pǽnitet me ómnium meórum peccatórum, éaque detéstor, quia peccándo non solum pœnas a te iuste statútas proméritus sum, sed præsértim quia offéndi te, summe bonum ac dignum qui super ómnia diligáris. Ideo fírmiter propóno, adiuvánte grátia tua, de cétero me non peccatúrum peccandíque occasiónes próximas fugitúrum. Amen.',
      de: 'Mein Gott, aus ganzem Herzen bereue ich alle meine Sünden, nicht nur wegen der gerechten Strafen, die ich verdient habe, sondern vor allem, weil ich dich, das höchste Gut, beleidigt habe, der du der Liebe über alles würdig bist. Ich nehme mir fest vor, mit Hilfe deiner Gnade nicht mehr zu sündigen und die Gelegenheiten zur Sünde zu meiden. Amen.',
    },
  },
]
