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
  const { isSung } = useSettings()
  const chantable = section.chant?.chantable ?? false
  const sung = chantable && isSung(section.id)
  // GregoBase-Melodie bevorzugen, sonst das eingebettete Incipit.
  const chant = section.chant
    ? { ...section.chant, gabc: gabcFor(section.id, section.chant.gabc) }
    : undefined

  return (
    <section className="lit-section" id={section.id}>
      <h3 className="lit-section__title smallcaps">
        <BilingualText value={section.title} block={false} />
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
