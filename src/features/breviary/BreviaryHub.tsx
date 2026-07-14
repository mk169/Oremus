import { Link } from 'react-router-dom'
import { PageHeader } from '../../components/PageHeader'
import { hoursByForm, FORM_LABEL, importedOfficeList } from '../../data/registry'
import type { LiturgicalForm } from '../../data/types'
import './BreviaryHub.css'

const COLOR_VAR: Record<string, string> = {
  green: 'var(--season-green)',
  violet: 'var(--season-violet)',
  red: 'var(--season-red)',
  white: 'var(--season-white)',
  rose: 'var(--season-rose)',
  black: 'var(--season-black)',
}

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

      <section className="brev-form">
        <h2 className="brev-form__title">
          Proprium des Tages (1962)
          <span className="brev-form__la smallcaps"> · aus Divinum Officium, Latein/Deutsch</span>
        </h2>
        <p className="brev-note" style={{ marginTop: '0.2rem' }}>
          {importedOfficeList.length} Sonntage: Antiphonen, Kurzlesung, Tagesgebet und
          Matutin-Lesung – zweisprachig.
        </p>
        <ul className="brev-propers">
          {importedOfficeList.map((o) => (
            <li key={o.id}>
              <Link to={`/brevier/proprium/${o.id}`} className="brev-propers__link">
                <span className="brev-propers__dot" style={{ background: COLOR_VAR[o.color] }} aria-hidden />
                <span className="brev-propers__name">{o.titleDe}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <p className="brev-note">
        Alle Horen des Tages sind angelegt; die Psalmen der Horen sind Beispieltexte. Das
        zweisprachige Tagesproprium (oben) kommt aus Divinum Officium; der Psalter-Zyklus folgt.
      </p>
    </div>
  )
}
