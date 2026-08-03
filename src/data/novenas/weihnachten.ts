import type { Novena } from '../types'

// Weihnachtsnovene – neun Tage der Vorbereitung auf das Hochfest der Geburt
// des Herrn (16.–24. Dezember). Nimmt die großen O-Antiphonen auf.
export const christmas: Novena = {
  id: 'weihnachten',
  title: { la: 'Novena Nativitatis Domini', de: 'Weihnachtsnovene' },
  subtitle: { de: 'Neun Tage der Erwartung auf die Geburt des Herrn' },
  intro: {
    de: 'Die Weihnachtsnovene begleitet die letzten Tage des Advents (16.–24. Dezember). In sehnsuchtsvoller Erwartung rufen wir den kommenden Erlöser an – mit den Bildern der großen O-Antiphonen, die die Kirche in diesen Tagen singt.',
  },
  dailyPrayer: {
    id: 'nat-taeglich',
    title: { la: 'Rorate cæli', de: 'Tägliches Gebet' },
    text: {
      la: 'Roráte cæli désuper, et nubes pluant justum: aperiátur terra, et gérminet Salvatórem.',
      de: 'Tauet, ihr Himmel, von oben, ihr Wolken, regnet den Gerechten; es öffne sich die Erde und sprosse den Erlöser hervor. Komm, o Herr, und säume nicht. Amen.',
    },
  },
  days: [
    { day: 1, title: { de: 'O Weisheit (O Sapientia)' }, meditation: { de: 'Die ewige Weisheit Gottes kommt, uns den Weg der Klugheit zu weisen.' }, prayer: { de: 'O Weisheit, komm und lehre uns den Weg der Einsicht.' } },
    { day: 2, title: { de: 'O Herr und Führer (O Adonai)' }, meditation: { de: 'Der Herr, der Mose im brennenden Dornbusch erschien, kommt uns zu erlösen.' }, prayer: { de: 'O Herr, komm und erlöse uns mit ausgestrecktem Arm.' } },
    { day: 3, title: { de: 'O Wurzel Jesse (O Radix Jesse)' }, meditation: { de: 'Aus dem Stamm Jesse sprießt das verheißene Reis.' }, prayer: { de: 'O Wurzel Jesse, komm und säume nicht länger.' } },
    { day: 4, title: { de: 'O Schlüssel Davids (O Clavis David)' }, meditation: { de: 'Er öffnet, was keiner schließt, und schließt, was keiner öffnet.' }, prayer: { de: 'O Schlüssel Davids, führe die Gefangenen aus dem Kerker.' } },
    { day: 5, title: { de: 'O Aufgang (O Oriens)' }, meditation: { de: 'Das aufgehende Licht erleuchtet die, die in Finsternis sitzen.' }, prayer: { de: 'O Aufgang, erleuchte uns mit deinem Glanz.' } },
    { day: 6, title: { de: 'O König der Völker (O Rex gentium)' }, meditation: { de: 'Der ersehnte König aller Völker macht die Getrennten eins.' }, prayer: { de: 'O König der Völker, komm und errette den Menschen.' } },
    { day: 7, title: { de: 'O Immanuel (O Emmanuel)' }, meditation: { de: '„Gott mit uns“ – unser König und Gesetzgeber kommt, uns zu retten.' }, prayer: { de: 'O Immanuel, komm und erlöse uns, Herr, unser Gott.' } },
    { day: 8, title: { de: 'Die Erwartung Mariens' }, meditation: { de: 'Mit Maria harren wir des Kindes, das ihr Schoß der Welt schenken wird.' }, prayer: { de: 'Maria, lehre uns, den Herrn mit reinem Herzen zu erwarten.' } },
    { day: 9, title: { de: 'Die heilige Nacht' }, meditation: { de: 'Heute ist uns der Erlöser geboren – Ehre sei Gott in der Höhe.' }, prayer: { de: 'Herr Jesus, sei willkommen in der Krippe meines Herzens.' } },
  ],
}
