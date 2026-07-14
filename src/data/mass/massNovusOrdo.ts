import type { MassFormulary } from '../types'

// Beispielformular: Heilige Messe im ordentlichen Ritus (Novus Ordo)
// mit Tageslesungen und Evangelium. Ordinarium gemeinfrei; Schriftlesungen
// hier in einer gemeinfreien deutschen Übersetzung (nicht die amtliche
// Einheitsübersetzung – siehe docs/licensing.md).

export const massNovusOrdo: MassFormulary = {
  id: 'mass-no-sonntag',
  form: 'novusOrdo',
  day: {
    title: { la: 'Dominica per annum', de: 'Sonntag im Jahreskreis' },
    color: 'green',
    rank: 'Sonntag',
  },
  note: 'Beispielinhalt. Lesungen in gemeinfreier Übersetzung; amtliche Texte (Einheitsübersetzung/Messbuch) folgen unter Beachtung der Rechte.',
  sections: [
    {
      id: 'no-eroeffnung',
      kind: 'proprium',
      title: { la: 'Antiphona ad introitum', de: 'Eröffnungsvers' },
      reference: { de: 'Ps 25, 16.18' },
      text: {
        la: 'Réspice in me et miserére mei, Dómine, quóniam únicus et pauper sum ego.',
        de: 'Wende dich mir zu und sei mir gnädig, Herr; denn ich bin einsam und gebeugt.',
      },
      chant: { chantable: true, mode: 'VII' },
    },
    {
      id: 'no-kyrie',
      kind: 'ordinarium',
      title: { la: 'Kyrie', de: 'Kyrie / Herr, erbarme dich' },
      text: {
        la: 'Kýrie, eléison. Christe, eléison. Kýrie, eléison.',
        de: 'Herr, erbarme dich. Christus, erbarme dich. Herr, erbarme dich.',
      },
      chant: { chantable: true, mode: 'I' },
    },
    {
      id: 'no-gloria',
      kind: 'ordinarium',
      title: { la: 'Gloria', de: 'Gloria / Ehre sei Gott' },
      text: {
        la: 'Glória in excélsis Deo, et in terra pax homínibus bonæ voluntátis.',
        de: 'Ehre sei Gott in der Höhe und Friede auf Erden den Menschen seiner Gnade.',
      },
      chant: { chantable: true, mode: 'IV' },
    },
    {
      id: 'no-tagesgebet',
      kind: 'proprium',
      title: { de: 'Tagesgebet' },
      rubric: { de: 'Lasset uns beten.' },
      text: {
        de: 'Allmächtiger Gott, gib uns ein Herz voll Liebe zu deinem Namen, mehre in uns den wahren Glauben, nähre in uns das Gute und bewahre mit steter Sorge, was du selbst gepflanzt hast. Darum bitten wir durch Jesus Christus.',
      },
    },
    {
      id: 'no-lesung1',
      kind: 'proprium',
      title: { de: 'Erste Lesung' },
      reference: { de: 'Jes 55, 6-9' },
      text: {
        de: 'Sucht den Herrn, solange er sich finden lässt, ruft ihn an, solange er nahe ist… Denn meine Gedanken sind nicht eure Gedanken, und eure Wege sind nicht meine Wege – Spruch des Herrn.',
      },
    },
    {
      id: 'no-psalm',
      kind: 'proprium',
      title: { de: 'Antwortpsalm' },
      reference: { de: 'Ps 145' },
      text: {
        la: 'Prope est Dóminus ómnibus invocántibus eum.',
        de: 'Nahe ist der Herr allen, die ihn anrufen. — Ich will dich rühmen, mein Gott und König, und deinen Namen preisen auf immer und ewig.',
      },
      chant: { chantable: true, mode: 'VIII' },
    },
    {
      id: 'no-lesung2',
      kind: 'proprium',
      title: { de: 'Zweite Lesung' },
      reference: { de: 'Phil 1, 20-24.27' },
      text: {
        de: 'Brüder und Schwestern! Christus wird an meinem Leibe verherrlicht, sei es durch mein Leben, sei es durch meinen Tod. Denn für mich ist Christus das Leben und Sterben Gewinn.',
      },
    },
    {
      id: 'no-halleluja',
      kind: 'proprium',
      title: { de: 'Ruf vor dem Evangelium' },
      text: {
        la: 'Allelúia, allelúia.',
        de: 'Halleluja. Halleluja. Öffne, Herr, unser Herz, dass wir auf die Worte deines Sohnes hören. Halleluja.',
      },
      chant: { chantable: true, mode: 'VI' },
    },
    {
      id: 'no-evangelium',
      kind: 'proprium',
      title: { de: 'Evangelium' },
      reference: { de: 'Mt 20, 1-16' },
      rubric: { de: 'Aus dem heiligen Evangelium nach Matthäus.' },
      text: {
        de: 'In jener Zeit erzählte Jesus seinen Jüngern das folgende Gleichnis: Mit dem Himmelreich ist es wie mit einem Gutsbesitzer, der früh am Morgen hinausging, um Arbeiter für seinen Weinberg anzuwerben… So werden die Letzten die Ersten sein und die Ersten die Letzten.',
      },
    },
    {
      id: 'no-credo',
      kind: 'ordinarium',
      title: { la: 'Credo', de: 'Glaubensbekenntnis' },
      text: {
        de: 'Ich glaube an Gott, den Vater, den Allmächtigen, den Schöpfer des Himmels und der Erde… und an Jesus Christus, seinen eingeborenen Sohn, unsern Herrn.',
      },
    },
    {
      id: 'no-sanctus',
      kind: 'ordinarium',
      title: { la: 'Sanctus', de: 'Heilig' },
      text: {
        la: 'Sanctus, Sanctus, Sanctus, Dóminus Deus Sábaoth.',
        de: 'Heilig, heilig, heilig, Gott, Herr aller Mächte und Gewalten. Erfüllt sind Himmel und Erde von deiner Herrlichkeit. Hosanna in der Höhe.',
      },
      chant: { chantable: true, mode: 'IV' },
    },
    {
      id: 'no-agnus',
      kind: 'ordinarium',
      title: { la: 'Agnus Dei', de: 'Lamm Gottes' },
      text: {
        la: 'Agnus Dei, qui tollis peccáta mundi: miserére nobis.',
        de: 'Lamm Gottes, du nimmst hinweg die Sünde der Welt: erbarme dich unser. … gib uns deinen Frieden.',
      },
      chant: { chantable: true, mode: 'IV' },
    },
    {
      id: 'no-kommunionvers',
      kind: 'proprium',
      title: { de: 'Kommunionvers' },
      reference: { de: 'Ps 119, 4-5' },
      text: {
        de: 'Du, Herr, hast deine Befehle gegeben, damit man sie treulich befolgt. Wären doch meine Schritte fest darauf gerichtet, deine Gesetze zu halten.',
      },
      chant: { chantable: true, mode: 'VIII' },
    },
    {
      id: 'no-schlussgebet',
      kind: 'proprium',
      title: { de: 'Schlussgebet' },
      text: {
        de: 'Herr, unser Gott, in deiner Güte stärke und behüte uns durch dieses Sakrament; leite und begleite uns, damit wir einst zur ewigen Erlösung gelangen. Darum bitten wir durch Christus, unsern Herrn.',
      },
    },
    {
      id: 'no-entlassung',
      kind: 'ordinarium',
      title: { la: 'Ite, missa est', de: 'Entlassung' },
      text: {
        la: 'Ite, missa est. ℟ Deo grátias.',
        de: 'Gehet hin in Frieden. ℟ Dank sei Gott, dem Herrn.',
      },
      chant: { chantable: true, mode: 'IV' },
    },
  ],
}
