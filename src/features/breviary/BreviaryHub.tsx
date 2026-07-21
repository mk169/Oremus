import { Link } from 'react-router-dom'
import { PageHeader } from '../../components/PageHeader'
import { hoursByForm, FORM_LABEL, importedOfficeList, weekOfficeDays, officeIdForDate } from '../../data/registry'
import { resolveCelebration } from '../../data/liturgicalCalendar'
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

/** Karte „Brevier heute": Datum → Feier + Wochentags-Horen + Tagesproprium. */
function BrevierToday() {
  const today = new Date()
  const cel = resolveCelebration(today, '1962')
  const day = weekOfficeDays.find((d) => d.n === today.getDay())
  const propriumId = officeIdForDate(today, '1962')
  const dateLabel = today.toLocaleDateString('de-DE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <section className="brev-today">
      <div className="brev-today__head">
        <span className="brev-today__dot" style={{ background: COLOR_VAR[cel.color] }} aria-hidden />
        <div>
          <p className="brev-today__date">{dateLabel}</p>
          <h2 className="brev-today__title">
            {cel.title.de}
            {cel.title.la && <span className="brev-today__la smallcaps"> · {cel.title.la}</span>}
          </h2>
          <p className="brev-today__meta">
            {cel.season}
            {cel.rank ? ` · ${cel.rank}` : ''}
          </p>
        </div>
      </div>

      {day && (
        <ul className="brev-hours brev-today__hours">
          {day.hours.map((h) => (
            <li key={h.id}>
              <Link to={`/brevier/${h.id}`} className="brev-hours__link">
                <span className="brev-hours__name">{h.de}</span>
                <span className="brev-hours__la">{h.la}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <div className="brev-today__links">
        {day && (
          <Link to={`/brevier/woche/${day.id}`} className="brev-today__link">
            Alle Horen des Tages ({day.de})
          </Link>
        )}
        {propriumId && (
          <Link to={`/brevier/proprium/${propriumId}`} className="brev-today__link">
            Tagesproprium (Antiphonen, Kurzlesung, Oration, Matutin-Lesung)
          </Link>
        )}
      </div>
      {!propriumId && (
        <p className="brev-note" style={{ marginTop: '0.6rem' }}>
          Das eigene Tagesproprium (Oration, Matutin-Lesungen) liegt derzeit für die Sonntage
          des Kirchenjahres vor; an Ferien wird die Oration des vorausgehenden Sonntags gebetet.
        </p>
      )}
    </section>
  )
}

export function BreviaryHub() {
  return (
    <div>
      <PageHeader
        title="Brevier"
        latin="Liturgia Horarum"
        subtitle="Stundengebet – wähle Form und Hore. Text Latein/Deutsch, Gesang vorbereitet."
      />

      <BrevierToday />

      <section className="brev-form">
        <h2 className="brev-form__title">
          Wochenpsalter (1962)
          <span className="brev-form__la smallcaps"> · Psalterium per hebdomadam, Latein/Deutsch</span>
        </h2>
        <p className="brev-note" style={{ marginTop: '0.2rem' }}>
          Die vollständigen Horen für jeden Wochentag – Matutin bis Komplet, mit vollem
          Psalmtext, Antiphonen und Cantica.
        </p>
        <ul className="brev-hours">
          {weekOfficeDays.map((d) => (
            <li key={d.id}>
              <Link to={`/brevier/woche/${d.id}`} className="brev-hours__link">
                <span className="brev-hours__name">{d.de}</span>
                <span className="brev-hours__la">{d.la}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

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
        Der Wochenpsalter (1962) enthält für jeden Tag die vollständigen Horen mit vollem
        Psalmtext, Antiphonen, Hymnen, Kurzlesung, Responsorium und Cantica (Latein/Deutsch,
        aus Divinum Officium). Das zweisprachige Tagesproprium ergänzt Oration und
        Matutin-Lesung; Tagesgebet und Lesungen wechseln mit dem Proprium des Tages.
      </p>
    </div>
  )
}
