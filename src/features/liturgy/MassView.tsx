import { Link, useParams } from 'react-router-dom'
import { massByForm, FORM_LABEL } from '../../data/registry'
import type { LiturgicalForm } from '../../data/types'
import { MassArticle } from './MassArticle'

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
  const subtitle = `${FORM_LABEL[form].de}${mass.day.rank ? ' · ' + mass.day.rank : ''}`
  return <MassArticle mass={mass} subtitle={subtitle} />
}
