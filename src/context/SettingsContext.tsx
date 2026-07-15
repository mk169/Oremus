import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { LanguageMode } from '../data/types'

interface SettingsState {
  /** Sprachanzeige: Latein, Deutsch oder beide. */
  language: LanguageMode
  /** Pro gesangs-fähigem Abschnitt: wird er gesungen? Key = section.id. */
  sung: Record<string, boolean>
  /** Gewähltes Ordinarium (Kyriale-Messe) für die Messen, z.B. „mass-XI". */
  ordinaryId: string
  /** Gewählte Credo-Weise, z.B. „credo-III". */
  credoId: string
}

interface SettingsContextValue extends SettingsState {
  setLanguage: (mode: LanguageMode) => void
  toggleSung: (sectionId: string, value?: boolean) => void
  isSung: (sectionId: string, fallback?: boolean) => boolean
  setOrdinary: (id: string) => void
  setCredo: (id: string) => void
}

const STORAGE_KEY = 'oremus.settings.v1'

const defaultState: SettingsState = {
  language: 'both',
  sung: {},
  ordinaryId: 'mass-XI', // Orbis factor – für die Sonntage im Jahreskreis
  credoId: 'credo-III',
}

function loadState(): SettingsState {
  if (typeof localStorage === 'undefined') return defaultState
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultState
    const parsed = JSON.parse(raw) as Partial<SettingsState>
    return {
      language: parsed.language ?? defaultState.language,
      sung: parsed.sung ?? {},
      ordinaryId: parsed.ordinaryId ?? defaultState.ordinaryId,
      credoId: parsed.credoId ?? defaultState.credoId,
    }
  } catch {
    return defaultState
  }
}

const SettingsContext = createContext<SettingsContextValue | null>(null)

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<SettingsState>(loadState)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      /* Speicher nicht verfügbar – ignorieren */
    }
  }, [state])

  const setLanguage = useCallback((language: LanguageMode) => {
    setState((s) => ({ ...s, language }))
  }, [])

  const toggleSung = useCallback((sectionId: string, value?: boolean) => {
    setState((s) => {
      const next = value ?? !s.sung[sectionId]
      return { ...s, sung: { ...s.sung, [sectionId]: next } }
    })
  }, [])

  const isSung = useCallback(
    (sectionId: string, fallback = true) =>
      sectionId in state.sung ? state.sung[sectionId] : fallback,
    [state.sung],
  )

  const setOrdinary = useCallback((ordinaryId: string) => {
    setState((s) => ({ ...s, ordinaryId }))
  }, [])

  const setCredo = useCallback((credoId: string) => {
    setState((s) => ({ ...s, credoId }))
  }, [])

  const value = useMemo<SettingsContextValue>(
    () => ({ ...state, setLanguage, toggleSung, isSung, setOrdinary, setCredo }),
    [state, setLanguage, toggleSung, isSung, setOrdinary, setCredo],
  )

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
}

export function useSettings(): SettingsContextValue {
  const ctx = useContext(SettingsContext)
  if (!ctx) throw new Error('useSettings muss innerhalb von SettingsProvider verwendet werden')
  return ctx
}
