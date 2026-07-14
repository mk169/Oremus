import type { ChantInfo } from '../data/types'
import { NeumeIcon } from './Icons'
import './ChantBlock.css'

interface Props {
  chant: ChantInfo
}

/**
 * Platzhalter für die spätere Neumen-Darstellung (GABC via exsurge.js).
 * Zeigt bereits die Kirchentonart und – falls vorhanden – die GABC-Quelle an,
 * damit der Gesang-Modus jetzt schon sichtbar vorbereitet ist.
 */
export function ChantBlock({ chant }: Props) {
  return (
    <div className="chant-block" role="note">
      <div className="chant-block__head">
        <NeumeIcon size={20} />
        <span className="smallcaps">Gesang{chant.mode ? ` · Ton ${chant.mode}` : ''}</span>
      </div>
      {chant.gabc ? (
        <pre className="chant-block__gabc" aria-label="GABC-Quelle für Neumen">
          {chant.gabc}
        </pre>
      ) : (
        <p className="chant-block__hint">
          Neumen folgen – die Notation wird hier später als gregorianischer Gesang dargestellt.
        </p>
      )}
    </div>
  )
}
