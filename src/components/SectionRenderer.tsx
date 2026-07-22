import type { LiturgicalSection } from '../data/types'
import { useSettings } from '../context/SettingsContext'
import { gabcFor } from '../data/gabc'
import { BilingualText } from './BilingualText'
import { ChantBlock } from './ChantBlock'
import './SectionRenderer.css'

interface Props {
  section: LiturgicalSection
}

/**
 * Rendert einen einzelnen liturgischen Abschnitt als Teil eines nahtlosen
 * Ablaufs: Titel, optionale Rubrik (rot), der zweisprachige Text und – falls
 * der Abschnitt gesungen wird – der Gesang-Block (Neumen-Platzhalter).
 */
export function SectionRenderer({ section }: Props) {
  const { isSung, language } = useSettings()
  // GregoBase-Melodie bevorzugen, sonst das eingebettete Incipit.
  const resolvedGabc = section.chant ? gabcFor(section.id, section.chant.gabc) : undefined
  // Als „gesungen" gilt ein Abschnitt nur, wenn auch wirklich eine Melodie
  // vorliegt – sonst erschiene ein irreführender „Neumen folgen"-Platzhalter.
  const chantable = (section.chant?.chantable ?? false) && Boolean(resolvedGabc)
  const sung = chantable && isSung(section.id)
  // Deutsch gewünscht, aber (noch) nicht übersetzt → dezenter Hinweis.
  const deMissing = language === 'de' && !section.text.de?.trim() && Boolean(section.text.la?.trim())
  const chant = section.chant ? { ...section.chant, gabc: resolvedGabc } : undefined
  // Die Wandlungsworte erhalten eigene, hervorgehobene Darstellung.
  const isConsecration = section.id === 'qui-pridie' || section.id === 'simili-modo'
  const className = [
    'lit-section',
    section.kind === 'proprium' ? 'lit-section--proprium' : 'lit-section--ordinarium',
    isConsecration ? 'lit-section--consecration' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={className} id={section.id} data-kind={section.kind}>
      <h3 className="lit-section__title smallcaps">
        <BilingualText value={section.title} block={false} />
        {section.kind === 'proprium' && (
          <span className="lit-section__kind">Proprium</span>
        )}
        {chantable && (
          <span className={`lit-section__badge ${sung ? 'is-sung' : 'is-spoken'}`}>
            {sung ? 'gesungen' : 'gesprochen'}
          </span>
        )}
      </h3>

      {section.rubric && (
        <p className="lit-section__rubric">
          <BilingualText value={section.rubric} block={false} />
        </p>
      )}

      <div className="lit-section__text">
        <BilingualText value={section.text} />
        {deMissing && (
          <p className="lit-section__de-missing">Deutsche Übersetzung folgt (Text auf Latein).</p>
        )}
      </div>

      {section.reference && (
        <p className="lit-section__ref">
          <BilingualText value={section.reference} block={false} />
        </p>
      )}

      {sung && chant && <ChantBlock chant={chant} />}
    </section>
  )
}
