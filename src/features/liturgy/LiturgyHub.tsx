import { Link } from 'react-router-dom'
import { PageHeader } from '../../components/PageHeader'
import { SectionRenderer } from '../../components/SectionRenderer'
import { importedMassList } from '../../data/registry'
import { aspergesMe, vidiAquam, aspergesOratio } from '../../data/mass/asperges'
import './LiturgyHub.css'

const COLOR_VAR: Record<string, string> = {
  green: 'var(--season-green)',
  violet: 'var(--season-violet)',
  red: 'var(--season-red)',
  white: 'var(--season-white)',
  rose: 'var(--season-rose)',
  black: 'var(--season-black)',
}

export function LiturgyHub() {
  return (
    <div>
      <PageHeader
        title="Liturgie"
        latin="Missale Romanum"
        subtitle="Römisches Messbuch 1962 – Ordinarium, Proprium des Tages und Kyriale in einem nahtlosen Ablauf."
      />

      <div className="form-choice">
        <Link to="/liturgie/messe/1962" className="form-choice__card">
          <span className="form-choice__la smallcaps">Forma extraordinaria</span>
          <span className="form-choice__title">Überlieferte Messe (1962)</span>
          <span className="form-choice__desc">Missale Romanum 1962 – Ordinarium &amp; Proprium</span>
        </Link>
        <Link to="/liturgie/messe/novusOrdo" className="form-choice__card">
          <span className="form-choice__la smallcaps">Forma ordinaria</span>
          <span className="form-choice__title">Novus Ordo</span>
          <span className="form-choice__desc">Mit Tageslesungen und Evangelium</span>
        </Link>
        <Link to="/kyriale" className="form-choice__card">
          <span className="form-choice__la smallcaps">Ordinarium Missæ</span>
          <span className="form-choice__title">Kyriale</span>
          <span className="form-choice__desc">Choral-Ordinarien I–XVIII, Credo, marianische Antiphonen</span>
        </Link>
      </div>

      <h2 className="liturgy-hub__asperges-title">Besprengung vor dem Hochamt</h2>
      <p className="liturgy-hub__imported-note">
        „Asperges me" außerhalb der Osterzeit, „Vidi aquam" in der Osterzeit. In den
        Sonntagsformularen unten steht der passende Gesang bereits am Anfang.
      </p>
      <SectionRenderer section={aspergesMe} />
      <SectionRenderer section={vidiAquam} />
      <SectionRenderer section={aspergesOratio} />

      <h2 className="liturgy-hub__imported-title">Messformulare des Kirchenjahres (1962)</h2>
      <p className="liturgy-hub__imported-note">
        {importedMassList.length} Tagesproprien aus Divinum Officium (Latein). Dazu erscheint
        automatisch das Ordinarium (Latein/Deutsch); das gewünschte Kyriale lässt sich im Formular
        auswählen. Die deutsche Übersetzung des Propriums folgt.
      </p>
      <ul className="mass-index">
        {importedMassList.map((m) => (
          <li key={m.id}>
            <Link to={`/liturgie/formular/${m.id}`} className="mass-index__link">
              <span className="mass-index__dot" style={{ background: COLOR_VAR[m.color] }} aria-hidden />
              <span className="mass-index__name">{m.titleDe}</span>
              <span className="mass-index__la">{m.titleLa}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
