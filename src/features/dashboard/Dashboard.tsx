import { Tile } from '../../components/Tile'
import { BookIcon, ChaliceIcon, RosaryIcon, CandleIcon, CrossIcon } from '../../components/Icons'
import { getLiturgicalDayInfo } from '../../data/calendar'
import { resolveCelebration } from '../../data/liturgicalCalendar'
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

export function Dashboard() {
  const day = getLiturgicalDayInfo()
  const cel1962 = resolveCelebration(day.date, '1962')
  const celNO = resolveCelebration(day.date, 'novusOrdo')

  return (
    <div className="dashboard">
      <section className="daybar">
        <p className="daybar__date">
          {day.weekdayDe}, {day.formattedDe}
        </p>
        <ul className="daybar__forms">
          <li>
            <span className="daybar__dot" style={{ background: COLOR_VAR[celNO.color] }} aria-hidden />
            <span className="daybar__form-label smallcaps">Novus Ordo</span>
            <span className="daybar__cel">{celNO.title.de}</span>
            {celNO.rank && <span className="daybar__rank">{celNO.rank}</span>}
          </li>
          <li>
            <span className="daybar__dot" style={{ background: COLOR_VAR[cel1962.color] }} aria-hidden />
            <span className="daybar__form-label smallcaps">1962</span>
            <span className="daybar__cel">{cel1962.title.de}</span>
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
        <Tile to="/brevier" title="Brevier" latin="Liturgia Horarum" description="Stundengebet – 1962 und neu, Latein/Deutsch" icon={<BookIcon size={26} />} />
        <Tile to="/liturgie" title="Liturgie" latin="Sancta Missa" description="Messe 1962 und Novus Ordo, Proprium des Tages" icon={<ChaliceIcon size={26} />} />
        <Tile to="/kyriale" title="Kyriale" latin="Ordinarium Missæ" description="Choral-Ordinarien, Credo, marianische Antiphonen" icon={<ChaliceIcon size={26} />} />
        <Tile to="/rosenkranz" title="Rosenkranz" latin="Rosarium" description="Alle vier Geheimnis-Sätze" icon={<RosaryIcon size={26} />} />
        <Tile to="/novene" title="Novene" latin="Novena" description="Neuntägige Andacht" icon={<CandleIcon size={26} />} />
        <Tile to="/meditation" title="Meditatives Gebet" latin="Lectio divina" description="Anleitung zum betrachtenden Gebet" icon={<CrossIcon size={26} />} />
        <Tile to="/kalender" title="Kirchenjahr" latin="Calendarium" description="Liturgischer Kalender – heute und die nächsten Tage" icon={<BookIcon size={26} />} />
      </div>
    </div>
  )
}
