import { Link, useParams } from 'react-router-dom'
import { PageHeader } from '../../components/PageHeader'
import { SettingsPanel } from '../../components/SettingsPanel'
import { SectionRenderer } from '../../components/SectionRenderer'
import { massByForm, FORM_LABEL } from '../../data/registry'
import type { LiturgicalForm } from '../../data/types'

function isForm(x: string | undefined): x is LiturgicalForm {
  return x === '1962' || x === 'novusOrdo'
}

export function MassView() {
  const { form } = useParams()
  if (!isForm(form)) {
    return (
      <p className="container">
        Unbekannte Form. <Link to="/liturgie">Zurück zur Liturgie</Link>
      </p>
    )
  }

  const mass = massByForm[form]

  return (
    <article>
      <PageHeader
        title={mass.day.title.de ?? 'Heilige Messe'}
        latin={mass.day.title.la}
        subtitle={`${FORM_LABEL[form].de}${mass.day.rank ? ' · ' + mass.day.rank : ''}`}
      />

      <SettingsPanel sections={mass.sections} />

      {mass.sections.map((s) => (
        <SectionRenderer key={s.id} section={s} />
      ))}

      {mass.note && <p className="lit-note">{mass.note}</p>}
    </article>
  )
}
