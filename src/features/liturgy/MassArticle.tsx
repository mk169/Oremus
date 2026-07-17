import { Fragment } from 'react'
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

  return (
    <article>
      <PageHeader
        title={mass.day.title.de ?? mass.day.title.la ?? 'Heilige Messe'}
        latin={mass.day.title.la}
        subtitle={subtitle}
      />
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
