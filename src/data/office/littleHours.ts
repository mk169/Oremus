import type { BilingualText, ChantInfo, Hour, HourId, LiturgicalSection } from '../types'

// Prim (nur 1962) und die kleinen Horen Terz/Sext/Non in beiden Formen.
// Struktur je Hore ähnlich; die hymnus- und lesungsspezifischen Texte sind
// authentisch (1962 gemeinfrei). Beispielinhalt.

const deusInAdiutorium: LiturgicalSection = {
  id: 'lh-deus', // wird pro Hore mit eindeutigem Präfix überschrieben
  kind: 'ordinarium',
  title: { la: 'Deus in adiutorium', de: 'Eröffnung' },
  text: {
    la: 'Deus, in adiutórium meum inténde. Dómine, ad adiuvándum me festína. Glória Patri, et Fílio, et Spirítui Sancto. Sicut erat in princípio, et nunc, et semper, et in sǽcula sæculórum. Amen.',
    de: 'O Gott, komm mir zu Hilfe. Herr, eile, mir zu helfen. Ehre sei dem Vater und dem Sohn und dem Heiligen Geist, wie im Anfang, so auch jetzt und allezeit und in Ewigkeit. Amen.',
  },
}

function opening(prefix: string): LiturgicalSection {
  return { ...deusInAdiutorium, id: `${prefix}-deus` }
}

interface Little1962 {
  id: string
  hour: HourId
  name: BilingualText
  hymnTitle: string
  hymn: BilingualText
  hymnChant: ChantInfo
  psalm: { title: BilingualText; text: BilingualText; chant: ChantInfo }
  capitulum: { reference: BilingualText; text: BilingualText }
}

function buildLittle1962(o: Little1962): Hour {
  const p = o.id
  return {
    id: o.id,
    form: '1962',
    hour: o.hour,
    name: o.name,
    day: { title: { la: 'Feria', de: 'Wochentag' }, color: 'green' },
    note: 'Breviarium Romanum 1962, gemeinfrei. Beispielinhalt.',
    sections: [
      opening(p),
      { id: `${p}-hymnus`, kind: 'proprium', title: { la: o.hymnTitle, de: 'Hymnus' }, text: o.hymn, chant: o.hymnChant },
      { id: `${p}-psalmus`, kind: 'proprium', title: o.psalm.title, text: o.psalm.text, chant: o.psalm.chant },
      { id: `${p}-capitulum`, kind: 'proprium', title: { la: 'Capitulum', de: 'Kurzlesung' }, reference: o.capitulum.reference, text: o.capitulum.text },
      {
        id: `${p}-oratio`,
        kind: 'proprium',
        title: { la: 'Oratio', de: 'Gebet' },
        text: {
          la: 'Dómine Deus omnípotens, qui ad princípium huius diéi nos perveníre fecísti: tua nos hódie salva virtúte; ut in hac die ad nullum declinémus peccátum, sed semper ad tuam iustítiam faciéndam nostra procédant elóquia. Per Christum Dóminum nostrum. Amen.',
          de: 'Herr, allmächtiger Gott, der du uns an den Beginn dieses Tages hast gelangen lassen: Rette uns heute durch deine Kraft, dass wir an diesem Tage in keine Sünde geraten, sondern dass all unser Reden und Tun auf die Erfüllung deiner Gerechtigkeit gerichtet sei. Durch Christus, unseren Herrn. Amen.',
        },
      },
    ],
  }
}

const psalm118A: Little1962['psalm'] = {
  title: { la: 'Psalmus 118 (Beati immaculati)', de: 'Psalm 118' },
  text: {
    la: 'Beáti immaculáti in via: qui ámbulant in lege Dómini. Beáti, qui scrutántur testimónia eius: in toto corde exquírunt eum.',
    de: 'Selig, die makellos ihren Weg gehen, die wandeln im Gesetze des Herrn. Selig, die seine Zeugnisse achten und ihn von ganzem Herzen suchen.',
  },
  chant: { chantable: true, mode: 'VIII', gabc: '(c4) Be(f)á(gh)ti(h) im(h)ma(hg)cu(g)lá(gh)ti(h) in(hg) vi(g)a.(g) (::)' },
}

