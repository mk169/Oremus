import type { LiturgicalSection } from '../types'

// Ordo Missae 1962 – Kommunionteil. Gemeinfrei (Missale Romanum 1962), je
// Latein/Deutsch. Aufgeteilt um die gesungenen Abschnitte (Pater noster,
// Agnus Dei) herum: Einleitung → [Pater noster] → Embolismus/Friede →
// [Agnus Dei] → Kommuniongebete, Dómine non sum dignus, Purifikation.

/** Vor dem Vaterunser. */
export const paterNosterIntro: LiturgicalSection[] = [
  {
    id: 'praeceptis-salutaribus',
    kind: 'ordinarium',
    title: { la: 'Præcéptis salutáribus', de: 'Einleitung zum Vaterunser' },
    text: {
      la: '℣. Orémus. Præcéptis salutáribus móniti, et divína institutióne formáti, audémus dícere:',
      de: '℣. Lasset uns beten. Getreu der heilbringenden Weisung und der göttlichen Belehrung wagen wir zu sprechen:',
    },
  },
]

/** Nach dem Vaterunser: Embolismus und Friedensgruß (vor dem Agnus Dei). */
export const postPaterNoster: LiturgicalSection[] = [
  {
    id: 'libera-nos',
    kind: 'ordinarium',
    title: { la: 'Líbera nos', de: 'Erlöse uns (Embolismus)' },
    rubric: { de: 'Am Schluss des Vaterunsers antwortet das Volk: „Sed líbera nos a malo.“' },
    text: {
      la: 'Líbera nos, quǽsumus, Dómine, ab ómnibus malis, prætéritis, præséntibus et futúris: et intercedénte beáta et gloriósa semper Vírgine Dei Genetríce María, cum beátis Apóstolis tuis Petro et Paulo, atque Andréa, et ómnibus Sanctis, da propítius pacem in diébus nostris: ut, ope misericórdiæ tuæ adiúti, et a peccáto simus semper líberi, et ab omni perturbatióne secúri. Per eúndem Dóminum nostrum Iesum Christum, Fílium tuum. Qui tecum vivit et regnat in unitáte Spíritus Sancti Deus. ℣. Per ómnia sǽcula sæculórum. ℟. Amen.',
      de: 'Erlöse uns, wir bitten dich, o Herr, von allen Übeln, den vergangenen, gegenwärtigen und zukünftigen; und auf die Fürsprache der seligen und glorreichen allzeit reinen Gottesgebärerin Maria, deiner heiligen Apostel Petrus und Paulus und Andreas und aller Heiligen gib gnädig Frieden in unseren Tagen, damit wir, durch die Hilfe deiner Barmherzigkeit unterstützt, immer frei von Sünde und sicher vor aller Verwirrung seien. Durch denselben unseren Herrn Jesus Christus, deinen Sohn, der mit dir lebt und herrscht in der Einheit des Heiligen Geistes, Gott. ℣. In alle Ewigkeit. ℟. Amen.',
    },
  },
  {
    id: 'pax-domini',
    kind: 'ordinarium',
    title: { la: 'Pax Dómini', de: 'Der Friede des Herrn' },
    rubric: { de: 'Der Priester bricht die heilige Hostie.' },
    text: {
      la: '℣. Pax Dómini sit semper vobíscum. ℟. Et cum spíritu tuo.',
      de: '℣. Der Friede des Herrn sei allezeit mit euch. ℟. Und mit deinem Geiste.',
    },
  },
  {
    id: 'haec-commixtio',
    kind: 'ordinarium',
    title: { la: 'Hæc commíxtio', de: 'Mischung von Leib und Blut' },
    rubric: { de: 'Ein Teil der Hostie wird in den Kelch gesenkt.' },
    text: {
      la: 'Hæc commíxtio et consecrátio Córporis et Sánguinis Dómini nostri Iesu Christi fiat accipiéntibus nobis in vitam ætérnam. Amen.',
      de: 'Diese Mischung und Weihe des Leibes und Blutes unseres Herrn Jesus Christus gereiche uns, die wir sie empfangen, zum ewigen Leben. Amen.',
    },
  },
]

