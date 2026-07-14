import { Link, useParams } from 'react-router-dom'
import { importedOfficeById } from '../../data/registry'
import { MassArticle } from '../liturgy/MassArticle'

/** Zeigt das aus Divinum Officium importierte Tagesproprium des Stundengebets
 *  (Antiphonen, Kurzlesung, Tagesgebet, Matutin-Lesung) – Latein/Deutsch. */
export function OfficePropersView() {
  const { id } = useParams()
  const proper = id ? importedOfficeById[id] : undefined
  if (!proper) {
    return (
      <p className="container">
        Tagesproprium nicht gefunden. <Link to="/brevier">Zurück zum Brevier</Link>
      </p>
    )
  }
  return <MassArticle mass={proper} subtitle="Stundengebet · Proprium des Tages (Divinum Officium)" />
}
