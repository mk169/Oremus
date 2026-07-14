import type { Prayer, RosarySet } from './types'

// Rosenkranz: Grundgebete und die vier Geheimnis-Sätze.
// Zweisprachig (lateinischer Rosenkranz + Deutsch), je Geheimnis mit
// Schriftstelle und kurzem Bibeltext (Vulgata / gemeinfreie dt. Übersetzung).

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
    days: { la: 'feria II et sabbato', de: 'Montag und Samstag' },
    mysteries: [
      {
        id: 'g1',
        clause: { la: '…Iesus, quem, Virgo, concepísti.', de: '…Jesus, den du, o Jungfrau, vom Heiligen Geist empfangen hast.' },
        name: { la: 'Annuntiatio Domini', de: 'Verkündigung des Herrn' },
        scripture: { la: 'Lc 1,26-38', de: 'Lk 1,26-38' },
        verse: { la: 'Ecce concípies in útero et páries fílium, et vocábis nomen eius Iesum.', de: 'Siehe, du wirst empfangen und einen Sohn gebären, und du sollst ihm den Namen Jesus geben.' },
      },
      {
        id: 'g2',
        clause: { la: '…Iesus, quem, Virgo, ad Elísabeth portásti.', de: '…Jesus, den du, o Jungfrau, zu Elisabet getragen hast.' },
        name: { la: 'Visitatio', de: 'Heimsuchung Mariens' },
        scripture: { la: 'Lc 1,39-56', de: 'Lk 1,39-56' },
        verse: { la: 'Benedícta tu inter mulíeres, et benedíctus fructus ventris tui.', de: 'Gebenedeit bist du unter den Frauen, und gebenedeit ist die Frucht deines Leibes.' },
      },
      {
        id: 'g3',
        clause: { la: '…Iesus, quem, Virgo, in Béthlehem genuísti.', de: '…Jesus, den du, o Jungfrau, in Betlehem geboren hast.' },
        name: { la: 'Nativitas Domini', de: 'Geburt des Herrn' },
        scripture: { la: 'Lc 2,1-20', de: 'Lk 2,1-20' },
        verse: { la: 'Péperit fílium suum primogénitum, et reclinávit eum in præsépio.', de: 'Sie gebar ihren erstgeborenen Sohn und legte ihn in eine Krippe.' },
      },
      {
        id: 'g4',
        clause: { la: '…Iesus, quem, Virgo, in templo præsentásti.', de: '…Jesus, den du, o Jungfrau, im Tempel aufgeopfert hast.' },
        name: { la: 'Praesentatio in templo', de: 'Darstellung im Tempel' },
        scripture: { la: 'Lc 2,22-40', de: 'Lk 2,22-40' },
        verse: { la: 'Túlerunt Iesum in Ierúsalem, ut sísterent eum Dómino.', de: 'Sie brachten Jesus nach Jerusalem, um ihn dem Herrn darzustellen.' },
      },
      {
        id: 'g5',
        clause: { la: '…Iesus, quem, Virgo, in templo invenísti.', de: '…Jesus, den du, o Jungfrau, im Tempel wiedergefunden hast.' },
        name: { la: 'Inventio in templo', de: 'Der zwölfjährige Jesus im Tempel' },
        scripture: { la: 'Lc 2,41-52', de: 'Lk 2,41-52' },
        verse: { la: 'Invenérunt illum in templo sedéntem in médio doctórum.', de: 'Sie fanden ihn im Tempel, wie er mitten unter den Lehrern saß.' },
      },
    ],
  },
  {
    id: 'luminosa',
    title: { la: 'Mysteria luminosa', de: 'Lichtreiche Geheimnisse' },
    days: { la: 'feria V', de: 'Donnerstag' },
    mysteries: [
      {
        id: 'l1',
        clause: { la: '…Iesus, qui apud Iordánem baptizátus est.', de: '…Jesus, der von Johannes im Jordan getauft worden ist.' },
        name: { la: 'Baptismus Domini', de: 'Taufe im Jordan' },
        scripture: { la: 'Mt 3,13-17', de: 'Mt 3,13-17' },
        verse: { la: 'Hic est Fílius meus diléctus, in quo mihi complácui.', de: 'Dieser ist mein geliebter Sohn, an dem ich Wohlgefallen habe.' },
      },
      {
        id: 'l2',
        clause: { la: '…Iesus, qui apud Canam sese revelávit.', de: '…Jesus, der sich bei der Hochzeit zu Kana geoffenbart hat.' },
        name: { la: 'Nuptiae Canae', de: 'Die Hochzeit zu Kana' },
        scripture: { la: 'Io 2,1-12', de: 'Joh 2,1-12' },
        verse: { la: 'Quodcúmque díxerit vobis, fácite.', de: 'Was er euch sagt, das tut.' },
      },
      {
        id: 'l3',
        clause: { la: '…Iesus, qui regnum Dei annuntiávit.', de: '…Jesus, der das Reich Gottes verkündet hat.' },
        name: { la: 'Regni Dei proclamatio', de: 'Verkündigung des Reiches Gottes' },
        scripture: { la: 'Mc 1,14-15', de: 'Mk 1,14-15' },
        verse: { la: 'Implétum est tempus, et appropinquávit regnum Dei; pæniténtiam ágite.', de: 'Die Zeit ist erfüllt, und das Reich Gottes ist nahe; kehret um.' },
      },
      {
        id: 'l4',
        clause: { la: '…Iesus, qui in monte transfigurátus est.', de: '…Jesus, der auf dem Berg verklärt worden ist.' },
        name: { la: 'Transfiguratio', de: 'Verklärung des Herrn' },
        scripture: { la: 'Lc 9,28-36', de: 'Lk 9,28-36' },
        verse: { la: 'Resplénduit fácies eius sicut sol.', de: 'Sein Angesicht leuchtete wie die Sonne.' },
      },
      {
        id: 'l5',
        clause: { la: '…Iesus, qui Eucharístiam instítuit.', de: '…Jesus, der uns die Eucharistie geschenkt hat.' },
        name: { la: 'Institutio Eucharistiae', de: 'Einsetzung der Eucharistie' },
        scripture: { la: 'Lc 22,14-20', de: 'Lk 22,14-20' },
        verse: { la: 'Hoc est corpus meum, quod pro vobis datur.', de: 'Das ist mein Leib, der für euch hingegeben wird.' },
      },
    ],
  },
  {
    id: 'dolorosa',
    title: { la: 'Mysteria dolorosa', de: 'Schmerzhafte Geheimnisse' },
    days: { la: 'feria III et VI', de: 'Dienstag und Freitag' },
    mysteries: [
      {
        id: 'd1',
        clause: { la: '…Iesus, qui pro nobis sánguinem sudávit.', de: '…Jesus, der für uns Blut geschwitzt hat.' },
        name: { la: 'Agonia in horto', de: 'Todesangst am Ölberg' },
        scripture: { la: 'Lc 22,39-46', de: 'Lk 22,39-46' },
        verse: { la: 'Factus in agónia, prolíxius orábat; et factus est sudor eius sicut guttæ sánguinis.', de: 'In Todesangst betete er inständiger, und sein Schweiß wurde wie Blutstropfen.' },
      },
      {
        id: 'd2',
        clause: { la: '…Iesus, qui pro nobis flagellátus est.', de: '…Jesus, der für uns gegeißelt worden ist.' },
        name: { la: 'Flagellatio', de: 'Geißelung' },
        scripture: { la: 'Io 19,1', de: 'Joh 19,1' },
        verse: { la: 'Tunc ergo apprehéndit Pilátus Iesum, et flagellávit.', de: 'Da nahm Pilatus Jesus und ließ ihn geißeln.' },
      },
      {
        id: 'd3',
        clause: { la: '…Iesus, qui pro nobis spinis coronátus est.', de: '…Jesus, der für uns mit Dornen gekrönt worden ist.' },
        name: { la: 'Coronatio spinis', de: 'Dornenkrönung' },
        scripture: { la: 'Mt 27,27-31', de: 'Mt 27,27-31' },
        verse: { la: 'Plecténtes corónam de spinis, imposuérunt cápiti eius.', de: 'Sie flochten eine Krone aus Dornen und setzten sie ihm aufs Haupt.' },
      },
      {
        id: 'd4',
        clause: { la: '…Iesus, qui pro nobis crucem baiulávit.', de: '…Jesus, der für uns das schwere Kreuz getragen hat.' },
        name: { la: 'Baiulatio crucis', de: 'Kreuztragung' },
        scripture: { la: 'Io 19,16-17', de: 'Joh 19,16-17' },
        verse: { la: 'Báiulans sibi crucem, exívit in eum qui dícitur Calváriæ locum.', de: 'Er trug sein Kreuz und ging hinaus zur sogenannten Schädelstätte.' },
      },
      {
        id: 'd5',
        clause: { la: '…Iesus, qui pro nobis crucifíxus est.', de: '…Jesus, der für uns gekreuzigt worden ist.' },
        name: { la: 'Crucifixio et mors', de: 'Kreuzigung und Tod des Herrn' },
        scripture: { la: 'Io 19,17-30', de: 'Joh 19,17-30' },
        verse: { la: 'Et inclináto cápite trádidit spíritum.', de: 'Und er neigte das Haupt und gab den Geist auf.' },
      },
    ],
  },
  {
    id: 'gloriosa',
    title: { la: 'Mysteria gloriosa', de: 'Glorreiche Geheimnisse' },
    days: { la: 'feria IV et dominica', de: 'Mittwoch und Sonntag' },
    mysteries: [
      {
        id: 'r1',
        clause: { la: '…Iesus, qui resurréxit a mórtuis.', de: '…Jesus, der von den Toten auferstanden ist.' },
        name: { la: 'Resurrectio', de: 'Auferstehung des Herrn' },
        scripture: { la: 'Mt 28,1-10', de: 'Mt 28,1-10' },
        verse: { la: 'Non est hic; surréxit enim, sicut dixit.', de: 'Er ist nicht hier; denn er ist auferstanden, wie er gesagt hat.' },
      },
      {
        id: 'r2',
        clause: { la: '…Iesus, qui in cælum ascéndit.', de: '…Jesus, der in den Himmel aufgefahren ist.' },
        name: { la: 'Ascensio', de: 'Himmelfahrt des Herrn' },
        scripture: { la: 'Act 1,6-11', de: 'Apg 1,6-11' },
        verse: { la: 'Elevátus est, et nubes suscépit eum ab óculis eórum.', de: 'Er wurde emporgehoben, und eine Wolke nahm ihn auf, vor ihren Augen.' },
      },
      {
        id: 'r3',
        clause: { la: '…Iesus, qui Spíritum Sanctum misit.', de: '…Jesus, der uns den Heiligen Geist gesandt hat.' },
        name: { la: 'Missio Spiritus Sancti', de: 'Herabkunft des Heiligen Geistes' },
        scripture: { la: 'Act 2,1-13', de: 'Apg 2,1-13' },
        verse: { la: 'Et repléti sunt omnes Spíritu Sancto.', de: 'Und alle wurden vom Heiligen Geist erfüllt.' },
      },
      {
        id: 'r4',
        clause: { la: '…Iesus, qui te, Virgo, in cælum assúmpsit.', de: '…Jesus, der dich, o Jungfrau, in den Himmel aufgenommen hat.' },
        name: { la: 'Assumptio B.M.V.', de: 'Aufnahme Mariens in den Himmel' },
        scripture: { la: 'cf. Lc 1,48-49', de: 'vgl. Lk 1,48-49' },
        verse: { la: 'Beátam me dicent omnes generatiónes, quia fecit mihi magna qui potens est.', de: 'Selig werden mich preisen alle Geschlechter; denn der Mächtige hat Großes an mir getan.' },
      },
      {
        id: 'r5',
        clause: { la: '…Iesus, qui te, Virgo, in cælis coronávit.', de: '…Jesus, der dich, o Jungfrau, im Himmel gekrönt hat.' },
        name: { la: 'Coronatio B.M.V.', de: 'Krönung Mariens' },
        scripture: { la: 'cf. Apc 12,1', de: 'vgl. Offb 12,1' },
        verse: { la: 'Signum magnum appáruit in cælo: múlier amícta sole, et in cápite eius coróna stellárum duódecim.', de: 'Ein großes Zeichen erschien am Himmel: eine Frau, mit der Sonne bekleidet, und auf ihrem Haupt eine Krone aus zwölf Sternen.' },
      },
    ],
  },
]
