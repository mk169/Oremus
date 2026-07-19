import { Link } from 'react-router-dom'
import { PageHeader } from '../../components/PageHeader'
import { SectionRenderer } from '../../components/SectionRenderer'
import { importedMassList, type ImportedMassEntry } from '../../data/registry'
import { aspergesMe, vidiAquam, aspergesOratio } from '../../data/mass/asperges'
import './LiturgyHub.css'

const COLOR_VAR: Record<string, string> = {
  green: 'var(--season-green)',
  violet: 'var(--season-violet)',
  red: 'var(--season-red)',
  white: 'var(--season-white)',
  rose: 'var(--season-rose)',
  black: 'var(--season-black)',
}

// Gruppierung der Formulare: Temporale nach liturgischen Zeiten, Sanktorale
// nach Monaten – damit die ~300 Einträge navigierbar bleiben.
const SEASON_ORDER = ['Adv', 'Nat', 'Epi', 'Quadp', 'Quad', 'Pasc', 'Pent'] as const
const SEASON_LABEL: Record<string, string> = {
  Adv: 'Advent',
  Nat: 'Weihnachtszeit',
  Epi: 'Zeit nach Erscheinung',
  Quadp: 'Vorfastenzeit',
  Quad: 'Fastenzeit',
  Pasc: 'Osterzeit',
  Pent: 'Zeit nach Pfingsten',
}
const MONTHS = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']

function groupFormulars(list: ImportedMassEntry[]) {
  const temporal: Record<string, ImportedMassEntry[]> = {}
  const sanctoral: Record<number, ImportedMassEntry[]> = {}
  for (const m of list) {
    const t = m.id.match(/^do-([A-Za-z]+)\d*-\d+$/)
    const s = m.id.match(/^do-(\d\d)-\d\d$/)
    if (t) (temporal[t[1]] ??= []).push(m)
    else if (s) (sanctoral[Number(s[1])] ??= []).push(m)
  }
  return { temporal, sanctoral }
}

function MassGroup({ label, entries }: { label: string; entries: ImportedMassEntry[] }) {
  if (!entries.length) return null
  return (
    <details className="mass-group">
      <summary className="mass-group__summary">
        <span className="mass-group__label">{label}</span>
        <span className="mass-group__count">{entries.length}</span>
      </summary>
      <ul className="mass-index">
        {entries.map((m) => (
          <li key={m.id}>
            <Link to={`/liturgie/formular/${m.id}`} className="mass-index__link">
              <span className="mass-index__dot" style={{ background: COLOR_VAR[m.color] }} aria-hidden />
              <span className="mass-index__name">{m.titleDe}</span>
              <span className="mass-index__la">{m.titleLa}</span>
            </Link>
          </li>
        ))}
      </ul>
    </details>
  )
}

export function LiturgyHub() {
  const { temporal, sanctoral } = groupFormulars(importedMassList)
  return (
    <div>
      <PageHeader
        title="Liturgie"
        latin="Missale Romanum"
        subtitle="Römisches Messbuch 1962 – Ordinarium, Proprium des Tages und Kyriale in einem nahtlosen Ablauf."
      />

      <div className="form-choice">
        <Link to="/liturgie/messe/1962" className="form-choice__card">
          <span className="form-choice__la smallcaps">Forma extraordinaria</span>
          <span className="form-choice__title">Überlieferte Messe (1962)</span>
          <span className="form-choice__desc">Missale Romanum 1962 – Ordinarium &amp; Proprium</span>
        </Link>
        <Link to="/liturgie/messe/novusOrdo" className="form-choice__card">
          <span className="form-choice__la smallcaps">Forma ordinaria</span>
          <span className="form-choice__title">Novus Ordo</span>
          <span className="form-choice__desc">Mit Tageslesungen und Evangelium</span>
        </Link>
        <Link to="/kyriale" className="form-choice__card">
          <span className="form-choice__la smallcaps">Ordinarium Missæ</span>
          <span className="form-choice__title">Kyriale</span>
          <span className="form-choice__desc">Choral-Ordinarien I–XVIII, Credo, marianische Antiphonen</span>
        </Link>
      </div>

      <h2 className="liturgy-hub__asperges-title">Besprengung vor dem Hochamt</h2>
      <p className="liturgy-hub__imported-note">
        „Asperges me" außerhalb der Osterzeit, „Vidi aquam" in der Osterzeit. In den
        Sonntagsformularen unten steht der passende Gesang bereits am Anfang.
      </p>
      <SectionRenderer section={aspergesMe} />
      <SectionRenderer section={vidiAquam} />
      <SectionRenderer section={aspergesOratio} />

      <h2 className="liturgy-hub__imported-title">Messformulare des Kirchenjahres (1962)</h2>
      <p className="liturgy-hub__imported-note">
        {importedMassList.length} Tagesproprien aus Divinum Officium (Latein). Dazu erscheint
        automatisch das Ordinarium (Latein/Deutsch); das gewünschte Kyriale lässt sich im Formular
        auswählen. Die deutsche Übersetzung des Propriums folgt.
      </p>

      <h3 className="liturgy-hub__group-title">Herrenjahr · Temporale</h3>
      {SEASON_ORDER.map((s) => (
        <MassGroup key={s} label={SEASON_LABEL[s]} entries={temporal[s] ?? []} />
      ))}

      <h3 className="liturgy-hub__group-title">Heiligenkalender · Sanktorale</h3>
      {MONTHS.map((name, i) => (
        <MassGroup key={name} label={name} entries={sanctoral[i + 1] ?? []} />
      ))}
    </div>
  )
}
