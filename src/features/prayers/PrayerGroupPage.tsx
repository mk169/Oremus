import { Link, useParams } from 'react-router-dom'
import { PageHeader } from '../../components/PageHeader'
import { SectionRenderer } from '../../components/SectionRenderer'
import { SettingsPanel } from '../../components/SettingsPanel'
import {
  praeparatioPrayers,
  communionPrayers,
  gratiarumActioPrayers,
  allgemeineGebete,
} from '../../data/prayers/liturgyPrayers'
import type { Prayer } from '../../data/types'
import './PrayersHub.css'

interface Group {
  title: string
  latin: string
  subtitle?: string
  prayers: Prayer[]
  empty?: string
}

const GROUPS: Record<string, Group> = {
  vorbereitung: {
    title: 'Vorbereitung vor der Messe',
    latin: 'Praeparatio ad Missam',
    subtitle: 'Gebete zur Vorbereitung auf das heilige Messopfer.',
    prayers: praeparatioPrayers,
  },
  kommunion: {
    title: 'Kommuniongebet',
    latin: 'Ad Communionem',
    subtitle: 'Gebete zum Empfang der heiligen Kommunion.',
    prayers: communionPrayers,
  },
  'nach-der-messe': {
    title: 'Gebete nach der Messe',
    latin: 'Gratiarum actio',
    subtitle: 'Danksagung nach dem heiligen Opfer.',
    prayers: gratiarumActioPrayers,
  },
  allgemein: {
    title: 'Allgemeine Gebete',
    latin: 'Orationes communes',
    prayers: allgemeineGebete,
    empty: 'Diese Sammlung wird noch ergänzt.',
  },
}

export function PrayerGroupPage() {
  const { groupId } = useParams()
  const group = groupId ? GROUPS[groupId] : undefined

  if (!group) {
    return (
      <div>
        <PageHeader title="Gebete" latin="Orationes" subtitle="Diese Gruppe wurde nicht gefunden." />
        <p><Link to="/gebete">Zurück zu den Gebeten</Link></p>
      </div>
    )
  }

  return (
    <div>
      <p className="prayers-breadcrumb">
        <Link to="/gebete">Gebete</Link>
      </p>
      <PageHeader title={group.title} latin={group.latin} subtitle={group.subtitle} />

      {group.prayers.length > 0 ? (
        <>
          <SettingsPanel />
          {group.prayers.map((p) => (
            <SectionRenderer
              key={p.id}
              section={{ id: p.id, kind: 'ordinarium', title: p.title, text: p.text, rubric: p.rubric }}
            />
          ))}
        </>
      ) : (
        <p className="prayers-group__empty">{group.empty}</p>
      )}
    </div>
  )
}
