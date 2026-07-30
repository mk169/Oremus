import { Tile } from '../../components/Tile'
import { PageHeader } from '../../components/PageHeader'
import { CandleIcon } from '../../components/Icons'
import { novenas } from '../../data/novenas'
import './NovenaPage.css'

export function NovenaHub() {
  return (
    <div>
      <PageHeader
        title="Novenen"
        latin="Novenæ"
        subtitle="Neuntägige Andachten zur Vorbereitung auf ein Fest oder in einem besonderen Anliegen. Jeweils neun Tage mit Betrachtung, Tagesgebet und einem täglichen Gebet."
      />

      <div className="novena-tiles">
        {novenas.map((n) => (
          <Tile
            key={n.id}
            to={`/novene/${n.id}`}
            title={n.title.de ?? n.title.la ?? 'Novene'}
            latin={n.title.la}
            description={n.subtitle?.de}
            icon={<CandleIcon size={26} />}
          />
        ))}
      </div>
    </div>
  )
}
