import { useState } from 'react'
import { PageHeader } from '../../components/PageHeader'
import { SettingsPanel } from '../../components/SettingsPanel'
import { BilingualText } from '../../components/BilingualText'
import { ChantBlock } from '../../components/ChantBlock'
import { kyrialeMasses, kyrialeCredos, kyrialeMarian, type KyrialeChant } from '../../data/kyriale'
import './KyrialePage.css'

type Group = 'ordinary' | 'credo' | 'marian'

function ChantEntry({ chant }: { chant: KyrialeChant }) {
  const pending = !chant.chant.gabc
  return (
    <section className="ky-entry" id={chant.id}>
      <h3 className="ky-entry__title">
        <BilingualText value={chant.title} block={false} />
        {chant.sourceName && <span className="ky-entry__src">{chant.sourceName}</span>}
      </h3>
      {chant.text && (
        <div className="ky-entry__text">
          <BilingualText value={chant.text} />
        </div>
      )}
      {pending ? (
        <p className="ky-entry__pending">
          Melodie noch nicht im gemeinfreien Datenbestand (GregoBase-ID&nbsp;{chant.gregobaseId} hinterlegt).
        </p>
      ) : (
        <ChantBlock chant={chant.chant} />
      )}
    </section>
  )
}

export function KyrialePage() {
  const [group, setGroup] = useState<Group>('ordinary')
  const [massId, setMassId] = useState(kyrialeMasses[7]?.id ?? kyrialeMasses[0].id) // Vorgabe: VIII de Angelis
  const mass = kyrialeMasses.find((m) => m.id === massId) ?? kyrialeMasses[0]

  return (
    <div>
      <PageHeader
        title="Kyriale"
        latin="Ordinarium Missæ"
        subtitle="Die Choral-Ordinarien, Credo-Weisen und marianischen Antiphonen."
      />

      <div className="ky-tabs" role="tablist" aria-label="Gruppe">
        <button role="tab" aria-selected={group === 'ordinary'} className={group === 'ordinary' ? 'is-active' : ''} onClick={() => setGroup('ordinary')}>
          Ordinarien
        </button>
        <button role="tab" aria-selected={group === 'credo'} className={group === 'credo' ? 'is-active' : ''} onClick={() => setGroup('credo')}>
          Credo
        </button>
        <button role="tab" aria-selected={group === 'marian'} className={group === 'marian' ? 'is-active' : ''} onClick={() => setGroup('marian')}>
          Marianische Antiphonen
        </button>
      </div>

      <SettingsPanel />

      {group === 'ordinary' && (
        <>
          <p className="ky-hint">
            {kyrialeMasses.length} Choral-Messen (Missa I–XVIII) mit echten Neumen aus dem
            gemeinfreien GregoBase-Korpus. Einzelne, erst nach 2019 ergänzte Melodien fehlen
            noch (die GregoBase-ID ist hinterlegt).
          </p>
          <div className="ky-mass-select" role="tablist" aria-label="Messe">
            {kyrialeMasses.map((m) => (
              <button
                key={m.id}
                className={m.id === massId ? 'is-active' : ''}
                aria-selected={m.id === massId}
                onClick={() => setMassId(m.id)}
                title={m.name || 'Ferialton'}
              >
                {m.number}
              </button>
            ))}
          </div>
          <div className="ky-mass-head">
            <span className="ky-mass-head__num">Missa {mass.number}</span>
            <span className="ky-mass-head__name">{mass.name || 'Ferialton'}</span>
            <span className="ky-mass-head__season">{mass.season}</span>
          </div>
          {mass.parts.map((p) => (
            <ChantEntry key={p.id} chant={p} />
          ))}
        </>
      )}

      {group === 'credo' && (
        <>
          <p className="ky-hint">Die sieben Credo-Weisen des Kyriale.</p>
          {kyrialeCredos.map((c) => (
            <ChantEntry key={c.id} chant={c} />
          ))}
        </>
      )}

      {group === 'marian' && (
        <>
          <p className="ky-hint">
            Die vier marianischen Schluss-Antiphonen (Salve Regina, Alma Redemptoris Mater,
            Ave Regina cælorum, Regina cæli) in feierlichem, monastischem und einfachem Ton.
          </p>
          {kyrialeMarian.map((a) => (
            <ChantEntry key={a.id} chant={a} />
          ))}
        </>
      )}
    </div>
  )
}
