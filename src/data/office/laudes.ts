import type { Hour } from '../types'

// Beispiel-Hore: Laudes (Laudes matutinæ) – das Morgenlob der Kirche.
// Zwei Fassungen: 1962 (Breviarium Romanum) und die neue Ordnung (Stundenbuch).
// 1962-Texte gemeinfrei; deutsche Fassung des neuen Stundenbuchs ist geschützt –
// hier gemeinfreie Übersetzung, siehe docs/licensing.md.

export const laudes1962: Hour = {
  id: 'laudes-1962',
  form: '1962',
  hour: 'laudes',
  name: { la: 'Laudes', de: 'Laudes (Morgenlob)' },
  day: { title: { la: 'Feria', de: 'Wochentag' }, color: 'green' },
  note: 'Breviarium Romanum 1962, gemeinfrei. Beispielinhalt; Psalmen und Antiphonen wechseln je Tag/Fest.',
  sections: [
    {
      id: 'l62-deus',
      kind: 'ordinarium',
      title: { la: 'Deus in adiutorium', de: 'Eröffnung' },
      text: {
        la: 'Deus, in adiutórium meum inténde. Dómine, ad adiuvándum me festína. Glória Patri, et Fílio, et Spirítui Sancto. Allelúia.',
        de: 'O Gott, komm mir zu Hilfe. Herr, eile, mir zu helfen. Ehre sei dem Vater und dem Sohn und dem Heiligen Geist. Alleluja.',
      },
    },
    {
      id: 'l62-psalmus',
      kind: 'proprium',
      title: { la: 'Psalmus 92', de: 'Psalm 92 (Dominus regnavit)' },
      text: {
        la: 'Dóminus regnávit, decórem indútus est: indútus est Dóminus fortitúdinem, et præcínxit se. Étenim firmávit orbem terræ, qui non commovébitur. Paráta sedes tua ex tunc: a sǽculo tu es.',
        de: 'Der Herr ist König, mit Hoheit angetan; angetan ist der Herr mit Macht und hat sich gegürtet. Er hat den Erdkreis gefestigt, dass er nicht wankt. Fest steht dein Thron von Anbeginn; von Ewigkeit her bist du.',
      },
      chant: {
        chantable: true,
        mode: 'VIII',
        gabc: '(c4) Dó(f)mi(gh)nus(h) re(h)gná(hg)vit,(g) de(gh)có(h)rem(h) in(hg)dú(g)tus(gh) est.(g) (::)',
      },
    },
    {
      id: 'l62-capitulum',
      kind: 'proprium',
      title: { la: 'Capitulum', de: 'Kurzlesung' },
      reference: { la: 'Rom 13, 12', de: 'Röm 13, 12' },
      text: {
        la: 'Nox præcéssit, dies autem appropinquávit. Abiciámus ergo ópera tenebrárum, et induámur arma lucis.',
        de: 'Die Nacht ist vorgerückt, der Tag aber ist nahe. Lasst uns daher die Werke der Finsternis ablegen und die Waffen des Lichtes anlegen.',
      },
    },
    {
      id: 'l62-benedictus',
      kind: 'ordinarium',
      title: { la: 'Canticum Benedictus', de: 'Lobgesang des Zacharias' },
      reference: { la: 'Luc 1, 68-79', de: 'Lk 1, 68-79' },
      text: {
        la: 'Benedíctus Dóminus Deus Israël, quia visitávit et fecit redemptiónem plebis suæ: et eréxit cornu salútis nobis in domo David púeri sui.',
        de: 'Gepriesen sei der Herr, der Gott Israels; denn er hat sein Volk besucht und ihm Erlösung geschaffen und uns ein Horn des Heiles aufgerichtet im Hause Davids, seines Knechtes.',
      },
      chant: {
        chantable: true,
        mode: 'IV',
        gabc: '(c4) Be(f)ne(gh)díc(h)tus(h) Dó(hg)mi(g)nus(gh) De(h)us(h) Is(hg)ra(g)ël.(g) (::)',
      },
    },
    {
      id: 'l62-oratio',
      kind: 'proprium',
      title: { la: 'Oratio', de: 'Tagesgebet' },
      text: {
        la: 'Dómine Deus omnípotens, qui ad princípium huius diéi nos perveníre fecísti: tua nos hódie salva virtúte; ut in hac die ad nullum declinémus peccátum. Per Christum Dóminum nostrum. Amen.',
        de: 'Herr, allmächtiger Gott, der du uns an den Anfang dieses Tages hast gelangen lassen: Rette uns heute durch deine Kraft, dass wir an diesem Tage in keine Sünde geraten. Durch Christus, unseren Herrn. Amen.',
      },
    },
  ],
}

