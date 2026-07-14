# Import aus Divinum Officium (später)

[Divinum Officium](https://www.divinumofficium.com/) (Repository:
`DivinumOfficium/divinum-officium`) enthält die vollständige **Messe (1962)** und das
**Offizium** in Latein samt Übersetzungen. Diese Quelle dient als Basis, um nach und
nach jeden Tag und jedes Fest einzupflegen.

## Vorgehen (geplant)

1. **Rohdaten** aus dem DO-Repository beziehen (Textdateien je Tag/Fest, eigenes Format
   mit Abschnittsmarken wie `[Introitus]`, `[Oratio]`, `[Lectio]`, `[Evangelium]` …).
2. **Parser** schreiben, der diese Abschnitte auf unser Modell abbildet:

   | Divinum Officium | Oremos-Modell (`LiturgicalSection`) |
   | --- | --- |
   | `[Introitus]` | `id: 'introitus', kind: 'proprium'` |
   | `[Kyrie]`/Ordinarium | `kind: 'ordinarium'` |
   | `[Oratio]` | Collecta / Tagesgebet |
   | `[Lectio]`/`[Epistola]` | Lesung/Epistel |
   | `[Graduale]`/`[Alleluia]` | `chant: { chantable: true }` |
   | `[Evangelium]` | Evangelium |
   | `[Offertorium]`,`[Communio]` | gesangs-fähiges Proprium |

3. **Sprachen** zusammenführen: Latein + gewünschte Übersetzung in `BilingualText`.
4. **Gesang** markieren (`chantable`), GABC später ergänzen (z.B. aus GregoBase).
5. Pro Tag/Fest ein `MassFormulary` bzw. `Hour` erzeugen und in `registry.ts`
   nach Datum/liturgischem Tag auflösen.

## Kalender

Für die korrekte Zuordnung Datum → Formular wird ein vollständiger liturgischer
Kalender beider Formen benötigt (Novus Ordo z.B. via `romcal`; die 1962-Regeln
zusätzlich eigens). Aktuell berechnet `src/data/calendar.ts` nur Saison/Farbe für die
Anzeige.
