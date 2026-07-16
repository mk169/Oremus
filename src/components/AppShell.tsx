import { Link, Outlet, ScrollRestoration } from 'react-router-dom'
import { CrossIcon } from './Icons'
import './AppShell.css'

/** Rahmen der App: Kopf mit Titel und Inhaltsbereich.
 *  Bewusst ohne obere Navigationsleiste – die Bereiche werden ausschließlich
 *  über die Kacheln der Übersicht angesteuert. Der Titel „Oremus" führt zurück. */
export function AppShell() {
  return (
    <div className="app-shell">
      <header className="app-shell__masthead">
        <Link to="/" className="app-shell__brand">
          <CrossIcon size={26} className="app-shell__brand-icon" />
          <span className="app-shell__brand-name">Oremus</span>
        </Link>
        <p className="app-shell__tagline smallcaps">Gebet · Liturgie · Stundenbuch</p>
      </header>

      <main className="app-shell__main container">
        <Outlet />
      </main>

      <footer className="app-shell__footer">
        <p>
          <span className="smallcaps">Oremus</span> — Beispielinhalte; liturgische Texte werden
          schrittweise ergänzt.
        </p>
      </footer>
      <ScrollRestoration />
    </div>
  )
}
