import type { LiturgicalSection } from '../types'

// Ordo Missae 1962 – Schlussteil. Gemeinfrei (Missale Romanum 1962), je
// Latein/Deutsch. Gruß vor Postcommunio und vor Ite, dann Placeat, Segen und
// das Schlussevangelium (Prolog des Johannes).

/** Gruß vor der Postcommunio. */
export const salutatioPostcommunio: LiturgicalSection[] = [
  {
    id: 'dominus-vobiscum-postcommunio',
    kind: 'ordinarium',
    title: { la: 'Dóminus vobíscum', de: 'Gruß vor der Postcommunio' },
    text: {
      la: '℣. Dóminus vobíscum. ℟. Et cum spíritu tuo. ℣. Orémus.',
      de: '℣. Der Herr sei mit euch. ℟. Und mit deinem Geiste. ℣. Lasset uns beten.',
    },
  },
]

/** Gruß vor der Entlassung. */
export const salutatioAnteIte: LiturgicalSection[] = [
  {
    id: 'dominus-vobiscum-ite',
    kind: 'ordinarium',
    title: { la: 'Dóminus vobíscum', de: 'Gruß vor der Entlassung' },
    text: {
      la: '℣. Dóminus vobíscum. ℟. Et cum spíritu tuo.',
      de: '℣. Der Herr sei mit euch. ℟. Und mit deinem Geiste.',
    },
  },
]

/** Nach dem Ite missa est: Placeat, Segen, Schlussevangelium. */
export const conclusio: LiturgicalSection[] = [
  {
    id: 'placeat',
    kind: 'ordinarium',
    title: { la: 'Pláceat tibi, sancta Trínitas', de: 'Schlussgebet des Priesters' },
    rubric: { de: 'Der Priester verneigt sich tief vor dem Altar.' },
    text: {
      la: 'Pláceat tibi, sancta Trínitas, obséquium servitútis meæ: et præsta; ut sacrifícium, quod óculis tuæ maiestátis indígnus óbtuli, tibi sit acceptábile, mihíque et ómnibus, pro quibus illud óbtuli, sit, te miseránte, propitiábile. Per Christum Dóminum nostrum. Amen.',
      de: 'Wohlgefallen finde bei dir, heiligste Dreifaltigkeit, die Huldigung meines Dienstes; und gib, dass das Opfer, das ich Unwürdiger vor den Augen deiner Majestät dargebracht habe, dir angenehm sei und mir und allen, für die ich es dargebracht habe, durch dein Erbarmen versöhnend sei. Durch Christus, unseren Herrn. Amen.',
    },
  },
  {
    id: 'benedictio',
    kind: 'ordinarium',
    title: { la: 'Benedíctio', de: 'Segen' },
    rubric: { de: 'Der Priester erteilt den Segen (entfällt in Requiem-Messen).' },
    text: {
      la: 'Benedícat vos omnípotens Deus, Pater, et Fílius, ✝ et Spíritus Sanctus. ℟. Amen.',
      de: 'Es segne euch der allmächtige Gott, der Vater und der Sohn ✝ und der Heilige Geist. ℟. Amen.',
    },
  },
  {
    id: 'schlussevangelium-dialog',
    kind: 'ordinarium',
    title: { la: 'Ínitium sancti Evangélii', de: 'Beginn des Schlussevangeliums' },
    text: {
      la: '℣. Dóminus vobíscum. ℟. Et cum spíritu tuo. ℣. Ínitium sancti Evangélii secúndum Ioánnem. ℟. Glória tibi, Dómine.',
      de: '℣. Der Herr sei mit euch. ℟. Und mit deinem Geiste. ℣. Beginn des heiligen Evangeliums nach Johannes. ℟. Ehre sei dir, o Herr.',
    },
  },
  {
    id: 'schlussevangelium',
    kind: 'ordinarium',
    title: { la: 'In princípio erat Verbum', de: 'Schlussevangelium' },
    reference: { la: 'Io 1, 1-14', de: 'Joh 1, 1-14' },
    text: {
      la: 'In princípio erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum. Hoc erat in princípio apud Deum. Ómnia per ipsum facta sunt: et sine ipso factum est nihil, quod factum est: in ipso vita erat, et vita erat lux hóminum: et lux in ténebris lucet, et ténebræ eam non comprehendérunt. Fuit homo missus a Deo, cui nomen erat Ioánnes. Hic venit in testimónium, ut testimónium perhibéret de lúmine, ut omnes créderent per illum. Non erat ille lux, sed ut testimónium perhibéret de lúmine. Erat lux vera, quæ illúminat omnem hóminem veniéntem in hunc mundum. In mundo erat, et mundus per ipsum factus est, et mundus eum non cognóvit. In própria venit, et sui eum non recepérunt. Quotquot autem recepérunt eum, dedit eis potestátem fílios Dei fíeri, his, qui credunt in nómine eius: qui non ex sanguínibus, neque ex voluntáte carnis, neque ex voluntáte viri, sed ex Deo nati sunt. ET VERBUM CARO FACTUM EST, et habitávit in nobis: et vídimus glóriam eius, glóriam quasi Unigéniti a Patre, plenum grátiæ et veritátis. ℟. Deo grátias.',
      de: 'Im Anfang war das Wort, und das Wort war bei Gott, und Gott war das Wort. Dieses war im Anfang bei Gott. Alles ist durch dasselbe geworden, und ohne dasselbe ist nichts geworden, was geworden ist. In ihm war das Leben, und das Leben war das Licht der Menschen; und das Licht leuchtet in der Finsternis, und die Finsternis hat es nicht erfasst. Es trat ein Mensch auf, von Gott gesandt, sein Name war Johannes. Dieser kam zum Zeugnis, um Zeugnis zu geben von dem Lichte, damit alle durch ihn glaubten. Nicht er war das Licht, sondern Zeugnis sollte er geben von dem Lichte. Das war das wahre Licht, das jeden Menschen erleuchtet, der in diese Welt kommt. Er war in der Welt, und die Welt ist durch ihn geworden, und die Welt erkannte ihn nicht. Er kam in sein Eigentum, und die Seinen nahmen ihn nicht auf. Allen aber, die ihn aufnahmen, gab er Macht, Kinder Gottes zu werden, denen, die an seinen Namen glauben; die nicht aus dem Blute, noch aus dem Willen des Fleisches, noch aus dem Willen des Mannes, sondern aus Gott geboren sind. UND DAS WORT IST FLEISCH GEWORDEN und hat unter uns gewohnt; und wir haben seine Herrlichkeit gesehen, die Herrlichkeit als des Eingeborenen vom Vater, voll der Gnade und Wahrheit. ℟. Dank sei Gott.',
    },
  },
]
