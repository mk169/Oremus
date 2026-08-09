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
    let frame = 0
    let ctxt: any = null
    let score: any = null
    // Zuletzt gerenderte (gerundete) Breite – verhindert wiederholtes
    // Neu-Layouten bei winzigen Änderungen und die Scrollbalken-Oszillation
    // (Scrollbar erscheint → Breite schrumpft → Re-Layout → Scrollbar weg → …).
    let lastWidth = 0

    const host = hostRef.current
    if (!host) return

    const draw = () => {
      // exsurge erzeugt ein <svg> nur mit width/height-Attributen ohne viewBox;
      // damit der Inhalt (nicht nur der Viewport) responsiv mitskaliert und auf
      // schmalen Screens nicht abgeschnitten wird, ergänzen wir eine viewBox und
      // lassen die Breite über CSS steuern.
      host.innerHTML = score.createDrawable(ctxt)
      const svg = host.querySelector('svg')
      if (svg) {
        const w = score.bounds.width
        const h = score.bounds.height
        if (w > 0 && h > 0) svg.setAttribute('viewBox', `0 0 ${w} ${h}`)
        svg.setAttribute('preserveAspectRatio', 'xMinYMin meet')
        svg.setAttribute('width', '100%')
        svg.removeAttribute('height')
      }
    }

    const render = (width: number) => {
      if (cancelled || !ctxt || !score || width <= 0) return
      const rounded = Math.round(width)
      if (rounded === lastWidth) return
      lastWidth = rounded
      score.layoutChantLines(ctxt, rounded, () => {
        if (cancelled) return
        draw()
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
          // Resize-Ereignisse in einen animation frame bündeln, damit pro
          // Layout-Durchgang nur einmal neu gesetzt wird.
          observer = new ResizeObserver((entries) => {
            const w = entries[0]?.contentRect.width ?? host.clientWidth
            if (frame) cancelAnimationFrame(frame)
            frame = requestAnimationFrame(() => render(w))
          })
          observer.observe(host)
        })
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })

    return () => {
      cancelled = true
      if (frame) cancelAnimationFrame(frame)
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
