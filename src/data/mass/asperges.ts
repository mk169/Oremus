import type { LiturgicalSection } from '../types'

// Besprengung mit Weihwasser vor dem sonntäglichen Hochamt (überlieferte Form):
// „Asperges me" außerhalb der Osterzeit, „Vidi aquam" in der Osterzeit.
// Texte und Melodien gemeinfrei (Graduale Romanum); Neumen als Incipit.

export const aspergesMe: LiturgicalSection = {
  id: 'asperges',
  kind: 'ordinarium',
  title: { la: 'Asperges me', de: 'Besprengung (außerhalb der Osterzeit)' },
  rubric: { de: 'Der Priester besprengt Altar, Klerus und Volk mit Weihwasser.' },
  reference: { la: 'Ps 50, 9.3', de: 'Ps 50, 9.3' },
  text: {
    la: 'Aspérges me, Dómine, hyssópo, et mundábor: lavábis me, et super nivem dealbábor. Ps. Miserére mei, Deus, secúndum magnam misericórdiam tuam. Glória Patri. Aspérges me…',
    de: 'Besprenge mich, o Herr, mit Ysop, und ich werde rein; wasche mich, und ich werde weißer als Schnee. Ps. Erbarme dich meiner, o Gott, nach deiner großen Barmherzigkeit. Ehre sei dem Vater. Besprenge mich…',
  },
  chant: {
    chantable: true,
    mode: 'VII',
    gabc: '(c4) As(cd)pér(f)ges(f) me,(fe~) *() Dó(f)mi(fg)ne,(f) (,) hys(f)só(fg)po,(f) et(ef) mun(d)dá(f)bor.(f) (::)',
  },
}

export const vidiAquam: LiturgicalSection = {
  id: 'vidi-aquam',
  kind: 'ordinarium',
  title: { la: 'Vidi aquam', de: 'Besprengung (in der Osterzeit)' },
  rubric: { de: 'In der Osterzeit anstelle des Asperges; mit Alleluja.' },
  reference: { la: 'Ez 47, 1.9', de: 'Ez 47, 1.9' },
  text: {
    la: 'Vidi aquam egrediéntem de templo, a látere dextro, allelúia: et omnes, ad quos pervénit aqua ista, salvi facti sunt, et dicent: allelúia, allelúia. Ps. Confitémini Dómino, quóniam bonus: quóniam in sǽculum misericórdia eius. Glória Patri.',
    de: 'Ich sah Wasser hervorströmen aus dem Tempel, von der rechten Seite, alleluja; und alle, zu denen dieses Wasser gelangte, wurden gerettet und werden singen: Alleluja, alleluja. Ps. Danket dem Herrn, denn er ist gütig; denn seine Barmherzigkeit währt ewig. Ehre sei dem Vater.',
  },
  chant: {
    chantable: true,
    mode: 'VIII',
    gabc: '(c4) Vi(f)di(gh) a(h)quam(h) *() e(hg)gre(g)di(gh)én(h)tem(h) de(hg) tem(g)plo,(gh) al(h)le(hg)lú(g)ia.(g) (::)',
  },
}

// Versikel und Gebet, die auf die Antiphon folgen (für beide gleich, in der
// Osterzeit mit Alleluja).
export const aspergesOratio: LiturgicalSection = {
  id: 'asperges-oratio',
  kind: 'ordinarium',
  title: { la: 'Versus et oratio', de: 'Versikel und Gebet' },
  text: {
    la: '℣. Osténde nobis, Dómine, misericórdiam tuam. ℟. Et salutáre tuum da nobis. ℣. Dómine, exáudi oratiónem meam. ℟. Et clamor meus ad te véniat. ℣. Dóminus vobíscum. ℟. Et cum spíritu tuo. Orémus. Exáudi nos, Dómine sancte, Pater omnípotens, ætérne Deus: et míttere dignéris sanctum Angelum tuum de cælis, qui custódiat, fóveat, prótegat, vísitet atque deféndat omnes habitántes in hoc habitáculo. Per Christum Dóminum nostrum. Amen.',
    de: '℣. Erweise uns, o Herr, deine Barmherzigkeit. ℟. Und schenke uns dein Heil. ℣. Herr, erhöre mein Gebet. ℟. Und lass mein Rufen zu dir kommen. ℣. Der Herr sei mit euch. ℟. Und mit deinem Geiste. Lasset uns beten. Erhöre uns, heiliger Herr, allmächtiger Vater, ewiger Gott, und sende gnädig deinen heiligen Engel vom Himmel, dass er alle behüte, beschütze und verteidige, die in dieser Wohnung weilen. Durch Christus, unseren Herrn. Amen.',
  },
}

/** Der passende Besprengungsgesang für ein Mess-Formular (Osterzeit → Vidi aquam). */
export function aspersionFor(massId: string): LiturgicalSection {
  return massId.startsWith('do-Pasc') ? vidiAquam : aspergesMe
}
