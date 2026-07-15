import { Link, useParams } from 'react-router-dom'
import { PageHeader } from '../../components/PageHeader'
import { BilingualText } from '../../components/BilingualText'
import { rosarySets } from '../../data/rosary'
import './RosaryPage.css'

export function RosaryMysteryView() {
  const { setId, mysteryId } = useParams()
  const set = rosarySets.find((s) => s.id === setId)
  const index = set ? set.mysteries.findIndex((m) => m.id === mysteryId) : -1
  const mystery = set && index >= 0 ? set.mysteries[index] : undefined

  if (!set || !mystery) {
    return (
      <div>
        <PageHeader title="Rosenkranz" latin="Rosarium" subtitle="Dieses Geheimnis wurde nicht gefunden." />
        <p><Link to="/rosenkranz">Zurück zur Übersicht</Link></p>
      </div>
    )
  }

  const prev = index > 0 ? set.mysteries[index - 1] : undefined
  const next = index < set.mysteries.length - 1 ? set.mysteries[index + 1] : undefined

  return (
    <div>
      <p className="rosary-breadcrumb">
        <Link to="/rosenkranz">Rosenkranz</Link> ·{' '}
        <Link to={`/rosenkranz/${set.id}`}>
          <BilingualText value={set.title} block={false} />
        </Link>
      </p>

      <PageHeader
        title={`${index + 1}. ${mystery.name.de ?? ''}`}
        latin={mystery.name.la}
      />

      <section className="rosary-mystery-view">
        <h2 className="rosary-mystery-view__label smallcaps">Einschub ins Ave Maria</h2>
        <p className="rosary-mystery-view__clause">
          <BilingualText value={mystery.clause} />
        </p>

        <h2 className="rosary-mystery-view__label smallcaps">
          Bibelstelle{mystery.ref ? ` · ${mystery.ref}` : ''}
        </h2>
        <div className="rosary-mystery-view__passage">
          <BilingualText value={mystery.passage} />
        </div>
      </section>

      <nav className="rosary-nav" aria-label="Geheimnisse blättern">
        {prev ? (
          <Link className="rosary-nav__link" to={`/rosenkranz/${set.id}/${prev.id}`}>
            ‹ {prev.name.de}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link className="rosary-nav__link rosary-nav__link--next" to={`/rosenkranz/${set.id}/${next.id}`}>
            {next.name.de} ›
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  )
}
