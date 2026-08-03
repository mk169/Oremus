import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Tile } from '../../components/Tile'
import { BookIcon, ChaliceIcon, CandleIcon, CrossIcon } from '../../components/Icons'
import { getLiturgicalDayInfo } from '../../data/calendar'
import { resolveCelebration } from '../../data/liturgicalCalendar'
import { massIdForDate } from '../../data/registry'
import type { SeasonColor } from '../../data/calendar'
import './Dashboard.css'

const COLOR_VAR: Record<SeasonColor, string> = {
  green: 'var(--season-green)',
  violet: 'var(--season-violet)',
  red: 'var(--season-red)',
  white: 'var(--season-white)',
  rose: 'var(--season-rose)',
  black: 'var(--season-black)',
}

const HERO_SRC = import.meta.env.BASE_URL + 'uebersicht-hero.jpg'

export function Dashboard() {
  const day = getLiturgicalDayInfo()
  const cel1962 = resolveCelebration(day.date, '1962')
  const celNO = resolveCelebration(day.date, 'novusOrdo')
  const massIdNO = massIdForDate(day.date, 'novusOrdo')
  const massId1962 = massIdForDate(day.date, '1962')
  const [heroOk, setHeroOk] = useState(true)

  return (
    <div className="dashboard">
      <figure className="hero">
        {heroOk ? (
          <img
            className="hero__img"
            src={HERO_SRC}
            alt="Christus und die Apostel – Sepia-Stich"
            onError={() => setHeroOk(false)}
          />
        ) : (
          <div className="hero__placeholder" role="img" aria-label="Titelbild folgt">
            <CrossIcon size={40} />
            <span className="hero__placeholder-text smallcaps">Oremus</span>
          </div>
        )}
      </figure>

      <section className="daybar">
        <p className="daybar__date">
          {day.weekdayDe}, {day.formattedDe}
        </p>
        <ul className="daybar__forms">
          <li>
            <span className="daybar__dot" style={{ background: COLOR_VAR[celNO.color] }} aria-hidden />
            <span className="daybar__form-label smallcaps">Novus Ordo</span>
            {massIdNO ? (
              <Link to={`/liturgie/formular/${massIdNO}`} className="daybar__cel daybar__cel--link">
                {celNO.title.de}
              </Link>
            ) : (
              <span className="daybar__cel">{celNO.title.de}</span>
            )}
            {celNO.rank && <span className="daybar__rank">{celNO.rank}</span>}
          </li>
          <li>
            <span className="daybar__dot" style={{ background: COLOR_VAR[cel1962.color] }} aria-hidden />
            <span className="daybar__form-label smallcaps">1962</span>
            {massId1962 ? (
              <Link to={`/liturgie/formular/${massId1962}`} className="daybar__cel daybar__cel--link">
                {cel1962.title.de}
              </Link>
            ) : (
              <span className="daybar__cel">{cel1962.title.de}</span>
            )}
            {cel1962.rank && <span className="daybar__rank">{cel1962.rank}</span>}
          </li>
        </ul>
        <p className="daybar__season">
          <span className="smallcaps">{celNO.season}</span> · {day.seasonLa}
        </p>
      </section>

      <p className="dashboard__intro">
        „Oremus" – lasset uns beten. Wähle einen Bereich für Gebet, Liturgie und Stundengebet.
      </p>

      <div className="dashboard__grid">
        <Tile to="/gebete" title="Gebete" latin="Orationes" description="Gebete zur Messe, Rosenkranz und meditatives Gebet" icon={<CrossIcon size={26} />} />
        <Tile to="/liturgie" title="Liturgie" latin="Missale Romanum" description="Römisches Messbuch 1962 – Ordinarium, Proprium, Kyriale" icon={<ChaliceIcon size={26} />} />
        <Tile to="/brevier" title="Brevier" latin="Liturgia Horarum" description="Stundengebet – 1962 und neu, Latein/Deutsch" icon={<BookIcon size={26} />} />
        <Tile to="/novene" title="Novenen" latin="Novenæ" description="Neuntägige Andachten – Herz Jesu, Heiliger Geist, Maria, hl. Josef, Weihnachten" icon={<CandleIcon size={26} />} />
        <Tile to="/kalender" title="Kirchenjahr" latin="Calendarium" description="Liturgischer Kalender – heute und die nächsten Tage" icon={<BookIcon size={26} />} />
      </div>
    </div>
  )
}
