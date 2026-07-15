import { PageHeader } from '../../components/PageHeader'
import { SettingsPanel } from '../../components/SettingsPanel'
import { SectionRenderer } from '../../components/SectionRenderer'
import type { MassFormulary } from '../../data/types'

interface Props {
  mass: MassFormulary
  /** Untertitel (z.B. Form + Rang). */
  subtitle?: string
  /** Auswahl von Ordinarium und Credo anbieten (für die Messen). */
  showOrdinary?: boolean
}

/** Stellt ein Messformular dar: Kopf, Einstellungen (Sprache/Gesang), Ablauf. */
export function MassArticle({ mass, subtitle, showOrdinary }: Props) {
  return (
    <article>
      <PageHeader
        title={mass.day.title.de ?? mass.day.title.la ?? 'Heilige Messe'}
        latin={mass.day.title.la}
        subtitle={subtitle}
      />
      <SettingsPanel sections={mass.sections} showOrdinary={showOrdinary} />
      {mass.sections.map((s) => (
        <SectionRenderer key={s.id} section={s} />
      ))}
      {mass.note && <p className="lit-note">{mass.note}</p>}
    </article>
  )
}
