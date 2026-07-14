import { Link, NavLink, Outlet, ScrollRestoration } from 'react-router-dom'
import { CrossIcon } from './Icons'
import './AppShell.css'

const NAV = [
  { to: '/', label: 'Dashboard', end: true },
  { to: '/brevier', label: 'Brevier' },
  { to: '/liturgie', label: 'Liturgie' },
  { to: '/rosenkranz', label: 'Rosenkranz' },
  { to: '/novene', label: 'Novene' },
  { to: '/meditation', label: 'Meditation' },
  { to: '/kalender', label: 'Kirchenjahr' },
]

/** Rahmen der App: Kopf mit Titel, Navigation und Inhaltsbereich. */
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

      <nav className="app-shell__nav" aria-label="Hauptnavigation">
        <ul>
          {NAV.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.end}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

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
