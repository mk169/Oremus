#!/usr/bin/env node
// Baut den ferialen WOCHENPSALTER (Psalterium per hebdomadam, 1962) aus dem
// Divinum-Officium-Datenbestand (GitHub, gemeinfrei) in unser Datenmodell.
//
// Anders als der Mess-Import setzt dieses Skript die vollständigen Horen des
// Stundengebets Tag für Tag zusammen — mit VOLLEM Psalmtext (Latein/Deutsch),
// den authentischen Antiphonen und den Cantica (Benedictus/Magnificat/
// Nunc dimittis). Es arbeitet Schritt für Schritt: je Wochentag und je Hore
// werden die referenzierten Psalmen einzeln und nacheinander geladen.
//
// Quellen (web/www/horas/{Latin,Deutsch}/…):
//   Psalterium/Psalmi/Psalmi matutinum.txt   → Matutin (Antiphon;;Psalm + V./R.)
//   Psalterium/Psalmi/Psalmi major.txt       → Laudes / Vesper
//   Psalterium/Psalmi/Psalmi minor.txt       → Prim / Terz / Sext / Non / Komplet
//   Psalterium/Psalmorum/Psalm<N>.txt        → der eigentliche Psalmtext (Verse)
//
// Ergebnis: src/data/imported/office/week/week-<dayId>-<hourId>.json (je eine
// Hore) plus week-index.json (nach Wochentag gruppiert). Geladen in
// src/data/registry.ts per import.meta.glob.
//
// Nutzung:
//   npm run psalter:fetch            # alle sieben Tage
//   node scripts/fetch-do-psalter.mjs dominica feria2   # nur einzelne Tage
import { writeFile, readFile, mkdir, stat } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve, join } from 'node:path'
import { tmpdir } from 'node:os'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = resolve(__dirname, '../src/data/imported/office/week')
const CACHE_DIR = join(tmpdir(), 'oremus-do-psalter-cache')
const RAW = 'https://raw.githubusercontent.com/DivinumOfficium/divinum-officium/master/web/www/horas'

// -- Wochentage (0 = Sonntag … 6 = Samstag). key = DO-Tagesname im Psalter. ----
const DAYS = [
  { n: 0, id: 'dominica', key: 'Dominica', la: 'Dominica', de: 'Sonntag', it: 'domenica' },
  { n: 1, id: 'feria2', key: 'Feria II', la: 'Feria II', de: 'Montag', it: 'lunedì' },
  { n: 2, id: 'feria3', key: 'Feria III', la: 'Feria III', de: 'Dienstag', it: 'martedì' },
  { n: 3, id: 'feria4', key: 'Feria IV', la: 'Feria IV', de: 'Mittwoch', it: 'mercoledì' },
  { n: 4, id: 'feria5', key: 'Feria V', la: 'Feria V', de: 'Donnerstag', it: 'giovedì' },
  { n: 5, id: 'feria6', key: 'Feria VI', la: 'Feria VI', de: 'Freitag', it: 'venerdì' },
  { n: 6, id: 'sabbato', key: 'Sabbato', la: 'Sabbato', de: 'Samstag', it: 'sabato' },
]

// -- Horen des Tages (überlieferte Ordnung 1962). ------------------------------
const HOURS = [
  { id: 'matutin', hour: 'matutin', la: 'Ad Matutinum', de: 'Matutin (Nachtwache)', src: 'matutinum' },
  { id: 'laudes', hour: 'laudes', la: 'Ad Laudes', de: 'Laudes (Morgenlob)', src: 'laudes' },
  { id: 'prim', hour: 'prim', la: 'Ad Primam', de: 'Prim', src: 'minor', section: 'Prima' },
  { id: 'terz', hour: 'terz', la: 'Ad Tertiam', de: 'Terz', src: 'minor', section: 'Tertia' },
  { id: 'sext', hour: 'sext', la: 'Ad Sextam', de: 'Sext', src: 'minor', section: 'Sexta' },
  { id: 'non', hour: 'non', la: 'Ad Nonam', de: 'Non', src: 'minor', section: 'Nona' },
  { id: 'vesper', hour: 'vesper', la: 'Ad Vesperas', de: 'Vesper (Abendlob)', src: 'vesper' },
  { id: 'komplet', hour: 'komplet', la: 'Ad Completorium', de: 'Komplet (Nachtgebet)', src: 'minor', section: 'Completorium' },
]

