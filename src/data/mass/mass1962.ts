import type { MassFormulary } from '../types'

// Beispielformular: Messe im überlieferten Ritus (1962).
// Ordinarium vollständig (gemeinfrei), Proprium exemplarisch von einem Sonntag
// im Jahreskreis. Gesangsfähige Teile sind markiert; Neumen (GABC) folgen.
// Herkunft der Texte: Missale Romanum 1962 (vorkonziliar, gemeinfrei).

export const mass1962: MassFormulary = {
  id: 'mass-1962-dominica',
  form: '1962',
  day: {
    title: { la: 'Dominica per annum', de: 'Sonntag im Jahreskreis' },
    color: 'green',
    rank: 'Sonntag II. Klasse',
  },
  note: 'Beispielinhalt. Ordinarium gemeinfrei; Proprium exemplarisch. Für jeden Tag/jedes Fest folgt eigenes Proprium.',
  sections: [
    {
      id: 'introitus',
      kind: 'proprium',
      title: { la: 'Introitus', de: 'Eröffnungsvers' },
      reference: { la: 'Ps 24, 16.18', de: 'Ps 24, 16.18' },
      text: {
        la: 'Réspice in me, et miserére mei, Dómine: quóniam únicus et pauper sum ego: vide humilitátem meam et labórem meum: et dimítte ómnia peccáta mea, Deus meus.',
        de: 'Blicke auf mich und erbarme dich meiner, o Herr; denn einsam bin ich und arm. Sieh meine Niedrigkeit und Mühsal, und vergib mir all meine Sünden, mein Gott.',
      },
      chant: { chantable: true, mode: 'VII' },
    },
    {
      id: 'kyrie',
      kind: 'ordinarium',
      title: { la: 'Kyrie', de: 'Herr, erbarme dich' },
      text: {
        la: 'Kýrie, eléison. Christe, eléison. Kýrie, eléison.',
        de: 'Herr, erbarme dich. Christus, erbarme dich. Herr, erbarme dich.',
      },
      chant: { chantable: true, mode: 'I' },
    },
    {
      id: 'gloria',
      kind: 'ordinarium',
      title: { la: 'Gloria', de: 'Ehre sei Gott' },
      rubric: { de: 'An Sonntagen außerhalb von Advent und Fastenzeit.' },
      text: {
        la: 'Glória in excélsis Deo. Et in terra pax homínibus bonæ voluntátis. Laudámus te. Benedícimus te. Adorámus te. Glorificámus te. Grátias ágimus tibi propter magnam glóriam tuam.',
        de: 'Ehre sei Gott in der Höhe und Friede auf Erden den Menschen, die guten Willens sind. Wir loben dich. Wir preisen dich. Wir beten dich an. Wir verherrlichen dich. Wir sagen dir Dank ob deiner großen Herrlichkeit.',
      },
      chant: { chantable: true, mode: 'IV' },
    },
    {
      id: 'collecta',
      kind: 'proprium',
      title: { la: 'Oratio (Collecta)', de: 'Tagesgebet' },
      rubric: { de: 'Der Priester: Oremus.' },
      text: {
        la: 'Deus, refúgium nostrum et virtus: adésto piis Ecclésiæ tuæ précibus, auctor ipse pietátis, et præsta; ut, quod fidéliter pétimus, efficáciter consequámur. Per Dóminum nostrum Jesum Christum.',
        de: 'O Gott, unsere Zuflucht und Stärke, du Urquell aller Frömmigkeit, erhöre die frommen Gebete deiner Kirche und gib, dass wir wirksam erlangen, worum wir gläubig bitten. Durch unseren Herrn Jesus Christus.',
      },
    },
    {
      id: 'epistola',
      kind: 'proprium',
      title: { la: 'Epistola', de: 'Lesung' },
      reference: { la: 'Gal 5, 16-24', de: 'Gal 5, 16-24' },
      text: {
        la: 'Fratres: Spíritu ambuláte, et desidéria carnis non perficiétis… Qui autem sunt Christi, carnem suam crucifixérunt cum vítiis et concupiscéntiis.',
        de: 'Brüder! Wandelt im Geiste, dann werdet ihr die Begierden des Fleisches nicht vollbringen… Die aber Christus angehören, haben ihr Fleisch samt den Lastern und Begierden gekreuzigt.',
      },
    },
    {
      id: 'graduale',
      kind: 'proprium',
      title: { la: 'Graduale', de: 'Antwortgesang' },
      reference: { la: 'Ps 121, 1.7', de: 'Ps 121, 1.7' },
      text: {
        la: 'Lætátus sum in his, quæ dicta sunt mihi: in domum Dómini íbimus. Fiat pax in virtúte tua: et abundántia in túrribus tuis. Allelúia, allelúia.',
        de: 'Ich freute mich, als man mir sagte: Wir ziehen zum Haus des Herrn. Friede walte in deinen Mauern und Wohlstand in deinen Türmen. Alleluja, alleluja.',
      },
      chant: { chantable: true, mode: 'V' },
    },
    {
      id: 'evangelium',
      kind: 'proprium',
      title: { la: 'Evangelium', de: 'Evangelium' },
      reference: { la: 'Matth 6, 24-33', de: 'Mt 6, 24-33' },
      rubric: { de: 'Alle stehen. Der Priester: Dominus vobiscum.' },
      text: {
        la: 'In illo témpore: Dixit Jesus discípulis suis: Nemo potest duóbus dóminis servíre… Quǽrite ergo primum regnum Dei, et justítiam ejus: et hæc ómnia adiciéntur vobis.',
        de: 'In jener Zeit sprach Jesus zu seinen Jüngern: Niemand kann zwei Herren dienen… Suchet also zuerst das Reich Gottes und seine Gerechtigkeit, und dies alles wird euch dazugegeben werden.',
      },
    },
    {
      id: 'credo',
      kind: 'ordinarium',
      title: { la: 'Credo', de: 'Glaubensbekenntnis' },
      text: {
        la: 'Credo in unum Deum, Patrem omnipoténtem, factórem cæli et terræ, visibílium ómnium et invisibílium… Et exspécto resurrectiónem mortuórum. Et vitam ventúri sǽculi. Amen.',
        de: 'Ich glaube an den einen Gott, den allmächtigen Vater, Schöpfer des Himmels und der Erde, aller sichtbaren und unsichtbaren Dinge… Und ich erwarte die Auferstehung der Toten und das Leben der kommenden Welt. Amen.',
      },
      chant: { chantable: true, mode: 'IV' },
    },
    {
      id: 'offertorium',
      kind: 'proprium',
      title: { la: 'Offertorium', de: 'Gabenvers' },
      reference: { la: 'Ps 39, 14-15', de: 'Ps 39, 14-15' },
      text: {
        la: 'Dómine, in auxílium meum réspice: confundántur et revereántur, qui quærunt ánimam meam, ut áuferant eam: Dómine, in auxílium meum réspice.',
        de: 'Herr, blicke her, mir zu helfen. In Schmach und Schande sollen fallen, die mir nach dem Leben trachten. Herr, blicke her, mir zu helfen.',
      },
      chant: { chantable: true, mode: 'I' },
    },
    {
      id: 'sanctus',
      kind: 'ordinarium',
      title: { la: 'Sanctus', de: 'Heilig' },
      text: {
        la: 'Sanctus, Sanctus, Sanctus, Dóminus Deus Sábaoth. Pleni sunt cæli et terra glória tua. Hosánna in excélsis. Benedíctus qui venit in nómine Dómini. Hosánna in excélsis.',
        de: 'Heilig, heilig, heilig, Herr, Gott der Heerscharen. Erfüllt sind Himmel und Erde von deiner Herrlichkeit. Hosanna in der Höhe. Hochgelobt sei, der da kommt im Namen des Herrn. Hosanna in der Höhe.',
      },
      chant: { chantable: true, mode: 'IV' },
    },
    {
      id: 'pater-noster',
      kind: 'ordinarium',
      title: { la: 'Pater noster', de: 'Vaterunser' },
      text: {
        la: 'Pater noster, qui es in cælis: Sanctificétur nomen tuum: Advéniat regnum tuum: Fiat volúntas tua, sicut in cælo, et in terra… Sed líbera nos a malo.',
        de: 'Vater unser im Himmel, geheiligt werde dein Name; dein Reich komme; dein Wille geschehe, wie im Himmel, so auf Erden… Sondern erlöse uns von dem Bösen.',
      },
      chant: { chantable: true, mode: 'A' },
    },
    {
      id: 'agnus-dei',
      kind: 'ordinarium',
      title: { la: 'Agnus Dei', de: 'Lamm Gottes' },
      text: {
        la: 'Agnus Dei, qui tollis peccáta mundi: miserére nobis. Agnus Dei, qui tollis peccáta mundi: miserére nobis. Agnus Dei, qui tollis peccáta mundi: dona nobis pacem.',
        de: 'Lamm Gottes, du nimmst hinweg die Sünden der Welt: erbarme dich unser. Lamm Gottes… erbarme dich unser. Lamm Gottes… gib uns den Frieden.',
      },
      chant: { chantable: true, mode: 'IV' },
    },
    {
      id: 'communio',
      kind: 'proprium',
      title: { la: 'Communio', de: 'Kommunionvers' },
      reference: { la: 'Ps 70, 16-18', de: 'Ps 70, 16-18' },
      text: {
        la: 'Dómine, memorábor justítiæ tuæ solíus: Deus, docuísti me a juventúte mea: et usque in senéctam et sénium, Deus, ne derelínquas me.',
        de: 'Herr, deine Gerechtigkeit allein will ich verkünden. O Gott, von Jugend auf hast du mich unterwiesen; bis in mein Alter und Ergrauen, o Gott, verlass mich nicht.',
      },
      chant: { chantable: true, mode: 'VIII' },
    },
    {
      id: 'postcommunio',
      kind: 'proprium',
      title: { la: 'Postcommunio', de: 'Schlussgebet' },
      text: {
        la: 'Sumptis munéribus sacris, quǽsumus, Dómine: ut cum frequentatióne mystérii, crescat nostræ salútis efféctus. Per Dóminum nostrum Jesum Christum.',
        de: 'Wir haben die heiligen Gaben empfangen; wir bitten dich, o Herr: Mit dem häufigen Empfang des Geheimnisses wachse in uns die Wirkung unseres Heiles. Durch unseren Herrn Jesus Christus.',
      },
    },
    {
      id: 'ite-missa-est',
      kind: 'ordinarium',
      title: { la: 'Ite, missa est', de: 'Entlassung' },
      text: {
        la: 'Ite, missa est. ℟ Deo grátias.',
        de: 'Gehet hin, ihr seid entlassen. ℟ Dank sei Gott.',
      },
      chant: { chantable: true, mode: 'IV' },
    },
  ],
}
