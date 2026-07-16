import { Link, useParams } from 'react-router-dom'
import { PageHeader } from '../../components/PageHeader'
import { weekOfficeDays } from '../../data/registry'
import './BreviaryHub.css'

/**
 * Die vollständigen Horen eines Wochentags (ferialer Wochenpsalter 1962):
 * Matutin, Laudes, Prim, Terz, Sext, Non, Vesper, Komplet.
 */
export function WeekDayView() {
  const { dayId } = useParams()
  const day = weekOfficeDays.find((d) => d.id === dayId)

  if (!day) {
    return (
      <p className="container">
        Tag nicht gefunden. <Link to="/brevier">Zurück zum Brevier</Link>
      </p>
    )
  }

  return (
    <div>
      <PageHeader
        title={day.de}
        latin={day.la}
        subtitle="Ferialer Wochenpsalter (1962) – alle Horen des Tages, Latein/Deutsch."
      />

      <section className="brev-form">
        <h2 className="brev-form__title">
          Horen des Tages
          <span className="brev-form__la smallcaps"> · Psalterium per hebdomadam</span>
        </h2>
        <ul className="brev-hours">
          {day.hours.map((h) => (
            <li key={h.id}>
              <Link to={`/brevier/${h.id}`} className="brev-hours__link">
                <span className="brev-hours__name">{h.de}</span>
                <span className="brev-hours__la">{h.la}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <p className="brev-note">
        Psalmen, Antiphonen und Cantica sind vollständig (aus Divinum Officium, gemeinfrei).
        Kurzlesung, Tagesgebet und die Matutin-Lesungen richten sich nach dem Proprium des
        Tages und folgen schrittweise. <Link to="/brevier">Zurück zum Brevier</Link>
      </p>
    </div>
  )
}
