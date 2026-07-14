import type { Hour } from '../types'

// Die „Lesehore": Matutin (Breviarium Romanum 1962) bzw. Officium lectionis
// (neues Stundenbuch). 1962-Texte gemeinfrei; deutsche Fassung des neuen
// Stundenbuchs geschützt – hier gemeinfrei. Beispielinhalt (Auswahl je ein Nokturn).

export const matutin1962: Hour = {
  id: 'matutin-1962',
  form: '1962',
  hour: 'matutin',
  name: { la: 'Matutinum', de: 'Matutin (Nachtwache)' },
  day: { title: { la: 'Dominica', de: 'Sonntag' }, color: 'green' },
  note: 'Breviarium Romanum 1962, gemeinfrei. Beispielinhalt (verkürzter Nokturn).',
  sections: [
    {
      id: 'm62-invitatorium',
      kind: 'ordinarium',
      title: { la: 'Invitatorium (Ps 94)', de: 'Einladungspsalm (Ps 94)' },
      text: {
        la: 'Veníte, exsultémus Dómino, iubilémus Deo salutári nostro: præoccupémus fáciem eius in confessióne, et in psalmis iubilémus ei.',
        de: 'Kommt, lasst uns frohlocken vor dem Herrn, jubeln unserem Gott, unserem Heile; lasst uns vor sein Angesicht treten mit Lobpreis und ihm zujubeln mit Psalmen.',
      },
      chant: {
        chantable: true,
        mode: 'IV',
        gabc: '(c4) Ve(f)ní(gh)te,(h) *() ex(hg)sul(g)té(gh)mus(h) Dó(hg)mi(g)no.(g) (::)',
      },
    },
    {
      id: 'm62-hymnus',
      kind: 'proprium',
      title: { la: 'Hymnus', de: 'Hymnus' },
      text: {
        la: 'Primo diérum ómnium, quo mundus exstat cónditus, vel quo resúrgens Cónditor nos, morte victa, líberat.',
        de: 'Am ersten aller Tage ist die Welt aus Gottes Hand erstanden, an dem der Schöpfer auferstand und uns, den Tod besiegend, frei macht.',
      },
      chant: {
        chantable: true,
        mode: 'I',
        gabc: '(c4) Pri(f)mo(g) di(h)é(h)rum(hg) ó(g)mni(gh)um.(g) (::)',
      },
    },
    {
      id: 'm62-psalmus',
      kind: 'proprium',
      title: { la: 'Psalmus 1', de: 'Psalm 1 (Beatus vir)' },
      text: {
        la: 'Beátus vir, qui non ábiit in consílio impiórum, et in via peccatórum non stetit, et in cáthedra pestiléntiæ non sedit: sed in lege Dómini volúntas eius, et in lege eius meditábitur die ac nocte.',
        de: 'Selig der Mann, der nicht wandelt im Rate der Frevler, nicht steht auf dem Weg der Sünder, nicht sitzt im Kreise der Spötter, sondern seine Freude hat am Gesetze des Herrn und sinnt über sein Gesetz bei Tag und Nacht.',
      },
      chant: {
        chantable: true,
        mode: 'VIII',
        gabc: '(c4) Be(f)á(gh)tus(h) vir,(hg) qui(g) non(gh) á(h)bi(hg)it.(g) (::)',
      },
    },
    {
      id: 'm62-lectio',
      kind: 'proprium',
      title: { la: 'Lectio', de: 'Lesung' },
      reference: { la: 'Is 1, 2-3', de: 'Jes 1, 2-3' },
      text: {
        la: 'Audíte, cæli, et áuribus pércipe, terra, quóniam Dóminus locútus est. Fílios enutrívi et exaltávi: ipsi autem sprevérunt me. Cognóvit bos possessórem suum, et ásinus præsépe dómini sui: Israël autem me non cognóvit.',
        de: 'Höret, ihr Himmel, und vernimm es, o Erde; denn der Herr hat gesprochen: Söhne habe ich großgezogen und erhöht, sie aber haben mich verschmäht. Der Ochs kennt seinen Besitzer und der Esel die Krippe seines Herrn; Israel aber hat mich nicht erkannt.',
      },
    },
    {
      id: 'm62-tedeum',
      kind: 'ordinarium',
      title: { la: 'Hymnus "Te Deum"', de: 'Te Deum (Großer Lobgesang)' },
      rubric: { de: 'An Sonntagen und Festen.' },
      text: {
        la: 'Te Deum laudámus: te Dóminum confitémur. Te ætérnum Patrem omnis terra venerátur. Tibi omnes Ángeli, tibi cæli et univérsæ potestátes: tibi Chérubim et Séraphim incessábili voce proclámant: Sanctus, Sanctus, Sanctus, Dóminus Deus Sábaoth.',
        de: 'Dich, Gott, loben wir, dich, Herr, bekennen wir. Dich, den ewigen Vater, verehrt die ganze Erde. Dir rufen alle Engel, dir Himmel und alle Mächte, dir Cherubim und Seraphim mit niemals endender Stimme zu: Heilig, heilig, heilig, der Herr, der Gott der Heerscharen.',
      },
      chant: {
        chantable: true,
        mode: 'III',
        gabc: '(c4) Te(f) De(g)um(h) lau(h)dá(hg)mus:(g) *() te(gh) Dó(h)mi(h)num(hg) con(g)fi(gh)té(h)mur.(g) (::)',
      },
    },
    {
      id: 'm62-oratio',
      kind: 'proprium',
      title: { la: 'Oratio', de: 'Tagesgebet' },
      text: {
        la: 'Concéde nos fámulos tuos, quǽsumus, Dómine Deus, perpétua mentis et córporis sanitáte gaudére: et, gloriósa beátæ Maríæ semper Vírginis intercessióne, a præsénti liberári tristítia, et ætérna pérfrui lætítia. Per Christum Dóminum nostrum. Amen.',
        de: 'Wir bitten dich, Herr, unser Gott: Gewähre uns, deinen Dienern, dass wir uns steter Gesundheit an Seele und Leib erfreuen, und lass uns auf die glorreiche Fürsprache der seligen, allzeit jungfräulichen Maria von gegenwärtiger Betrübnis befreit und ewiger Freude teilhaftig werden. Durch Christus, unseren Herrn. Amen.',
      },
    },
  ],
}

