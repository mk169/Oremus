import { Link } from 'react-router-dom'
import { PageHeader } from '../../components/PageHeader'
import { hoursByForm, FORM_LABEL } from '../../data/registry'
import type { LiturgicalForm } from '../../data/types'
import './BreviaryHub.css'

const FORMS: LiturgicalForm[] = ['1962', 'novusOrdo']

export function BreviaryHub() {
  return (
    <div>
      <PageHeader
        title="Brevier"
        latin="Liturgia Horarum"
        subtitle="Stundengebet – wähle Form und Hore. Text Latein/Deutsch, Gesang vorbereitet."
      />

      {FORMS.map((form) => (
        <section key={form} className="brev-form">
          <h2 className="brev-form__title">
            {FORM_LABEL[form].de}
            <span className="brev-form__la smallcaps"> · {FORM_LABEL[form].la}</span>
          </h2>
          <ul className="brev-hours">
            {hoursByForm[form].map((h) => (
              <li key={h.id}>
                <Link to={`/brevier/${h.id}`} className="brev-hours__link">
                  <span className="brev-hours__name">{h.name.de}</span>
                  <span className="brev-hours__la">{h.name.la}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <p className="brev-note">
        Alle Horen des Tages sind angelegt (Beispieltag). Die Tages- und Festproprien sowie
        der Psalter-Zyklus werden schrittweise ergänzt.
      </p>
    </div>
  )
}
