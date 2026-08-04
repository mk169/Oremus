import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHeader } from '../../components/PageHeader'
import { SectionRenderer } from '../../components/SectionRenderer'
import { importedMassList, communeMassList, massIdForDate, type ImportedMassEntry } from '../../data/registry'
import { resolveCelebration } from '../../data/liturgicalCalendar'
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
// nach Monaten – damit die vielen Einträge navigierbar bleiben.
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

function isoDate(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

/** Direktzugang: Datum wählen → Tagesmesse des Kirchenjahres (1962). */
function TagesmesseCard() {
  const [date, setDate] = useState<Date>(() => new Date())
  const cel = resolveCelebration(date, '1962')
  const massId = massIdForDate(date, '1962')
  const shift = (n: number) => {
    const d = new Date(date)
    d.setDate(d.getDate() + n)
    setDate(d)
  }
  const label = date.toLocaleDateString('de-DE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <section className="mass-today">
      <div className="mass-today__nav">
        <button type="button" onClick={() => shift(-1)} aria-label="Vorheriger Tag">‹</button>
        <button type="button" className="mass-today__now" onClick={() => setDate(new Date())}>
          Heute
        </button>
        <button type="button" onClick={() => shift(1)} aria-label="Nächster Tag">›</button>
        <input
          type="date"
          className="mass-today__date-input"
          value={isoDate(date)}
          onChange={(e) => {
            const [y, m, d] = e.target.value.split('-').map(Number)
            if (y && m && d) setDate(new Date(y, m - 1, d))
          }}
        />
      </div>

      <div className="mass-today__head">
        <span className="mass-today__dot" style={{ background: COLOR_VAR[cel.color] }} aria-hidden />
        <div>
          <p className="mass-today__date">{label}</p>
          <h2 className="mass-today__title">
            {cel.title.de}
            {cel.title.la && <span className="mass-today__la smallcaps"> · {cel.title.la}</span>}
          </h2>
          <p className="mass-today__meta">
            {cel.season}
            {cel.rank ? ` · ${cel.rank}` : ''}
          </p>
          {cel.commemorations?.length ? (
            <p className="mass-today__comm">
              Kommemoration: {cel.commemorations.map((c) => c.de).join(' · ')}
            </p>
          ) : null}
        </div>
      </div>

      {massId ? (
        <Link to={`/liturgie/formular/${massId}`} className="mass-today__cta">
          Zur Tagesmesse — Ordinarium &amp; Proprium
        </Link>
      ) : (
        <div className="mass-today__fallback">
          <p>Für diesen Tag ist (noch) kein eigenes Proprium hinterlegt.</p>
          <Link to="/liturgie/messe/1962" className="mass-today__cta mass-today__cta--muted">
            Ordinarium der Messe öffnen
          </Link>
        </div>
      )}
    </section>
  )
}

function MassIndexList({ entries }: { entries: ImportedMassEntry[] }) {
  return (
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
  )
}

function MassGroup({ label, entries }: { label: string; entries: ImportedMassEntry[] }) {
  if (!entries.length) return null
  return (
    <details className="mass-group">
      <summary className="mass-group__summary">
        <span className="mass-group__label">{label}</span>
        <span className="mass-group__count">{entries.length}</span>
      </summary>
      <MassIndexList entries={entries} />
    </details>
  )
}

export function LiturgyHub() {
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()
  const filtered = useMemo(
    () =>
      q
        ? [...importedMassList, ...communeMassList].filter(
            (m) => m.titleDe.toLowerCase().includes(q) || m.titleLa.toLowerCase().includes(q),
          )
        : [],
    [q],
  )
  const { temporal, sanctoral } = groupFormulars(importedMassList)

  return (
    <div>
      <PageHeader
        title="Liturgie"
        latin="Missale Romanum"
        subtitle="Römisches Messbuch 1962 – Ordinarium, Proprium des Tages und Kyriale in einem nahtlosen Ablauf."
      />

      <TagesmesseCard />

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

      <details className="asperges-details">
        <summary className="asperges-details__summary">Besprengung vor dem Hochamt (Asperges / Vidi aquam)</summary>
        <p className="liturgy-hub__imported-note">
          „Asperges me" außerhalb der Osterzeit, „Vidi aquam" in der Osterzeit. In den
          Sonntagsformularen steht der passende Gesang bereits am Anfang.
        </p>
        <SectionRenderer section={aspergesMe} />
        <SectionRenderer section={vidiAquam} />
        <SectionRenderer section={aspergesOratio} />
      </details>

      <h2 className="liturgy-hub__imported-title">Verzeichnis der Messformulare (1962)</h2>
      <p className="liturgy-hub__imported-note">
        {importedMassList.length} Tagesproprien aus Divinum Officium (Latein). Dazu erscheint
        automatisch das Ordinarium (Latein/Deutsch); das gewünschte Kyriale lässt sich im Formular
        auswählen. Die deutsche Übersetzung des Propriums folgt.
      </p>

      <input
        type="search"
        className="mass-search"
        placeholder="Formular suchen … (z. B. Ostern, Fronleichnam, Josef)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Messformular suchen"
      />

      {q ? (
        <>
          <p className="liturgy-hub__imported-note">{filtered.length} Treffer für »{query}«.</p>
          {filtered.length ? (
            <MassIndexList entries={filtered} />
          ) : (
            <p className="liturgy-hub__imported-note">Keine Formulare gefunden.</p>
          )}
        </>
      ) : (
        <>
          <h3 className="liturgy-hub__group-title">Herrenjahr · Temporale</h3>
          {SEASON_ORDER.map((s) => (
            <MassGroup key={s} label={SEASON_LABEL[s]} entries={temporal[s] ?? []} />
          ))}

          <h3 className="liturgy-hub__group-title">Heiligenkalender · Sanktorale</h3>
          {MONTHS.map((name, i) => (
            <MassGroup key={name} label={name} entries={sanctoral[i + 1] ?? []} />
          ))}

          <h3 className="liturgy-hub__group-title">Votivmessen &amp; Gemeinsame Messen</h3>
          <p className="liturgy-hub__imported-note">
            Requiem (Messe für die Verstorbenen), Marienmessen und die Commons der Heiligen –
            frei wählbar für jede Votiv- oder Gedächtnismesse.
          </p>
          <MassIndexList entries={communeMassList} />
        </>
      )}
    </div>
  )
}
