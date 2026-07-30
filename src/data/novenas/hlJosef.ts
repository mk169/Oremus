import type { Novena } from '../types'

// Novene zum heiligen Josef, dem Nährvater Jesu und Patron der Kirche,
// üblich zur Vorbereitung auf sein Fest am 19. März.
export const stJoseph: Novena = {
  id: 'hl-josef',
  title: { la: 'Novena ad Sanctum Joseph', de: 'Novene zum heiligen Josef' },
  subtitle: { de: 'Nährvater Jesu und Patron der ganzen Kirche' },
  intro: {
    de: 'Der heilige Josef, Bräutigam der Gottesmutter und Nährvater des Herrn, ist der Patron der Kirche, der Arbeiter, der Familien und der Sterbenden. Diese Novene wird besonders in den neun Tagen vor seinem Fest (19. März) gebetet.',
  },
  dailyPrayer: {
    id: 'jos-taeglich',
    title: { la: 'Ad te, beate Joseph', de: 'Tägliches Gebet' },
    text: {
      la: 'Ad te, beáte Joseph, in tribulatióne nostra confúgimus, atque, imploráto Sponsæ tuæ sanctíssimæ auxílio, patrocínium quoque tuum fidénter expóscimus.',
      de: 'Zu dir, heiliger Josef, nehmen wir in unserer Not unsere Zuflucht und rufen deinen mächtigen Schutz an. Beschütze die heilige Kirche, sei uns ein Vater und Führer und stehe uns bei in der Stunde unseres Todes. Amen.',
    },
  },
  days: [
    { day: 1, title: { de: 'Der gerechte Mann' }, meditation: { de: 'Die Schrift nennt Josef schlicht „gerecht“ – ganz auf Gott ausgerichtet.' }, prayer: { de: 'Heiliger Josef, lehre mich, gerecht vor Gott zu leben.' } },
    { day: 2, title: { de: 'Der gehorsame Diener' }, meditation: { de: 'Auf das Wort des Engels hin gehorchte er sogleich, ohne zu zögern.' }, prayer: { de: 'Heiliger Josef, hilf mir, dem Willen Gottes bereitwillig zu folgen.' } },
    { day: 3, title: { de: 'Der keusche Bräutigam Mariens' }, meditation: { de: 'In lauterer Liebe war er der Hüter der Jungfrau.' }, prayer: { de: 'Heiliger Josef, bewahre mein Herz in Reinheit.' } },
    { day: 4, title: { de: 'Der Nährvater Jesu' }, meditation: { de: 'Mit seiner Hände Arbeit sorgte er für das Brot der heiligen Familie.' }, prayer: { de: 'Heiliger Josef, segne die Arbeit meiner Hände.' } },
    { day: 5, title: { de: 'Der Beschützer der heiligen Familie' }, meditation: { de: 'Auf der Flucht nach Ägypten bewahrte er das Kind und seine Mutter.' }, prayer: { de: 'Heiliger Josef, beschütze meine Familie vor allem Übel.' } },
    { day: 6, title: { de: 'Der Mann des Schweigens' }, meditation: { de: 'Kein Wort ist von ihm überliefert – er redete durch sein treues Tun.' }, prayer: { de: 'Heiliger Josef, lehre mich das Schweigen und die stille Treue.' } },
    { day: 7, title: { de: 'Der geduldige Arbeiter' }, meditation: { de: 'In der Werkstatt von Nazareth heiligte er die tägliche Mühe.' }, prayer: { de: 'Heiliger Josef, hilf mir, meine Pflichten treu zu erfüllen.' } },
    { day: 8, title: { de: 'Der Patron der Sterbenden' }, meditation: { de: 'Im Beistand Jesu und Mariens ist er selig gestorben.' }, prayer: { de: 'Heiliger Josef, stehe mir bei in der Stunde meines Todes.' } },
    { day: 9, title: { de: 'Der Schutzherr der Kirche' }, meditation: { de: 'Wie einst die heilige Familie behütet er die ganze Kirche Christi.' }, prayer: { de: 'Heiliger Josef, beschütze die Kirche und alle, die dir vertrauen.' } },
  ],
}
