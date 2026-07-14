import { useState } from 'react'
import { PageHeader } from '../../components/PageHeader'
import { upcomingCelebrations } from '../../data/liturgicalCalendar'
import type { SeasonColor } from '../../data/calendar'
import type { LiturgicalForm } from '../../data/types'
import { FORM_LABEL } from '../../data/registry'
import './CalendarPage.css'

const COLOR_VAR: Record<SeasonColor, string> = {
  green: 'var(--season-green)',
  violet: 'var(--season-violet)',
  red: 'var(--season-red)',
  white: 'var(--season-white)',
  rose: 'var(--season-rose)',
  black: 'var(--season-black)',
}

const FORMS: LiturgicalForm[] = ['novusOrdo', '1962']

const fmt = new Intl.DateTimeFormat('de-DE', { weekday: 'short', day: 'numeric', month: 'short' })

export function CalendarPage() {
  const [form, setForm] = useState<LiturgicalForm>('novusOrdo')
  const days = upcomingCelebrations(new Date(), 21, form)

  return (
    <div>
      <PageHeader
        title="Kirchenjahr"
        latin="Calendarium"
        subtitle="Der liturgische Kalender – heute und die nächsten drei Wochen."
      />

      <div className="cal-forms" role="group" aria-label="Form">
        {FORMS.map((f) => (
          <button
            key={f}
            type="button"
            className={form === f ? 'is-active' : ''}
            aria-pressed={form === f}
            onClick={() => setForm(f)}
          >
            {FORM_LABEL[f].de}
          </button>
        ))}
      </div>

      <ol className="cal-list">
        {days.map(({ date, cel }, i) => (
          <li key={date.toISOString()} className={`cal-row ${i === 0 ? 'is-today' : ''}`}>
            <span className="cal-row__date">{i === 0 ? 'Heute' : fmt.format(date)}</span>
            <span className="cal-row__dot" style={{ background: COLOR_VAR[cel.color] }} aria-hidden />
            <span className="cal-row__body">
              <span className="cal-row__title">{cel.title.de}</span>
              <span className="cal-row__meta">
                {cel.rank ? `${cel.rank} · ` : ''}
                {cel.season}
              </span>
            </span>
          </li>
        ))}
      </ol>

      <p className="cal-note">
        Fokussiert auf die liturgischen Zeiten und Hauptfeste beider Formen. Einzelne
        Gedächtnisfeiern und regionale Feste werden noch ergänzt.
      </p>
    </div>
  )
}
