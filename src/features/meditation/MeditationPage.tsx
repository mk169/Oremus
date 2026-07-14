import { PageHeader } from '../../components/PageHeader'
import './MeditationPage.css'

const STEPS = [
  { la: 'Lectio', de: 'Lesung', body: 'Lies einen kurzen Abschnitt der Heiligen Schrift langsam und aufmerksam. Lies ihn ruhig ein zweites Mal.' },
  { la: 'Meditatio', de: 'Betrachtung', body: 'Verweile bei einem Wort oder Satz, der dich anspricht. Frage: Was sagt Gott mir hier?' },
  { la: 'Oratio', de: 'Gebet', body: 'Antworte Gott aus dem Herzen – im Lob, im Dank, in der Bitte oder in der Reue.' },
  { la: 'Contemplatio', de: 'Beschauung', body: 'Ruhe schweigend in der Gegenwart Gottes. Lass sein Wort in dir wirken.' },
]

export function MeditationPage() {
  return (
    <div>
      <PageHeader
        title="Meditatives Gebet"
        latin="Lectio divina"
        subtitle="Eine einfache Anleitung zum betrachtenden Gebet in vier Schritten."
      />

      <p className="meditation-intro">
        Suche einen stillen Ort. Werde ruhig, atme einige Male tief durch und bitte den
        Heiligen Geist um sein Licht. Beginne mit dem Kreuzzeichen.
      </p>

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
