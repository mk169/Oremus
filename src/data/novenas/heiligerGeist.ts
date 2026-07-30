import type { Novena } from '../types'

// Pfingstnovene – die älteste Novene der Kirche, zwischen Christi Himmelfahrt
// und Pfingsten gebetet, um die Gaben des Heiligen Geistes zu erflehen.
export const holySpirit: Novena = {
  id: 'heiliger-geist',
  title: { la: 'Novena ad Spiritum Sanctum', de: 'Novene zum Heiligen Geist' },
  subtitle: { de: 'Pfingstnovene – die sieben Gaben des Geistes' },
  intro: {
    de: 'Die Pfingstnovene ist die älteste Novene der Kirche: Auf das Gebot des Herrn hin verharrten die Apostel mit Maria neun Tage im Gebet, bis der Heilige Geist über sie kam. Sie wird von Christi Himmelfahrt bis Pfingsten gebetet, um die sieben Gaben des Geistes zu erflehen.',
  },
  dailyPrayer: {
    id: 'hg-taeglich',
    title: { la: 'Veni, Sancte Spiritus', de: 'Komm, Heiliger Geist' },
    text: {
      la: 'Veni, Sancte Spíritus, reple tuórum corda fidélium: et tui amóris in eis ignem accénde. — Emítte Spíritum tuum et creabúntur; et renovábis fáciem terræ.',
      de: 'Komm, Heiliger Geist, erfülle die Herzen deiner Gläubigen und entzünde in ihnen das Feuer deiner Liebe. — Sende aus deinen Geist, und alles wird neu geschaffen, und du erneuerst das Angesicht der Erde. Amen.',
    },
  },
  days: [
    { day: 1, title: { de: 'Der Heilige Geist – Gabe des Vaters und des Sohnes' }, meditation: { de: 'Der Geist ist die Liebe, die Vater und Sohn eint und in unsere Herzen ausgegossen wird.' }, prayer: { de: 'Komm, Heiliger Geist, nimm Wohnung in meiner Seele.' } },
    { day: 2, title: { de: 'Die Gabe der Furcht Gottes' }, meditation: { de: 'Sie schenkt die kindliche Ehrfurcht, die vor der Sünde und nicht vor der Strafe zurückschreckt.' }, prayer: { de: 'Heiliger Geist, lehre mich, Gott über alles zu ehren.' } },
    { day: 3, title: { de: 'Die Gabe der Frömmigkeit' }, meditation: { de: 'Sie macht uns Gott zum liebenden Vater und den Nächsten zum Bruder.' }, prayer: { de: 'Heiliger Geist, entzünde in mir eine kindliche Liebe zu Gott.' } },
    { day: 4, title: { de: 'Die Gabe der Wissenschaft' }, meditation: { de: 'Sie lehrt uns, die geschaffenen Dinge recht zu gebrauchen und im Licht Gottes zu sehen.' }, prayer: { de: 'Heiliger Geist, lass mich in allem den Willen Gottes erkennen.' } },
    { day: 5, title: { de: 'Die Gabe der Stärke' }, meditation: { de: 'Sie gibt Kraft, das Gute standhaft zu tun und in Prüfungen auszuharren.' }, prayer: { de: 'Heiliger Geist, stärke mich im Kampf gegen das Böse.' } },
    { day: 6, title: { de: 'Die Gabe des Rates' }, meditation: { de: 'Sie leitet uns, in jeder Lage das Rechte zu wählen.' }, prayer: { de: 'Heiliger Geist, sei mein Führer auf allen Wegen.' } },
    { day: 7, title: { de: 'Die Gabe des Verstandes' }, meditation: { de: 'Sie lässt uns die Geheimnisse des Glaubens tiefer erfassen.' }, prayer: { de: 'Heiliger Geist, erleuchte meinen Verstand mit deinem Licht.' } },
    { day: 8, title: { de: 'Die Gabe der Weisheit' }, meditation: { de: 'Sie schenkt den Geschmack an den göttlichen Dingen und lässt uns Gott über alles lieben.' }, prayer: { de: 'Heiliger Geist, lass mich kosten, wie gütig der Herr ist.' } },
    { day: 9, title: { de: 'Die Früchte des Heiligen Geistes' }, meditation: { de: 'Wo der Geist wirkt, reifen Liebe, Freude, Friede, Geduld und alle Tugend.' }, prayer: { de: 'Heiliger Geist, erneuere das Angesicht der Erde und mein Herz.' } },
  ],
}
