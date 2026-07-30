import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PageHeader } from '../../components/PageHeader'
import { BilingualText } from '../../components/BilingualText'
import { novenaById, novenas } from '../../data/novenas'
import './NovenaPage.css'

export function NovenaPage() {
  const { novenaId } = useParams()
  // Ohne id (oder unbekannt) die erste Novene zeigen – abwärtskompatibel.
  const novena = novenaById(novenaId) ?? novenas[0]
  const [activeDay, setActiveDay] = useState(1)
  const day = novena.days.find((d) => d.day === activeDay) ?? novena.days[0]

  return (
    <div>
      <p className="prayers-breadcrumb">
        <Link to="/novene">Novenen</Link>
      </p>
      <PageHeader title={novena.title.de ?? 'Novene'} latin={novena.title.la} subtitle={novena.subtitle?.de} />

      <p className="novena-intro">{novena.intro.de}</p>

      <div className="novena-days" role="tablist" aria-label="Tage der Novene">
        {novena.days.map((d) => (
          <button
            key={d.day}
            role="tab"
            aria-selected={d.day === activeDay}
            className={d.day === activeDay ? 'is-active' : ''}
            onClick={() => setActiveDay(d.day)}
          >
            {d.day}
          </button>
        ))}
      </div>

      <section className="novena-day">
        <h2>
          {day.day}. Tag — {day.title.de}
        </h2>
        <p className="novena-day__meditation">{day.meditation.de}</p>
        <h3 className="smallcaps">Tagesgebet</h3>
        <p>{day.prayer.de}</p>
      </section>

      <section className="novena-daily">
        <h3 className="smallcaps">{novena.dailyPrayer.title.de} (täglich)</h3>
        <BilingualText value={novena.dailyPrayer.text} />
      </section>
    </div>
  )
}
