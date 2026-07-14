# Echte Melodien aus GregoBase

Die App zeigt gesungene Abschnitte als echte gregorianische Quadratnotation. Die
mitgelieferten GABC-Daten sind **Incipits** (Anfangsphrasen). Vollständige,
authentische Melodien lassen sich aus [GregoBase](https://gregobase.selapa.net/)
(gemeinfreie gregorianische Gesänge) nachladen.

## Warum nicht automatisch?

Der Host `gregobase.selapa.net` ist in der aktuellen Umgebung durch die
**Netzwerk-Richtlinie gesperrt** (nur ausgewählte Hosts wie npm/GitHub sind
erreichbar). Der GABC-Bestand liegt dort in einer Datenbank, nicht im GitHub-Spiegel.
Deshalb muss der Zugang zuerst freigeschaltet werden.

## Schritt 1 – Netzzugang freischalten

In den Einstellungen der Ausführungsumgebung die Netzwerk-Richtlinie so anpassen,
dass `gregobase.selapa.net` erreichbar ist (bzw. eine offenere Richtlinie wählen).
Siehe die Doku: <https://code.claude.com/docs/en/claude-code-on-the-web>.
Ggf. ist dafür eine neue Session nötig.

## Schritt 2 – Zuordnung eintragen

In `scripts/gregobase-map.json` je Abschnitts-ID (`section.id` aus `src/data/**`)
die **GregoBase-chant-ID** eintragen. Diese ID steht in der URL des Gesangs auf
GregoBase, z. B. `https://gregobase.selapa.net/chant/1234` → `1234`. Einträge mit
`null` werden übersprungen.

## Schritt 3 – Melodien ziehen

```bash
npm run gabc:fetch
```

Das Skript lädt für jede eingetragene ID die GABC-Notation, entfernt den Header und
schreibt sie nach `src/data/gabc/gregobase.json`.

## Wirkung

`src/data/gabc/index.ts` (`gabcFor`) bevorzugt beim Rendern automatisch die
GregoBase-Melodie gegenüber dem eingebetteten Incipit – es sind keine weiteren
Code-Änderungen nötig. Nach dem Lauf einfach `npm run dev` / `npm run build`.