// ---------------------------------------------------------------------------
// Laden (mit Datei-Cache, sequentiell, gemeinfreie Rohdaten schonend abrufen).
// ---------------------------------------------------------------------------
async function fetchText(relPath) {
  const enc = relPath.split('/').map(encodeURIComponent).join('/')
  const cacheKey = relPath.replace(/[^a-z0-9]+/gi, '_')
  const cacheFile = join(CACHE_DIR, cacheKey)
  try {
    await stat(cacheFile)
    return await readFile(cacheFile, 'utf8')
  } catch {
    /* nicht im Cache */
  }
  const res = await fetch(`${RAW}/${enc}`)
  if (!res.ok) return null
  const text = await res.text()
  await mkdir(CACHE_DIR, { recursive: true })
  await writeFile(cacheFile, text)
  return text
}

// setupstring-artige Datei in { Abschnitt: [Zeilen] } zerlegen.
function splitSections(text) {
  const out = {}
  let cur = null
  for (const raw of text.split(/\r?\n/)) {
    const m = raw.match(/^\[([^\]]+)\]/)
    if (m) {
      cur = m[1]
      if (!(cur in out)) out[cur] = []
      continue
    }
    if (cur == null) continue
    out[cur].push(raw)
  }
  return out
}

// ---------------------------------------------------------------------------
// Psalmtext: Psalm<N>.txt → geordnete Verse [{ n, sub, la, de }] (verse-aligned).
// ---------------------------------------------------------------------------
const psalmCache = new Map()

function parsePsalmFile(text) {
  // Zeilen: "N:V[sub] Text …". Ordnung beibehalten.
  const verses = []
  for (const raw of text.split(/\r?\n/)) {
    const m = raw.match(/^(\d+):(\d+)([a-z]?)\s+(.*)$/)
    if (!m) continue
    verses.push({ n: Number(m[2]), sub: m[3] || '', text: m[4].trim(), key: `${m[2]}${m[3] || ''}` })
  }
  return verses
}

async function getPsalm(num) {
  if (psalmCache.has(num)) return psalmCache.get(num)
  const la = await fetchText(`Latin/Psalterium/Psalmorum/Psalm${num}.txt`)
  const de = await fetchText(`Deutsch/Psalterium/Psalmorum/Psalm${num}.txt`)
  const laV = la ? parsePsalmFile(la) : []
  const deMap = new Map((de ? parsePsalmFile(de) : []).map((v) => [v.key, v.text]))
  const merged = laV.map((v) => ({ ...v, de: deMap.get(v.key) || '' }))
  psalmCache.set(num, merged)
  return merged
}

// Rang eines Teilvers-Buchstabens ('' → 0, a → 1, b → 2 …).
const subRank = (sub) => (sub ? sub.charCodeAt(0) - 96 : 0)

// Verse eines Psalms gemäß Bereichsangabe filtern.
//  ref-Beispiele:  92 | 9(2-11) | 18(2-'7b') | 17('36a'-51) | 118(1-16)
function selectVerses(verses, range) {
  if (!range) return verses
  const m = range.match(/^\(?\s*'?(\d+)([a-z]?)'?\s*-\s*'?(\d+)([a-z]?)'?\s*\)?$/)
  if (!m) return verses
  const startN = Number(m[1])
  const startR = subRank(m[2])
  const endN = Number(m[3])
  const endSub = m[4]
  const endR = endSub ? subRank(endSub) : Infinity // Ende ohne Buchstabe = ganze Vers-Nr.
  return verses.filter((v) => {
    const r = subRank(v.sub)
    const geStart = v.n > startN || (v.n === startN && r >= startR)
    const leEnd = v.n < endN || (v.n === endN && r <= endR)
    return geStart && leEnd
  })
}

