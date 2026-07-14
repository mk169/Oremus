import type { LiturgicalSection } from '../types'

// Das Ordinarium der überlieferten Messe (1962), Latein/Deutsch, gemeinfrei.
// Wird mit den (aus Divinum Officium importierten) Tagesproprien zu einem
// vollständigen Messablauf zusammengesetzt (siehe buildMass.ts).

export const ordinarium1962: LiturgicalSection[] = [
  {
    id: 'kyrie',
    kind: 'ordinarium',
    title: { la: 'Kyrie', de: 'Herr, erbarme dich' },
    text: {
      la: 'Kýrie, eléison. Christe, eléison. Kýrie, eléison.',
      de: 'Herr, erbarme dich. Christus, erbarme dich. Herr, erbarme dich.',
    },
    chant: {
      chantable: true,
      mode: 'I',
      gabc: '(c4) Ký(h)ri(h)e(hg~) *() e(hi)lé(hg)i(g)son.(g) (::) Chri(h)ste(hg~) e(hi)lé(hg)i(g)son.(g) (::)',
    },
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
    chant: { chantable: true, mode: 'IV', gabc: '(c4) Gló(g)ri(gh)a(h) in(h) ex(hg)cél(gh)sis(h) De(hjh)o.(g) (::)' },
  },
  {
    id: 'credo',
    kind: 'ordinarium',
    title: { la: 'Credo', de: 'Glaubensbekenntnis' },
    text: {
      la: 'Credo in unum Deum, Patrem omnipoténtem, factórem cæli et terræ, visibílium ómnium et invisibílium… Et exspécto resurrectiónem mortuórum. Et vitam ventúri sǽculi. Amen.',
      de: 'Ich glaube an den einen Gott, den allmächtigen Vater, Schöpfer des Himmels und der Erde… Und ich erwarte die Auferstehung der Toten und das Leben der kommenden Welt. Amen.',
    },
    chant: { chantable: true, mode: 'IV', gabc: '(c4) Cre(g)do(gh) in(h) u(h)num(hg) De(gh)um,(h) Pa(h)trem(hg) o(g)mni(g)po(gh)tén(h)tem.(g) (::)' },
  },
  {
    id: 'sanctus',
    kind: 'ordinarium',
    title: { la: 'Sanctus', de: 'Heilig' },
    text: {
      la: 'Sanctus, Sanctus, Sanctus, Dóminus Deus Sábaoth. Pleni sunt cæli et terra glória tua. Hosánna in excélsis. Benedíctus qui venit in nómine Dómini. Hosánna in excélsis.',
      de: 'Heilig, heilig, heilig, Herr, Gott der Heerscharen. Erfüllt sind Himmel und Erde von deiner Herrlichkeit. Hosanna in der Höhe. Hochgelobt sei, der da kommt im Namen des Herrn. Hosanna in der Höhe.',
    },
    chant: {
      chantable: true,
      mode: 'IV',
      gabc: '(c4) San(h)ctus,(hg~) *() San(gh)ctus,(h) San(hjh)ctus(hg) (,) Dó(gh)mi(h)nus(h) De(hg)us(g) Sá(gh)ba(h)oth.(g) (::)',
    },
  },
  {
    id: 'pater-noster',
    kind: 'ordinarium',
    title: { la: 'Pater noster', de: 'Vaterunser' },
    text: {
      la: 'Pater noster, qui es in cælis: Sanctificétur nomen tuum: Advéniat regnum tuum: Fiat volúntas tua, sicut in cælo, et in terra… Sed líbera nos a malo.',
      de: 'Vater unser im Himmel, geheiligt werde dein Name; dein Reich komme; dein Wille geschehe, wie im Himmel, so auf Erden… Sondern erlöse uns von dem Bösen.',
    },
    chant: {
      chantable: true,
      mode: 'A',
      gabc: '(c4) Pa(g)ter(g) no(g)ster,(gh) qui(h) es(h) in(h) cae(hg)lis:(g) san(gh)cti(h)fi(h)cé(hg)tur(g) no(gh)men(h) tu(hg)um.(g) (::)',
    },
  },
  {
    id: 'agnus-dei',
    kind: 'ordinarium',
    title: { la: 'Agnus Dei', de: 'Lamm Gottes' },
    text: {
      la: 'Agnus Dei, qui tollis peccáta mundi: miserére nobis. Agnus Dei, qui tollis peccáta mundi: miserére nobis. Agnus Dei, qui tollis peccáta mundi: dona nobis pacem.',
      de: 'Lamm Gottes, du nimmst hinweg die Sünden der Welt: erbarme dich unser. Lamm Gottes… erbarme dich unser. Lamm Gottes… gib uns den Frieden.',
    },
    chant: {
      chantable: true,
      mode: 'IV',
      gabc: '(c4) A(h)gnus(hg~) De(gh)i,(h) *() qui(h) tol(hg)lis(g) pec(gh)cá(h)ta(h) mun(hg)di:(g) mi(gh)se(h)ré(hg)re(g) no(gh)bis.(g) (::)',
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
    chant: { chantable: true, mode: 'IV', gabc: '(c4) I(g)te,(gh~) *() mis(h)sa(hjh) est.(hg) (::) De(g)o(gh) grá(hjh)ti(hg)as.(g) (::)' },
  },
]
