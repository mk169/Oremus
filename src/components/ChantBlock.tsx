import type { ChantInfo } from '../data/types'
import { NeumeIcon } from './Icons'
import { NeumeScore } from './NeumeScore'
import './ChantBlock.css'

interface Props {
  chant: ChantInfo
}

/**
 * Zeigt den Gesang eines Abschnitts: Kirchentonart und – falls GABC vorhanden –
 * echte gregorianische Quadratnotation (Neumen) via {@link NeumeScore}.
 * Ohne GABC bleibt ein dezenter Hinweis stehen.
 */
export function ChantBlock({ chant }: Props) {
  return (
    <div className="chant-block" role="note">
      <div className="chant-block__head">
        <NeumeIcon size={20} />
        <span className="smallcaps">Gesang{chant.mode ? ` · Ton ${chant.mode}` : ''}</span>
      </div>
      {chant.gabc ? (
        <NeumeScore gabc={chant.gabc} />
      ) : (
        <p className="chant-block__hint">
          Neumen folgen – die Notation wird hier später als gregorianischer Gesang dargestellt.
        </p>
      )}
    </div>
  )
}
