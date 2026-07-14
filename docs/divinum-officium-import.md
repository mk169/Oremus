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

## Offizium (Brevier) – zweisprachig

Anders als beim Mess-Proprium hat DO beim **Stundengebet auch deutsche Texte**.
`scripts/fetch-do-office.mjs` (`npm run officium:fetch`) importiert die Tagesproprien
der Sonntage aus `web/www/horas/{Latin,Deutsch}/Tempora/` nach
`src/data/imported/office/` – **Latein/Deutsch**:

- `[Ant Vespera]` / `[Ant Laudes]` → Antiphonen zur Vesper / zu den Laudes
- `[Capitulum Laudes]` → Kurzlesung
- `[Oratio]` → Tagesgebet
- `[Lectio1]` / `[Responsory1]` → erste Matutin-Lesung samt Responsorium

Angezeigt im Brevier-Hub („Proprium des Tages") → `/brevier/proprium/:id`
(`OfficePropersView` → `MassArticle`). DO-Bedingungsrubriken in Klammern
(`(sed rubrica …)`) werden herausgefiltert; fehlt eine Sprache in einem Abschnitt,
wird die vorhandene angezeigt. Psalmen/Hour-Ordinarium (aus Psalterium/Ordo) sind
noch nicht zusammengesetzt – der nächste Ausbauschritt.

## Erweitern

- Weitere Tage/Feste: die Schlüssel-Listen im jeweiligen Skript ergänzen und
  `npm run missa:fetch` bzw. `npm run officium:fetch` erneut ausführen.
- **Deutsches Mess-Proprium:** bei DO nicht vorhanden; benötigt eine andere
  gemeinfreie Quelle (z. B. ein historisches Messbuch) oder manuelle Ergänzung.