// Ein "psalmref"-Token parsen → { num, range }.
function parseRef(token) {
  const t = token.trim().replace(/^\[|\]$/g, '') // eckige Klammern (festliches Schema) entfernen
  const bracketed = /^\[/.test(token.trim())
  const m = t.match(/^(\d+)\s*(\([^)]*\))?/)
  if (!m) return null
  return { num: Number(m[1]), range: m[2] || null, bracketed }
}

// ---------------------------------------------------------------------------
// Ordinarium (gemeinfreie, feste Texte). Latein: Breviarium Romanum 1962.
// Deutsch: gemeinfreie Übersetzung (vgl. docs/licensing.md).
// ---------------------------------------------------------------------------
const GLORIA = {
  la: 'Glória Patri, et Fílio, * et Spirítui Sancto. Sicut erat in princípio, et nunc, et semper, * et in sǽcula sæculórum. Amen.',
  de: 'Ehre sei dem Vater und dem Sohne * und dem Heiligen Geiste, wie es war im Anfang, so auch jetzt und allezeit * und in Ewigkeit. Amen.',
}

const OPENING = {
  la: 'V. Deus, in adjutórium meum inténde.\nR. Dómine, ad adjuvándum me festína.\nGlória Patri, et Fílio, et Spirítui Sancto. Sicut erat in princípio, et nunc, et semper, et in sǽcula sæculórum. Amen. Allelúja.',
  de: 'V. O Gott, komm mir zu Hilfe.\nR. Herr, eile, mir zu helfen.\nEhre sei dem Vater und dem Sohne und dem Heiligen Geiste, wie es war im Anfang, so auch jetzt und allezeit und in Ewigkeit. Amen. Alleluja.',
}

// Feste Hymnen der kleinen Horen und der Komplet (gemeinfrei).
const HYMNS = {
  prim: {
    la: 'Jam lucis orto sídere, Deum precémur súpplices, ut in diúrnis áctibus nos servet a nocéntibus.\nLinguam refrénans témperet, ne litis horror ínsonet: visum fovéndo cóntegat, ne vanitátes háuriat.',
    de: 'Da nun das Licht am Himmel steigt, flehn wir zu Gott in Demut still, dass er in allem, was wir tun, uns vor dem Schaden schützen will.\nEr zähme, zügle unsre Zung, dass nicht der Streites Lärm erschallt; er hüte gnädig unsern Blick vor eitler Dinge Trug und Bild.',
  },
  terz: {
    la: 'Nunc, Sancte, nobis, Spíritus, unum Patri cum Fílio, dignáre promptus íngeri nostro refúsus péctori.\nOs, lingua, mens, sensus, vigor confessiónem pérsonent, flamméscat igne cáritas, accéndat ardor próximos.',
    de: 'Komm, Heilger Geist, und wohne uns, der eins mit Vater und mit Sohn, mit deiner Gnade gütig bei und gieße dich ins Herz uns ein.\nDass Mund und Zunge, Geist und Sinn dein Lob und dein Bekenntnis ist, in Liebe lodre unser Herz und zünde auch den Nächsten an.',
  },
  sext: {
    la: 'Rector potens, verax Deus, qui témperas rerum vices, splendóre mane ínstruis, et ígnibus merídiem.\nExstíngue flammas lítium, aufer calórem nóxium, confer salútem córporum, verámque pacem córdium.',
    de: 'Allmächtger Lenker, wahrer Gott, der du der Dinge Wechsel führst: du schmückst den Morgen mit dem Glanz und gibst dem Mittag Feuerglut.\nLösch aus die Flammen bösen Streits, nimm weg die Glut, die schädlich brennt, verleih dem Leibe Wohlergehn und wahren Frieden unserm Herz.',
  },
  non: {
    la: 'Rerum, Deus, tenax vigor, immótus in te pérmanens, lucis diúrnæ témpora succéssibus detérminans.\nLargíre lumen véspere, quo vita nusquam décidat, sed prǽmium mortis sacræ perénnis instet glória.',
    de: 'Du starke Kraft, die alles hält, o Gott, in dir unwandelbar, der du des Tages Lichteslauf in Stufen ordnest und bestimmst.\nSchenk gnädig Licht am Lebensend, dass unser Leben nie erlischt, dass ewge Herrlichkeit uns folgt als Lohn für einen heilgen Tod.',
  },
  komplet: {
    la: 'Te lucis ante términum, rerum Creátor, póscimus, ut pro tua cleméntia sis præsul et custódia.\nProcul recédant sómnia, et nóctium phantásmata; hostémque nostrum cómprime, ne polluántur córpora.',
    de: 'Bevor des Tages Licht vergeht, o Herr der Welt, so hören wir: In deiner großen Güte bleib uns Schutz und Wächter für die Nacht.\nWeit weiche jeder böse Traum, weit weiche nächtlich Schreckgebild; bezwinge unsern alten Feind, dass rein der Leib vom Frevel bleibt.',
  },
}

