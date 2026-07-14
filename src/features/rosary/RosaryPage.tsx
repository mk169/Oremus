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
        subtitle="Die Grundgebete und die vier Geheimnis-Sätze."
      />

      <section className="rosary-prayers">
        <h2>Grundgebete</h2>
        {rosaryPrayers.map((p) => (
          <div key={p.id} className="rosary-prayer">
            <h3 className="smallcaps">{p.title.de}</h3>
            <BilingualText value={p.text} />
          </div>
        ))}
      </section>

      <section className="rosary-sets">
        <h2>Die Geheimnisse</h2>
        {rosarySets.map((set) => (
          <div key={set.id} className="rosary-set">
            <h3 className="rosary-set__title">
              {set.title.de}
              <span className="rosary-set__days"> · {set.days.de}</span>
            </h3>
            <ol className="rosary-set__list">
              {set.mysteries.map((m) => (
                <li key={m.id}>
                  <span className="rosary-set__mystery">{m.title.de}</span>
                  <span className="rosary-set__fruit">{m.fruit.de}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </section>
    </div>
  )
}
