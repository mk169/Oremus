import { useSettings } from '../context/SettingsContext'
import type { BilingualText as BilingualTextType, LanguageMode } from '../data/types'
import './BilingualText.css'

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

  return (
    <Wrapper className={['bilingual', block ? 'bilingual--block' : '', className].filter(Boolean).join(' ')}>
      {(showLa || fallbackLa) && <span className="bilingual__la">{value.la}</span>}
      {(showDe || fallbackDe) && <span className="bilingual__de">{value.de}</span>}
    </Wrapper>
  )
}