// Cantica (Evangelien-Lobgesänge), vollständig, gemeinfrei.
const CANTICLES = {
  benedictus: {
    la: 'benedictus',
    titleLa: 'Canticum Zachariæ (Benedictus)',
    titleDe: 'Lobgesang des Zacharias',
    ref: 'Luc 1, 68-79',
    la_text:
      'Benedíctus Dóminus, Deus Israël: * quia visitávit, et fecit redemptiónem plebis suæ:\nEt eréxit cornu salútis nobis: * in domo David, púeri sui.\nSicut locútus est per os sanctórum, * qui a sǽculo sunt, prophetárum ejus:\nSalútem ex inimícis nostris, * et de manu ómnium, qui odérunt nos:\nAd faciéndam misericórdiam cum pátribus nostris: * et memorári testaménti sui sancti:\nJusjurándum, quod jurávit ad Ábraham patrem nostrum, * datúrum se nobis:\nUt sine timóre, de manu inimicórum nostrórum liberáti, * serviámus illi.\nIn sanctitáte, et justítia coram ipso, * ómnibus diébus nostris.\nEt tu, puer, Prophéta Altíssimi vocáberis: * præíbis enim ante fáciem Dómini paráre vias ejus:\nAd dandam sciéntiam salútis plebi ejus: * in remissiónem peccatórum eórum:\nPer víscera misericórdiæ Dei nostri: * in quibus visitávit nos, óriens ex alto:\nIllumináre his, qui in ténebris, et in umbra mortis sedent: * ad dirigéndos pedes nostros in viam pacis.',
    de_text:
      'Gepriesen sei der Herr, der Gott Israels; * denn er hat sein Volk besucht und ihm Erlösung geschaffen;\nund hat uns aufgerichtet ein Horn des Heiles * im Hause Davids, seines Knechtes:\nwie er verheißen hat durch den Mund seiner heiligen Propheten, * die von alters her gewesen:\nErrettung von unsern Feinden * und aus der Hand aller, die uns hassen;\nzu üben Barmherzigkeit an unsern Vätern * und zu gedenken seines heiligen Bundes,\ndes Eides, den er unserm Vater Abraham geschworen, * uns zu verleihen,\ndass wir, befreit aus der Hand unsrer Feinde, ohne Furcht ihm dienen \nin Heiligkeit und Gerechtigkeit vor ihm * alle unsre Tage.\nUnd du, Kind, wirst Prophet des Höchsten heißen; * denn du wirst vor dem Herrn hergehen, ihm den Weg zu bereiten,\nseinem Volke Kunde des Heiles zu geben * zur Vergebung ihrer Sünden,\ndurch die herzliche Barmherzigkeit unsres Gottes, * mit der uns besucht hat der Aufgang aus der Höhe,\nzu erleuchten, die in Finsternis und Todesschatten sitzen, * zu lenken unsre Schritte auf den Weg des Friedens.',
  },
  magnificat: {
    titleLa: 'Canticum B. Mariæ Virginis (Magnificat)',
    titleDe: 'Lobgesang der seligen Jungfrau Maria',
    ref: 'Luc 1, 46-55',
    la_text:
      'Magníficat * ánima mea Dóminum.\nEt exsultávit spíritus meus * in Deo, salutári meo.\nQuia respéxit humilitátem ancíllæ suæ: * ecce enim ex hoc beátam me dicent omnes generatiónes.\nQuia fecit mihi magna qui potens est: * et sanctum nomen ejus.\nEt misericórdia ejus a progénie in progénies * timéntibus eum.\nFecit poténtiam in bráchio suo: * dispérsit supérbos mente cordis sui.\nDepósuit poténtes de sede, * et exaltávit húmiles.\nEsuriéntes implévit bonis: * et dívites dimísit inánes.\nSuscépit Israël púerum suum, * recordátus misericórdiæ suæ.\nSicut locútus est ad patres nostros, * Ábraham, et sémini ejus in sǽcula.',
    de_text:
      'Meine Seele preist die Größe des Herrn, * und mein Geist frohlockt in Gott, meinem Heile.\nDenn er hat auf die Niedrigkeit seiner Magd geschaut; * siehe, von nun an preisen mich selig alle Geschlechter.\nDenn Großes hat an mir getan, der mächtig ist, * und heilig ist sein Name.\nUnd sein Erbarmen währt von Geschlecht zu Geschlecht * für alle, die ihn fürchten.\nEr wirkt mit Macht in seinem Arm, * er zerstreut, die hoffärtig sind im Sinne ihres Herzens.\nEr stürzt die Mächtigen vom Thron * und erhöht die Niedrigen.\nDie Hungernden erfüllt er mit Gütern * und lässt die Reichen leer ausgehn.\nEr nimmt sich Israels an, seines Knechtes, * eingedenk seiner Barmherzigkeit,\nwie er geredet hat zu unsern Vätern, * zu Abraham und seinen Nachkommen auf ewig.',
  },
  nunc: {
    titleLa: 'Canticum Simeonis (Nunc dimittis)',
    titleDe: 'Lobgesang des Simeon',
    ref: 'Luc 2, 29-32',
    la_text:
      'Nunc dimíttis servum tuum, Dómine, * secúndum verbum tuum in pace:\nQuia vidérunt óculi mei * salutáre tuum,\nQuod parásti * ante fáciem ómnium populórum,\nLumen ad revelatiónem géntium, * et glóriam plebis tuæ Israël.',
    de_text:
      'Nun entlässest du, Herr, deinen Diener * nach deinem Worte in Frieden;\ndenn meine Augen haben * dein Heil geschaut,\ndas du bereitet hast * vor dem Angesicht aller Völker:\nein Licht zur Erleuchtung der Heiden * und zur Verherrlichung deines Volkes Israel.',
  },
}

