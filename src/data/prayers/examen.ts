import type { Prayer } from '../types'

// Gewissenserforschung – zur Vorbereitung auf die heilige Beichte und zur
// täglichen Selbstprüfung. Nach den Zehn Geboten, den Seligpreisungen, der
// Bergpredigt und den Werken der Barmherzigkeit. Gebetstexte gemeinfrei
// (Vulgata / gemeinfreie deutsche Überlieferung).

/** Einführung und Methode der Gewissenserforschung. */
export const examenEinfuehrung: Prayer[] = [
  {
    id: 'gewissen',
    title: { la: 'De conscientia', de: 'Das Gewissen' },
    rubric: { de: 'Zur Einführung.' },
    text: {
      de: 'Das Gewissen ist die Stimme Gottes im Herzen des Menschen, die zum Guten mahnt und vor dem Bösen warnt. Wer sein Gewissen recht bilden will, prüfe es im Licht des Wortes Gottes und der Lehre der Kirche. Die Gewissenserforschung ist die stille Betrachtung vor Gott, in der man das eigene Leben an seinem Gesetz misst — nicht ängstlich, sondern in kindlichem Vertrauen auf seine Barmherzigkeit.',
    },
  },
  {
    id: 'examen-methode',
    title: { la: 'Examen conscientiae', de: 'Tägliche Gewissenserforschung' },
    rubric: { de: 'In fünf Schritten, am Abend eines jeden Tages.' },
    text: {
      de: '1. Danken — Ich danke Gott für die Wohltaten dieses Tages.\n2. Um Licht bitten — Ich bitte den Heiligen Geist, mich meine Sünden erkennen zu lassen.\n3. Prüfen — Ich gehe den Tag durch: in Gedanken, Worten, Werken und Unterlassungen.\n4. Bereuen — Ich erwecke Reue über das Böse und bitte um Verzeihung.\n5. Vornehmen — Ich fasse den festen Vorsatz der Besserung und empfehle mich dem Schutz Gottes.',
    },
  },
]

