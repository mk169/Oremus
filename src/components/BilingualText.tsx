import type { ReactNode } from 'react'
import { useSettings } from '../context/SettingsContext'
import type { BilingualText as BilingualTextType, LanguageMode } from '../data/types'
import './BilingualText.css'

// Liturgische Marken (Versikel ℣, Responsorium ℟, Segenskreuz ✝) wie im
// gedruckten Missale rot/hervorgehoben darstellen.
function withMarks(text: string): ReactNode[] {
  return text.split(/([℣℟✝])/).map((part, i) =>
    part === '℣' || part === '℟' || part === '✝' ? (
      <span key={i} className="lit-mark">
        {part}
      </span>
    ) : (
      part
    ),
  )
}

interface Props {
  value: BilingualTextType
  /** Überschreibt den globalen Sprachmodus (z.B. für Titel). */
  mode?: LanguageMode
  /** Als Blockabsätze statt Inline darstellen. */
  block?: boolean
  className?: string
}

/**
 * Rendert einen zweisprachigen Text gemäß Sprachmodus. Bei "beide" wird
 * Latein zuerst (kursiv/gehoben), darunter Deutsch gezeigt – so bleiben
 * die Texte nahtlos lesbar.
 */
export function BilingualText({ value, mode, block = true, className }: Props) {
  const settings = useSettings()
  const lang = mode ?? settings.language

  const hasLa = Boolean(value.la?.trim())
  const hasDe = Boolean(value.de?.trim())

  const showLa = lang !== 'de' && hasLa
  const showDe = lang !== 'la' && hasDe
  // Falls die gewünschte Sprache fehlt, auf die vorhandene ausweichen.
  const fallbackLa = lang === 'de' && !hasDe && hasLa
  const fallbackDe = lang === 'la' && !hasLa && hasDe

  const Wrapper = block ? 'div' : 'span'
  const renderLa = showLa || fallbackLa
  const renderDe = showDe || fallbackDe
  // Bei Inline-Darstellung beider Sprachen einen dezenten Trenner setzen,
  // damit Latein und Deutsch nicht zusammenlaufen.
  const inlineSep = !block && renderLa && renderDe

  return (
    <Wrapper className={['bilingual', block ? 'bilingual--block' : '', className].filter(Boolean).join(' ')}>
      {renderLa && <span className="bilingual__la">{withMarks(value.la!)}</span>}
      {inlineSep && <span className="bilingual__sep"> · </span>}
      {renderDe && <span className="bilingual__de">{withMarks(value.de!)}</span>}
    </Wrapper>
  )
}
