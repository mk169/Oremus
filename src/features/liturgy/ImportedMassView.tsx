import { Link, useParams } from 'react-router-dom'
import { importedMassById } from '../../data/registry'
import { buildFullMass } from '../../data/mass/buildMass'
import { MassArticle } from './MassArticle'

/** Zeigt ein aus Divinum Officium importiertes Tagesproprium als vollständige
 *  Messe (Ordinarium + Proprium) der überlieferten Form. */
export function ImportedMassView() {
  const { id } = useParams()
  const proper = id ? importedMassById[id] : undefined
  if (!proper) {
    return (
      <p className="container">
        Messformular nicht gefunden. <Link to="/liturgie">Zurück zur Liturgie</Link>
      </p>
    )
  }
  const mass = buildFullMass(proper)
  const subtitle = `Überlieferte Form (1962)${mass.day.rank ? ' · ' + mass.day.rank : ''}`
  return <MassArticle mass={mass} subtitle={subtitle} />
}
