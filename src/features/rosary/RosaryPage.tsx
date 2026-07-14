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
        <p className="rosary-sets__hint">
          Der lateinische Einschub wird beim Ave Maria nach „…fructus ventris tui, Iesus" gebetet.
        </p>
        {rosarySets.map((set) => (
          <div key={set.id} className="rosary-set">
            <h3 className="rosary-set__title">
              <BilingualText value={set.title} block={false} />
              <span className="rosary-set__days">
                {' · '}
                <BilingualText value={set.days} block={false} />
              </span>
            </h3>
            <ol className="rosary-set__list">
              {set.mysteries.map((m, i) => (
                <li key={m.id} className="rosary-mystery">
                  <span className="rosary-mystery__num">{i + 1}</span>
                  <div className="rosary-mystery__body">
                    <span className="rosary-mystery__name">
                      <BilingualText value={m.name} block={false} />
                    </span>
                    <span className="rosary-mystery__clause">
                      <BilingualText value={m.clause} />
                    </span>
                    <span className="rosary-mystery__verse">
                      <BilingualText value={m.passage} />
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </section>
    </div>
  )
}
