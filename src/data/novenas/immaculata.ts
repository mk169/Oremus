import type { Novena } from '../types'

// Novene zur Unbefleckten Empfängnis der seligen Jungfrau Maria,
// zur Vorbereitung auf das Hochfest am 8. Dezember.
export const immaculata: Novena = {
  id: 'immaculata',
  title: { la: 'Novena Immaculatæ Conceptionis', de: 'Novene zur Unbefleckten Empfängnis' },
  subtitle: { de: 'Zur Vorbereitung auf das Hochfest am 8. Dezember' },
  intro: {
    de: 'Diese Novene wird an den neun Tagen vor dem Hochfest der Unbefleckten Empfängnis (8. Dezember) gebetet. Wir verehren Maria, die von der ersten Sekunde ihres Daseins an von jeder Sünde bewahrt blieb, und bitten sie um ihre Fürsprache.',
  },
  dailyPrayer: {
    id: 'imm-taeglich',
    title: { la: 'Tota pulchra es, Maria', de: 'Tägliches Gebet' },
    text: {
      la: 'Tota pulchra es, María, et mácula originális non est in te. — Ora pro nobis, sancta Dei Génetrix. Ut digni efficiámur promissiónibus Christi.',
      de: 'O Maria, ohne Sünde empfangen, bitte für uns, die wir unsere Zuflucht zu dir nehmen. Du bist ganz schön, o Maria, und der Makel der Erbsünde ist nicht in dir. Amen.',
    },
  },
  days: [
    { day: 1, title: { de: 'Die Erwählte von Ewigkeit' }, meditation: { de: 'Vor Grundlegung der Welt hat Gott Maria zur Mutter seines Sohnes erwählt.' }, prayer: { de: 'Unbefleckte Jungfrau, führe mich zu Christus.' } },
    { day: 2, title: { de: 'Voll der Gnade' }, meditation: { de: 'Der Engel grüßte sie als die Begnadete: In ihr fand die Sünde niemals Raum.' }, prayer: { de: 'Maria, voll der Gnade, erflehe mir die Gnade der Reinheit.' } },
    { day: 3, title: { de: 'Die neue Eva' }, meditation: { de: 'Wo Eva gefallen ist, hat Maria im Gehorsam den Knoten gelöst.' }, prayer: { de: 'Maria, hilf mir, treu dem Willen Gottes zu folgen.' } },
    { day: 4, title: { de: 'Der Spiegel der Gerechtigkeit' }, meditation: { de: 'In ihrer Reinheit spiegelt sich die Heiligkeit Gottes.' }, prayer: { de: 'Maria, mache mein Herz rein und lauter.' } },
    { day: 5, title: { de: 'Die Feindin der Schlange' }, meditation: { de: '„Sie wird dir den Kopf zertreten“ – Maria triumphiert über das Böse.' }, prayer: { de: 'Maria, beschütze mich vor allen Anfechtungen.' } },
    { day: 6, title: { de: 'Die demütige Magd des Herrn' }, meditation: { de: 'In tiefer Demut nahm sie das Wort Gottes an.' }, prayer: { de: 'Maria, lehre mich die Demut deines Herzens.' } },
    { day: 7, title: { de: 'Die Mutter der Barmherzigkeit' }, meditation: { de: 'Zu ihr dürfen alle Sünder Zuflucht nehmen.' }, prayer: { de: 'Maria, Zuflucht der Sünder, bitte für mich.' } },
    { day: 8, title: { de: 'Das Bild der Kirche' }, meditation: { de: 'In der Unbefleckten sieht die Kirche, was sie selbst sein soll: rein und heilig.' }, prayer: { de: 'Maria, heilige die ganze Kirche durch dein Vorbild.' } },
    { day: 9, title: { de: 'Unsere Hoffnung' }, meditation: { de: 'Die von Anfang an Reine ist am Ende in den Himmel aufgenommen – Vorbild unserer Hoffnung.' }, prayer: { de: 'Maria, führe mich einst zur ewigen Anschauung Gottes.' } },
  ],
}