// ---------------------------------------------------------------------------
// Zusammensetzen einer einzelnen Hore für einen Wochentag.
// ---------------------------------------------------------------------------
function bilingual(la, de) {
  const out = {}
  if (la && la.trim()) out.la = la.trim()
  if (de && de.trim()) out.de = de.trim()
  return out
}

// Eine Psalmzeile ("ant;;ref") zu einem Abschnitt machen (Antiphon + voller Text).
async function psalmSection(prefix, idx, antLa, antDe, refToken) {
  const ref = parseRef(refToken)
  if (!ref) return null
  const verses = selectVerses(await getPsalm(ref.num), ref.range)
  const isCanticle = ref.num > 150
  const laLines = verses.map((v) => v.text)
  const deLines = verses.map((v) => v.de)
  if (!isCanticle) {
    laLines.push(GLORIA.la)
    deLines.push(GLORIA.de)
  }
  const rangeLabel = ref.range ? ` ${ref.range.replace(/'/g, '')}` : ''
  const section = {
    id: `${prefix}-ps${idx}`,
    kind: 'proprium',
    title: bilingual(
      `Psalmus ${ref.num}${rangeLabel}`,
      isCanticle ? `Canticum` : `Psalm ${ref.num}${rangeLabel}`,
    ),
    text: bilingual(laLines.join('\n'), deLines.filter(Boolean).length ? deLines.join('\n') : ''),
  }
  const a = bilingual(antLa && `Ant. ${antLa}`, antDe && `Ant. ${antDe}`)
  if (a.la || a.de) section.rubric = a
  return section
}

