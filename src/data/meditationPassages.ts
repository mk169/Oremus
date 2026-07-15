import type { BilingualText } from './types'

/** Eine auswählbare Bibelstelle zur Betrachtung (Lectio divina). */
export interface MeditationPassage {
  id: string
  ref: string
  title: BilingualText
  text: BilingualText
}

// Klassische Stellen zur Betrachtung – Vulgata und gemeinfreie deutsche
// Übersetzung (Allioli-Stil). Bewusst kurze Perikopen zum Verweilen.
export const meditationPassages: MeditationPassage[] = [
  {
    id: 'seligpreisungen',
    ref: 'Mt 5,3–10',
    title: { la: 'Beatitudines', de: 'Die Seligpreisungen' },
    text: {
      la: 'Beáti páuperes spíritu: quóniam ipsórum est regnum cælórum. Beáti mites: quóniam ipsi possidébunt terram. Beáti qui lugent: quóniam ipsi consolabúntur. Beáti qui esúriunt et sítiunt iustítiam: quóniam ipsi saturabúntur. Beáti misericórdes: quóniam ipsi misericórdiam consequéntur. Beáti mundo corde: quóniam ipsi Deum vidébunt. Beáti pacífici: quóniam fílii Dei vocabúntur.',
      de: 'Selig die Armen im Geiste; denn ihrer ist das Himmelreich. Selig die Sanftmütigen; denn sie werden das Land besitzen. Selig, die Leid tragen; denn sie werden getröstet werden. Selig, die hungern und dürsten nach der Gerechtigkeit; denn sie werden gesättigt werden. Selig die Barmherzigen; denn sie werden Barmherzigkeit erlangen. Selig, die reinen Herzens sind; denn sie werden Gott schauen. Selig die Friedfertigen; denn sie werden Kinder Gottes genannt werden.',
    },
  },
  {
    id: 'kommet-zu-mir',
    ref: 'Mt 11,28–30',
    title: { la: 'Veníte ad me', de: 'Kommet alle zu mir' },
    text: {
      la: 'Veníte ad me omnes qui laborátis et oneráti estis, et ego refíciam vos. Tóllite iugum meum super vos, et díscite a me, quia mitis sum et húmilis corde: et inveniétis réquiem animábus vestris. Iugum enim meum suáve est, et onus meum leve.',
      de: 'Kommet alle zu mir, die ihr mühselig und beladen seid, und ich will euch erquicken. Nehmet mein Joch auf euch und lernet von mir; denn ich bin sanftmütig und demütig von Herzen; so werdet ihr Ruhe finden für eure Seelen. Denn mein Joch ist sanft und meine Bürde ist leicht.',
    },
  },
  {
    id: 'guter-hirt',
    ref: 'Joh 10,11–16',
    title: { la: 'Pastor bonus', de: 'Der gute Hirt' },
    text: {
      la: 'Ego sum pastor bonus. Bonus pastor ánimam suam dat pro óvibus suis. Ego sum pastor bonus: et cognósco meas, et cognóscunt me meæ. Sicut novit me Pater, et ego agnósco Patrem: et ánimam meam pono pro óvibus meis. Et álias oves hábeo, quæ non sunt ex hoc ovíli: et illas opórtet me addúcere, et vocem meam áudient, et fiet unum ovíle et unus pastor.',
      de: 'Ich bin der gute Hirt. Der gute Hirt gibt sein Leben hin für seine Schafe. Ich bin der gute Hirt und kenne die Meinen, und die Meinen kennen mich, wie der Vater mich kennt und ich den Vater kenne; und ich gebe mein Leben hin für meine Schafe. Ich habe noch andere Schafe, die nicht aus diesem Stalle sind; auch diese muss ich führen, und sie werden meine Stimme hören, und es wird eine Herde werden und ein Hirt.',
    },
  },
  {
    id: 'weinstock',
    ref: 'Joh 15,4–8',
    title: { la: 'Vitis vera', de: 'Der wahre Weinstock' },
    text: {
      la: 'Manéte in me: et ego in vobis. Sicut palmes non potest ferre fructum a semetípso, nisi mánserit in vite: sic nec vos, nisi in me manséritis. Ego sum vitis, vos pálmites: qui manet in me, et ego in eo, hic fert fructum multum: quia sine me nihil potéstis fácere. In hoc clarificátus est Pater meus, ut fructum plúrimum afferátis, et efficiámini mei discípuli.',
      de: 'Bleibet in mir, und ich in euch. Wie die Rebe nicht von sich selbst Frucht bringen kann, wenn sie nicht am Weinstock bleibt, so auch ihr nicht, wenn ihr nicht in mir bleibet. Ich bin der Weinstock, ihr seid die Reben. Wer in mir bleibt und ich in ihm, der bringt viele Frucht; denn ohne mich könnt ihr nichts tun. Dadurch wird mein Vater verherrlicht, dass ihr viele Frucht bringet und meine Jünger werdet.',
    },
  },
  {
    id: 'barmherziger-vater',
    ref: 'Lk 15,20–24',
    title: { la: 'Pater misericors', de: 'Der barmherzige Vater' },
    text: {
      la: 'Et surgens venit ad patrem suum. Cum autem adhuc longe esset, vidit illum pater ipsíus, et misericórdia motus est, et accúrrens cécidit super collum eius, et osculátus est eum. Dixit autem pater ad servos suos: Cito proférte stolam primam, et indúite illum, et date ánulum in manum eius, et calceaménta in pedes eius: quia hic fílius meus mórtuus erat, et revíxit: períerat, et invéntus est.',
      de: 'Und er stand auf und ging zu seinem Vater. Als er aber noch weit entfernt war, sah ihn sein Vater und ward von Mitleid gerührt; er lief herzu, fiel ihm um den Hals und küsste ihn. Der Vater aber sprach zu seinen Knechten: Bringet schnell das beste Kleid und bekleidet ihn, gebet ihm einen Ring an die Hand und Schuhe an die Füße; denn dieser mein Sohn war tot und ist wieder lebendig geworden, er war verloren und ist wiedergefunden worden.',
    },
  },
  {
    id: 'sturm',
    ref: 'Mk 4,37–40',
    title: { la: 'Tempestas sedata', de: 'Der Sturm auf dem See' },
    text: {
      la: 'Et facta est procélla magna venti, et fluctus mittébat in navim, ita ut implerétur navis. Et erat ipse in puppi super cervícal dórmiens. Et éxcitant eum, et dicunt illi: Magíster, non ad te pértinet quia perímus? Et exsúrgens imperávit vento, et dixit mari: Tace, obmutésce. Et cessávit ventus: et facta est tranquíllitas magna. Et ait illis: Quid tímidi estis? nondum habétis fidem?',
      de: 'Und es erhob sich ein großer Windwirbel, und die Wogen schlugen in das Boot, so dass es sich schon füllte. Er aber lag im hinteren Teil des Bootes und schlief auf einem Kissen. Sie weckten ihn und sprachen zu ihm: Meister, kümmert es dich nicht, dass wir zugrunde gehen? Da stand er auf, gebot dem Winde und sprach zum Meere: Schweig, verstumme! Und der Wind legte sich, und es ward eine große Stille. Und er sprach zu ihnen: Was seid ihr so furchtsam? Habt ihr noch keinen Glauben?',
    },
  },
  {
    id: 'emmaus',
    ref: 'Lk 24,28–31',
    title: { la: 'In Emmaus', de: 'Die Emmausjünger' },
    text: {
      la: 'Et coëgérunt illum, dicéntes: Mane nobíscum, quóniam advesperáscit, et inclináta est iam dies. Et intrávit cum illis. Et factum est, dum recúmberet cum eis, accépit panem, et benedíxit, ac fregit, et porrigébat illis. Et apérti sunt óculi eórum, et cognovérunt eum: et ipse evánuit ex óculis eórum.',
      de: 'Und sie nötigten ihn und sprachen: Bleibe bei uns; denn es will Abend werden, und der Tag hat sich schon geneigt. Und er kehrte ein, um bei ihnen zu bleiben. Und es geschah, als er mit ihnen zu Tische war, nahm er das Brot, segnete und brach es und reichte es ihnen. Da wurden ihre Augen geöffnet, und sie erkannten ihn; er aber entschwand ihren Blicken.',
    },
  },
  {
    id: 'psalm-23',
    ref: 'Ps 22 (23)',
    title: { la: 'Dóminus regit me', de: 'Der Herr ist mein Hirt' },
    text: {
      la: 'Dóminus regit me, et nihil mihi déerit: in loco páscuæ ibi me collocávit. Super aquam refectiónis educávit me: ánimam meam convértit. Dedúxit me super sémitas iustítiæ, propter nomen suum. Nam et si ambulávero in médio umbræ mortis, non timébo mala: quóniam tu mecum es. Virga tua et báculus tuus: ipsa me consoláta sunt.',
      de: 'Der Herr ist mein Hirt, mir wird nichts mangeln: er lässt mich lagern auf grüner Aue. Er führt mich zum Wasser der Ruhe, er erquickt meine Seele. Er leitet mich auf Pfaden der Gerechtigkeit um seines Namens willen. Und ob ich schon wanderte im Tale des Todesschattens, so fürchte ich kein Unglück; denn du bist bei mir. Dein Stab und deine Rute, sie trösten mich.',
    },
  },
]
