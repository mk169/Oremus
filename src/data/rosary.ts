import type { Prayer, RosarySet } from './types'

// Rosenkranz: Grundgebete und die vier Geheimnis-Sätze.
// Zweisprachig (lateinischer Rosenkranz + Deutsch), je Geheimnis mit dem
// vollständigen Text der Bibelstelle (Vulgata / gemeinfreie Allioli-Übersetzung),
// ohne Buch-/Kapitelangabe.

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
        passage: {
          la: 'Ingréssus ángelus ad eam dixit: Ave grátia plena: Dóminus tecum: benedícta tu in muliéribus. Ne tímeas, María: invenísti enim grátiam apud Deum. Ecce concípies in útero, et páries fílium, et vocábis nomen eius Iesum. Dixit autem María: Ecce ancílla Dómini, fiat mihi secúndum verbum tuum.',
          de: 'Der Engel trat zu ihr ein und sprach: Sei gegrüßt, du Gnadenvolle! Der Herr ist mit dir; du bist gebenedeit unter den Frauen. Fürchte dich nicht, Maria; denn du hast Gnade bei Gott gefunden. Siehe, du wirst empfangen und einen Sohn gebären, und du sollst ihm den Namen Jesus geben. Maria aber sprach: Siehe, ich bin die Magd des Herrn; mir geschehe nach deinem Worte.',
        },
      },
      {
        id: 'g2',
        clause: { la: '…Iesus, quem, Virgo, ad Elísabeth portásti.', de: '…Jesus, den du, o Jungfrau, zu Elisabet getragen hast.' },
        name: { la: 'Visitatio', de: 'Heimsuchung Mariens' },
        passage: {
          la: 'Et exclamávit voce magna, et dixit: Benedícta tu inter mulíeres, et benedíctus fructus ventris tui. Et unde hoc mihi, ut véniat mater Dómini mei ad me? Et ait María: Magníficat ánima mea Dóminum, et exsultávit spíritus meus in Deo salutári meo.',
          de: 'Und sie rief mit lauter Stimme und sprach: Gebenedeit bist du unter den Frauen, und gebenedeit ist die Frucht deines Leibes. Und woher wird mir dies, dass die Mutter meines Herrn zu mir kommt? Und Maria sprach: Meine Seele preist die Größe des Herrn, und mein Geist frohlockt in Gott, meinem Heile.',
        },
      },
      {
        id: 'g3',
        clause: { la: '…Iesus, quem, Virgo, in Béthlehem genuísti.', de: '…Jesus, den du, o Jungfrau, in Betlehem geboren hast.' },
        name: { la: 'Nativitas Domini', de: 'Geburt des Herrn' },
        passage: {
          la: 'Péperit fílium suum primogénitum, et pannis eum invólvit, et reclinávit eum in præsépio: quia non erat eis locus in diversório. Et dixit illis ángelus: Nolíte timére: ecce enim evangelízo vobis gáudium magnum: quia natus est vobis hódie Salvátor, qui est Christus Dóminus, in civitáte David.',
          de: 'Sie gebar ihren erstgeborenen Sohn, wickelte ihn in Windeln und legte ihn in eine Krippe; denn sie fanden keinen Raum in der Herberge. Und der Engel sprach zu ihnen: Fürchtet euch nicht; denn siehe, ich verkünde euch eine große Freude: Heute ist euch in der Stadt Davids der Heiland geboren, welcher ist Christus, der Herr.',
        },
      },
      {
        id: 'g4',
        clause: { la: '…Iesus, quem, Virgo, in templo præsentásti.', de: '…Jesus, den du, o Jungfrau, im Tempel aufgeopfert hast.' },
        name: { la: 'Praesentatio in templo', de: 'Darstellung im Tempel' },
        passage: {
          la: 'Túlerunt illum in Ierúsalem, ut sísterent eum Dómino. Et ipse accépit eum in ulnas suas, et benedíxit Deum, et dixit: Nunc dimíttis servum tuum, Dómine, secúndum verbum tuum in pace: quia vidérunt óculi mei salutáre tuum, lumen ad revelatiónem géntium, et glóriam plebis tuæ Israël.',
          de: 'Sie brachten ihn nach Jerusalem, um ihn dem Herrn darzustellen. Und er nahm ihn in seine Arme, pries Gott und sprach: Nun entlässest du, o Herr, deinen Diener nach deinem Worte in Frieden; denn meine Augen haben dein Heil geschaut, das Licht zur Erleuchtung der Völker und zur Verherrlichung deines Volkes Israel.',
        },
      },
      {
        id: 'g5',
        clause: { la: '…Iesus, quem, Virgo, in templo invenísti.', de: '…Jesus, den du, o Jungfrau, im Tempel wiedergefunden hast.' },
        name: { la: 'Inventio in templo', de: 'Der zwölfjährige Jesus im Tempel' },
        passage: {
          la: 'Invenérunt illum in templo sedéntem in médio doctórum, audiéntem illos et interrogántem eos. Et ait ad illos: Quid est quod me quærebátis? nesciebátis quia in his quæ Patris mei sunt, opórtet me esse? Et ipse erat súbditus illis. Et mater eius conservábat ómnia verba hæc in corde suo.',
          de: 'Sie fanden ihn im Tempel, wie er mitten unter den Lehrern saß, ihnen zuhörte und sie befragte. Und er sprach zu ihnen: Warum habt ihr mich gesucht? Wusstet ihr nicht, dass ich in dem sein muss, was meines Vaters ist? Und er war ihnen untertan. Und seine Mutter bewahrte alle diese Worte in ihrem Herzen.',
        },
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
        passage: {
          la: 'Baptizátus autem Iesus, conféstim ascéndit de aqua. Et ecce apérti sunt ei cæli: et vidit Spíritum Dei descendéntem sicut colúmbam, et veniéntem super se. Et ecce vox de cælis dicens: Hic est Fílius meus diléctus, in quo mihi complácui.',
          de: 'Als aber Jesus getauft war, stieg er sogleich aus dem Wasser. Und siehe, da öffneten sich ihm die Himmel, und er sah den Geist Gottes wie eine Taube herabkommen und über sich schweben. Und siehe, eine Stimme aus den Himmeln sprach: Dieser ist mein geliebter Sohn, an dem ich Wohlgefallen habe.',
        },
      },
      {
        id: 'l2',
        clause: { la: '…Iesus, qui apud Canam sese revelávit.', de: '…Jesus, der sich bei der Hochzeit zu Kana geoffenbart hat.' },
        name: { la: 'Nuptiae Canae', de: 'Die Hochzeit zu Kana' },
        passage: {
          la: 'Et defíciente vino, dicit mater Iesu ad eum: Vinum non habent. Dicit mater eius minístris: Quodcúmque díxerit vobis, fácite. Hoc fecit inítium signórum Iesus in Cana Galilǽæ: et manifestávit glóriam suam, et credidérunt in eum discípuli eius.',
          de: 'Und als der Wein ausging, sprach die Mutter Jesu zu ihm: Sie haben keinen Wein. Seine Mutter sprach zu den Dienern: Was er euch sagt, das tut. Dies tat Jesus als Anfang der Zeichen zu Kana in Galiläa und offenbarte seine Herrlichkeit; und seine Jünger glaubten an ihn.',
        },
      },
      {
        id: 'l3',
        clause: { la: '…Iesus, qui regnum Dei annuntiávit.', de: '…Jesus, der das Reich Gottes verkündet hat.' },
        name: { la: 'Regni Dei proclamatio', de: 'Verkündigung des Reiches Gottes' },
        passage: {
          la: 'Venit Iesus in Galilǽam, prǽdicans Evangélium regni Dei, et dicens: Quóniam implétum est tempus, et appropinquávit regnum Dei: pæniténtiam ágite, et crédite Evangélio.',
          de: 'Jesus kam nach Galiläa, verkündete das Evangelium vom Reiche Gottes und sprach: Die Zeit ist erfüllt, und das Reich Gottes ist nahe herbeigekommen; tut Buße und glaubet an das Evangelium.',
        },
      },
      {
        id: 'l4',
        clause: { la: '…Iesus, qui in monte transfigurátus est.', de: '…Jesus, der auf dem Berg verklärt worden ist.' },
        name: { la: 'Transfiguratio', de: 'Verklärung des Herrn' },
        passage: {
          la: 'Et transfigurátus est ante eos. Et resplénduit fácies eius sicut sol: vestiménta autem eius facta sunt alba sicut nix. Et ecce nubes lúcida obumbrávit eos. Et ecce vox de nube, dicens: Hic est Fílius meus diléctus, in quo mihi bene complácui: ipsum audíte.',
          de: 'Und er wurde vor ihnen verklärt. Und sein Angesicht leuchtete wie die Sonne, seine Kleider aber wurden weiß wie der Schnee. Und siehe, eine lichte Wolke überschattete sie. Und siehe, eine Stimme aus der Wolke sprach: Dieser ist mein geliebter Sohn, an dem ich Wohlgefallen habe; ihn sollt ihr hören.',
        },
      },
      {
        id: 'l5',
        clause: { la: '…Iesus, qui Eucharístiam instítuit.', de: '…Jesus, der uns die Eucharistie geschenkt hat.' },
        name: { la: 'Institutio Eucharistiae', de: 'Einsetzung der Eucharistie' },
        passage: {
          la: 'Accépit Iesus panem, et benedíxit, ac fregit, dedítque discípulis suis, et ait: Accípite, et comédite: hoc est corpus meum. Et accípiens cálicem, grátias egit: et dedit illis, dicens: Bíbite ex hoc omnes. Hic est enim sanguis meus novi testaménti, qui pro multis effundétur in remissiónem peccatórum.',
          de: 'Jesus nahm das Brot, segnete es, brach es und gab es seinen Jüngern und sprach: Nehmet hin und esset; das ist mein Leib. Und er nahm den Kelch, sagte Dank und gab ihnen denselben und sprach: Trinket alle daraus. Denn das ist mein Blut des neuen Bundes, das für viele vergossen wird zur Vergebung der Sünden.',
        },
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
        passage: {
          la: 'Et positis génibus orábat, dicens: Pater, si vis, transfer cálicem istum a me: verúmtamen non mea volúntas, sed tua fiat. Et factus in agónia, prolíxius orábat. Et factus est sudor eius sicut guttæ sánguinis decurréntis in terram.',
          de: 'Und er kniete nieder, betete und sprach: Vater, willst du, so nimm diesen Kelch von mir; doch nicht mein, sondern dein Wille geschehe. Und er kam in Todesangst und betete noch inständiger. Und sein Schweiß wurde wie Blutstropfen, die zur Erde niederfielen.',
        },
      },
      {
        id: 'd2',
        clause: { la: '…Iesus, qui pro nobis flagellátus est.', de: '…Jesus, der für uns gegeißelt worden ist.' },
        name: { la: 'Flagellatio', de: 'Geißelung' },
        passage: {
          la: 'Tunc ergo apprehéndit Pilátus Iesum, et flagellávit. Ipse autem vulnerátus est propter iniquitátes nostras, attrítus est propter scélera nostra: disciplína pacis nostræ super eum, et livóre eius sanáti sumus.',
          de: 'Da nahm Pilatus Jesus und ließ ihn geißeln. Er aber ist verwundet worden um unserer Missetaten willen und zerschlagen um unserer Sünden willen. Die Strafe lag auf ihm zu unserem Heile, und durch seine Wunden sind wir geheilt.',
        },
      },
      {
        id: 'd3',
        clause: { la: '…Iesus, qui pro nobis spinis coronátus est.', de: '…Jesus, der für uns mit Dornen gekrönt worden ist.' },
        name: { la: 'Coronatio spinis', de: 'Dornenkrönung' },
        passage: {
          la: 'Et plecténtes corónam de spinis, posuérunt super caput eius, et arúndinem in déxtera eius. Et genu flexo ante eum, illudébant ei, dicéntes: Ave rex Iudæórum. Et éxspuentes in eum, accepérunt arúndinem, et percutiébant caput eius.',
          de: 'Und sie flochten eine Krone aus Dornen, setzten sie ihm aufs Haupt und gaben ihm ein Rohr in seine Rechte. Und sie beugten das Knie vor ihm, verspotteten ihn und sprachen: Sei gegrüßt, König der Juden! Und sie spien ihn an, nahmen das Rohr und schlugen ihn auf das Haupt.',
        },
      },
      {
        id: 'd4',
        clause: { la: '…Iesus, qui pro nobis crucem baiulávit.', de: '…Jesus, der für uns das schwere Kreuz getragen hat.' },
        name: { la: 'Baiulatio crucis', de: 'Kreuztragung' },
        passage: {
          la: 'Et báiulans sibi crucem, exívit in eum, qui dícitur Calváriæ, locum. Sequebátur autem illum multa turba pópuli et mulíerum, quæ plangébant et lamentabántur eum. Convérsus autem ad illas Iesus, dixit: Fíliæ Ierúsalem, nolíte flere super me, sed super vos ipsas flete.',
          de: 'Und er trug sein Kreuz und ging hinaus zur sogenannten Schädelstätte. Es folgte ihm aber eine große Menge Volkes und auch Frauen, die ihn beklagten und beweinten. Jesus aber wandte sich zu ihnen und sprach: Ihr Töchter Jerusalems, weinet nicht über mich, sondern weinet über euch selbst.',
        },
      },
      {
        id: 'd5',
        clause: { la: '…Iesus, qui pro nobis crucifíxus est.', de: '…Jesus, der für uns gekreuzigt worden ist.' },
        name: { la: 'Crucifixio et mors', de: 'Kreuzigung und Tod des Herrn' },
        passage: {
          la: 'Ibi crucifixérunt eum. Iesus autem dicébat: Pater, dimítte illis: non enim sciunt quid fáciunt. Cum ergo accepísset Iesus acétum, dixit: Consummátum est. Et inclináto cápite trádidit spíritum.',
          de: 'Dort kreuzigten sie ihn. Jesus aber sprach: Vater, vergib ihnen; denn sie wissen nicht, was sie tun. Als nun Jesus den Essig genommen hatte, sprach er: Es ist vollbracht. Und er neigte das Haupt und gab den Geist auf.',
        },
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
        passage: {
          la: 'Respóndens autem ángelus, dixit muliéribus: Nolíte timére vos: scio enim, quod Iesum, qui crucifíxus est, quǽritis. Non est hic: surréxit enim, sicut dixit. Veníte, et vidéte locum ubi pósitus erat Dóminus.',
          de: 'Der Engel aber sprach zu den Frauen: Fürchtet euch nicht! Ich weiß, dass ihr Jesus suchet, den Gekreuzigten. Er ist nicht hier; denn er ist auferstanden, wie er gesagt hat. Kommet und sehet die Stätte, wo der Herr gelegen hat.',
        },
      },
      {
        id: 'r2',
        clause: { la: '…Iesus, qui in cælum ascéndit.', de: '…Jesus, der in den Himmel aufgefahren ist.' },
        name: { la: 'Ascensio', de: 'Himmelfahrt des Herrn' },
        passage: {
          la: 'Et Dóminus quidem Iesus, postquam locútus est eis, assúmptus est in cælum, et sedet a dextris Dei. Vidéntibus illis, elevátus est: et nubes suscépit eum ab óculis eórum. Et ecce duo viri astitérunt iuxta illos in véstibus albis, qui et dixérunt: Sic véniet, quemádmodum vidístis eum eúntem in cælum.',
          de: 'Und der Herr Jesus ward, nachdem er zu ihnen geredet hatte, in den Himmel aufgenommen und sitzet zur Rechten Gottes. Vor ihren Augen wurde er emporgehoben, und eine Wolke nahm ihn auf, vor ihren Blicken. Und siehe, zwei Männer in weißen Kleidern standen bei ihnen, welche sprachen: So wird er wiederkommen, wie ihr ihn habt in den Himmel auffahren sehen.',
        },
      },
      {
        id: 'r3',
        clause: { la: '…Iesus, qui Spíritum Sanctum misit.', de: '…Jesus, der uns den Heiligen Geist gesandt hat.' },
        name: { la: 'Missio Spiritus Sancti', de: 'Herabkunft des Heiligen Geistes' },
        passage: {
          la: 'Et factus est repénte de cælo sonus, tamquam adveniéntis spíritus veheméntis: et replévit totam domum ubi erant sedéntes. Et apparuérunt illis dispertítæ linguæ tamquam ignis: et repléti sunt omnes Spíritu Sancto, et cœpérunt loqui váriis linguis, prout Spíritus Sanctus dabat éloqui illis.',
          de: 'Und plötzlich entstand vom Himmel her ein Brausen, wie wenn ein gewaltiger Wind daherfährt, und erfüllte das ganze Haus, wo sie saßen. Und es erschienen ihnen zerteilte Zungen wie von Feuer, und es setzte sich auf einen jeden von ihnen. Und alle wurden vom Heiligen Geist erfüllt und begannen in verschiedenen Sprachen zu reden, wie der Heilige Geist ihnen zu reden eingab.',
        },
      },
      {
        id: 'r4',
        clause: { la: '…Iesus, qui te, Virgo, in cælum assúmpsit.', de: '…Jesus, der dich, o Jungfrau, in den Himmel aufgenommen hat.' },
        name: { la: 'Assumptio B.M.V.', de: 'Aufnahme Mariens in den Himmel' },
        passage: {
          la: 'Fecit mihi magna qui potens est, et sanctum nomen eius. Ecce enim ex hoc beátam me dicent omnes generatiónes. Exaltáta est sancta Dei Génetrix super choros angelórum ad cæléstia regna. Assúmpta est María in cælum: gaudent ángeli.',
          de: 'Großes hat an mir getan der Mächtige, und heilig ist sein Name. Denn siehe, von nun an werden mich selig preisen alle Geschlechter. Erhöht ward die heilige Gottesgebärerin über die Chöre der Engel zu den himmlischen Reichen. Aufgenommen ward Maria in den Himmel; es freuen sich die Engel.',
        },
      },
      {
        id: 'r5',
        clause: { la: '…Iesus, qui te, Virgo, in cælis coronávit.', de: '…Jesus, der dich, o Jungfrau, im Himmel gekrönt hat.' },
        name: { la: 'Coronatio B.M.V.', de: 'Krönung Mariens' },
        passage: {
          la: 'Et signum magnum appáruit in cælo: múlier amícta sole, et luna sub pédibus eius, et in cápite eius coróna stellárum duódecim. Tu glória Ierúsalem, tu lætítia Israël, tu honorificéntia pópuli nostri.',
          de: 'Und ein großes Zeichen erschien am Himmel: eine Frau, mit der Sonne bekleidet, und der Mond unter ihren Füßen, und auf ihrem Haupte eine Krone von zwölf Sternen. Du bist die Ehre Jerusalems, du die Freude Israels, du die Zierde unseres Volkes.',
        },
      },
    ],
  },
]