export const prim1962 = buildLittle1962({
  id: 'prim-1962',
  hour: 'prim',
  name: { la: 'Prima', de: 'Prim' },
  hymnTitle: 'Hymnus "Iam lucis orto sidere"',
  hymn: {
    la: 'Iam lucis orto sídere, Deum precémur súpplices, ut in diúrnis áctibus nos servet a nocéntibus.',
    de: 'Da nun das Licht am Himmel steigt, flehn wir zu Gott in Demut still, dass er in allem, was wir tun, uns vor dem Schaden schützen will.',
  },
  hymnChant: { chantable: true, mode: 'II', gabc: '(c4) Iam(f) lu(g)cis(h) or(h)to(hg) sí(g)de(gh)re.(g) (::)' },
  psalm: {
    title: { la: 'Psalmus 53 (Deus in nomine tuo)', de: 'Psalm 53' },
    text: {
      la: 'Deus, in nómine tuo salvum me fac: et in virtúte tua iúdica me. Deus, exáudi oratiónem meam: áuribus pércipe verba oris mei.',
      de: 'O Gott, in deinem Namen hilf mir, und in deiner Kraft verschaffe mir Recht. O Gott, erhöre mein Gebet, vernimm die Worte meines Mundes.',
    },
    chant: { chantable: true, mode: 'VIII', gabc: '(c4) De(f)us,(gh) in(h) nó(h)mi(hg)ne(g) tu(gh)o(h) sal(hg)vum(g) me(gh) fac.(g) (::)' },
  },
  capitulum: {
    reference: { la: '1 Tim 1, 17', de: '1 Tim 1, 17' },
    text: {
      la: 'Regi sæculórum immortáli et invisíbili, soli Deo honor et glória in sǽcula sæculórum. Amen.',
      de: 'Dem König der Ewigkeiten, dem unsterblichen und unsichtbaren, dem allein weisen Gott sei Ehre und Herrlichkeit in alle Ewigkeit. Amen.',
    },
  },
})

export const terz1962 = buildLittle1962({
  id: 'terz-1962',
  hour: 'terz',
  name: { la: 'Tertia', de: 'Terz' },
  hymnTitle: 'Hymnus "Nunc Sancte nobis Spiritus"',
  hymn: {
    la: 'Nunc Sancte nobis Spíritus, unum Patri cum Fílio, dignáre promptus íngeri nostro refúsus péctori.',
    de: 'Komm, Heilger Geist, und wohne uns, der eins mit Vater und mit Sohn, mit deiner Gnade gütig bei und gieße dich ins Herz uns ein.',
  },
  hymnChant: { chantable: true, mode: 'VIII', gabc: '(c4) Nunc(f) San(g)cte(h) no(h)bis(hg) Spí(g)ri(gh)tus.(g) (::)' },
  psalm: psalm118A,
  capitulum: {
    reference: { la: 'Ier 17, 14', de: 'Jer 17, 14' },
    text: {
      la: 'Sana me, Dómine, et sanábor: salvum me fac, et salvus ero: quóniam laus mea tu es.',
      de: 'Heile mich, Herr, so werde ich geheilt; hilf mir, so ist mir geholfen; denn du bist mein Lobpreis.',
    },
  },
})

export const sext1962 = buildLittle1962({
  id: 'sext-1962',
  hour: 'sext',
  name: { la: 'Sexta', de: 'Sext' },
  hymnTitle: 'Hymnus "Rector potens, verax Deus"',
  hymn: {
    la: 'Rector potens, verax Deus, qui témperas rerum vices, splendóre mane ínstruis, et ígnibus merídiem.',
    de: 'Allmächtger Lenker, wahrer Gott, der du der Dinge Wechsel führst: Du schmückst den Morgen mit dem Glanz und gibst dem Mittag Feuerglut.',
  },
  hymnChant: { chantable: true, mode: 'VIII', gabc: '(c4) Re(f)ctor(g) po(h)tens,(h) ve(hg)rax(g) De(gh)us.(g) (::)' },
  psalm: psalm118A,
  capitulum: {
    reference: { la: 'Gal 6, 2', de: 'Gal 6, 2' },
    text: {
      la: 'Alter altérius ónera portáte, et sic adimplébitis legem Christi.',
      de: 'Einer trage des anderen Last; so werdet ihr das Gesetz Christi erfüllen.',
    },
  },
})

export const non1962 = buildLittle1962({
  id: 'non-1962',
  hour: 'non',
  name: { la: 'Nona', de: 'Non' },
  hymnTitle: 'Hymnus "Rerum Deus tenax vigor"',
  hymn: {
    la: 'Rerum Deus tenax vigor, immótus in te pérmanens, lucis diúrnæ témpora succéssibus detérminans.',
    de: 'Du starke Kraft, die alles hält, o Gott, in dir unwandelbar, der du des Tages Lichteslauf in Stufen ordnest und bestimmst.',
  },
  hymnChant: { chantable: true, mode: 'VIII', gabc: '(c4) Re(f)rum(g) De(h)us(h) te(hg)nax(g) vi(gh)gor.(g) (::)' },
  psalm: psalm118A,
  capitulum: {
    reference: { la: 'Sap 8, 1', de: 'Weish 8, 1' },
    text: {
      la: 'Attíngit ergo a fine usque ad finem fórtiter, et dispónit ómnia suáviter.',
      de: 'Sie reicht mit Kraft von einem Ende zum andern und ordnet alles auf milde Weise.',
    },
  },
})

