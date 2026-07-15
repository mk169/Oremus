import { Tile } from '../../components/Tile'
import { PageHeader } from '../../components/PageHeader'
import { SectionRenderer } from '../../components/SectionRenderer'
import { SettingsPanel } from '../../components/SettingsPanel'
import { RosaryIcon, CrossIcon } from '../../components/Icons'
import {
  praeparatioPrayers,
  communionPrayers,
  gratiarumActioPrayers,
  allgemeineGebete,
} from '../../data/prayers/liturgyPrayers'
import type { Prayer } from '../../data/types'
import './PrayersHub.css'

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

function Group({ title, latin, prayers, empty }: { title: string; latin: string; prayers: Prayer[]; empty?: string }) {
  return (
    <section className="prayers-group">
      <h2 className="prayers-group__title">
        {title} <span className="prayers-group__la smallcaps">· {latin}</span>
      </h2>
      {prayers.length > 0 ? (
        <PrayerList prayers={prayers} />
      ) : (
        <p className="prayers-group__empty">{empty}</p>
      )}
    </section>
  )
}

export function PrayersHub() {
  return (
    <div>
      <PageHeader
        title="Gebete"
        latin="Orationes"
        subtitle="Gebete zur heiligen Messe, der Rosenkranz und eine Anleitung zum meditativen Gebet."
      />

      <div className="prayers-tiles">
        <Tile to="/rosenkranz" title="Rosenkranz" latin="Rosarium" description="Alle vier Geheimnis-Sätze – einzeln mit Bibelstelle" icon={<RosaryIcon size={26} />} />
        <Tile to="/meditation" title="Meditatives Gebet" latin="Lectio divina" description="Anleitung mit auswählbaren Bibelstellen" icon={<CrossIcon size={26} />} />
      </div>

      <SettingsPanel />

      <Group title="Vorbereitung vor der Messe" latin="Praeparatio ad Missam" prayers={praeparatioPrayers} />
      <Group title="Kommuniongebet" latin="Ad Communionem" prayers={communionPrayers} />
      <Group title="Gebete nach der Messe" latin="Gratiarum actio" prayers={gratiarumActioPrayers} />
      <Group
        title="Allgemeine Gebete"
        latin="Orationes communes"
        prayers={allgemeineGebete}
        empty="Diese Sammlung wird noch ergänzt."
      />
    </div>
  )
}
