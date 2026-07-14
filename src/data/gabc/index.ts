// GABC-Overrides aus GregoBase. Die Datei gregobase.json wird vom Skript
// `npm run gabc:fetch` befüllt (sobald der Netzzugang zu GregoBase freigegeben
// ist – siehe docs/gregobase.md). Ist für eine Abschnitts-ID eine echte
// GregoBase-Melodie vorhanden, hat sie Vorrang vor dem eingebetteten Incipit.
import overrides from './gregobase.json'

const gabcOverrides = overrides as Record<string, string>

/** Liefert die GABC-Notation für einen Abschnitt: GregoBase-Override vor Fallback. */
export function gabcFor(sectionId: string, fallback?: string): string | undefined {
  return gabcOverrides[sectionId] ?? fallback
}
