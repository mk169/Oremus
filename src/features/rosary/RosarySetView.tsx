import { Link, useParams } from 'react-router-dom'
import { PageHeader } from '../../components/PageHeader'
import { BilingualText } from '../../components/BilingualText'
import { rosarySets } from '../../data/rosary'
import './RosaryPage.css'

export function RosarySetView() {
  const { setId } = useParams()
  const set = rosarySets.find((s) => s.id === setId)

  if (!set) {
    return (
      <div>
        <PageHeader title="Rosenkranz" latin="Rosarium" subtitle="Dieser Satz wurde nicht gefunden." />
        <p><Link to="/rosenkranz">Zurück zur Übersicht</Link></p>
      </div>
    )
  }

  return (
    <div>
      <p className="rosary-breadcrumb">
        <Link to="/rosenkranz">Rosenkranz</Link> ·{' '}
        <BilingualText value={set.days} block={false} />
      </p>
      <PageHeader
        title={set.title.de ?? ''}
        latin={set.title.la}
        subtitle="Wähle ein Geheimnis, um es mit der Bibelstelle zu beten."
      />

      <ol className="rosary-set__list">
        {set.mysteries.map((m, i) => (
          <li key={m.id} className="rosary-mystery">
            <Link to={`/rosenkranz/${set.id}/${m.id}`} className="rosary-mystery__link">
              <span className="rosary-mystery__num">{i + 1}</span>
              <span className="rosary-mystery__body">
                <span className="rosary-mystery__name">
                  <BilingualText value={m.name} block={false} />
                </span>
                {m.ref && <span className="rosary-mystery__ref">{m.ref}</span>}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}
