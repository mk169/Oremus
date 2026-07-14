import type { Hour } from '../types'

// Vesper (Vesperæ) – das Abendlob der Kirche, in beiden Formen.
// 1962-Texte gemeinfrei; deutsche Fassung des neuen Stundenbuchs geschützt –
// hier gemeinfreie Übersetzung. Beispielinhalt; Psalmen/Antiphonen wechseln.

export const vesper1962: Hour = {
  id: 'vesper-1962',
  form: '1962',
  hour: 'vesper',
  name: { la: 'Vesperæ', de: 'Vesper (Abendlob)' },
  day: { title: { la: 'Dominica', de: 'Sonntag' }, color: 'green' },
  note: 'Breviarium Romanum 1962, gemeinfrei. Beispielinhalt (Sonntagsvesper).',
  sections: [
    {
      id: 'v62-deus',
      kind: 'ordinarium',
      title: { la: 'Deus in adiutorium', de: 'Eröffnung' },
      text: {
        la: 'Deus, in adiutórium meum inténde. Dómine, ad adiuvándum me festína. Glória Patri, et Fílio, et Spirítui Sancto. Sicut erat in princípio, et nunc, et semper, et in sǽcula sæculórum. Amen. Allelúia.',
        de: 'O Gott, komm mir zu Hilfe. Herr, eile, mir zu helfen. Ehre sei dem Vater und dem Sohn und dem Heiligen Geist, wie im Anfang, so auch jetzt und allezeit und in Ewigkeit. Amen. Alleluja.',
      },
    },
    {
      id: 'v62-psalmus',
      kind: 'proprium',
      title: { la: 'Psalmus 109', de: 'Psalm 109 (Dixit Dominus)' },
      text: {
        la: 'Dixit Dóminus Dómino meo: Sede a dextris meis: donec ponam inimícos tuos, scabéllum pedum tuórum. Virgam virtútis tuæ emíttet Dóminus ex Sion: domináre in médio inimicórum tuórum.',
        de: 'Es sprach der Herr zu meinem Herrn: Setze dich zu meiner Rechten, bis ich deine Feinde hinlege als Schemel deiner Füße. Das Zepter deiner Macht wird der Herr aus Sion senden: Herrsche inmitten deiner Feinde.',
      },
      chant: {
        chantable: true,
        mode: 'I',
        gabc: '(c4) Di(f)xit(gh) Dó(h)mi(h)nus(hg) Dó(g)mi(gh)no(h) me(hg)o:(g) (::)',
      },
    },
    {
      id: 'v62-capitulum',
      kind: 'proprium',
      title: { la: 'Capitulum', de: 'Kurzlesung' },
      reference: { la: '2 Cor 1, 3-4', de: '2 Kor 1, 3-4' },
      text: {
        la: 'Benedíctus Deus et Pater Dómini nostri Iesu Christi, Pater misericordiárum, et Deus totíus consolatiónis, qui consolátur nos in omni tribulatióne nostra.',
        de: 'Gepriesen sei Gott, der Vater unseres Herrn Jesus Christus, der Vater der Erbarmungen und der Gott allen Trostes, der uns tröstet in all unserer Trübsal.',
      },
    },
    {
      id: 'v62-hymnus',
      kind: 'proprium',
      title: { la: 'Hymnus "Lucis Creator optime"', de: 'Hymnus' },
      text: {
        la: 'Lucis Creátor óptime, lucem diérum próferens, primórdiis lucis novæ mundi parans oríginem.',
        de: 'Erhabner Schöpfer allen Lichts, der du das Licht der Tage schaffst, am Anbeginn des neuen Lichts der Welt den Ursprung du bereitest.',
      },
      chant: {
        chantable: true,
        mode: 'VIII',
        gabc: '(c4) Lu(f)cis(g) Cre(h)á(h)tor(hg) ó(g)pti(gh)me,(h) (,) lu(h)cem(hg) di(g)é(gh)rum(h) pró(hg)fe(g)rens.(g) (::)',
      },
    },
    {
      id: 'v62-magnificat',
      kind: 'ordinarium',
      title: { la: 'Canticum Magnificat', de: 'Lobgesang Mariens' },
      reference: { la: 'Luc 1, 46-55', de: 'Lk 1, 46-55' },
      text: {
        la: 'Magníficat ánima mea Dóminum: et exsultávit spíritus meus in Deo salutári meo. Quia respéxit humilitátem ancíllæ suæ: ecce enim ex hoc beátam me dicent omnes generatiónes.',
        de: 'Meine Seele preist die Größe des Herrn, und mein Geist frohlockt in Gott, meinem Heile. Denn er hat auf die Niedrigkeit seiner Magd geschaut; siehe, von nun an preisen mich selig alle Geschlechter.',
      },
      chant: {
        chantable: true,
        mode: 'VIII',
        gabc: '(c4) Ma(f)gní(gh)fi(h)cat(h) *() á(hg)ni(g)ma(gh) me(h)a(h) Dó(hg)mi(g)num.(g) (::)',
      },
    },
    {
      id: 'v62-oratio',
      kind: 'proprium',
      title: { la: 'Oratio', de: 'Tagesgebet' },
      text: {
        la: 'Deus, qui errántibus, ut in viam possint redíre iustítiæ, veritátis tuæ lumen osténdis: da cunctis, qui christiána professióne censéntur, et illa respúere, quæ huic inimíca sunt nómini, et ea, quæ sunt apta, sectári. Per Christum Dóminum nostrum. Amen.',
        de: 'O Gott, du zeigst den Irrenden das Licht deiner Wahrheit, damit sie auf den Weg der Gerechtigkeit zurückfinden. Gib allen, die sich zum christlichen Namen bekennen, dass sie verwerfen, was diesem Namen widerstreitet, und dem folgen, was ihm entspricht. Durch Christus, unseren Herrn. Amen.',
      },
    },
  ],
}

