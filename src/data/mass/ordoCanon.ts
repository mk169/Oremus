import type { LiturgicalSection } from '../types'

// Ordo Missae 1962 – Präfation und Römischer Kanon (Canon Romanus). Gemeinfrei
// (Missale Romanum 1962), je Latein/Deutsch. Präfationsdialog vollständig;
// jeder Abschnitt des Kanons als eigener Teil. Das Sanctus folgt als eigener
// (gesungener) Abschnitt im Messformular.

/** Präfationsdialog und gemeinsame Präfation (leitet zum Sanctus). */
export const praefatioSanctus: LiturgicalSection[] = [
  {
    id: 'praefatio-dialog',
    kind: 'ordinarium',
    title: { la: 'Præfátio – Dialog', de: 'Präfation – Eröffnungsdialog' },
    text: {
      la: '℣. Per ómnia sǽcula sæculórum. ℟. Amen. ℣. Dóminus vobíscum. ℟. Et cum spíritu tuo. ℣. Sursum corda. ℟. Habémus ad Dóminum. ℣. Grátias agámus Dómino Deo nostro. ℟. Dignum et iustum est.',
      de: '℣. In alle Ewigkeit. ℟. Amen. ℣. Der Herr sei mit euch. ℟. Und mit deinem Geiste. ℣. Empor die Herzen! ℟. Wir haben sie beim Herrn. ℣. Lasset uns danken dem Herrn, unserm Gott. ℟. Das ist würdig und recht.',
    },
  },
  {
    id: 'praefatio-communis',
    kind: 'ordinarium',
    title: { la: 'Præfátio commúnis', de: 'Gemeinsame Präfation' },
    rubric: { de: 'An Tagen ohne eigene Präfation.' },
    text: {
      la: 'Vere dignum et iustum est, æquum et salutáre, nos tibi semper et ubíque grátias ágere: Dómine sancte, Pater omnípotens, ætérne Deus: per Christum Dóminum nostrum. Per quem maiestátem tuam laudant Angeli, adórant Dominatiónes, tremunt Potestátes. Cæli cælorúmque Virtútes ac beáta Séraphim sócia exsultatióne concélebrant. Cum quibus et nostras voces ut admítti iúbeas, deprecámur, súpplici confessióne dicéntes:',
      de: 'Es ist wahrhaft würdig und recht, billig und heilsam, dir immer und überall dank zu sagen, heiliger Herr, allmächtiger Vater, ewiger Gott, durch Christus, unseren Herrn. Durch ihn loben die Engel deine Majestät, beten die Herrschaften sie an, zittern die Mächte. Die Himmel und der Himmel Kräfte und die seligen Seraphim feiern sie in gemeinsamem Jubel. Mit ihnen lass, so flehen wir, auch unsere Stimmen sich vereinen, indem wir in demütigem Lobpreis sprechen:',
    },
  },
]