export const laudesNeu: Hour = {
  id: 'laudes-neu',
  form: 'novusOrdo',
  hour: 'laudes',
  name: { la: 'Laudes', de: 'Laudes – Morgenlob' },
  day: { title: { de: 'Wochentag / im Jahreskreis' }, color: 'green' },
  note: 'Neue Ordnung (Stundenbuch). Deutsche Fassung hier gemeinfrei; amtliche Texte folgen unter Beachtung der Rechte.',
  sections: [
    {
      id: 'ln-eroeffnung',
      kind: 'ordinarium',
      title: { de: 'Eröffnung' },
      text: {
        la: 'Deus, in adiutórium meum inténde. Dómine, ad adiuvándum me festína.',
        de: 'O Gott, komm mir zu Hilfe. Herr, eile, mir zu helfen. Ehre sei dem Vater und dem Sohn und dem Heiligen Geist, wie im Anfang, so auch jetzt und alle Zeit und in Ewigkeit. Amen.',
      },
    },
    {
      id: 'ln-hymnus',
      kind: 'proprium',
      title: { de: 'Hymnus' },
      text: {
        de: 'Schon bricht des Tages Licht hervor; nun bete, was in dir noch schläft. Der Morgenstern verkündet uns den Tag, der Christus selber ist.',
      },
      chant: {
        chantable: true,
        mode: 'I',
        gabc: '(c4) Schon(f) bricht(gh) des(h) Ta(h)ges(hg) Licht(g) her(gh)vor.(g) (::)',
      },
    },
    {
      id: 'ln-psalm',
      kind: 'proprium',
      title: { de: 'Psalm 63 (Morgenpsalm)' },
      text: {
        de: 'Gott, du mein Gott, dich suche ich, meine Seele dürstet nach dir. Nach dir schmachtet mein Leib wie dürres, lechzendes Land ohne Wasser. Denn deine Huld ist besser als das Leben; darum preisen dich meine Lippen.',
      },
      chant: {
        chantable: true,
        mode: 'IV',
        gabc: '(c4) Gott,(f) du(gh) mein(h) Gott,(hg) dich(g) su(gh)che(h) ich.(g) (::)',
      },
    },
    {
      id: 'ln-lesung',
      kind: 'proprium',
      title: { de: 'Kurzlesung' },
      reference: { de: '2 Petr 1, 19' },
      text: {
        de: 'Umso fester haben wir das prophetische Wort, und ihr tut gut daran, darauf zu achten wie auf ein Licht, das an einem finsteren Ort scheint, bis der Tag anbricht und der Morgenstern aufgeht in euren Herzen.',
      },
    },
    {
      id: 'ln-benedictus',
      kind: 'ordinarium',
      title: { de: 'Lobgesang des Zacharias (Benedictus)' },
      reference: { de: 'Lk 1, 68-79' },
      text: {
        de: 'Gepriesen sei der Herr, der Gott Israels; denn er hat sein Volk besucht und erlöst. Er hat uns einen starken Retter erweckt im Hause seines Knechtes David.',
      },
      chant: {
        chantable: true,
        mode: 'IV',
        gabc: '(c4) Ge(f)prie(gh)sen(h) sei(h) der(hg) Herr,(g) der(gh) Gott(h) Is(hg)ra(g)els.(g) (::)',
      },
    },
    {
      id: 'ln-bitten',
      kind: 'ordinarium',
      title: { de: 'Bitten, Vaterunser und Schlussgebet' },
      text: {
        de: 'Lasst uns Christus, die Sonne der Gerechtigkeit, anrufen: Herr, segne diesen Tag. — Vater unser im Himmel … — Allmächtiger Gott, wende dich uns zu am Beginn dieses Tages und hilf uns, ihn ganz in deinem Dienst zu vollenden. Darum bitten wir durch Christus, unseren Herrn. Amen.',
      },
    },
  ],
}