export const lesehoreNeu: Hour = {
  id: 'lesehore-neu',
  form: 'novusOrdo',
  hour: 'lesehore',
  name: { la: 'Officium lectionis', de: 'Lesehore' },
  day: { title: { de: 'Sonntag / im Jahreskreis' }, color: 'green' },
  note: 'Neue Ordnung (Stundenbuch). Deutsche Fassung hier gemeinfrei; amtliche Texte folgen unter Beachtung der Rechte.',
  sections: [
    {
      id: 'lh-eroeffnung',
      kind: 'ordinarium',
      title: { de: 'Eröffnung' },
      text: {
        la: 'Deus, in adiutórium meum inténde. Dómine, ad adiuvándum me festína.',
        de: 'O Gott, komm mir zu Hilfe. Herr, eile, mir zu helfen. Ehre sei dem Vater und dem Sohn und dem Heiligen Geist.',
      },
    },
    {
      id: 'lh-hymnus',
      kind: 'proprium',
      title: { de: 'Hymnus' },
      text: {
        de: 'Erhabne Wahrheit, ewig eins, du Ursprung, Sinn und Ziel der Welt; wir stehen an des Tages Beginn und singen dir, was uns erhält.',
      },
      chant: {
        chantable: true,
        mode: 'I',
        gabc: '(c4) Er(f)hab(gh)ne(h) Wahr(hg)heit,(g) e(gh)wig(h) eins.(g) (::)',
      },
    },
    {
      id: 'lh-psalm',
      kind: 'proprium',
      title: { de: 'Psalm 1 (Der rechte Weg)' },
      text: {
        de: 'Wohl dem Mann, der nicht dem Rat der Frevler folgt, nicht auf dem Weg der Sünder geht, nicht im Kreis der Spötter sitzt, sondern Freude hat an der Weisung des Herrn, über seine Weisung nachsinnt bei Tag und bei Nacht.',
      },
      chant: {
        chantable: true,
        mode: 'VIII',
        gabc: '(c4) Wohl(f) dem(gh) Mann,(h) der(hg) nicht(g) dem(gh) Rat(h) der(hg) Frev(g)ler(gh) folgt.(g) (::)',
      },
    },
    {
      id: 'lh-lesung1',
      kind: 'proprium',
      title: { de: 'Erste Lesung (biblisch)' },
      reference: { de: 'Jes 1, 2-3.16-18' },
      text: {
        de: 'Hört, ihr Himmel! Horch auf, o Erde! Denn der Herr spricht: Söhne habe ich großgezogen und emporgebracht, doch sie sind treulos an mir geworden … Wascht euch, reinigt euch! Lasst ab von euren bösen Taten! Kommt her, wir wollen miteinander rechten, spricht der Herr. Sind eure Sünden auch rot wie Scharlach, weiß wie Schnee werden sie.',
      },
    },
    {
      id: 'lh-lesung2',
      kind: 'proprium',
      title: { de: 'Zweite Lesung (aus den Vätern)' },
      reference: { de: 'Aus einer Predigt des hl. Augustinus' },
      text: {
        de: 'Spät habe ich dich geliebt, du Schönheit, so alt und so neu, spät habe ich dich geliebt. Du warst innen, ich aber außen, und dort suchte ich dich … Du hast gerufen und geschrien und meine Taubheit durchbrochen; du hast geleuchtet und meine Blindheit vertrieben.',
      },
    },
    {
      id: 'lh-tedeum',
      kind: 'ordinarium',
      title: { de: 'Te Deum (Großer Lobgesang)' },
      rubric: { de: 'An Sonntagen und Festen.' },
      text: {
        de: 'Dich, Gott, loben wir, dich, Herr, bekennen wir. Dich, den ewigen Vater, verehrt die ganze Erde. Dir rufen die Engel und alle Mächte des Himmels ohne Ende zu: Heilig, heilig, heilig der Herr, der Gott der Heerscharen.',
      },
      chant: {
        chantable: true,
        mode: 'III',
        gabc: '(c4) Dich,(f) Gott,(gh) lo(h)ben(hg) wir,(g) *() dich,(gh) Herr,(h) be(hg)ken(g)nen(gh) wir.(g) (::)',
      },
    },
    {
      id: 'lh-oratio',
      kind: 'proprium',
      title: { de: 'Schlussgebet' },
      text: {
        de: 'Allmächtiger, ewiger Gott, richte unser Leben aus nach deinem Wohlgefallen, damit wir im Namen deines geliebten Sohnes reich werden an guten Werken. Darum bitten wir durch Christus, unseren Herrn. Amen.',
      },
    },
  ],
}