/** Gewissenserforschung nach den Zehn Geboten Gottes. */
export const zehnGebote: Prayer[] = [
  {
    id: 'gebot-1',
    title: { la: 'I. Non habebis deos alienos', de: '1. Gebot' },
    rubric: { de: 'Ich bin der Herr, dein Gott. Du sollst keine anderen Götter neben mir haben.' },
    text: {
      de: 'Habe ich an Gott geglaubt, auf ihn gehofft und ihn über alles geliebt? Habe ich das Gebet vernachlässigt? Habe ich an Aberglauben, Wahrsagerei oder Okkultem Anteil genommen? Habe ich meinen Glauben verleugnet oder mich seiner geschämt? Ist mir etwas — Geld, Ansehen, Vergnügen — zum Götzen geworden?',
    },
  },
  {
    id: 'gebot-2',
    title: { la: 'II. Non assumes nomen Dei in vanum', de: '2. Gebot' },
    rubric: { de: 'Du sollst den Namen des Herrn, deines Gottes, nicht verunehren.' },
    text: {
      de: 'Habe ich den Namen Gottes, Jesu oder der Heiligen leichtfertig oder im Zorn ausgesprochen? Habe ich geflucht oder gelästert? Habe ich falsch geschworen oder ein Gelübde gebrochen? Habe ich über Heiliges gespottet?',
    },
  },
  {
    id: 'gebot-3',
    title: { la: 'III. Memento ut diem sabbati sanctifices', de: '3. Gebot' },
    rubric: { de: 'Gedenke, dass du den Tag des Herrn heiligst.' },
    text: {
      de: 'Habe ich die heilige Messe an Sonn- und Feiertagen ohne Not versäumt oder bin ich zu spät gekommen? War ich in der Messe zerstreut oder ehrfurchtslos? Habe ich den Sonntag durch unnötige Arbeit entweiht oder ihn nicht der Ruhe und dem Gebet geheiligt?',
    },
  },
  {
    id: 'gebot-4',
    title: { la: 'IV. Honora patrem tuum et matrem tuam', de: '4. Gebot' },
    rubric: { de: 'Du sollst deinen Vater und deine Mutter ehren.' },
    text: {
      de: 'Habe ich meine Eltern geehrt, geliebt und ihnen gehorcht? Habe ich für sie gesorgt und gebetet? Habe ich meine Pflichten gegenüber Familie, Vorgesetzten und der rechtmäßigen Obrigkeit erfüllt? Habe ich als Erzieher meine Kinder oder Anvertrauten im Glauben unterwiesen und mit gutem Beispiel geleitet?',
    },
  },
  {
    id: 'gebot-5',
    title: { la: 'V. Non occides', de: '5. Gebot' },
    rubric: { de: 'Du sollst nicht töten.' },
    text: {
      de: 'Habe ich Zorn, Hass, Rachsucht oder Feindschaft in mir genährt? Habe ich andere durch Worte oder Taten verletzt, geärgert oder zur Sünde verführt? Habe ich meiner Gesundheit durch Unmäßigkeit geschadet? Habe ich mich an der Tötung oder Gefährdung menschlichen Lebens beteiligt oder zugestimmt?',
    },
  },
  {
    id: 'gebot-6',
    title: { la: 'VI. Non moechaberis', de: '6. Gebot' },
    rubric: { de: 'Du sollst nicht ehebrechen.' },
    text: {
      de: 'Habe ich in Gedanken, Worten, Blicken oder Werken gegen die Keuschheit gefehlt? Habe ich unreine Betrachtungen freiwillig zugelassen? Habe ich die eheliche Treue gewahrt und meinen Stand rein gelebt? Habe ich andere zur Unreinheit verführt?',
    },
  },
  {
    id: 'gebot-7',
    title: { la: 'VII. Non furtum facies', de: '7. Gebot' },
    rubric: { de: 'Du sollst nicht stehlen.' },
    text: {
      de: 'Habe ich fremdes Gut entwendet, beschädigt oder ungerecht behalten? Habe ich betrogen, bei der Arbeit unredlich gehandelt oder Schulden nicht beglichen? Habe ich Unrecht wiedergutgemacht, wo ich es konnte? Bin ich habsüchtig oder verschwenderisch gewesen?',
    },
  },
  {
    id: 'gebot-8',
    title: { la: 'VIII. Non loqueris falsum testimonium', de: '8. Gebot' },
    rubric: { de: 'Du sollst nicht falsches Zeugnis geben wider deinen Nächsten.' },
    text: {
      de: 'Habe ich gelogen, verleumdet oder üble Nachrede geführt? Habe ich das Vertrauen anderer missbraucht oder Geheimnisse verraten? Habe ich vorschnell und lieblos geurteilt? Habe ich den guten Ruf anderer geschädigt und, wo nötig, wiederhergestellt?',
    },
  },
  {
    id: 'gebot-9',
    title: { la: 'IX. Non desiderabis uxorem proximi tui', de: '9. Gebot' },
    rubric: { de: 'Du sollst nicht begehren deines Nächsten Frau.' },
    text: {
      de: 'Habe ich unlautere Begierden in mir gepflegt? Habe ich an unkeuschen Wünschen Gefallen gefunden? Habe ich die Gelegenheiten gemieden, die zur Sünde führen, und mein Herz vor Gott rein zu halten gesucht?',
    },
  },
  {
    id: 'gebot-10',
    title: { la: 'X. Non concupisces res proximi tui', de: '10. Gebot' },
    rubric: { de: 'Du sollst nicht begehren deines Nächsten Gut.' },
    text: {
      de: 'Habe ich den Besitz oder das Glück anderer neidvoll begehrt? War ich unzufrieden mit meinem Stand und undankbar für Gottes Gaben? Habe ich mein Herz zu sehr an irdische Güter gehängt, statt zuerst das Reich Gottes zu suchen?',
    },
  },
]

/** Gewissenserforschung im Licht der Seligpreisungen (Mt 5,3–10). */
export const seligpreisungen: Prayer[] = [
  {
    id: 'seligpreisungen',
    title: { la: 'Beatitudines', de: 'Die acht Seligpreisungen' },
    reference: { la: 'Mt 5, 3–10' },
    rubric: { de: 'Der Maßstab des Herrn für ein Leben aus dem Evangelium.' },
    text: {
      la: 'Beáti páuperes spíritu: quóniam ipsórum est regnum cælórum.\nBeáti mites: quóniam ipsi possidébunt terram.\nBeáti qui lugent: quóniam ipsi consolabúntur.\nBeáti qui esúriunt et sítiunt iustítiam: quóniam ipsi saturabúntur.\nBeáti misericórdes: quóniam ipsi misericórdiam consequéntur.\nBeáti mundo corde: quóniam ipsi Deum vidébunt.\nBeáti pacífici: quóniam fílii Dei vocabúntur.\nBeáti qui persecutiónem patiúntur propter iustítiam: quóniam ipsórum est regnum cælórum.',
      de: 'Selig, die arm sind im Geiste; denn ihrer ist das Himmelreich.\nSelig, die sanftmütig sind; denn sie werden das Land besitzen.\nSelig, die trauern; denn sie werden getröstet werden.\nSelig, die hungern und dürsten nach der Gerechtigkeit; denn sie werden gesättigt werden.\nSelig, die barmherzig sind; denn sie werden Barmherzigkeit erlangen.\nSelig, die reinen Herzens sind; denn sie werden Gott schauen.\nSelig, die Frieden stiften; denn sie werden Kinder Gottes genannt werden.\nSelig, die um der Gerechtigkeit willen Verfolgung leiden; denn ihrer ist das Himmelreich.',
    },
  },
  {
    id: 'seligpreisungen-pruefung',
    title: { de: 'Prüfung nach den Seligpreisungen' },
    text: {
      de: 'Bin ich arm im Geiste, frei von Hochmut und Habgier? Bin ich sanftmütig und geduldig? Trage ich mein Leid im Vertrauen auf Gott? Hungere ich nach Gerechtigkeit und Heiligkeit? Bin ich barmherzig gegen die Not der anderen? Halte ich mein Herz rein? Stifte ich Frieden, wo Streit ist? Ertrage ich Unrecht um Christi willen?',
    },
  },
]