function canticleSection(prefix, c) {
  return {
    id: `${prefix}-${c.titleLa.includes('Zach') ? 'benedictus' : c.titleLa.includes('Maria') ? 'magnificat' : 'nunc'}`,
    kind: 'ordinarium',
    title: bilingual(c.titleLa, c.titleDe),
    reference: bilingual(c.ref, c.ref),
    text: bilingual(`${c.la_text}\n${GLORIA.la}`, `${c.de_text}\n${GLORIA.de}`),
  }
}

function openingSection(prefix) {
  return {
    id: `${prefix}-deus`,
    kind: 'ordinarium',
    title: bilingual('Deus in adjutórium', 'Eröffnung'),
    text: bilingual(OPENING.la, OPENING.de),
  }
}

function hymnSection(prefix, hourId) {
  const h = HYMNS[hourId]
  if (!h) return null
  return {
    id: `${prefix}-hymnus`,
    kind: 'ordinarium',
    title: bilingual('Hymnus', 'Hymnus'),
    text: bilingual(h.la, h.de),
    chant: { chantable: true, mode: 'VIII' },
  }
}

// Antiphon+Psalmzeilen aus einer "major/matutinum"-Sektion (La/De) zippen.
// Zeile: "<antiphon>;;<psalmref>"; Versikel-Zeilen (V./R.) separat.
function zipMajorLines(laLines, deLines) {
  const items = []
  const deByRef = new Map()
  let deVersicles = []
  for (const raw of deLines) {
    const line = raw.trim()
    if (!line) continue
    if (/;;/.test(line)) {
      const [ant, ref] = line.split(';;')
      deByRef.set(ref.trim(), ant.trim())
    } else if (/^[VR]\./.test(line)) {
      deVersicles.push(line)
    }
  }
  let vIdx = 0
  for (const raw of laLines) {
    const line = raw.trim()
    if (!line) continue
    if (/;;/.test(line)) {
      const [ant, ref] = line.split(';;')
      items.push({ type: 'psalm', antLa: ant.trim(), antDe: deByRef.get(ref.trim()) || '', ref: ref.trim() })
    } else if (/^[VR]\./.test(line)) {
      items.push({ type: 'versicle', la: line, de: deVersicles[vIdx] || '' })
      vIdx++
    }
  }
  return items
}

// Kleine Horen: "DayName = antiphon" + folgende Zeile mit Psalmliste.
function parseMinorForDay(laSection, deSection, dayKey) {
  const findAnt = (lines) => {
    for (let i = 0; i < lines.length; i++) {
      const m = lines[i].match(/^(.+?)\s*=\s*(.*)$/)
      if (m && m[1].trim() === dayKey) {
        let ant = m[2].trim()
        // Psalmliste ist die nächste nicht-leere Zeile ohne "="
        let list = ''
        for (let j = i + 1; j < lines.length; j++) {
          const t = lines[j].trim()
          if (!t) continue
          if (/=/.test(t) && /^[^=]+=\s*/.test(t)) break
          list = t
          break
        }
        return { ant, list }
      }
    }
    return { ant: '', list: '' }
  }
  const la = findAnt(laSection || [])
  const de = findAnt(deSection || [])
  return { antLa: la.ant, antDe: de.ant, list: la.list }
}

