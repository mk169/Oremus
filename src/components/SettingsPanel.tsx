import { useState } from 'react'
import { useSettings } from '../context/SettingsContext'
import { kyrialeMasses, kyrialeCredos } from '../data/kyriale'
import { gabcFor } from '../data/gabc'
import type { LanguageMode, LiturgicalSection } from '../data/types'
import './SettingsPanel.css'

interface Props {
  /** Abschnitte, aus denen die gesangs-fähigen für die Auswahl gezogen werden. */
  sections?: LiturgicalSection[]
  /** Auswahl von Ordinarium (Kyriale-Messe) und Credo anbieten. */
  showOrdinary?: boolean
}

const LANG_OPTIONS: { value: LanguageMode; label: string }[] = [
  { value: 'la', label: 'Latein' },
  { value: 'de', label: 'Deutsch' },
  { value: 'both', label: 'Beide' },
]

/**
 * Einstellungen für eine Feier: Sprachanzeige und – je gesangs-fähigem
 * Abschnitt – ob dieser gesungen oder gesprochen wird. So entsteht ein
 * nahtloser, individuell zusammengestellter Ablauf.
 */
export function SettingsPanel({ sections = [], showOrdinary = false }: Props) {
  const { language, setLanguage, isSung, toggleSung, ordinaryId, setOrdinary, credoId, setCredo } =
    useSettings()
  const [open, setOpen] = useState(false)
  // Nur Abschnitte anbieten, die tatsächlich eine Melodie besitzen.
  const chantable = sections.filter((s) => s.chant?.chantable && gabcFor(s.id, s.chant.gabc))

  return (
    <div className={`settings-panel ${open ? 'is-open' : ''}`}>
      <button
        type="button"
        className="settings-panel__toggle"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="smallcaps">Darstellung &amp; Gesang</span>
        <span className="settings-panel__chevron" aria-hidden>
          {open ? '▲' : '▼'}
        </span>
      </button>

      {open && (
        <div className="settings-panel__body">
          <fieldset className="settings-panel__group">
            <legend>Sprache</legend>
            <div className="settings-panel__segment" role="group" aria-label="Sprache">
              {LANG_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  className={language === opt.value ? 'is-active' : ''}
                  aria-pressed={language === opt.value}
                  onClick={() => setLanguage(opt.value)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </fieldset>

          {showOrdinary && (
            <fieldset className="settings-panel__group">
              <legend>Ordinarium &amp; Credo</legend>
              <div className="settings-panel__selects">
                <label className="settings-panel__select">
                  <span>Ordinarium</span>
                  <select value={ordinaryId} onChange={(e) => setOrdinary(e.target.value)}>
                    {kyrialeMasses.map((m) => (
                      <option key={m.id} value={m.id}>
                        Missa {m.number}
                        {m.name ? ` · ${m.name}` : ' · Ferialton'}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="settings-panel__select">
                  <span>Credo</span>
                  <select value={credoId} onChange={(e) => setCredo(e.target.value)}>
                    {kyrialeCredos.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.sourceName ?? c.title.la}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </fieldset>
          )}

          {chantable.length > 0 && (
            <fieldset className="settings-panel__group">
              <legend>Welche Gesänge werden gesungen?</legend>
              <ul className="settings-panel__chants">
                {chantable.map((s) => (
                  <li key={s.id}>
                    <label>
                      <input
                        type="checkbox"
                        checked={isSung(s.id)}
                        onChange={(e) => toggleSung(s.id, e.target.checked)}
                      />
                      <span>{s.title.la ?? s.title.de}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </fieldset>
          )}
        </div>
      )}
    </div>
  )
}
