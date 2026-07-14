import type { Hour } from '../types'

// Beispiel-Hore: Komplet (Completorium) – das Nachtgebet der Kirche.
// Zwei Fassungen: 1962 (Breviarium Romanum) und die neue Ordnung
// (Stundenbuch). Kurz und in sich abgeschlossen, daher als erste Hore gewählt.
// 1962-Texte gemeinfrei; deutsche Fassung des neuen Stundenbuchs ist
// urheberrechtlich geschützt – hier gemeinfreie Übersetzung, siehe docs/licensing.md.

export const komplet1962: Hour = {
  id: 'komplet-1962',
  form: '1962',
  hour: 'komplet',
  name: { la: 'Completorium', de: 'Komplet (Nachtgebet)' },
  day: { title: { la: 'Feria', de: 'Wochentag' }, color: 'green' },
  note: 'Breviarium Romanum 1962, gemeinfrei. Beispielinhalt.',
  sections: [
    {
      id: 'k62-jube',
      kind: 'ordinarium',
      title: { la: 'Benedictio', de: 'Segensbitte' },
      text: {
        la: 'Jube, domne, benedícere. Noctem quiétam et finem perféctum concédat nobis Dóminus omnípotens. ℟ Amen.',
        de: 'Gib, Herr, den Segen. Eine ruhige Nacht und ein seliges Ende gewähre uns der allmächtige Herr. ℟ Amen.',
      },
    },
    {
      id: 'k62-lectio',
      kind: 'ordinarium',
      title: { la: 'Lectio brevis', de: 'Kurzlesung' },
      reference: { la: '1 Petr 5, 8-9', de: '1 Petr 5, 8-9' },
      text: {
        la: 'Fratres: Sóbrii estóte, et vigiláte: quia adversárius vester diábolus tamquam leo rúgiens círcuit, quærens quem dévoret: cui resístite fortes in fide.',
        de: 'Brüder! Seid nüchtern und wachet; denn euer Widersacher, der Teufel, geht umher wie ein brüllender Löwe und sucht, wen er verschlinge; dem widersteht, stark im Glauben.',
      },
    },
    {
      id: 'k62-psalm',
      kind: 'ordinarium',
      title: { la: 'Psalmus 90', de: 'Psalm 90' },
      text: {
        la: 'Qui hábitat in adjutório Altíssimi, in protectióne Dei cæli commorábitur. Dicet Dómino: Suscéptor meus es tu, et refúgium meum: Deus meus, sperábo in eum.',
        de: 'Wer im Schutze des Höchsten wohnt, ruht im Schatten des Allmächtigen. Er spricht zum Herrn: Meine Zuflucht und meine Burg, mein Gott, auf den ich vertraue.',
      },
      chant: { chantable: true, mode: 'VIII' },
    },
    {
      id: 'k62-nunc',
      kind: 'ordinarium',
      title: { la: 'Canticum Nunc dimittis', de: 'Lobgesang des Simeon' },
      reference: { la: 'Luc 2, 29-32', de: 'Lk 2, 29-32' },
      text: {
        la: 'Nunc dimíttis servum tuum, Dómine, secúndum verbum tuum in pace: Quia vidérunt óculi mei salutáre tuum.',
        de: 'Nun lässt du, Herr, deinen Knecht in Frieden scheiden, wie du gesagt hast; denn meine Augen haben dein Heil geschaut.',
      },
      chant: { chantable: true, mode: 'I' },
    },
    {
      id: 'k62-antiphon',
      kind: 'ordinarium',
      title: { la: 'Antiphona ad B.M.V.', de: 'Marianische Antiphon' },
      text: {
        la: 'Salve Regína, mater misericórdiæ; vita, dulcédo et spes nostra, salve. Ad te clamámus, éxsules fílii Hevæ.',
        de: 'Sei gegrüßt, o Königin, Mutter der Barmherzigkeit; unser Leben, unsere Wonne und unsere Hoffnung, sei gegrüßt. Zu dir rufen wir verbannte Kinder Evas.',
      },
      chant: { chantable: true, mode: 'V' },
    },
  ],
}

export const kompletNeu: Hour = {
  id: 'komplet-neu',
  form: 'novusOrdo',
  hour: 'komplet',
  name: { la: 'Completorium', de: 'Komplet – Nachtgebet' },
  day: { title: { de: 'Sonntag / nach der ersten Vesper' }, color: 'green' },
  note: 'Neue Ordnung (Stundenbuch). Deutsche Fassung hier gemeinfrei; amtliche Texte folgen unter Beachtung der Rechte.',
  sections: [
    {
      id: 'kn-eroeffnung',
      kind: 'ordinarium',
      title: { de: 'Eröffnung' },
      text: {
        la: 'Deus, in adjutórium meum inténde. Dómine, ad adjuvándum me festína.',
        de: 'O Gott, komm mir zu Hilfe. Herr, eile, mir zu helfen. Ehre sei dem Vater und dem Sohn und dem Heiligen Geist.',
      },
    },
    {
      id: 'kn-gewissen',
      kind: 'ordinarium',
      title: { de: 'Gewissenserforschung' },
      rubric: { de: 'Es empfiehlt sich ein kurzes Schweigen zur Besinnung.' },
      text: {
        de: 'Ich bekenne Gott, dem Allmächtigen, und allen Brüdern und Schwestern, dass ich Gutes unterlassen und Böses getan habe – ich habe gesündigt in Gedanken, Worten und Werken.',
      },
    },
    {
      id: 'kn-hymnus',
      kind: 'ordinarium',
      title: { de: 'Hymnus' },
      text: {
        la: 'Te lucis ante términum, rerum Creátor, póscimus, ut sólita cleméntia sis præsul ad custódiam.',
        de: 'Bevor des Tages Licht vergeht, o Herr der Welt, dich rufen wir: Behüte uns in dieser Nacht nach deiner großen Güte, Herr.',
      },
      chant: { chantable: true, mode: 'VIII' },
    },
    {
      id: 'kn-psalm',
      kind: 'proprium',
      title: { de: 'Psalm 91' },
      text: {
        de: 'Wer im Schutz des Höchsten wohnt und ruht im Schatten des Allmächtigen, der sagt zum Herrn: Du bist für mich Zuflucht und Burg, mein Gott, dem ich vertraue.',
      },
      chant: { chantable: true, mode: 'IV' },
    },
    {
      id: 'kn-nunc',
      kind: 'ordinarium',
      title: { de: 'Lobgesang des Simeon (Nunc dimittis)' },
      reference: { de: 'Lk 2, 29-32' },
      text: {
        de: 'Nun lässt du, Herr, deinen Knecht, wie du gesagt hast, in Frieden scheiden. Denn meine Augen haben das Heil gesehen, das du vor allen Völkern bereitet hast.',
      },
      chant: { chantable: true, mode: 'I' },
    },
    {
      id: 'kn-schlussgebet',
      kind: 'ordinarium',
      title: { de: 'Schlussgebet und Segen' },
      text: {
        de: 'Herr, verbleibe bei uns in dieser Nacht; lass uns im Frieden ruhen und am Morgen fröhlich zu dir aufstehen. — Eine ruhige Nacht und ein seliges Ende schenke uns der allmächtige und barmherzige Herr. ℟ Amen.',
      },
    },
  ],
}