function versicleSection(prefix, idx, la, de) {
  return {
    id: `${prefix}-v${idx}`,
    kind: 'ordinarium',
    title: bilingual('Versus', 'Versikel'),
    text: bilingual(la, de),
  }
}

async function buildHour(day, hourDef, data) {
  const prefix = `week-${day.id}-${hourDef.id}`
  const sections = [openingSection(prefix)]
  const hymn = hymnSection(prefix, hourDef.id)

  if (hourDef.src === 'matutinum') {
    if (hymn) sections.push(hymn)
    const items = zipMajorLines(
      data.matutinumLa[`Day${day.n}`] || [],
      data.matutinumDe[`Day${day.n}`] || [],
    )
    let ps = 0
    let v = 0
    for (const it of items) {
      if (it.type === 'psalm') {
        const s = await psalmSection(prefix, ++ps, it.antLa, it.antDe, it.ref)
        if (s) sections.push(s)
      } else {
        sections.push(versicleSection(prefix, ++v, it.la, it.de))
      }
    }
    sections.push({
      id: `${prefix}-tedeum`,
      kind: 'ordinarium',
      title: bilingual('Hymnus Te Deum', 'Te Deum'),
      rubric: bilingual('Post lectiones (extra Adventum et Quadragesimam)', 'Nach den Lesungen (außer Advent und Fastenzeit)'),
      text: bilingual(
        'Te Deum laudámus: * te Dóminum confitémur. Te ætérnum Patrem * omnis terra venerátur. Tibi omnes Ángeli, * tibi Cæli, et univérsæ Potestátes: Tibi Chérubim et Séraphim * incessábili voce proclámant: Sanctus, Sanctus, Sanctus * Dóminus Deus Sábaoth.',
        'Dich, Gott, loben wir, * dich, Herr, bekennen wir. Dich, den ewigen Vater, * verehrt die ganze Erde. Dir rufen alle Engel, * dir Himmel und alle Mächte, dir Cherubim und Seraphim * mit unaufhörlicher Stimme zu: Heilig, heilig, heilig * der Herr, der Gott der Heerscharen.',
      ),
    })
  } else if (hourDef.src === 'laudes' || hourDef.src === 'vesper') {
    const key = hourDef.src === 'laudes' ? `Day${day.n} Laudes1` : `Day${day.n} Vespera`
    const items = zipMajorLines(data.majorLa[key] || [], data.majorDe[key] || [])
    let ps = 0
    for (const it of items) {
      if (it.type !== 'psalm') continue
      const s = await psalmSection(prefix, ++ps, it.antLa, it.antDe, it.ref)
      if (s) sections.push(s)
    }
    sections.push(canticleSection(prefix, hourDef.src === 'laudes' ? CANTICLES.benedictus : CANTICLES.magnificat))
  } else {
    // kleine Horen + Komplet
    if (hymn) sections.push(hymn)
    const { antLa, antDe, list } = parseMinorForDay(
      data.minorLa[hourDef.section],
      data.minorDe[hourDef.section],
      day.key,
    )
    const tokens = (list || '').split(',').map((t) => t.trim()).filter(Boolean)
    let ps = 0
    for (const tok of tokens) {
      const ref = parseRef(tok)
      if (!ref || ref.bracketed) continue // festliches Schema (eckige Klammern) auslassen
      // Antiphon nur beim ersten Psalm zeigen (kleine Horen: eine Antiphon).
      const s = await psalmSection(prefix, ++ps, ps === 1 ? antLa : '', ps === 1 ? antDe : '', tok)
      if (s) sections.push(s)
    }
    if (hourDef.id === 'komplet') {
      sections.push(canticleSection(prefix, CANTICLES.nunc))
    }
  }

  return {
    id: prefix,
    form: '1962',
    hour: hourDef.hour,
    name: bilingual(hourDef.la, hourDef.de),
    day: {
      title: bilingual(day.la, day.de),
      color: 'green',
      rank: 'Feria per annum',
    },
    note:
      'Psalterium per hebdomadam (Breviarium Romanum 1962), gemeinfrei — Latein/Deutsch aus dem Datenbestand von Divinum Officium. ' +
      'Psalmen, Antiphonen und Cantica sind vollständig; Eröffnung, Gloria Patri und (bei den kleinen Horen) der Hymnus sind das feste Ordinarium. ' +
      'Kurzlesung, Tagesgebet und – in der Matutin – die Lesungen wechseln mit dem Proprium des Tages und sind hier nicht eingesetzt.',
    sections,
  }
}

