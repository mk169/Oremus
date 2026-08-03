import type { Novena } from '../types'

// Novene zum Heiligsten Herzen Jesu.
// Neun Tage, jeweils Betrachtung + Tagesgebet; dazu ein tägliches Gebet.
export const sacredHeart: Novena = {
  id: 'herz-jesu',
  title: { la: 'Novena ad Sacratissimum Cor Jesu', de: 'Novene zum Heiligsten Herzen Jesu' },
  subtitle: { de: 'Zur Vorbereitung auf das Herz-Jesu-Fest' },
  intro: {
    de: 'Diese Novene wird an neun aufeinanderfolgenden Tagen gebetet. An jedem Tag betrachtet man das Geheimnis der Liebe des göttlichen Herzens und schließt mit dem Tagesgebet und dem täglichen Gebet.',
  },
  dailyPrayer: {
    id: 'hj-taeglich',
    title: { la: 'Oratio cotidiana', de: 'Tägliches Gebet' },
    text: {
      la: 'Cor Jesu sacratíssimum, miserére nobis.',
      de: 'O göttliches Herz Jesu, ich opfere dir durch das Unbefleckte Herz Mariens die Gebete, Werke und Leiden dieses Tages auf. Herz Jesu, ich vertraue auf dich. Amen.',
    },
  },
  days: [
    { day: 1, title: { de: 'Das Herz Jesu – Quelle der Liebe' }, meditation: { de: 'Betrachte die grenzenlose Liebe, mit der das Herz Jesu jeden Menschen umfängt.' }, prayer: { de: 'Herz Jesu, entzünde in mir das Feuer deiner Liebe.' } },
    { day: 2, title: { de: 'Das Herz Jesu – reich an Barmherzigkeit' }, meditation: { de: 'Kein Sünder, der zu ihm kommt, wird abgewiesen.' }, prayer: { de: 'Herz Jesu, sei mir Sünder gnädig.' } },
    { day: 3, title: { de: 'Das Herz Jesu – geduldig und voll Erbarmen' }, meditation: { de: 'Es trägt geduldig unsere Schwächen.' }, prayer: { de: 'Herz Jesu, mache mein Herz dem deinen ähnlich.' } },
    { day: 4, title: { de: 'Das Herz Jesu – Trost der Betrübten' }, meditation: { de: 'In jedem Leid dürfen wir bei ihm Zuflucht suchen.' }, prayer: { de: 'Herz Jesu, sei mein Trost in aller Not.' } },
    { day: 5, title: { de: 'Das Herz Jesu – Friede und Versöhnung' }, meditation: { de: 'Es schenkt den Frieden, den die Welt nicht geben kann.' }, prayer: { de: 'Herz Jesu, schenke mir deinen Frieden.' } },
    { day: 6, title: { de: 'Das Herz Jesu – Heil derer, die auf es hoffen' }, meditation: { de: 'Wer ihm vertraut, wird nicht zuschanden.' }, prayer: { de: 'Herz Jesu, ich vertraue auf dich.' } },
    { day: 7, title: { de: 'Das Herz Jesu – Wohnung Gottes' }, meditation: { de: 'In ihm wohnt die ganze Fülle der Gottheit.' }, prayer: { de: 'Herz Jesu, ziehe mein Herz zu dir.' } },
    { day: 8, title: { de: 'Das Herz Jesu – durchbohrt für uns' }, meditation: { de: 'Aus der geöffneten Seite strömen Gnade und Erlösung.' }, prayer: { de: 'Herz Jesu, verwunde mein Herz mit deiner Liebe.' } },
    { day: 9, title: { de: 'Das Herz Jesu – unsere Hoffnung und Heiligung' }, meditation: { de: 'Es ruft uns zur Heiligkeit und zum ewigen Leben.' }, prayer: { de: 'Herz Jesu, mache mich dir treu bis ans Ende.' } },
  ],
}
