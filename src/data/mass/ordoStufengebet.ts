import type { LiturgicalSection } from '../types'

// Ordo Missae 1962 – Stufengebet (Preces ad infimum gradus altaris).
// Gemeinfrei (Missale Romanum 1962). Jedes Gebet / jede Stelle als eigener
// Abschnitt, durchgehend Latein/Deutsch. Weitere Teile des Ordo folgen
// schrittweise (Introitus … bis Schlussevangelium).

export const stufengebet: LiturgicalSection[] = [
  {
    id: 'signum-crucis',
    kind: 'ordinarium',
    title: { la: 'In nómine Patris', de: 'Kreuzzeichen' },
    rubric: { de: 'Der Priester macht am Fuß des Altares das Kreuzzeichen und beginnt die Vorbereitungsgebete.' },
    text: {
      la: 'In nómine Patris, et Fílii, et Spíritus Sancti. Amen.',
      de: 'Im Namen des Vaters und des Sohnes und des Heiligen Geistes. Amen.',
    },
  },
  {
    id: 'antiphona-introibo',
    kind: 'ordinarium',
    title: { la: 'Antíphona', de: 'Antiphon' },
    text: {
      la: '℣. Introíbo ad altáre Dei. ℟. Ad Deum, qui lætíficat iuventútem meam.',
      de: '℣. Ich will hintreten zum Altare Gottes. ℟. Zu Gott, der meine Jugend erfreut.',
    },
  },
  {
    id: 'psalmus-42',
    kind: 'ordinarium',
    title: { la: 'Psalmus 42', de: 'Psalm 42' },
    reference: { la: 'Ps 42', de: 'Ps 42' },
    rubric: { de: 'Priester und Ministranten beten den Psalm im Wechsel.' },
    text: {
      la: 'Iúdica me, Deus, et discérne causam meam de gente non sancta: ab hómine iníquo et dolóso érue me. Quia tu es, Deus, fortitúdo mea: quare me repulísti, et quare tristis incédo, dum afflígit me inimícus? Emítte lucem tuam et veritátem tuam: ipsa me deduxérunt, et adduxérunt in montem sanctum tuum, et in tabernácula tua. Et introíbo ad altáre Dei: ad Deum, qui lætíficat iuventútem meam. Confitébor tibi in cíthara, Deus, Deus meus: quare tristis es, ánima mea, et quare contúrbas me? Spera in Deo, quóniam adhuc confitébor illi: salutáre vultus mei, et Deus meus. Glória Patri, et Fílio, et Spirítui Sancto. Sicut erat in princípio, et nunc, et semper, et in sǽcula sæculórum. Amen.',
      de: 'Schaffe mir Recht, o Gott, und führe meine Sache gegen ein unheiliges Volk; von dem ungerechten und falschen Menschen errette mich. Denn du, o Gott, bist meine Stärke: warum hast du mich verstoßen, und warum muss ich traurig einhergehen, während der Feind mich bedrängt? Sende dein Licht und deine Wahrheit: sie sollen mich geleiten und führen zu deinem heiligen Berg und zu deinen Zelten. Und ich will hintreten zum Altare Gottes, zu Gott, der meine Jugend erfreut. Ich will dich preisen mit der Harfe, o Gott, mein Gott: Warum bist du traurig, meine Seele, und warum verwirrst du mich? Hoffe auf Gott; denn noch werde ich ihn preisen, das Heil meines Angesichtes und meinen Gott. Ehre sei dem Vater und dem Sohn und dem Heiligen Geist, wie im Anfang, so auch jetzt und allezeit und in Ewigkeit. Amen.',
    },
  },
  {
    id: 'antiphona-introibo-repetitio',
    kind: 'ordinarium',
    title: { la: 'Antíphona (Wiederholung)', de: 'Antiphon (Wiederholung)' },
    text: {
      la: '℣. Introíbo ad altáre Dei. ℟. Ad Deum, qui lætíficat iuventútem meam.',
      de: '℣. Ich will hintreten zum Altare Gottes. ℟. Zu Gott, der meine Jugend erfreut.',
    },
  },
  {
    id: 'adiutorium',
    kind: 'ordinarium',
    title: { la: 'Adiutórium nostrum', de: 'Versikel' },
    text: {
      la: '℣. Adiutórium nostrum in nómine Dómini. ℟. Qui fecit cælum et terram.',
      de: '℣. Unsere Hilfe ist im Namen des Herrn. ℟. Der Himmel und Erde erschaffen hat.',
    },
  },
  {
    id: 'confiteor',
    kind: 'ordinarium',
    title: { la: 'Confíteor', de: 'Schuldbekenntnis' },
    rubric: { de: 'Der Priester, tief gebeugt, spricht das Schuldbekenntnis; danach beten es die Ministranten (dabei „et tibi, pater… et te, pater“).' },
    text: {
      la: 'Confíteor Deo omnipoténti, beátæ Maríæ semper Vírgini, beáto Michaéli Archángelo, beáto Ioánni Baptístæ, sanctis Apóstolis Petro et Paulo, ómnibus Sanctis, et vobis, fratres: quia peccávi nimis cogitatióne, verbo et ópere: mea culpa, mea culpa, mea máxima culpa. Ídeo precor beátam Maríam semper Vírginem, beátum Michaélem Archángelum, beátum Ioánnem Baptístam, sanctos Apóstolos Petrum et Paulum, omnes Sanctos, et vos, fratres, oráre pro me ad Dóminum Deum nostrum.',
      de: 'Ich bekenne Gott dem Allmächtigen, der seligen allzeit reinen Jungfrau Maria, dem heiligen Erzengel Michael, dem heiligen Johannes dem Täufer, den heiligen Aposteln Petrus und Paulus, allen Heiligen und euch, Brüder: dass ich viel gesündigt habe in Gedanken, Worten und Werken. Durch meine Schuld, durch meine Schuld, durch meine übergroße Schuld. Darum bitte ich die selige allzeit reine Jungfrau Maria, den heiligen Erzengel Michael, den heiligen Johannes den Täufer, die heiligen Apostel Petrus und Paulus, alle Heiligen und euch, Brüder, für mich zu Gott, unserem Herrn, zu beten.',
    },
  },
  {
    id: 'misereatur',
    kind: 'ordinarium',
    title: { la: 'Misereátur', de: 'Erbarmen' },
    text: {
      la: 'Misereátur tui (vestri) omnípotens Deus, et, dimíssis peccátis tuis (vestris), perdúcat te (vos) ad vitam ætérnam. Amen.',
      de: 'Es erbarme sich deiner (euer) der allmächtige Gott, er lasse dir (euch) die Sünden nach und führe dich (euch) zum ewigen Leben. Amen.',
    },
  },
  {
    id: 'indulgentiam',
    kind: 'ordinarium',
    title: { la: 'Indulgéntiam', de: 'Lossprechung' },
    text: {
      la: 'Indulgéntiam, absolutiónem et remissiónem peccatórum nostrórum tríbuat nobis omnípotens et miséricors Dóminus. Amen.',
      de: 'Nachlass, Vergebung und Verzeihung unserer Sünden gewähre uns der allmächtige und barmherzige Herr. Amen.',
    },
  },
  {
    id: 'versicula-ante-altare',
    kind: 'ordinarium',
    title: { la: 'Versículi', de: 'Versikel' },
    text: {
      la: '℣. Deus, tu convérsus vivificábis nos. ℟. Et plebs tua lætábitur in te. ℣. Osténde nobis, Dómine, misericórdiam tuam. ℟. Et salutáre tuum da nobis. ℣. Dómine, exáudi oratiónem meam. ℟. Et clamor meus ad te véniat. ℣. Dóminus vobíscum. ℟. Et cum spíritu tuo.',
      de: '℣. Gott, du wirst dich uns wieder zuwenden und uns beleben. ℟. Und dein Volk wird sich in dir freuen. ℣. Zeige uns, o Herr, deine Barmherzigkeit. ℟. Und schenke uns dein Heil. ℣. Herr, erhöre mein Gebet. ℟. Und lass mein Rufen zu dir kommen. ℣. Der Herr sei mit euch. ℟. Und mit deinem Geiste.',
    },
  },
  {
    id: 'aufer-a-nobis',
    kind: 'ordinarium',
    title: { la: 'Aufer a nobis', de: 'Beim Hinaufsteigen zum Altar' },
    rubric: { de: 'Orémus. Der Priester steigt zum Altar hinauf.' },
    text: {
      la: 'Aufer a nobis, quǽsumus, Dómine, iniquitátes nostras: ut ad Sancta sanctórum puris mereámur méntibus introíre. Per Christum Dóminum nostrum. Amen.',
      de: 'Nimm von uns, wir bitten dich, o Herr, unsere Sünden, damit wir mit reinem Herzen einzutreten verdienen ins Allerheiligste. Durch Christus, unseren Herrn. Amen.',
    },
  },
  {
    id: 'oramus-te-domine',
    kind: 'ordinarium',
    title: { la: 'Orámus te, Dómine', de: 'Beim Altarkuss' },
    rubric: { de: 'Der Priester küsst den Altar, wo die Reliquien ruhen.' },
    text: {
      la: 'Orámus te, Dómine, per mérita Sanctórum tuórum, quorum relíquiæ hic sunt, et ómnium Sanctórum: ut indulgére dignéris ómnia peccáta mea. Amen.',
      de: 'Wir bitten dich, o Herr, durch die Verdienste deiner Heiligen, deren Reliquien hier sind, und aller Heiligen: dass du mir alle meine Sünden zu verzeihen geruhest. Amen.',
    },
  },
]
