import type { Novena } from '../types'

// Hingabe-Novene („Novene der Hingabe an Jesus") nach P. Dolindo Ruotolo.
// An jedem der neun Tage betrachtet man ein Wort Jesu über das vertrauensvolle
// Sich-Überlassen und schließt mit dem Hingabe-Ruf, der zehnmal wiederholt wird:
// „O Jesus, ich überlasse mich Dir, sorge Du für alles!"
export const surrender: Novena = {
  id: 'hingabe',
  title: {
    la: 'Novena deditionis ad Iesum',
    de: 'Hingabe-Novene',
  },
  subtitle: { de: 'O Jesus, ich überlasse mich Dir, sorge Du für alles!' },
  intro: {
    de: 'Diese Novene der vertrauensvollen Hingabe geht auf P. Dolindo Ruotolo zurück. An neun aufeinanderfolgenden Tagen betrachtet man ein Wort Jesu über das gläubige Sich-Überlassen und schließt jeden Tag mit dem Hingabe-Ruf, der zehnmal langsam und voll Vertrauen wiederholt wird: „O Jesus, ich überlasse mich Dir, sorge Du für alles!"',
  },
  dailyPrayer: {
    id: 'hingabe-ruf',
    title: { la: 'Invocatio deditionis', de: 'Hingabe-Ruf (10×)' },
    text: {
      de: 'O Jesus, ich überlasse mich Dir, sorge Du für alles! (zehnmal)',
    },
    rubric: { de: 'Der Ruf wird zum Abschluss jedes Tages zehnmal wiederholt.' },
  },
  days: [
    {
      day: 1,
      title: { de: 'Warum ängstigt ihr euch?' },
      meditation: {
        de: 'Jesus spricht: „Warum verwirrt ihr euch mit Sorgen? Überlasst mir die Sorge um eure Anliegen, und alles wird Frieden finden. Jeder Akt wahrer, vollständiger Hingabe an mich bewirkt, was ihr ersehnt, und löst die schwierigsten Lagen."',
      },
      prayer: { de: 'O Jesus, ich überlasse mich Dir, sorge Du für alles! (10×)' },
    },
    {
      day: 2,
      title: { de: 'Hingabe ist nicht Sich-Sorgen' },
      meditation: {
        de: 'Sich mir hingeben heißt nicht, sich aufzuregen, zu verzweifeln oder mir ein von Unruhe erfülltes Gebet zu bringen. Es widerspricht der Hingabe zutiefst, sich zu ängstigen und immerfort über die Folgen nachzudenken. Schließe die Augen und lass mich wirken.',
      },
      prayer: { de: 'O Jesus, ich überlasse mich Dir, sorge Du für alles! (10×)' },
    },
    {
      day: 3,
      title: { de: 'Schließe die Augen und ruhe' },
      meditation: {
        de: 'Wie vieles wirke ich, wenn die Seele in ihrer Not sich mir zuwendet, mich anschaut und spricht: „Sorge Du für alles", dann die Augen schließt und ruht. Wenig Gnade empfängt, wer sich abmüht und selbst helfen will; viel, wer sich mir ganz überlässt.',
      },
      prayer: { de: 'O Jesus, ich überlasse mich Dir, sorge Du für alles! (10×)' },
    },
    {
      day: 4,
      title: { de: 'Lege die schwere Last ab' },
      meditation: {
        de: 'Du siehst das aufkommende Übel und nicht das Gute; du willst selbst vorsorgen und ordnen und so mein Wirken hemmen. Lege den müden Sinn beiseite, den Schmerz, die Sorge, und überlass dich meinem Willen. Vertraue mir – ich sorge für dich.',
      },
      prayer: { de: 'O Jesus, ich überlasse mich Dir, sorge Du für alles! (10×)' },
    },
    {
      day: 5,
      title: { de: 'Lass mich der Arzt sein' },
      meditation: {
        de: 'Wenn ihr euch mir überlasst, mische ich alles wie ein weiser Arzt und Heiland zu eurem Heil. Sei nicht wie ein Kranker, der dem Arzt ins Handwerk redet. Bete in Bereitschaft, alles anzunehmen, und sprich in jeder Not: „Jesus, sorge Du dafür."',
      },
      prayer: { de: 'O Jesus, ich überlasse mich Dir, sorge Du für alles! (10×)' },
    },
    {
      day: 6,
      title: { de: 'Lass dich vom Strom der Gnade tragen' },
      meditation: {
        de: 'Wenn du dich niedergedrückt fühlst und alles sich gegen dich zu wenden scheint, schließe die Augen deiner Seele und sprich voll Vertrauen: „Jesus, sorge Du für alles." Lass dich forttragen auf dem Strom meiner Gnade; sorge dich nicht, sondern ruhe in mir.',
      },
      prayer: { de: 'O Jesus, ich überlasse mich Dir, sorge Du für alles! (10×)' },
    },
    {
      day: 7,
      title: { de: 'Denke nicht an das Morgen' },
      meditation: {
        de: 'Denke nicht ängstlich an das Morgen. Jeder Tag hat genug an seiner eigenen Sorge; lass mich für den kommenden Tag sorgen. Wo alles verschlossen scheint, öffne ich zur rechten Zeit die Wege, die kein Mensch sieht. Überlass dich mir ganz.',
      },
      prayer: { de: 'O Jesus, ich überlasse mich Dir, sorge Du für alles! (10×)' },
    },
    {
      day: 8,
      title: { de: 'Vertraue auch im Dunkel' },
      meditation: {
        de: 'Wenn ich eine Seele auf einem Weg der inneren Läuterung führe und alles finster und schwer wird, soll sie umso mehr vertrauen. Nicht das Fühlen der Hingabe zählt, sondern der Wille, sich mir zu überlassen. Verweile in Frieden bei mir.',
      },
      prayer: { de: 'O Jesus, ich überlasse mich Dir, sorge Du für alles! (10×)' },
    },
    {
      day: 9,
      title: { de: 'Ich wirke Wunder der Hingabe' },
      meditation: {
        de: 'Ich wirke Wunder in dem Maß, in dem ihr euch mir ganz überlasst und aufhört, euch selbst zu sorgen. Häuft Schätze zärtlichen Vertrauens auf. Verschließt euch nicht in Furcht, sondern legt alles in meine Hände und ruht in meiner Liebe.',
      },
      prayer: { de: 'O Jesus, ich überlasse mich Dir, sorge Du für alles! (10×)' },
    },
  ],
}
