import type { LiturgicalSection } from '../types'

// Ordo Missae 1962 – Wortgottesdienst: Gruß zur Oration, Vorbereitung und
// Dialog vor dem Evangelium, Danksagung danach. Gemeinfrei (Missale Romanum
// 1962), je Latein/Deutsch, jedes Gebet/jeder Dialog ein eigener Abschnitt.

/** Vor dem Tagesgebet: Altarkuss-Gruß. */
export const salutatioAnteOrationem: LiturgicalSection[] = [
  {
    id: 'dominus-vobiscum-oratio',
    kind: 'ordinarium',
    title: { la: 'Dóminus vobíscum', de: 'Gruß vor dem Tagesgebet' },
    rubric: { de: 'Der Priester küsst den Altar, wendet sich zum Volk und grüßt.' },
    text: {
      la: '℣. Dóminus vobíscum. ℟. Et cum spíritu tuo. ℣. Orémus.',
      de: '℣. Der Herr sei mit euch. ℟. Und mit deinem Geiste. ℣. Lasset uns beten.',
    },
  },
]

/** Vor dem Evangelium: Munda cor meum und Dialog. */
export const mundaCor: LiturgicalSection[] = [
  {
    id: 'munda-cor',
    kind: 'ordinarium',
    title: { la: 'Munda cor meum', de: 'Reinigung des Herzens' },
    rubric: { de: 'Der Priester, tief gebeugt in der Mitte des Altares.' },
    text: {
      la: 'Munda cor meum ac lábia mea, omnípotens Deus, qui lábia Isaíæ Prophétæ cálculo mundásti igníto: ita me tua grata miseratióne dignáre mundáre, ut sanctum Evangélium tuum digne váleam nuntiáre. Per Christum Dóminum nostrum. Amen. Iube, Dómine, benedícere. Dóminus sit in corde meo et in lábiis meis: ut digne et competénter annúntiem Evangélium suum. Amen.',
      de: 'Reinige mein Herz und meine Lippen, allmächtiger Gott, der du die Lippen des Propheten Isaias mit glühender Kohle gereinigt hast: reinige mich in deinem gnädigen Erbarmen, dass ich dein heiliges Evangelium würdig zu verkünden vermag. Durch Christus, unseren Herrn. Amen. Gebiete, o Herr, den Segen. Der Herr sei in meinem Herzen und auf meinen Lippen, dass ich sein Evangelium würdig und geziemend verkünde. Amen.',
    },
  },
  {
    id: 'evangelium-dialog',
    kind: 'ordinarium',
    title: { la: 'Vor dem Evangelium', de: 'Gruß vor dem Evangelium' },
    text: {
      la: '℣. Dóminus vobíscum. ℟. Et cum spíritu tuo. ℣. Sequéntia sancti Evangélii secúndum N. ℟. Glória tibi, Dómine.',
      de: '℣. Der Herr sei mit euch. ℟. Und mit deinem Geiste. ℣. Aus dem heiligen Evangelium nach N. ℟. Ehre sei dir, o Herr.',
    },
  },
]

/** Nach dem Evangelium. */
export const perEvangelica: LiturgicalSection[] = [
  {
    id: 'per-evangelica',
    kind: 'ordinarium',
    title: { la: 'Nach dem Evangelium', de: 'Nach dem Evangelium' },
    rubric: { de: 'Der Priester küsst das Evangelienbuch.' },
    text: {
      la: '℟. Laus tibi, Christe. Per evangélica dicta deleántur nostra delícta.',
      de: '℟. Lob sei dir, o Christus. Durch die Worte des Evangeliums mögen unsere Sünden getilgt werden.',
    },
  },
]
