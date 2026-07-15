import { useState } from 'react'
import { PageHeader } from '../../components/PageHeader'
import { BilingualText } from '../../components/BilingualText'
import { meditationPassages } from '../../data/meditationPassages'
import './MeditationPage.css'

const STEPS = [
  { la: 'Lectio', de: 'Lesung', body: 'Lies die gewählte Stelle langsam und aufmerksam. Lies sie ruhig ein zweites Mal.' },
  { la: 'Meditatio', de: 'Betrachtung', body: 'Verweile bei einem Wort oder Satz, der dich anspricht. Frage: Was sagt Gott mir hier?' },
  { la: 'Oratio', de: 'Gebet', body: 'Antworte Gott aus dem Herzen – im Lob, im Dank, in der Bitte oder in der Reue.' },
  { la: 'Contemplatio', de: 'Beschauung', body: 'Ruhe schweigend in der Gegenwart Gottes. Lass sein Wort in dir wirken.' },
]

export function MeditationPage() {
  const [activeId, setActiveId] = useState(meditationPassages[0].id)
  const passage = meditationPassages.find((p) => p.id === activeId) ?? meditationPassages[0]

  return (
    <div>
      <PageHeader
        title="Meditatives Gebet"
        latin="Lectio divina"
        subtitle="Eine einfache Anleitung zum betrachtenden Gebet in vier Schritten."
      />

      <p className="meditation-intro">
        Suche einen stillen Ort. Werde ruhig, atme einige Male tief durch und bitte den
        Heiligen Geist um sein Licht. Beginne mit dem Kreuzzeichen und wähle eine Schriftstelle.
      </p>

      <section className="meditation-passages">
        <h2 className="meditation-passages__title">Schriftstelle wählen</h2>
        <div className="meditation-chooser" role="tablist" aria-label="Bibelstellen">
          {meditationPassages.map((p) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={p.id === activeId}
              className={`meditation-chip${p.id === activeId ? ' is-active' : ''}`}
              onClick={() => setActiveId(p.id)}
            >
              <span className="meditation-chip__title">{p.title.de}</span>
              <span className="meditation-chip__ref">{p.ref}</span>
            </button>
          ))}
        </div>

        <article className="meditation-passage">
          <h3 className="meditation-passage__head">
            <BilingualText value={passage.title} block={false} />
            <span className="meditation-passage__ref smallcaps">{passage.ref}</span>
          </h3>
          <BilingualText value={passage.text} />
        </article>
      </section>

      <ol className="meditation-steps">
        {STEPS.map((s, i) => (
          <li key={s.la} className="meditation-step">
            <span className="meditation-step__num">{i + 1}</span>
            <div>
              <h3 className="meditation-step__title">
                {s.la} <span className="meditation-step__de">· {s.de}</span>
              </h3>
              <p>{s.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="meditation-close">
        Schließe mit einem kurzen Dankgebet und dem Kreuzzeichen. Nimm ein Wort mit in den Tag.
      </p>
    </div>
  )
}
