import { Link, useParams } from 'react-router-dom'
import { PageHeader } from '../../components/PageHeader'
import { SettingsPanel } from '../../components/SettingsPanel'
import { SectionRenderer } from '../../components/SectionRenderer'
import { hoursByForm, FORM_LABEL } from '../../data/registry'

export function HourView() {
  const { hourId } = useParams()
  const all = [...hoursByForm['1962'], ...hoursByForm.novusOrdo]
  const hour = all.find((h) => h.id === hourId)

  if (!hour) {
    return (
      <p className="container">
        Hore nicht gefunden. <Link to="/brevier">Zurück zum Brevier</Link>
      </p>
    )
  }

  return (
    <article>
      <PageHeader
        title={hour.name.de ?? 'Hore'}
        latin={hour.name.la}
        subtitle={FORM_LABEL[hour.form].de}
      />
      <SettingsPanel sections={hour.sections} />
      {hour.sections.map((s) => (
        <SectionRenderer key={s.id} section={s} />
      ))}
      {hour.note && <p className="lit-note">{hour.note}</p>}
    </article>
  )
}
