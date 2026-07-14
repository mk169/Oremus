import { Link } from 'react-router-dom'
import { PageHeader } from '../../components/PageHeader'
import { SectionRenderer } from '../../components/SectionRenderer'
import {
  praeparatioPrayers,
  gratiarumActioPrayers,
} from '../../data/prayers/liturgyPrayers'
import { importedMassList } from '../../data/registry'
import { aspergesMe, vidiAquam, aspergesOratio } from '../../data/mass/asperges'
import type { Prayer } from '../../data/types'
import './LiturgyHub.css'

const COLOR_VAR: Record<string, string> = {
  green: 'var(--season-green)',
  violet: 'var(--season-violet)',
  red: 'var(--season-red)',
  white: 'var(--season-white)',
  rose: 'var(--season-rose)',
  black: 'var(--season-black)',
}

function PrayerList({ prayers }: { prayers: Prayer[] }) {
  return (
    <>
      {prayers.map((p) => (
        <SectionRenderer
          key={p.id}
          section={{ id: p.id, kind: 'ordinarium', title: p.title, text: p.text, rubric: p.rubric }}
        />
      ))}
    </>
  )
}

export function LiturgyHub() {
  return (
    <div>
      <PageHeader
        title="Liturgie"
        latin="Sancta Missa"
        subtitle="Heilige Messe – wähle die Form. Ordinarium und Proprium des Tages, Latein/Deutsch."
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
        automatisch das Ordinarium (Latein/Deutsch). Die deutsche Übersetzung des Proopriums folgt.
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

      <h2 className="liturgy-hub__prayers-title">Gebete für die Liturgie</h2>
      <p className="liturgy-hub__prayers-note">
        Klassische Vorbereitung und Danksagung aus dem Missale. Diese Sammlung wird noch erweitert.
      </p>

      <h3 className="liturgy-hub__group">Vor der heiligen Messe · Praeparatio ad Missam</h3>
      <PrayerList prayers={praeparatioPrayers} />

      <h3 className="liturgy-hub__group">Nach der heiligen Messe · Gratiarum actio</h3>
      <PrayerList prayers={gratiarumActioPrayers} />
    </div>
  )
}