/** Gewissenserforschung im Licht der Bergpredigt (Mt 5–7). */
export const bergpredigt: Prayer[] = [
  {
    id: 'bergpredigt',
    title: { la: 'Sermo in monte', de: 'Die Bergpredigt' },
    reference: { la: 'Mt 5–7' },
    rubric: { de: 'Das Herzstück der Lehre Jesu.' },
    text: {
      de: 'In der Bergpredigt zeigt der Herr, dass es nicht genügt, das Böse äußerlich zu meiden — das Herz selbst soll rein werden. Er ruft zur Versöhnung mit dem Bruder, zur Lauterkeit der Blicke, zur Treue im Wort, zum Verzicht auf Vergeltung und zur Feindesliebe. Almosen, Gebet und Fasten sollen im Verborgenen geschehen; das Herz soll nicht am irdischen Schatz hängen, sondern zuerst das Reich Gottes suchen.',
    },
  },
  {
    id: 'bergpredigt-pruefung',
    title: { de: 'Prüfung nach der Bergpredigt' },
    text: {
      de: 'Suche ich zuerst das Reich Gottes und seine Gerechtigkeit? Versöhne ich mich rasch mit denen, die mir Unrecht taten? Vergelte ich Böses mit Gutem und liebe ich auch meine Feinde? Tue ich das Gute im Verborgenen oder suche ich das Lob der Menschen? Richte ich über andere, statt zuerst den Balken im eigenen Auge zu sehen? Halte ich Wort und meide ich das falsche Reden? Behandle ich andere so, wie ich selbst behandelt werden möchte?',
    },
  },
]

/** Die Werke der Barmherzigkeit (nach Mt 25,35–36 und kirchlicher Überlieferung). */
export const werkeDerBarmherzigkeit: Prayer[] = [
  {
    id: 'werke-leiblich',
    title: { la: 'Opera misericordiae corporalia', de: 'Die leiblichen Werke der Barmherzigkeit' },
    reference: { la: 'vgl. Mt 25, 35–36' },
    text: {
      de: '1. Hungrige speisen.\n2. Durstige tränken.\n3. Nackte bekleiden.\n4. Fremde beherbergen.\n5. Kranke besuchen.\n6. Gefangene besuchen und erlösen.\n7. Tote begraben.',
    },
  },
  {
    id: 'werke-geistig',
    title: { la: 'Opera misericordiae spiritualia', de: 'Die geistigen Werke der Barmherzigkeit' },
    text: {
      de: '1. Unwissende lehren.\n2. Zweifelnden recht raten.\n3. Betrübte trösten.\n4. Sünder zurechtweisen.\n5. Beleidigern gern verzeihen.\n6. Lästige geduldig ertragen.\n7. Für die Lebenden und die Verstorbenen beten.',
    },
  },
  {
    id: 'werke-pruefung',
    title: { de: 'Prüfung nach den Werken der Barmherzigkeit' },
    text: {
      de: 'Habe ich die Not meines Nächsten gesehen und nach meinen Kräften geholfen? War ich hartherzig gegenüber Armen, Kranken, Fremden und Einsamen? Habe ich getröstet, wo Trauer war, und verziehen, wo man mich verletzte? Habe ich für die Lebenden und die Verstorbenen gebetet?',
    },
  },
]

/** Vollständige Gewissenserforschung in Abschnitten. */
export const gewissenserforschung: Prayer[] = [
  ...examenEinfuehrung,
  ...zehnGebote,
  ...seligpreisungen,
  ...bergpredigt,
  ...werkeDerBarmherzigkeit,
]
