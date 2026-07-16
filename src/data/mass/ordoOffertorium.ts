import type { LiturgicalSection } from '../types'

// Ordo Missae 1962 – Opferung (Offertorium). Die stillen Opferungsgebete des
// Priesters, gemeinfrei (Missale Romanum 1962), je Latein/Deutsch, jedes Gebet
// ein eigener Abschnitt. Vorangestellt der Gruß vor dem Offertorium.

/** Gruß vor der Opferung. */
export const salutatioOffertorium: LiturgicalSection[] = [
  {
    id: 'dominus-vobiscum-offertorium',
    kind: 'ordinarium',
    title: { la: 'Dóminus vobíscum', de: 'Gruß vor der Opferung' },
    rubric: { de: 'Nach dem Credo grüßt der Priester das Volk.' },
    text: {
      la: '℣. Dóminus vobíscum. ℟. Et cum spíritu tuo. ℣. Orémus.',
      de: '℣. Der Herr sei mit euch. ℟. Und mit deinem Geiste. ℣. Lasset uns beten.',
    },
  },
]

/** Die Opferungsgebete. */
export const offertoriumGebete: LiturgicalSection[] = [
  {
    id: 'suscipe-sancte-pater',
    kind: 'ordinarium',
    title: { la: 'Súscipe, sancte Pater', de: 'Aufopferung des Brotes' },
    rubric: { de: 'Der Priester erhebt die Patene mit der Hostie.' },
    text: {
      la: 'Súscipe, sancte Pater, omnípotens ætérne Deus, hanc immaculátam hóstiam, quam ego indígnus fámulus tuus óffero tibi Deo meo vivo et vero, pro innumerabílibus peccátis, et offensiónibus, et negligéntiis meis, et pro ómnibus circumstántibus, sed et pro ómnibus fidélibus christiánis vivis atque defúnctis: ut mihi et illis profíciat ad salútem in vitam ætérnam. Amen.',
      de: 'Nimm an, heiliger Vater, allmächtiger ewiger Gott, diese makellose Opfergabe, die ich, dein unwürdiger Diener, dir, meinem lebendigen und wahren Gott, darbringe für meine unzähligen Sünden, Beleidigungen und Nachlässigkeiten, für alle Umstehenden und für alle gläubigen Christen, Lebende und Verstorbene: dass sie mir und ihnen zum Heil gereiche für das ewige Leben. Amen.',
    },
  },
  {
    id: 'deus-qui-humanae',
    kind: 'ordinarium',
    title: { la: 'Deus, qui humánæ substántiæ', de: 'Mischung von Wein und Wasser' },
    rubric: { de: 'Beim Eingießen des Wassers in den Kelch.' },
    text: {
      la: 'Deus, qui humánæ substántiæ dignitátem mirabíliter condidísti, et mirabílius reformásti: da nobis per huius aquæ et vini mystérium, eius divinitátis esse consórtes, qui humanitátis nostræ fíeri dignátus est párticeps, Iesus Christus, Fílius tuus, Dóminus noster: Qui tecum vivit et regnat. Amen.',
      de: 'O Gott, du hast die Würde des menschlichen Wesens wunderbar erschaffen und noch wunderbarer erneuert: Gib uns durch das Geheimnis dieses Wassers und Weines Anteil an der Gottheit dessen, der sich gewürdigt hat, unsere Menschennatur anzunehmen, Jesus Christus, dein Sohn, unser Herr, der mit dir lebt und herrscht. Amen.',
    },
  },
  {
    id: 'offerimus-tibi',
    kind: 'ordinarium',
    title: { la: 'Offérimus tibi, Dómine', de: 'Aufopferung des Kelches' },
    rubric: { de: 'Der Priester erhebt den Kelch.' },
    text: {
      la: 'Offérimus tibi, Dómine, cálicem salutáris, tuam deprecántes cleméntiam: ut in conspéctu divínæ maiestátis tuæ, pro nostra et totíus mundi salúte, cum odóre suavitátis ascéndat. Amen.',
      de: 'Wir bringen dir, o Herr, den Kelch des Heiles dar und flehen zu deiner Milde: Er steige vor dem Angesicht deiner göttlichen Majestät für unser und der ganzen Welt Heil als lieblicher Wohlgeruch empor. Amen.',
    },
  },
  {
    id: 'in-spiritu-humilitatis',
    kind: 'ordinarium',
    title: { la: 'In spíritu humilitátis', de: 'Im Geiste der Demut' },
    text: {
      la: 'In spíritu humilitátis et in ánimo contríto suscipiámur a te, Dómine: et sic fiat sacrifícium nostrum in conspéctu tuo hódie, ut pláceat tibi, Dómine Deus.',
      de: 'Im Geiste der Demut und mit zerknirschtem Herzen mögen wir von dir angenommen werden, o Herr; und so geschehe heute unser Opfer vor deinem Angesicht, dass es dir gefalle, Herr und Gott.',
    },
  },
  {
    id: 'veni-sanctificator',
    kind: 'ordinarium',
    title: { la: 'Veni, sanctificátor', de: 'Anrufung des Heiligen Geistes' },
    text: {
      la: 'Veni, sanctificátor omnípotens ætérne Deus: et bénedic hoc sacrifícium, tuo sancto nómini præparátum.',
      de: 'Komm, Heiligmacher, allmächtiger ewiger Gott, und segne dieses Opfer, das für deinen heiligen Namen bereitet ist.',
    },
  },
  {
    id: 'lavabo',
    kind: 'ordinarium',
    title: { la: 'Lavábo inter innocéntes', de: 'Händewaschung (Psalm 25)' },
    reference: { la: 'Ps 25, 6-12', de: 'Ps 25, 6-12' },
    rubric: { de: 'Der Priester wäscht die Finger.' },
    text: {
      la: 'Lavábo inter innocéntes manus meas: et circúmdabo altáre tuum, Dómine. Ut áudiam vocem laudis, et enárrem univérsa mirabília tua. Dómine, diléxi decórem domus tuæ, et locum habitatiónis glóriæ tuæ. Ne perdas cum ímpiis, Deus, ánimam meam, et cum viris sánguinum vitam meam. Rédime me, et miserére mei. Pes meus stetit in dirécto: in ecclésiis benedícam te, Dómine. Glória Patri, et Fílio, et Spirítui Sancto. Sicut erat in princípio, et nunc, et semper, et in sǽcula sæculórum. Amen.',
      de: 'Ich wasche meine Hände in Unschuld und umschreite deinen Altar, o Herr, um die Stimme des Lobes zu hören und all deine Wunder zu verkünden. Herr, ich liebe die Zier deines Hauses und den Ort, wo deine Herrlichkeit wohnt. Raffe nicht mit den Sündern meine Seele hinweg, o Gott, und mein Leben nicht mit den Männern des Blutes. Erlöse mich und erbarme dich meiner. Mein Fuß steht auf rechtem Weg; in den Versammlungen will ich dich preisen, o Herr. Ehre sei dem Vater und dem Sohn und dem Heiligen Geist, wie im Anfang, so auch jetzt und allezeit und in Ewigkeit. Amen.',
    },
  },
  {
    id: 'suscipe-sancta-trinitas',
    kind: 'ordinarium',
    title: { la: 'Súscipe, sancta Trínitas', de: 'Aufopferung an die heiligste Dreifaltigkeit' },
    text: {
      la: 'Súscipe, sancta Trínitas, hanc oblatiónem, quam tibi offérimus ob memóriam passiónis, resurrectiónis, et ascensiónis Iesu Christi Dómini nostri: et in honórem beátæ Maríæ semper Vírginis, et beáti Ioánnis Baptístæ, et sanctórum Apostolórum Petri et Pauli, et istórum et ómnium Sanctórum: ut illis profíciat ad honórem, nobis autem ad salútem: et illi pro nobis intercédere dignéntur in cælis, quorum memóriam ágimus in terris. Per eúndem Christum Dóminum nostrum. Amen.',
      de: 'Nimm an, heiligste Dreifaltigkeit, diese Opfergabe, die wir dir darbringen zum Andenken an das Leiden, die Auferstehung und Himmelfahrt unseres Herrn Jesus Christus, und zur Ehre der seligen allzeit reinen Jungfrau Maria, des heiligen Johannes des Täufers, der heiligen Apostel Petrus und Paulus, dieser und aller Heiligen: ihnen gereiche sie zur Ehre, uns aber zum Heil; und sie mögen im Himmel für uns einzutreten geruhen, deren Andenken wir auf Erden begehen. Durch denselben Christus, unseren Herrn. Amen.',
    },
  },
  {
    id: 'orate-fratres',
    kind: 'ordinarium',
    title: { la: 'Oráte, fratres', de: 'Betet, Brüder' },
    rubric: { de: 'Der Priester wendet sich zum Volk und spricht; die Antwort folgt.' },
    text: {
      la: 'Oráte, fratres: ut meum ac vestrum sacrifícium acceptábile fiat apud Deum Patrem omnipoténtem. ℟. Suscípiat Dóminus sacrifícium de mánibus tuis ad laudem et glóriam nóminis sui, ad utilitátem quoque nostram, totiúsque Ecclésiæ suæ sanctæ. Amen.',
      de: 'Betet, Brüder, dass mein und euer Opfer wohlgefällig werde bei Gott, dem allmächtigen Vater. ℟. Der Herr nehme das Opfer an aus deinen Händen zum Lob und Ruhm seines Namens, uns aber und seiner ganzen heiligen Kirche zum Nutzen. Amen.',
    },
  },
]
