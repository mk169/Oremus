import type { Prayer, RosarySet } from './types'

// Rosenkranz: Grundgebete und die vier Geheimnis-Sätze (Latein / Deutsch).

export const rosaryPrayers: Prayer[] = [
  {
    id: 'signum',
    title: { la: 'Signum crucis', de: 'Kreuzzeichen' },
    text: {
      la: 'In nómine Patris, et Fílii, et Spíritus Sancti. Amen.',
      de: 'Im Namen des Vaters und des Sohnes und des Heiligen Geistes. Amen.',
    },
  },
  {
    id: 'credo',
    title: { la: 'Symbolum Apostolorum', de: 'Apostolisches Glaubensbekenntnis' },
    text: {
      la: 'Credo in Deum, Patrem omnipoténtem, Creatórem cæli et terræ…',
      de: 'Ich glaube an Gott, den Vater, den Allmächtigen, den Schöpfer des Himmels und der Erde…',
    },
  },
  {
    id: 'pater',
    title: { la: 'Pater noster', de: 'Vaterunser' },
    text: {
      la: 'Pater noster, qui es in cælis, sanctificétur nomen tuum…',
      de: 'Vater unser im Himmel, geheiligt werde dein Name…',
    },
  },
  {
    id: 'ave',
    title: { la: 'Ave Maria', de: 'Gegrüßet seist du, Maria' },
    text: {
      la: 'Ave María, grátia plena, Dóminus tecum. Benedícta tu in muliéribus, et benedíctus fructus ventris tui, Jesus. Sancta María, Mater Dei, ora pro nobis peccatóribus, nunc et in hora mortis nostræ. Amen.',
      de: 'Gegrüßet seist du, Maria, voll der Gnade, der Herr ist mit dir. Du bist gebenedeit unter den Frauen, und gebenedeit ist die Frucht deines Leibes, Jesus. Heilige Maria, Mutter Gottes, bitte für uns Sünder jetzt und in der Stunde unseres Todes. Amen.',
    },
  },
  {
    id: 'gloria',
    title: { la: 'Gloria Patri', de: 'Ehre sei dem Vater' },
    text: {
      la: 'Glória Patri, et Fílio, et Spirítui Sancto. Sicut erat in princípio, et nunc, et semper, et in sǽcula sæculórum. Amen.',
      de: 'Ehre sei dem Vater und dem Sohn und dem Heiligen Geist, wie im Anfang, so auch jetzt und allezeit und in Ewigkeit. Amen.',
    },
  },
]

export const rosarySets: RosarySet[] = [
  {
    id: 'gaudiosa',
    title: { la: 'Mysteria gaudiosa', de: 'Freudenreiche Geheimnisse' },
    days: { de: 'Montag und Samstag' },
    mysteries: [
      { id: 'g1', title: { de: 'Jesus, den du, o Jungfrau, vom Heiligen Geist empfangen hast' }, fruit: { de: 'Verkündigung des Herrn (Lk 1,26-38)' } },
      { id: 'g2', title: { de: 'Jesus, den du, o Jungfrau, zu Elisabet getragen hast' }, fruit: { de: 'Heimsuchung Mariens (Lk 1,39-56)' } },
      { id: 'g3', title: { de: 'Jesus, den du, o Jungfrau, in Betlehem geboren hast' }, fruit: { de: 'Geburt des Herrn (Lk 2,1-20)' } },
      { id: 'g4', title: { de: 'Jesus, den du, o Jungfrau, im Tempel aufgeopfert hast' }, fruit: { de: 'Darstellung im Tempel (Lk 2,22-40)' } },
      { id: 'g5', title: { de: 'Jesus, den du, o Jungfrau, im Tempel wiedergefunden hast' }, fruit: { de: 'Der zwölfjährige Jesus (Lk 2,41-52)' } },
    ],
  },
  {
    id: 'luminosa',
    title: { la: 'Mysteria luminosa', de: 'Lichtreiche Geheimnisse' },
    days: { de: 'Donnerstag' },
    mysteries: [
      { id: 'l1', title: { de: 'Jesus, der von Johannes getauft worden ist' }, fruit: { de: 'Taufe im Jordan (Mt 3,13-17)' } },
      { id: 'l2', title: { de: 'Jesus, der sich bei der Hochzeit zu Kana offenbart hat' }, fruit: { de: 'Das erste Zeichen (Joh 2,1-12)' } },
      { id: 'l3', title: { de: 'Jesus, der das Reich Gottes verkündet hat' }, fruit: { de: 'Ruf zur Umkehr (Mk 1,14-15)' } },
      { id: 'l4', title: { de: 'Jesus, der auf dem Berg verklärt worden ist' }, fruit: { de: 'Verklärung (Lk 9,28-36)' } },
      { id: 'l5', title: { de: 'Jesus, der uns die Eucharistie geschenkt hat' }, fruit: { de: 'Letztes Abendmahl (Lk 22,14-20)' } },
    ],
  },
  {
    id: 'dolorosa',
    title: { la: 'Mysteria dolorosa', de: 'Schmerzhafte Geheimnisse' },
    days: { de: 'Dienstag und Freitag' },
    mysteries: [
      { id: 'd1', title: { de: 'Jesus, der für uns Blut geschwitzt hat' }, fruit: { de: 'Todesangst am Ölberg (Lk 22,39-46)' } },
      { id: 'd2', title: { de: 'Jesus, der für uns gegeißelt worden ist' }, fruit: { de: 'Geißelung (Joh 19,1)' } },
      { id: 'd3', title: { de: 'Jesus, der für uns mit Dornen gekrönt worden ist' }, fruit: { de: 'Dornenkrönung (Mt 27,27-31)' } },
      { id: 'd4', title: { de: 'Jesus, der für uns das schwere Kreuz getragen hat' }, fruit: { de: 'Kreuzweg (Lk 23,26-32)' } },
      { id: 'd5', title: { de: 'Jesus, der für uns gekreuzigt worden ist' }, fruit: { de: 'Kreuzigung und Tod (Joh 19,17-30)' } },
    ],
  },
  {
    id: 'gloriosa',
    title: { la: 'Mysteria gloriosa', de: 'Glorreiche Geheimnisse' },
    days: { de: 'Mittwoch und Sonntag' },
    mysteries: [
      { id: 'r1', title: { de: 'Jesus, der von den Toten auferstanden ist' }, fruit: { de: 'Auferstehung (Mt 28,1-10)' } },
      { id: 'r2', title: { de: 'Jesus, der in den Himmel aufgefahren ist' }, fruit: { de: 'Himmelfahrt (Apg 1,6-11)' } },
      { id: 'r3', title: { de: 'Jesus, der uns den Heiligen Geist gesandt hat' }, fruit: { de: 'Pfingsten (Apg 2,1-13)' } },
      { id: 'r4', title: { de: 'Jesus, der dich, o Jungfrau, in den Himmel aufgenommen hat' }, fruit: { de: 'Aufnahme Mariens' } },
      { id: 'r5', title: { de: 'Jesus, der dich, o Jungfrau, im Himmel gekrönt hat' }, fruit: { de: 'Krönung Mariens' } },
    ],
  },
]
