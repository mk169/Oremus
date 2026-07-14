# Datenmodell der Inhalte

Alle liturgischen Texte folgen einem schlanken, generischen Modell
(`src/data/types.ts`), damit Inhalte nahtlos komponiert und schrittweise
ergänzt werden können.

## Bausteine

- **`BilingualText { la?, de? }`** – zweisprachiger Text. Beide Seiten optional,
  z.B. für reine Rubriken oder rein deutsche Lesungen.
- **`ChantInfo { chantable, mode?, gabc? }`** – markiert einen gesangs-fähigen
  Abschnitt. `gabc` ist die Neumen-Quelle (Gregorio-Format); ist sie gesetzt, rendert
  `NeumeScore` (via `exsurge`) daraus echte Quadratnotation. Die Beispiele enthalten
  das Incipit; vollständige Melodien lassen sich später aus GregoBase einsetzen.
- **`LiturgicalSection`** – ein Abschnitt einer Feier (Introitus, Kyrie, Lesung …)
  mit Titel, Art (`ordinarium`/`proprium`), Text, optionaler Rubrik, Quellenangabe
  und optionalem Gesang.
- **`MassFormulary`** – ein vollständiges Messformular (Form 1962/novusOrdo, Tag,
  geordnete Abschnittsfolge).
- **`Hour`** – eine Hore des Stundengebets.
- **`RosarySet`, `Novena`, `Prayer`** – Rosenkranz, Novene, Einzelgebete.

## Nahtloser Ablauf

`SectionRenderer` rendert jeden Abschnitt gemäß `SettingsContext`:

- **Sprache** (`la` / `de` / `both`) steuert, was angezeigt wird.
- **Gesang**: je gesangs-fähigem Abschnitt wählt der Nutzer „gesungen/gesprochen".
  Bei „gesungen" erscheint der `ChantBlock` (Neumen-Platzhalter → später GABC).

## Neue Inhalte hinzufügen

1. Neues Formular/neue Hore als Modul unter `src/data/mass/` bzw. `src/data/office/`
   anlegen (siehe bestehende Beispiele).
2. In `src/data/registry.ts` registrieren (später: Auflösung nach Datum/Fest).
3. Gesangsfähige Abschnitte mit `chant: { chantable: true, mode, gabc }` versehen.

Inhalte können auch als reine JSON-Dateien oder aus einer API/einem Redaktions-Backend
geladen werden – das UI bleibt unverändert, solange die Struktur dem Modell entspricht.
