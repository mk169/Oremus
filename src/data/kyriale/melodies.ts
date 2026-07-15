import type { BilingualText } from '../types'

// Standardtexte des Ordinariums (für alle Choral-Ordinarien gleich; es
// unterscheidet sich nur die Melodie) sowie die marianischen Antiphonen.
// Dazu von Hand notierte, gemeinfreie GABC-Melodien für die Gesänge, die wir
// schon sicher darstellen können (marianische Antiphonen im einfachen Ton).
// Alle übrigen Melodien tragen eine hinterlegte GregoBase-ID und werden nach
// Freischaltung von GregoBase automatisch nachgeladen (siehe scripts/gregobase-map.json,
// npm run gabc:fetch → src/data/gabc/index.ts `gabcFor`).

export const ordinaryText: Record<string, BilingualText> = {
  kyrie: {
    la: 'Kýrie, eléison. Christe, eléison. Kýrie, eléison.',
    de: 'Herr, erbarme dich. Christus, erbarme dich. Herr, erbarme dich.',
  },
  gloria: {
    la: 'Glória in excélsis Deo. Et in terra pax homínibus bonæ voluntátis. Laudámus te. Benedícimus te. Adorámus te. Glorificámus te. Grátias ágimus tibi propter magnam glóriam tuam…',
    de: 'Ehre sei Gott in der Höhe und Friede auf Erden den Menschen, die guten Willens sind. Wir loben dich. Wir preisen dich. Wir beten dich an. Wir verherrlichen dich. Wir sagen dir Dank ob deiner großen Herrlichkeit…',
  },
  sanctus: {
    la: 'Sanctus, Sanctus, Sanctus, Dóminus Deus Sábaoth. Pleni sunt cæli et terra glória tua. Hosánna in excélsis. Benedíctus qui venit in nómine Dómini. Hosánna in excélsis.',
    de: 'Heilig, heilig, heilig, Herr, Gott der Heerscharen. Erfüllt sind Himmel und Erde von deiner Herrlichkeit. Hosanna in der Höhe. Hochgelobt sei, der da kommt im Namen des Herrn. Hosanna in der Höhe.',
  },
  agnus: {
    la: 'Agnus Dei, qui tollis peccáta mundi: miserére nobis. Agnus Dei, qui tollis peccáta mundi: miserére nobis. Agnus Dei, qui tollis peccáta mundi: dona nobis pacem.',
    de: 'Lamm Gottes, du nimmst hinweg die Sünden der Welt: erbarme dich unser. … erbarme dich unser. … gib uns den Frieden.',
  },
}

export const credoText: BilingualText = {
  la: 'Credo in unum Deum, Patrem omnipoténtem, factórem cæli et terræ, visibílium ómnium et invisibílium… Et exspécto resurrectiónem mortuórum. Et vitam ventúri sǽculi. Amen.',
  de: 'Ich glaube an den einen Gott, den allmächtigen Vater, Schöpfer des Himmels und der Erde, aller sichtbaren und unsichtbaren Dinge… Und ich erwarte die Auferstehung der Toten und das Leben der kommenden Welt. Amen.',
}

