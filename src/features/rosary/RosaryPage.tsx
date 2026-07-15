import { Link } from 'react-router-dom'
import { PageHeader } from '../../components/PageHeader'
import { BilingualText } from '../../components/BilingualText'
import { rosaryPrayers, rosarySets } from '../../data/rosary'
import './RosaryPage.css'

export function RosaryPage() {
  return (
    <div>
      <PageHeader
        title="Rosenkranz"
        latin="Rosarium"
        subtitle="Die Grundgebete und die vier Geheimnis-Sätze. Wähle einen Satz, um die Geheimnisse einzeln zu beten."
      />

      <section className="rosary-sets">
        <h2>Die Geheimnisse</h2>
        <div className="rosary-set-grid">
          {rosarySets.map((set) => (
            <Link key={set.id} to={`/rosenkranz/${set.id}`} className="rosary-set-card">
              <span className="rosary-set-card__title">
                <BilingualText value={set.title} block={false} />
              </span>
              <span className="rosary-set-card__days">
                <BilingualText value={set.days} block={false} />
              </span>
              <span className="rosary-set-card__count">5 Geheimnisse ·</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="rosary-prayers">
        <h2>Grundgebete</h2>
        {rosaryPrayers.map((p) => (
          <div key={p.id} className="rosary-prayer">
            <h3 className="smallcaps">{p.title.de}</h3>
            <BilingualText value={p.text} />
          </div>
        ))}
      </section>
    </div>
  )
}
