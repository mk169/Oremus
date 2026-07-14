# Import aus Divinum Officium

[Divinum Officium](https://www.divinumofficium.com/) (Repository
`DivinumOfficium/divinum-officium`) enthält den vollständigen Datenbestand der
überlieferten **Messe** und des **Offiziums**. Die Rohdaten liegen auf GitHub und
sind von hier aus erreichbar (`raw.githubusercontent.com`).

## Was importiert wird

Das Skript `scripts/fetch-divinum-officium.mjs` (`npm run missa:fetch`) holt die
**Tagesproprien der überlieferten Messe (1962)** und legt sie als JSON unter
`src/data/imported/mass/` ab (plus `index.json`). Aktuell abgedeckt: alle Sonntage
des Temporale (Advent → 24. Sonntag nach Pfingsten) sowie die Hauptfeste des
Sanctorale – rund 60 Formulare.

### Datei-/Abschnittsformat
DO-Dateien sind in Abschnitte `[Name]` gegliedert. Der Parser bildet ab:

| Divinum Officium | Oremus (`section.id`) |
| --- | --- |
| `[Introitus]` | `introitus` (Gesang) |
| `[Oratio]` | `collecta` |
| `[Lectio]` / `[Epistola]` | `lectio` / `epistola` |
| `[Graduale]` / `[Tractus]` / `[Alleluia]` / `[Sequentia]` | `graduale` … (Gesang) |
| `[Evangelium]` | `evangelium` |
| `[Offertorium]` | `offertorium` (Gesang) |
| `[Secreta]` | `secreta` |
| `[Communio]` | `communio` (Gesang) |
| `[Postcommunio]` | `postcommunio` |

Zeilen mit `!` werden als Schriftstellen gesammelt; Makros/Includes (`&`, `$`,
`@`, `#`) und Versikel-Marker (`v.`, `r.`) werden bereinigt.

## Sprachabdeckung (wichtig)

- **Messe – Latein:** vollständig.
- **Messe – Deutsch (Proprium):** bei DO **nicht vorhanden** (nur der Tagesname).
  Die importierten Proprien sind daher Latein; die deutsche Spalte bleibt leer, und
  die App zeigt im Deutsch-Modus den Hinweis „Deutsche Übersetzung folgt".
- **Ordinarium:** stammt aus unseren eigenen, zweisprachigen Daten
  (`src/data/mass/ordinarium1962.ts`) und wird beim Anzeigen automatisch mit dem
  Proprium zum vollständigen Messablauf verwoben (`buildMass.ts`).

## In der App

- `src/data/registry.ts` lädt die JSON per `import.meta.glob` (`importedMassById`,
  `importedMassList`).
- Der Liturgie-Hub listet alle Formulare; `/liturgie/formular/:id` zeigt sie
  (Ordinarium + Proprium) über `ImportedMassView` → `MassArticle`.

## Erweitern

- Weitere Tage/Feste: die Schlüssel-Listen `TEMPORA`/`SANCTI` im Skript ergänzen und
  `npm run missa:fetch` erneut ausführen.
- **Offizium/Brevier:** DO hat hier auch **deutsche** Texte (Antiphonen usw.). Ein
  Import ist möglich, aber aufwendiger, da Psalmen/Antiphonen über Verweise
  (`@…`, Psalterium) zusammengesetzt werden – ein sinnvoller nächster Schritt.
- **Deutsches Mess-Proprium:** benötigt eine andere gemeinfreie Quelle (z. B. ein
  historisches Messbuch) oder manuelle Ergänzung in den JSON-Dateien.
