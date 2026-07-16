import { useMemo, useState } from 'react'
import { PageHeader } from '../../components/PageHeader'
import {
  upcomingCelebrations,
  yearCelebrations,
  type CalendarDay,
} from '../../data/liturgicalCalendar'
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

type View = 'upcoming' | 'year'

const MONTHS_DE = [
  'Januar',
  'Februar',
  'März',
  'April',
  'Mai',
  'Juni',
  'Juli',
  'August',
  'September',
  'Oktober',
  'November',
  'Dezember',
]

const fmt = new Intl.DateTimeFormat('de-DE', { weekday: 'short', day: 'numeric', month: 'short' })
const weekdayFmt = new Intl.DateTimeFormat('de-DE', { weekday: 'short' })

function isSameDate(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

/** Eine Zeile im Kalender: Datum, Farbpunkt, Titel, Rang/Zeit, Kommemorationen. */
function CalendarRow({
  entry,
  label,
  today,
}: {
  entry: CalendarDay
  label: string
  today: boolean
}) {
  const { cel } = entry
  return (
    <li className={`cal-row ${today ? 'is-today' : ''}`}>
      <span className="cal-row__date">{label}</span>
      <span className="cal-row__dot" style={{ background: COLOR_VAR[cel.color] }} aria-hidden />
      <span className="cal-row__body">
        <span className="cal-row__title">{cel.title.de}</span>
        <span className="cal-row__meta">
          {cel.rank ? `${cel.rank} · ` : ''}
          {cel.season}
        </span>
        {cel.commemorations && cel.commemorations.length > 0 && (
          <span className="cal-row__comm">
            Gedächtnis: {cel.commemorations.map((c) => c.de).join(' · ')}
          </span>
        )}
      </span>
    </li>
  )
}

export function CalendarPage() {
  const [form, setForm] = useState<LiturgicalForm>('novusOrdo')
  const [view, setView] = useState<View>('upcoming')
  const today = new Date()
  const [year, setYear] = useState<number>(today.getFullYear())

  const days = upcomingCelebrations(today, 21, form)
  const months = useMemo(() => yearCelebrations(year, form), [year, form])

  return (
    <div>
      <PageHeader
        title="Kirchenjahr"
        latin="Calendarium"
        subtitle="Der liturgische Kalender – mit dem vollständigen römischen Heiligenkalender."
      />

      <div className="cal-controls">
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

        <div className="cal-forms" role="group" aria-label="Ansicht">
          <button
            type="button"
            className={view === 'upcoming' ? 'is-active' : ''}
            aria-pressed={view === 'upcoming'}
            onClick={() => setView('upcoming')}
          >
            Nächste 3 Wochen
          </button>
          <button
            type="button"
            className={view === 'year' ? 'is-active' : ''}
            aria-pressed={view === 'year'}
            onClick={() => setView('year')}
          >
            Ganzes Kirchenjahr
          </button>
        </div>
      </div>

      {view === 'upcoming' && (
        <ol className="cal-list">
          {days.map(({ date, cel }, i) => (
            <CalendarRow
              key={date.toISOString()}
              entry={{ date, cel }}
              label={i === 0 ? 'Heute' : fmt.format(date)}
              today={i === 0}
            />
          ))}
        </ol>
      )}

      {view === 'year' && (
        <div className="cal-year">
          <div className="cal-year__nav">
            <button type="button" onClick={() => setYear((y) => y - 1)} aria-label="Vorheriges Jahr">
              ‹
            </button>
            <span className="cal-year__label">{year}</span>
            <button type="button" onClick={() => setYear((y) => y + 1)} aria-label="Nächstes Jahr">
              ›
            </button>
          </div>

          {months.map((monthDays, monthIndex) => (
            <section key={monthIndex} className="cal-month">
              <h2 className="cal-month__title">{MONTHS_DE[monthIndex]}</h2>
              <ol className="cal-list">
                {monthDays.map(({ date, cel }) => (
                  <CalendarRow
                    key={date.toISOString()}
                    entry={{ date, cel }}
                    label={`${weekdayFmt.format(date)} ${date.getDate()}.`}
                    today={isSameDate(date, today)}
                  />
                ))}
              </ol>
            </section>
          ))}
        </div>
      )}

      <p className="cal-note">
        Das Sanktorale folgt dem überlieferten römischen Generalkalender (1962). Der
        zeitliche Festkreis – Sonntage und Ferien – richtet sich nach der gewählten Form.
        Höhere Feste verdrängen den Sonntag; niederrangige Feste erscheinen als Gedächtnis.
      </p>
    </div>
  )
}
