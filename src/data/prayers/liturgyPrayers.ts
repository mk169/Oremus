import type { Prayer } from '../types'

// Gebete rund um die Liturgie (Vorbereitung / Danksagung).
// Platzhalter-Sammlung – wird vom Nutzer noch konkret ergänzt.

export const liturgyPrayers: Prayer[] = [
  {
    id: 'ante-missam',
    title: { la: 'Ante Missam', de: 'Gebet vor der heiligen Messe' },
    rubric: { de: 'Zur Vorbereitung, vor Beginn der Feier.' },
    text: {
      la: 'Áperi, Dómine, os meum ad benedicéndum nomen sanctum tuum: munda quoque cor meum ab ómnibus vanis, pervérsis et aliénis cogitatiónibus.',
      de: 'Öffne, o Herr, meinen Mund, deinen heiligen Namen zu preisen; reinige auch mein Herz von allen eitlen, verkehrten und fremden Gedanken.',
    },
  },
  {
    id: 'post-missam',
    title: { la: 'Post Missam', de: 'Danksagung nach der heiligen Messe' },
    rubric: { de: 'Zur Danksagung nach der Kommunion / nach der Feier.' },
    text: {
      la: 'Grátias tibi ago, Dómine, sancte Pater, omnípotens ætérne Deus, qui me indígnum famulum tuum, nullis meis méritis, sed sola dignatióne misericórdiæ tuæ satiáre dignátus es.',
      de: 'Ich danke dir, Herr, heiliger Vater, allmächtiger ewiger Gott, dass du mich unwürdigen Diener nicht nach meinen Verdiensten, sondern allein aus dem Erbarmen deiner Güte zu sättigen geruht hast.',
    },
  },
  {
    id: 'communio-spiritualis',
    title: { la: 'Communio spiritualis', de: 'Geistliche Kommunion' },
    text: {
      de: 'Mein Jesus, ich glaube, dass du im heiligsten Sakrament zugegen bist. Ich liebe dich über alles und sehne mich danach, dich in meine Seele aufzunehmen. Da ich dich jetzt nicht sakramental empfangen kann, so komm wenigstens geistigerweise in mein Herz.',
    },
  },
]