/** Der Römische Kanon, Abschnitt für Abschnitt. */
export const canonRomanus: LiturgicalSection[] = [
  {
    id: 'te-igitur',
    kind: 'ordinarium',
    title: { la: 'Te ígitur', de: 'Bitte um Annahme des Opfers' },
    rubric: { de: 'Beginn des Kanons; der Priester verneigt sich tief.' },
    text: {
      la: 'Te ígitur, clementíssime Pater, per Iesum Christum, Fílium tuum, Dóminum nostrum, súpplices rogámus, ac pétimus, uti accépta hábeas et benedícas hæc dona, hæc múnera, hæc sancta sacrifícia illibáta, in primis, quæ tibi offérimus pro Ecclésia tua sancta cathólica: quam pacificáre, custodíre, adunáre et régere dignéris toto orbe terrárum: una cum fámulo tuo Papa nostro N. et Antístite nostro N. et ómnibus orthodóxis, atque cathólicæ et apostólicæ fídei cultóribus.',
      de: 'Dich, gütigster Vater, bitten wir demütig und flehen zu dir durch Jesus Christus, deinen Sohn, unseren Herrn: Nimm diese Gaben, diese Geschenke, diese heiligen, makellosen Opfer gnädig an und segne sie. Wir bringen sie dir vor allem dar für deine heilige katholische Kirche: schenke ihr Frieden, behüte, eine und leite sie auf dem ganzen Erdkreis, zusammen mit deinem Diener, unserem Papst N., unserem Bischof N. und allen rechtgläubigen Bekennern des katholischen und apostolischen Glaubens.',
    },
  },
  {
    id: 'memento-vivorum',
    kind: 'ordinarium',
    title: { la: 'Meménto vivórum', de: 'Gedächtnis der Lebenden' },
    text: {
      la: 'Meménto, Dómine, famulórum famularúmque tuárum N. et N. et ómnium circumstántium, quorum tibi fides cógnita est et nota devótio, pro quibus tibi offérimus: vel qui tibi ófferunt hoc sacrifícium laudis, pro se suísque ómnibus: pro redemptióne animárum suárum, pro spe salútis et incolumitátis suæ: tibíque reddunt vota sua ætérno Deo, vivo et vero.',
      de: 'Gedenke, o Herr, deiner Diener und Dienerinnen N. und N. und aller Umstehenden, deren Glaube dir bekannt und deren Hingabe dir kund ist; für sie bringen wir dir dar, oder sie selbst bringen dir dieses Lobopfer dar für sich und alle die Ihren, für die Erlösung ihrer Seelen, für ihre Hoffnung auf Heil und Wohlergehen: und sie entrichten dir, dem ewigen, lebendigen und wahren Gott, ihre Gelübde.',
    },
  },
  {
    id: 'communicantes',
    kind: 'ordinarium',
    title: { la: 'Communicántes', de: 'In Gemeinschaft mit den Heiligen' },
    text: {
      la: 'Communicántes, et memóriam venerántes, in primis gloriósæ semper Vírginis Maríæ, Genetrícis Dei et Dómini nostri Iesu Christi: sed et beáti Ioseph eiúsdem Vírginis Sponsi, et beatórum Apostolórum ac Mártyrum tuórum, Petri et Pauli, Andréæ, Iacóbi, Ioánnis, Thomæ, Iacóbi, Philíppi, Bartholomǽi, Matthǽi, Simónis et Thaddǽi: Lini, Cleti, Cleméntis, Xysti, Cornélii, Cypriáni, Lauréntii, Chrysógoni, Ioánnis et Pauli, Cosmæ et Damiáni: et ómnium Sanctórum tuórum; quorum méritis precibúsque concédas, ut in ómnibus protectiónis tuæ muniámur auxílio. Per eúndem Christum Dóminum nostrum. Amen.',
      de: 'In Gemeinschaft mit der ganzen Kirche verehren wir das Andenken vor allem der glorreichen, allzeit reinen Jungfrau Maria, der Mutter unseres Gottes und Herrn Jesus Christus, ihres Bräutigams, des heiligen Joseph, deiner heiligen Apostel und Martyrer Petrus und Paulus, Andreas, Jakobus, Johannes, Thomas, Jakobus, Philippus, Bartholomäus, Matthäus, Simon und Thaddäus, Linus, Kletus, Klemens, Xystus, Kornelius, Cyprianus, Laurentius, Chrysogonus, Johannes und Paulus, Kosmas und Damianus und aller deiner Heiligen. Um ihrer Verdienste und Gebete willen gewähre uns in allem den Schutz deiner Hilfe. Durch denselben Christus, unseren Herrn. Amen.',
    },
  },
  {
    id: 'hanc-igitur',
    kind: 'ordinarium',
    title: { la: 'Hanc ígitur', de: 'Bitte um Annahme' },
    rubric: { de: 'Der Priester breitet die Hände über die Gaben.' },
    text: {
      la: 'Hanc ígitur oblatiónem servitútis nostræ, sed et cunctæ famíliæ tuæ, quǽsumus, Dómine, ut placátus accípias: diésque nostros in tua pace dispónas, atque ab ætérna damnatióne nos éripi, et in electórum tuórum iúbeas grege numerári. Per Christum Dóminum nostrum. Amen.',
      de: 'Diese Opfergabe unseres Dienstes und deiner ganzen Familie nimm, o Herr, versöhnt an, wir bitten dich; ordne unsere Tage in deinem Frieden, bewahre uns vor der ewigen Verdammnis und zähle uns zur Herde deiner Auserwählten. Durch Christus, unseren Herrn. Amen.',
    },
  },
  {
    id: 'quam-oblationem',
    kind: 'ordinarium',
    title: { la: 'Quam oblatiónem', de: 'Bitte um Wandlung' },
    text: {
      la: 'Quam oblatiónem tu, Deus, in ómnibus, quǽsumus, benedíctam, adscríptam, ratam, rationábilem, acceptabilémque fácere dignéris: ut nobis Corpus et Sanguis fiat dilectíssimi Fílii tui, Dómini nostri Iesu Christi.',
      de: 'Diese Opfergabe wollest du, o Gott, in allem gesegnet, angenommen, gültig, wohlgefällig und annehmbar machen, so bitten wir, damit sie uns werde der Leib und das Blut deines vielgeliebten Sohnes, unseres Herrn Jesus Christus.',
    },
  },
  {
    id: 'qui-pridie',
    kind: 'ordinarium',
    title: { la: 'Qui prídie', de: 'Wandlung des Brotes' },
    rubric: { de: 'Konsekration der heiligen Hostie.' },
    text: {
      la: 'Qui prídie quam paterétur, accépit panem in sanctas ac venerábiles manus suas, et elevátis óculis in cælum ad te Deum Patrem suum omnipoténtem, tibi grátias agens, benedíxit, fregit, dedítque discípulis suis, dicens: Accípite, et manducáte ex hoc omnes. HOC EST ENIM CORPUS MEUM.',
      de: 'Er nahm am Abend vor seinem Leiden das Brot in seine heiligen und ehrwürdigen Hände, erhob die Augen zum Himmel, zu dir, Gott, seinem allmächtigen Vater, sagte dir Dank, segnete es, brach es und gab es seinen Jüngern mit den Worten: Nehmet hin und esset alle davon. DAS IST NÄMLICH MEIN LEIB.',
    },
  },
  {
    id: 'simili-modo',
    kind: 'ordinarium',
    title: { la: 'Símili modo', de: 'Wandlung des Weines' },
    rubric: { de: 'Konsekration des kostbaren Blutes.' },
    text: {
      la: 'Símili modo postquam cenátum est, accípiens et hunc præclárum Cálicem in sanctas ac venerábiles manus suas: item tibi grátias agens, benedíxit, dedítque discípulis suis, dicens: Accípite, et bíbite ex eo omnes. HIC EST ENIM CALIX SÁNGUINIS MEI, NOVI ET ÆTÉRNI TESTAMÉNTI: MYSTÉRIUM FÍDEI: QUI PRO VOBIS ET PRO MULTIS EFFUNDÉTUR IN REMISSIÓNEM PECCATÓRUM. Hæc quotiescúmque fecéritis, in mei memóriam faciétis.',
      de: 'In gleicher Weise nahm er nach dem Mahl auch diesen kostbaren Kelch in seine heiligen und ehrwürdigen Hände, sagte dir abermals Dank, segnete ihn und gab ihn seinen Jüngern mit den Worten: Nehmet hin und trinket alle daraus. DAS IST NÄMLICH DER KELCH MEINES BLUTES, DES NEUEN UND EWIGEN BUNDES – GEHEIMNIS DES GLAUBENS –, DAS FÜR EUCH UND FÜR VIELE VERGOSSEN WIRD ZUR VERGEBUNG DER SÜNDEN. Sooft ihr dies tut, tut es zu meinem Gedächtnis.',
    },
  },
  {
    id: 'unde-et-memores',
    kind: 'ordinarium',
    title: { la: 'Unde et mémores', de: 'Gedächtnis und Darbringung' },
    text: {
      la: 'Unde et mémores, Dómine, nos servi tui, sed et plebs tua sancta, eiúsdem Christi Fílii tui, Dómini nostri, tam beátæ passiónis, nec non et ab ínferis resurrectiónis, sed et in cælos gloriósæ ascensiónis: offérimus præcláræ maiestáti tuæ de tuis donis ac datis, hóstiam puram, hóstiam sanctam, hóstiam immaculátam, Panem sanctum vitæ ætérnæ, et Cálicem salútis perpétuæ.',
      de: 'Darum, o Herr, feiern wir, deine Diener und dein heiliges Volk, das Gedächtnis des seligen Leidens, der Auferstehung von den Toten und der glorreichen Himmelfahrt desselben Christus, deines Sohnes, unseres Herrn; und wir bringen deiner erhabenen Majestät von deinen Gaben und Geschenken dar das reine Opfer, das heilige Opfer, das makellose Opfer, das heilige Brot des ewigen Lebens und den Kelch des immerwährenden Heiles.',
    },
  },
  {
    id: 'supra-quae',
    kind: 'ordinarium',
    title: { la: 'Supra quæ', de: 'Bitte um gnädige Annahme' },
    text: {
      la: 'Supra quæ propítio ac seréno vultu respícere dignéris: et accépta habére, sícuti accépta habére dignátus es múnera púeri tui iusti Abel, et sacrifícium Patriárchæ nostri Ábrahæ: et quod tibi óbtulit summus sacérdos tuus Melchísedech, sanctum sacrifícium, immaculátam hóstiam.',
      de: 'Auf sie wollest du mit gnädigem und huldvollem Angesicht herabschauen und sie wohlgefällig annehmen, wie du anzunehmen gewürdigt hast die Gaben deines gerechten Dieners Abel, das Opfer unseres Patriarchen Abraham und das heilige Opfer, die makellose Gabe, die dir dein Hoherpriester Melchisedech dargebracht hat.',
    },
  },
  {
    id: 'supplices',
    kind: 'ordinarium',
    title: { la: 'Súpplices te rogámus', de: 'Bitte um Erhörung' },
    text: {
      la: 'Súpplices te rogámus, omnípotens Deus: iube hæc perférri per manus sancti Ángeli tui in sublíme altáre tuum, in conspéctu divínæ maiestátis tuæ: ut, quotquot ex hac altáris participatióne sacrosánctum Fílii tui Corpus et Sánguinem sumpsérimus, omni benedictióne cælésti et grátia repleámur. Per eúndem Christum Dóminum nostrum. Amen.',
      de: 'Demütig bitten wir dich, allmächtiger Gott: Lass dies durch die Hände deines heiligen Engels emportragen zu deinem erhabenen Altar vor das Angesicht deiner göttlichen Majestät, damit wir alle, die wir durch diese Teilnahme am Altar den hochheiligen Leib und das Blut deines Sohnes empfangen, mit aller himmlischen Segnung und Gnade erfüllt werden. Durch denselben Christus, unseren Herrn. Amen.',
    },
  },
  {
    id: 'memento-defunctorum',
    kind: 'ordinarium',
    title: { la: 'Meménto defunctórum', de: 'Gedächtnis der Verstorbenen' },
    text: {
      la: 'Meménto étiam, Dómine, famulórum famularúmque tuárum N. et N., qui nos præcessérunt cum signo fídei, et dórmiunt in somno pacis. Ipsis, Dómine, et ómnibus in Christo quiescéntibus, locum refrigérii, lucis et pacis, ut indúlgeas, deprecámur. Per eúndem Christum Dóminum nostrum. Amen.',
      de: 'Gedenke auch, o Herr, deiner Diener und Dienerinnen N. und N., die uns mit dem Zeichen des Glaubens vorausgegangen sind und im Schlafe des Friedens ruhen. Ihnen, o Herr, und allen, die in Christus ruhen, gewähre, so flehen wir, den Ort der Erquickung, des Lichtes und des Friedens. Durch denselben Christus, unseren Herrn. Amen.',
    },
  },
  {
    id: 'nobis-quoque',
    kind: 'ordinarium',
    title: { la: 'Nobis quoque peccatóribus', de: 'Auch uns Sündern' },
    text: {
      la: 'Nobis quoque peccatóribus fámulis tuis, de multitúdine miseratiónum tuárum sperántibus, partem áliquam et societátem donáre dignéris cum tuis sanctis Apóstolis et Martýribus: cum Ioánne, Stéphano, Matthía, Bárnaba, Ignátio, Alexándro, Marcellíno, Petro, Felicitáte, Perpétua, Ágatha, Lúcia, Agnéte, Cæcília, Anastásia, et ómnibus Sanctis tuis: intra quorum nos consórtium, non æstimátor mériti, sed véniæ, quǽsumus, largítor admítte. Per Christum Dóminum nostrum.',
      de: 'Auch uns, deinen sündigen Dienern, die auf die Fülle deiner Erbarmungen hoffen, gewähre einen Anteil und Gemeinschaft mit deinen heiligen Aposteln und Martyrern: mit Johannes, Stephanus, Matthias, Barnabas, Ignatius, Alexander, Marcellinus, Petrus, Felizitas, Perpetua, Agatha, Luzia, Agnes, Cäcilia, Anastasia und allen deinen Heiligen. In ihre Gemeinschaft nimm uns auf, wir bitten dich, nicht als Richter des Verdienstes, sondern als gütiger Spender der Verzeihung. Durch Christus, unseren Herrn.',
    },
  },
  {
    id: 'per-quem',
    kind: 'ordinarium',
    title: { la: 'Per quem hæc ómnia', de: 'Durch ihn' },
    text: {
      la: 'Per quem hæc ómnia, Dómine, semper bona creas, sanctíficas, vivíficas, benedícis, et præstas nobis.',
      de: 'Durch ihn erschaffst du, o Herr, immerfort all diese guten Gaben, heiligst sie, erfüllst sie mit Leben, segnest sie und spendest sie uns.',
    },
  },
  {
    id: 'per-ipsum',
    kind: 'ordinarium',
    title: { la: 'Per ipsum', de: 'Schlusslobpreis (Doxologie)' },
    rubric: { de: 'Der Priester erhebt Hostie und Kelch (kleine Erhebung).' },
    text: {
      la: 'Per ipsum, et cum ipso, et in ipso, est tibi Deo Patri omnipoténti, in unitáte Spíritus Sancti, omnis honor et glória. Per ómnia sǽcula sæculórum. ℟. Amen.',
      de: 'Durch ihn und mit ihm und in ihm ist dir, Gott, dem allmächtigen Vater, in der Einheit des Heiligen Geistes alle Ehre und Herrlichkeit. In alle Ewigkeit. ℟. Amen.',
    },
  },
]