// ---------------------------------------------------------------------------
async function main() {
  const argDays = process.argv.slice(2).map((s) => s.toLowerCase())
  const selectedDays = argDays.length ? DAYS.filter((d) => argDays.includes(d.id)) : DAYS
  if (!selectedDays.length) {
    console.error('Keine gültigen Tage. Erlaubt:', DAYS.map((d) => d.id).join(', '))
    process.exit(1)
  }

  console.log('Lade Psalter-Indexdateien (Latein/Deutsch) …')
  const [matLa, matDe, majLa, majDe, minLa, minDe] = await Promise.all([
    fetchText('Latin/Psalterium/Psalmi/Psalmi matutinum.txt'),
    fetchText('Deutsch/Psalterium/Psalmi/Psalmi matutinum.txt'),
    fetchText('Latin/Psalterium/Psalmi/Psalmi major.txt'),
    fetchText('Deutsch/Psalterium/Psalmi/Psalmi major.txt'),
    fetchText('Latin/Psalterium/Psalmi/Psalmi minor.txt'),
    fetchText('Deutsch/Psalterium/Psalmi/Psalmi minor.txt'),
  ])
  const data = {
    matutinumLa: splitSections(matLa || ''),
    matutinumDe: splitSections(matDe || ''),
    majorLa: splitSections(majLa || ''),
    majorDe: splitSections(majDe || ''),
    minorLa: splitSections(minLa || ''),
    minorDe: splitSections(minDe || ''),
  }

  await mkdir(OUT_DIR, { recursive: true })

  // Bestehenden Index laden (damit einzelne Tage ergänzt werden können).
  let index = []
  try {
    index = JSON.parse(await readFile(join(OUT_DIR, 'week-index.json'), 'utf8'))
  } catch {
    /* noch keiner */
  }
  const indexByDay = new Map(index.map((d) => [d.id, d]))

  for (const day of selectedDays) {
    console.log(`\n=== ${day.la} (${day.de}) ===`)
    const dayEntry = { id: day.id, la: day.la, de: day.de, it: day.it, n: day.n, hours: [] }
    for (const hourDef of HOURS) {
      process.stdout.write(`  · ${hourDef.de} … `)
      const hour = await buildHour(day, hourDef, data)
      const psalms = hour.sections.filter((s) => s.id.includes('-ps')).length
      await writeFile(join(OUT_DIR, `${hour.id}.json`), JSON.stringify(hour, null, 2) + '\n', 'utf8')
      dayEntry.hours.push({ id: hour.id, hour: hourDef.hour, la: hourDef.la, de: hourDef.de })
      console.log(`${psalms} Psalmen`)
    }
    indexByDay.set(day.id, dayEntry)
  }

  const merged = DAYS.map((d) => indexByDay.get(d.id)).filter(Boolean)
  await writeFile(join(OUT_DIR, 'week-index.json'), JSON.stringify(merged, null, 2) + '\n', 'utf8')
  console.log(`\nFertig. ${selectedDays.length} Tag(e) geschrieben nach ${OUT_DIR}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