// Text je marianischer Antiphon (nach Basis-Name).
export const marianText: Record<string, { title: BilingualText; text: BilingualText }> = {
  'salve-regina': {
    title: { la: 'Salve Regina', de: 'Sei gegrüßt, o Königin' },
    text: {
      la: 'Salve Regína, mater misericórdiæ; vita, dulcédo et spes nostra, salve. Ad te clamámus, éxsules fílii Hevæ. Ad te suspirámus, geméntes et flentes in hac lacrimárum valle. Eia ergo, advocáta nostra, illos tuos misericórdes óculos ad nos convérte. Et Iesum, benedíctum fructum ventris tui, nobis post hoc exsílium osténde. O clemens, o pia, o dulcis Virgo María.',
      de: 'Sei gegrüßt, o Königin, Mutter der Barmherzigkeit; unser Leben, unsere Wonne und unsere Hoffnung, sei gegrüßt. Zu dir rufen wir verbannte Kinder Evas; zu dir seufzen wir trauernd und weinend in diesem Tal der Tränen. Wohlan denn, unsere Fürsprecherin, wende deine barmherzigen Augen uns zu, und nach diesem Elend zeige uns Jesus, die gebenedeite Frucht deines Leibes. O gütige, o milde, o süße Jungfrau Maria.',
    },
  },
  'alma-redemptoris': {
    title: { la: 'Alma Redemptoris Mater', de: 'Erhabene Mutter des Erlösers' },
    text: {
      la: 'Alma Redemptóris Mater, quæ pérvia cæli porta manes, et stella maris, succúrre cadénti, súrgere qui curat, pópulo: tu quæ genuísti, natúra miránte, tuum sanctum Genitórem: Virgo prius ac postérius, Gabriélis ab ore sumens illud Ave, peccatórum miserére.',
      de: 'Erhabene Mutter des Erlösers, du allzeit offene Pforte des Himmels und Stern des Meeres, komm dem fallenden Volk zu Hilfe, das sich müht, aufzustehen. Du hast, während die Natur staunte, deinen heiligen Schöpfer geboren: Jungfrau vorher und nachher, die du aus dem Munde Gabriels jenes „Ave" vernahmst, erbarme dich der Sünder.',
    },
  },
  'ave-regina': {
    title: { la: 'Ave Regina cælorum', de: 'Gegrüßet seist du, Himmelskönigin' },
    text: {
      la: 'Ave Regína cælórum, ave Dómina Angelórum: salve radix, salve porta, ex qua mundo lux est orta. Gaude Virgo gloriósa, super omnes speciósa: vale, o valde decóra, et pro nobis Christum exóra.',
      de: 'Gegrüßet seist du, Königin des Himmels, gegrüßet, Herrin der Engel; sei gegrüßt, du Wurzel, sei gegrüßt, du Pforte, aus der das Licht der Welt erstanden ist. Freu dich, glorreiche Jungfrau, schöner als alle; leb wohl, du hehre Zierde, und bitte für uns Christus.',
    },
  },
  'regina-caeli': {
    title: { la: 'Regina cæli', de: 'Freu dich, du Himmelskönigin' },
    text: {
      la: 'Regína cæli, lætáre, allelúia: quia quem meruísti portáre, allelúia, resurréxit sicut dixit, allelúia. Ora pro nobis Deum, allelúia.',
      de: 'Freu dich, du Himmelskönigin, alleluja, den du zu tragen würdig warst, alleluja, er ist erstanden, wie er gesagt, alleluja. Bitt Gott für uns, alleluja.',
    },
  },
}

// Von Hand notierte GABC (gemeinfrei, einfacher Ton) – vorläufig darstellbar,
// bis die authentischen GregoBase-Melodien geladen sind. Schlüssel = Katalog-ID.
export const handGabc: Record<string, string> = {
  'marian-salve-regina-simple-tone':
    '(c4) Sal(g)ve(h) Re(h)gí(hg)na,(g) *() ma(gh)ter(h) mi(h)se(h)ri(hg)cór(g)di(gh)ae:(h) (;) vi(h)ta,(hg) dul(g)cé(gh)do,(h) et(h) spes(hg) no(g)stra,(gh) sal(hg)ve.(g) (::)',
  'marian-alma-redemptoris-simple-tone':
    '(c4) Al(g)ma(g) Re(h)demp(h)tó(hg)ris(g) Ma(gh)ter,(h) *() quæ(h) pér(h)vi(hg)a(g) cæ(gh)li(h) por(hg)ta(g) ma(gh)nes.(g) (::)',
  'marian-ave-regina-c-lorum-simple-tone':
    '(c4) A(g)ve(h) Re(h)gí(hg)na(g) cæ(gh)ló(h)rum,(h) *() a(h)ve(hg) Dó(g)mi(gh)na(h) An(h)ge(hg)ló(g)rum.(g) (::)',
  'marian-regina-c-li-simple-tone':
    '(c4) Re(g)gí(h)na(h) cæ(hg)li,(g) *() læ(gh)tá(h)re,(h) al(h)le(hg)lú(g)ia.(g) (::)',
}
