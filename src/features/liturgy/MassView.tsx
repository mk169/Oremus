import { Link, useParams } from 'react-router-dom'
import { massByForm, importedMassById, massIdForDate, FORM_LABEL } from '../../data/registry'
import { buildOrdo1962 } from '../../data/mass/buildMass'
import { resolveMassId } from '../../data/mass/resolveMassId'
import { useSettings } from '../../context/SettingsContext'
import type { LiturgicalForm } from '../../data/types'
import { MassArticle } from './MassArticle'

function isForm(x: string | undefined): x is LiturgicalForm {
  return x === '1962' || x === 'novusOrdo'
}

export function MassView() {
  const { form } = useParams()
  const { ordinaryId, credoId } = useSettings()
  if (!isForm(form)) {
    return (
      <p className="container">
        Unbekannte Form. <Link to="/liturgie">Zurück zur Liturgie</Link>
      </p>
    )
  }

  // 1962: vollständiges Ordo Missae mit dem Proprium des heutigen Tages und
  // dem gewählten Kyriale. Fällt auf das Beispielformular zurück, wenn zum
  // Datum kein Tagesproprium vorliegt.
  if (form === '1962') {
    // Kanonische Auflösung über die Kalender-Engine; für Tage ohne exaktes
    // Formular greift der nachbarschaftliche Fallback (resolveMassId).
    const now = new Date()
    const id = massIdForDate(now, '1962') ?? resolveMassId(now)
    const proper = importedMassById[id]
    const mass = proper ? buildOrdo1962(proper, { ordinaryId, credoId }) : massByForm['1962']
    const subtitle = `Überlieferte Form (1962)${mass.day.rank ? ' · ' + mass.day.rank : ''}`
    return <MassArticle mass={mass} subtitle={subtitle} showOrdinary />
  }

  const mass = massByForm[form]
  const subtitle = `${FORM_LABEL[form].de}${mass.day.rank ? ' · ' + mass.day.rank : ''}`
  return <MassArticle mass={mass} subtitle={subtitle} />
}
