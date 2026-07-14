# Oremus

Katholische App für **Gebet, Liturgie und Stundenbuch** – im klassischen, edlen,
klerikalen Stil. Vom Dashboard aus erreichbar: **Brevier, Liturgie (Messe),
Rosenkranz, Novene** und **meditatives Gebet**.

Die Liturgie ist in beiden Formen angelegt: **überliefert (1962)** und **Novus Ordo**,
jeweils mit Ordinarium und Proprium des Tages, zweisprachig **Latein/Deutsch**, und mit
auswählbarem Gesang (nahtloser Ablauf). Neumen zum Singen sind strukturell vorbereitet
(GABC/Gregorio, später via `exsurge.js`).

> Dies ist die erste, tragfähige Version: Architektur, Design-System, Dashboard,
> Navigation und je ein funktionsfähiges **Beispiel** pro Bereich. Die liturgischen
> Inhalte (jeder Tag, jedes Fest, Neumen) werden schrittweise ergänzt.

## Technik

- **React 18 + TypeScript + Vite**, PWA (offline-fähig, installierbar)
- **react-router-dom** für die Navigation
- Schriften: Cormorant Garamond / EB Garamond (selbst gehostet)

## Entwicklung

```bash
npm install
npm run dev        # Dev-Server (http://127.0.0.1:5173)
npm run build      # Produktions-Build inkl. PWA
npm run typecheck  # nur Typprüfung
```

## Struktur

- `src/components/` – wiederverwendbare Bausteine (AppShell, Tile, BilingualText,
  SectionRenderer, SettingsPanel, ChantBlock …)
- `src/context/SettingsContext.tsx` – Sprachmodus + Gesangsauswahl (in `localStorage`)
- `src/data/` – Datenmodell (`types.ts`), Kalender und Beispielinhalte
  (Messe, Brevier-Hore, Rosenkranz, Novene, Gebete)
- `src/features/` – die Seiten je Bereich

## Inhalte

Siehe `docs/content-model.md` (Datenmodell), `docs/divinum-officium-import.md`
(späterer Bulk-Import) und `docs/licensing.md` (Rechtehinweise).