export const vesperNeu: Hour = {
  id: 'vesper-neu',
  form: 'novusOrdo',
  hour: 'vesper',
  name: { la: 'Vesperæ', de: 'Vesper – Abendlob' },
  day: { title: { de: 'Sonntag / im Jahreskreis' }, color: 'green' },
  note: 'Neue Ordnung (Stundenbuch). Deutsche Fassung hier gemeinfrei; amtliche Texte folgen unter Beachtung der Rechte.',
  sections: [
    {
      id: 'vn-eroeffnung',
      kind: 'ordinarium',
      title: { de: 'Eröffnung' },
      text: {
        la: 'Deus, in adiutórium meum inténde. Dómine, ad adiuvándum me festína.',
        de: 'O Gott, komm mir zu Hilfe. Herr, eile, mir zu helfen. Ehre sei dem Vater und dem Sohn und dem Heiligen Geist, wie im Anfang, so auch jetzt und alle Zeit und in Ewigkeit. Amen.',
      },
    },
    {
      id: 'vn-hymnus',
      kind: 'proprium',
      title: { de: 'Hymnus' },
      text: {
        de: 'Der Tag, mein Gott, ist nun vergangen und wird vom Dunkel überweht. Am Morgen hast du Lob empfangen, zu dir auch abends steigt Gebet.',
      },
      chant: {
        chantable: true,
        mode: 'VIII',
        gabc: '(c4) Der(f) Tag,(gh) mein(h) Gott,(hg) ist(g) nun(gh) ver(h)gan(hg)gen.(g) (::)',
      },
    },
    {
      id: 'vn-psalm',
      kind: 'proprium',
      title: { de: 'Psalm 110 (Dixit Dominus)' },
      text: {
        de: 'So spricht der Herr zu meinem Herrn: Setze dich mir zur Rechten, und ich lege dir deine Feinde als Schemel unter die Füße. Vom Zion strecke der Herr das Zepter deiner Macht aus: Herrsche inmitten deiner Feinde!',
      },
      chant: {
        chantable: true,
        mode: 'I',
        gabc: '(c4) So(f) spricht(gh) der(h) Herr(hg) zu(g) mei(gh)nem(h) Herrn.(g) (::)',
      },
    },
    {
      id: 'vn-lesung',
      kind: 'proprium',
      title: { de: 'Kurzlesung' },
      reference: { de: '2 Kor 1, 3-4' },
      text: {
        de: 'Gepriesen sei der Gott und Vater unseres Herrn Jesus Christus, der Vater des Erbarmens und der Gott allen Trostes. Er tröstet uns in all unserer Not, damit auch wir die Kraft haben, alle zu trösten, die in Not sind.',
      },
    },
    {
      id: 'vn-responsorium',
      kind: 'ordinarium',
      title: { de: 'Responsorium' },
      text: {
        de: 'Zu dir, o Herr, erhebe ich meine Seele. — Mein Gott, auf dich vertraue ich. Ehre sei dem Vater und dem Sohn und dem Heiligen Geist.',
      },
    },
    {
      id: 'vn-magnificat',
      kind: 'ordinarium',
      title: { de: 'Lobgesang Mariens (Magnificat)' },
      reference: { de: 'Lk 1, 46-55' },
      text: {
        de: 'Meine Seele preist die Größe des Herrn, und mein Geist jubelt über Gott, meinen Retter. Denn auf die Niedrigkeit seiner Magd hat er geschaut. Siehe, von nun an preisen mich selig alle Geschlechter. Denn der Mächtige hat Großes an mir getan, und sein Name ist heilig.',
      },
      chant: {
        chantable: true,
        mode: 'VIII',
        gabc: '(c4) Mei(f)ne(gh) See(h)le(hg) preist(g) die(gh) Grö(h)ße(hg) des(g) Herrn.(g) (::)',
      },
    },
    {
      id: 'vn-bitten',
      kind: 'ordinarium',
      title: { de: 'Bitten, Vaterunser und Schlussgebet' },
      text: {
        de: 'Lasst uns zu Christus rufen, der die Kirche liebt: Herr, erhöre uns. — Vater unser im Himmel … — Allmächtiger Gott, am Abend dieses Tages bitten wir dich: Höre unser Gebet und geleite uns durch die kommende Nacht zum Licht des neuen Tages. Darum bitten wir durch Christus, unseren Herrn. Amen.',
      },
    },
  ],
}