/** Nach dem Agnus Dei: Kommuniongebete, Empfang, Purifikation. */
export const postAgnus: LiturgicalSection[] = [
  {
    id: 'domine-iesu-christe-qui-dixisti',
    kind: 'ordinarium',
    title: { la: 'Dómine Iesu Christe, qui dixísti', de: 'Gebet um Frieden' },
    text: {
      la: 'Dómine Iesu Christe, qui dixísti Apóstolis tuis: Pacem relínquo vobis, pacem meam do vobis: ne respícias peccáta mea, sed fidem Ecclésiæ tuæ; eámque secúndum voluntátem tuam pacificáre et coadunáre dignéris. Qui vivis et regnas Deus per ómnia sǽcula sæculórum. Amen.',
      de: 'Herr Jesus Christus, du hast zu deinen Aposteln gesprochen: Frieden hinterlasse ich euch, meinen Frieden gebe ich euch. Sieh nicht auf meine Sünden, sondern auf den Glauben deiner Kirche und gib ihr nach deinem Willen Frieden und Einheit. Der du lebst und herrschst, Gott, in alle Ewigkeit. Amen.',
    },
  },
  {
    id: 'domine-iesu-christe-fili-dei-vivi',
    kind: 'ordinarium',
    title: { la: 'Dómine Iesu Christe, Fili Dei vivi', de: 'Vorbereitung auf die Kommunion' },
    text: {
      la: 'Dómine Iesu Christe, Fili Dei vivi, qui ex voluntáte Patris, cooperánte Spíritu Sancto, per mortem tuam mundum vivificásti: líbera me per hoc sacrosánctum Corpus et Sánguinem tuum ab ómnibus iniquitátibus meis, et univérsis malis: et fac me tuis semper inhærére mandátis, et a te numquam separári permíttas. Qui cum eódem Deo Patre et Spíritu Sancto vivis et regnas Deus in sǽcula sæculórum. Amen.',
      de: 'Herr Jesus Christus, Sohn des lebendigen Gottes, du hast nach dem Willen des Vaters unter Mitwirkung des Heiligen Geistes durch deinen Tod die Welt zum Leben erweckt: Befreie mich durch deinen hochheiligen Leib und dein Blut von allen meinen Sünden und von allem Übel; lass mich deinen Geboten immer treu bleiben und niemals von dir getrennt werden. Der du mit demselben Gott Vater und dem Heiligen Geiste lebst und herrschst, Gott, in alle Ewigkeit. Amen.',
    },
  },
  {
    id: 'perceptio',
    kind: 'ordinarium',
    title: { la: 'Percéptio Córporis tui', de: 'Um würdigen Empfang' },
    text: {
      la: 'Percéptio Córporis tui, Dómine Iesu Christe, quod ego indígnus súmere præsúmo, non mihi provéniat in iudícium et condemnatiónem: sed pro tua pietáte prosit mihi ad tutaméntum mentis et córporis, et ad medélam percipiéndam. Qui vivis et regnas cum Deo Patre in unitáte Spíritus Sancti Deus, per ómnia sǽcula sæculórum. Amen.',
      de: 'Der Empfang deines Leibes, Herr Jesus Christus, den ich Unwürdiger zu genießen wage, gereiche mir nicht zum Gericht und zur Verdammnis, sondern durch deine Güte zum Schutz für Seele und Leib und zur heilsamen Arznei. Der du lebst und herrschst mit Gott dem Vater in der Einheit des Heiligen Geistes, Gott, in alle Ewigkeit. Amen.',
    },
  },
  {
    id: 'panem-caelestem',
    kind: 'ordinarium',
    title: { la: 'Panem cæléstem accípiam', de: 'Vor der Kommunion des Priesters' },
    text: {
      la: 'Panem cæléstem accípiam, et nomen Dómini invocábo.',
      de: 'Das himmlische Brot will ich nehmen und den Namen des Herrn anrufen.',
    },
  },
  {
    id: 'domine-non-sum-dignus',
    kind: 'ordinarium',
    title: { la: 'Dómine, non sum dignus', de: 'Herr, ich bin nicht würdig' },
    rubric: { de: 'Dreimal, während er an die Brust klopft.' },
    text: {
      la: 'Dómine, non sum dignus, ut intres sub tectum meum: sed tantum dic verbo, et sanábitur ánima mea. (ter)',
      de: 'Herr, ich bin nicht würdig, dass du eingehst unter mein Dach; aber sprich nur ein Wort, so wird meine Seele gesund. (dreimal)',
    },
  },
  {
    id: 'corpus-domini',
    kind: 'ordinarium',
    title: { la: 'Corpus et Sanguis Dómini', de: 'Empfang von Leib und Blut' },
    text: {
      la: 'Corpus Dómini nostri Iesu Christi custódiat ánimam meam in vitam ætérnam. Amen. Quid retríbuam Dómino pro ómnibus quæ retríbuit mihi? Cálicem salutáris accípiam, et nomen Dómini invocábo. Sanguis Dómini nostri Iesu Christi custódiat ánimam meam in vitam ætérnam. Amen.',
      de: 'Der Leib unseres Herrn Jesus Christus bewahre meine Seele zum ewigen Leben. Amen. Was soll ich dem Herrn vergelten für alles, was er mir gegeben hat? Den Kelch des Heiles will ich nehmen und den Namen des Herrn anrufen. Das Blut unseres Herrn Jesus Christus bewahre meine Seele zum ewigen Leben. Amen.',
    },
  },
  {
    id: 'communio-fidelium',
    kind: 'ordinarium',
    title: { la: 'Ecce Agnus Dei', de: 'Kommunion der Gläubigen' },
    rubric: { de: 'Zuvor beten die Gläubigen das Confíteor; dann zeigt der Priester die heilige Hostie.' },
    text: {
      la: '℣. Ecce Agnus Dei, ecce qui tollit peccáta mundi. ℟. Dómine, non sum dignus, ut intres sub tectum meum: sed tantum dic verbo, et sanábitur ánima mea. (ter) — Corpus Dómini nostri Iesu Christi custódiat ánimam tuam in vitam ætérnam. Amen.',
      de: '℣. Seht das Lamm Gottes, das hinwegnimmt die Sünden der Welt. ℟. Herr, ich bin nicht würdig, dass du eingehst unter mein Dach; aber sprich nur ein Wort, so wird meine Seele gesund. (dreimal) — Der Leib unseres Herrn Jesus Christus bewahre deine Seele zum ewigen Leben. Amen.',
    },
  },
  {
    id: 'ablutio',
    kind: 'ordinarium',
    title: { la: 'Quod ore súmpsimus', de: 'Purifikation' },
    rubric: { de: 'Beim Reinigen von Kelch und Fingern.' },
    text: {
      la: 'Quod ore súmpsimus, Dómine, pura mente capiámus: et de múnere temporáli fiat nobis remédium sempitérnum. Corpus tuum, Dómine, quod sumpsi, et Sanguis, quem potávi, adhǽreat viscéribus meis: et præsta; ut in me non remáneat scélerum mácula, quem pura et sancta refecérunt sacraménta. Qui vivis et regnas in sǽcula sæculórum. Amen.',
      de: 'Was wir mit dem Munde empfangen haben, o Herr, das lass uns mit reinem Herzen aufnehmen, und aus der zeitlichen Gabe werde uns ewige Heilung. Dein Leib, o Herr, den ich empfangen, und dein Blut, das ich getrunken habe, hafte in meinem Innern; und gib, dass in mir kein Makel der Sünde zurückbleibe, den reine und heilige Sakramente gestärkt haben. Der du lebst und herrschst in alle Ewigkeit. Amen.',
    },
  },
]