// ---- Kleine Horen der neuen Ordnung (Mittagshore: Terz/Sext/Non) ---------
interface LittleNeu {
  id: string
  hour: HourId
  name: BilingualText
  hymnDe: string
  psalmTitle: string
  psalmDe: string
  lesungRef: string
  lesungDe: string
}

function buildLittleNeu(o: LittleNeu): Hour {
  const p = o.id
  return {
    id: o.id,
    form: 'novusOrdo',
    hour: o.hour,
    name: o.name,
    day: { title: { de: 'Wochentag / im Jahreskreis' }, color: 'green' },
    note: 'Neue Ordnung (Stundenbuch). Deutsche Fassung hier gemeinfrei; amtliche Texte folgen unter Beachtung der Rechte.',
    sections: [
      {
        id: `${p}-eroeffnung`,
        kind: 'ordinarium',
        title: { de: 'Eröffnung' },
        text: {
          la: 'Deus, in adiutórium meum inténde. Dómine, ad adiuvándum me festína.',
          de: 'O Gott, komm mir zu Hilfe. Herr, eile, mir zu helfen. Ehre sei dem Vater und dem Sohn und dem Heiligen Geist.',
        },
      },
      {
        id: `${p}-hymnus`,
        kind: 'proprium',
        title: { de: 'Hymnus' },
        text: { de: o.hymnDe },
      },
      {
        id: `${p}-psalm`,
        kind: 'proprium',
        title: { de: o.psalmTitle },
        text: { de: o.psalmDe },
        chant: {
          chantable: true,
          mode: 'VIII',
          gabc: `(c4) ${o.psalmDe.split(' ').slice(0, 3).map((w, i) => `${w}(${['f', 'gh', 'h'][i] ?? 'h'})`).join(' ')} (::)`,
        },
      },
      {
        id: `${p}-lesung`,
        kind: 'proprium',
        title: { de: 'Kurzlesung' },
        reference: { de: o.lesungRef },
        text: { de: o.lesungDe },
      },
      {
        id: `${p}-oratio`,
        kind: 'proprium',
        title: { de: 'Gebet' },
        text: {
          de: 'Herr, unser Gott, begleite uns durch diesen Tag mit deiner Gnade, damit wir in allem deinen Willen suchen und tun. Darum bitten wir durch Christus, unseren Herrn. Amen.',
        },
      },
    ],
  }
}

export const terzNeu = buildLittleNeu({
  id: 'terz-neu',
  hour: 'terz',
  name: { la: 'Tertia', de: 'Terz (Mittagshore)' },
  hymnDe: 'Komm, Heilger Geist, der Leben schafft, erfülle uns mit deiner Kraft; entzünde Herz und Sinn in uns, dass wir dich loben ohne End.',
  psalmTitle: 'Psalm 119 (Wonne am Gesetz)',
  psalmDe: 'Wohl denen, deren Weg ohne Tadel ist, die leben nach der Weisung des Herrn. Wohl denen, die seine Vorschriften befolgen und ihn suchen von ganzem Herzen.',
  lesungRef: 'Jer 17, 14',
  lesungDe: 'Heile mich, Herr, so bin ich heil; hilf mir, so ist mir geholfen; denn du bist mein Lobpreis.',
})

export const sextNeu = buildLittleNeu({
  id: 'sext-neu',
  hour: 'sext',
  name: { la: 'Sexta', de: 'Sext (Mittagshore)' },
  hymnDe: 'O Gott, der du die Zeiten lenkst, den Morgen und den Mittag schenkst: Lösch aller Zwietracht Feuer aus und gib der Seele Fried und Ruh.',
  psalmTitle: 'Psalm 119 (Dein Wort ist mir Licht)',
  psalmDe: 'Dein Wort ist meinem Fuß eine Leuchte, ein Licht für meine Pfade. Ich habe geschworen und halte es fest: Ich will deinen gerechten Entscheidungen folgen.',
  lesungRef: 'Gal 6, 9-10',
  lesungDe: 'Lasst uns nicht müde werden, das Gute zu tun; denn wenn wir nicht nachlassen, werden wir ernten zu seiner Zeit. Solange wir Zeit haben, wollen wir allen Menschen Gutes tun.',
})

export const nonNeu = buildLittleNeu({
  id: 'non-neu',
  hour: 'non',
  name: { la: 'Nona', de: 'Non (Mittagshore)' },
  hymnDe: 'Du Gott, der alles Sein durchwaltet und unbewegt die Welt erhält, du ordnest Licht und Zeitenlauf: Erleuchte uns am Abend auch.',
  psalmTitle: 'Psalm 119 (Deine Gebote sind mein Trost)',
  psalmDe: 'Wie liebe ich deine Weisung; sie ist mein Sinnen den ganzen Tag. Deine Gebote machen mich weiser als meine Feinde; denn ewig sind sie mein Besitz.',
  lesungRef: 'Weish 8, 1',
  lesungDe: 'Machtvoll reicht die Weisheit von einem Ende zum andern und durchwaltet voll Güte das All.',
})
