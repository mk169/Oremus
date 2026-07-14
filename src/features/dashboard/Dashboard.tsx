import { Tile } from '../../components/Tile'
import { BookIcon, ChaliceIcon, RosaryIcon, CandleIcon, CrossIcon } from '../../components/Icons'
import { getLiturgicalDayInfo } from '../../data/calendar'
import './Dashboard.css'

const COLOR_VAR: Record<string, string> = {
  green: 'var(--season-green)',
  violet: 'var(--season-violet)',
  red: 'var(--season-red)',
  white: 'var(--season-white)',
  rose: 'var(--season-rose)',
  black: 'var(--season-black)',
}

export function Dashboard() {
  const day = getLiturgicalDayInfo()

  return (
    <div className="dashboard">
      <section className="daybar" style={{ borderColor: COLOR_VAR[day.color] }}>
        <span className="daybar__dot" style={{ background: COLOR_VAR[day.color] }} aria-hidden />
        <div>
          <p className="daybar__date">
            {day.weekdayDe}, {day.formattedDe}
          </p>
          <p className="daybar__season">
            <span className="smallcaps">{day.seasonDe}</span> · {day.seasonLa}
          </p>
        </div>
      </section>

      <p className="dashboard__intro">
        „Oremus" – lasset uns beten. Wähle einen Bereich für Gebet, Liturgie und Stundengebet.
      </p>

      <div className="dashboard__grid">
        <Tile to="/brevier" title="Brevier" latin="Liturgia Horarum" description="Stundengebet – 1962 und neu, Latein/Deutsch" icon={<BookIcon size={26} />} />
        <Tile to="/liturgie" title="Liturgie" latin="Sancta Missa" description="Messe 1962 und Novus Ordo, Proprium des Tages" icon={<ChaliceIcon size={26} />} />
        <Tile to="/rosenkranz" title="Rosenkranz" latin="Rosarium" description="Alle vier Geheimnis-Sätze" icon={<RosaryIcon size={26} />} />
        <Tile to="/novene" title="Novene" latin="Novena" description="Neuntägige Andacht" icon={<CandleIcon size={26} />} />
        <Tile to="/meditation" title="Meditatives Gebet" latin="Lectio divina" description="Anleitung zum betrachtenden Gebet" icon={<CrossIcon size={26} />} />
      </div>
    </div>
  )
}
