import { useEffect, useRef, useState } from 'react'
import { cleanGabc } from '../data/gabc/clean'
import './NeumeScore.css'

interface Props {
  /** Gesang im GABC/Gregorio-Format. */
  gabc: string
}

// Modul einmalig laden und zwischenspeichern.
let exsurgePromise: Promise<any> | null = null
function loadExsurge(): Promise<any> {
  if (!exsurgePromise) {
    exsurgePromise = import('exsurge').then((m) => m.default ?? m)
  }
  return exsurgePromise
}

/**
 * Rendert echte gregorianische Quadratnotation (Neumen) aus einem GABC-String
 * mit exsurge zu SVG. Läuft vollständig im Browser (offline-tauglich) und passt
 * die Breite responsiv an den Container an.
 */
export function NeumeScore({ gabc }: Props) {
  const hostRef = useRef<HTMLDivElement>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let cancelled = false
    let observer: ResizeObserver | null = null
    let ctxt: any = null
    let score: any = null

    const host = hostRef.current
    if (!host) return

    const render = (width: number) => {
      if (cancelled || !ctxt || !score || width <= 0) return
      score.layoutChantLines(ctxt, width, () => {
        if (cancelled) return
        host.innerHTML = score.createDrawable(ctxt)
      })
    }

    loadExsurge()
      .then((exsurge) => {
        if (cancelled) return
        ctxt = new exsurge.ChantContext()
        // Textschriften an das edle Serifen-Design angleichen.
        ctxt.lyricTextFont = "'EB Garamond', Georgia, serif"
        ctxt.dropCapTextFont = "'Cormorant Garamond', Georgia, serif"
        score = exsurge.Gabc.loadChantScore(ctxt, cleanGabc(gabc), true)
        score.performLayout(ctxt, () => {
          if (cancelled) return
          render(host.clientWidth || 500)
          observer = new ResizeObserver((entries) => {
            const w = entries[0]?.contentRect.width ?? host.clientWidth
            render(w)
          })
          observer.observe(host)
        })
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })

    return () => {
      cancelled = true
      observer?.disconnect()
      host.innerHTML = ''
    }
  }, [gabc])

  if (failed) {
    return (
      <p className="neume-score__fallback">
        Neumen konnten nicht dargestellt werden. GABC-Quelle: <code>{gabc}</code>
      </p>
    )
  }

  return <div className="neume-score" ref={hostRef} aria-label="Gregorianische Notation" />
}
