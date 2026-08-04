import { Fragment, type CSSProperties } from 'react'
import { PageHeader } from '../../components/PageHeader'
import { SettingsPanel } from '../../components/SettingsPanel'
import { SectionRenderer } from '../../components/SectionRenderer'
import type { MassFormulary } from '../../data/types'
import './MassArticle.css'

interface Props {
  mass: MassFormulary
  /** Untertitel (z.B. Form + Rang). */
  subtitle?: string
  /** Auswahl von Ordinarium und Credo anbieten (für die Messen). */
  showOrdinary?: boolean
}

const COLOR_VAR: Record<string, string> = {
  green: 'var(--season-green)',
  violet: 'var(--season-violet)',
  red: 'var(--season-red)',
  white: 'var(--season-white)',
  rose: 'var(--season-rose)',
  black: 'var(--season-black)',
}
const COLOR_LABEL: Record<string, string> = {
  green: 'grün',
  violet: 'violett',
  red: 'rot',
  white: 'weiß',
  rose: 'rosa',
  black: 'schwarz',
}

// Logische Blöcke des Ordo Missae. Beginnt ein Abschnitt mit einer dieser
// „start"-Kennungen, wird davor ein Block-Trenner gesetzt.
const PHASES: { start: string; la: string; de: string }[] = [
  { start: 'signum-crucis', la: 'Preces ad infimum altáris', de: 'Stufengebet' },
  { start: 'introitus', la: 'Missa Catechumenórum', de: 'Wortgottesdienst' },
  { start: 'dominus-vobiscum-offertorium', la: 'Offertórium', de: 'Opferung' },
  { start: 'praefatio-dialog', la: 'Præfátio et Canon Missæ', de: 'Präfation und Kanon' },
  { start: 'praeceptis-salutaribus', la: 'Ritus Communiónis', de: 'Kommunion' },
  { start: 'dominus-vobiscum-postcommunio', la: 'Conclúsio', de: 'Schluss der Messe' },
]
const PHASE_BY_START = new Map(PHASES.map((p) => [p.start, p]))

/** Stellt ein Messformular dar: Kopf, Einstellungen (Sprache/Gesang), Ablauf. */
export function MassArticle({ mass, subtitle, showOrdinary }: Props) {
  // Block-Gliederung nur beim vollständigen Ordo (erkennbar am Stufengebet).
  const usePhases = mass.sections.some((s) => s.id === 'signum-crucis')
  const color = mass.day.color
  const colorVar = color ? COLOR_VAR[color] : undefined

  return (
    <article
      className="mass-article"
      style={colorVar ? ({ ['--mass-color' as string]: colorVar } as CSSProperties) : undefined}
    >
      <div className="mass-colorbar" aria-hidden />
      <PageHeader
        title={mass.day.title.de ?? mass.day.title.la ?? 'Heilige Messe'}
        latin={mass.day.title.la}
        subtitle={subtitle}
      />
      {(mass.day.rank || color) && (
        <div className="mass-meta">
          {color && (
            <span className="mass-meta__color">
              <span className="mass-meta__dot" style={{ background: colorVar }} aria-hidden />
              {COLOR_LABEL[color] ?? color}
            </span>
          )}
          {mass.day.rank && <span className="mass-meta__rank">{mass.day.rank}</span>}
        </div>
      )}

      <SettingsPanel sections={mass.sections} showOrdinary={showOrdinary} />
      {mass.sections.map((s) => {
        const phase = usePhases ? PHASE_BY_START.get(s.id) : undefined
        return (
          <Fragment key={s.id}>
            {phase && (
              <header className="mass-phase">
                <span className="mass-phase__ornament" aria-hidden>
                  ✣
                </span>
                <h2 className="mass-phase__title">{phase.de}</h2>
                <p className="mass-phase__la smallcaps">{phase.la}</p>
              </header>
            )}
            <SectionRenderer section={s} />
          </Fragment>
        )
      })}
      {mass.note && <p className="lit-note">{mass.note}</p>}
    </article>
  )
}
