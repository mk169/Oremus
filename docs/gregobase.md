# Echte Melodien (GregoBase / gemeinfreier Korpus)

Gesungene Abschnitte werden als echte gregorianische Quadratnotation (Neumen)
dargestellt. Die authentischen Melodien stammen aus dem gemeinfreien
GregoBase-Bestand.

## Empfohlener Weg: Offline aus dem CC0-Korpus (ohne Netzfreischaltung)

Der Host `gregobase.selapa.net` ist in dieser Umgebung durch die **Egress-Richtlinie
der Organisation gesperrt** (Proxy-403). Das ist aber nicht nötig: Der komplette
GregoBase-Datenbestand liegt als **gemeinfreier (CC0) SQL-Dump** im GitHub-Repo
[`bacor/gregobasecorpus`](https://github.com/bacor/gregobasecorpus) und ist von hier
aus erreichbar.

```bash
npm run gabc:dump
```

Das Skript `scripts/gregobase-from-dump.mjs`:
1. lädt den Dump (`gregobase_dumps/gregobase_20191024.sql`, ~7 MB) von GitHub-raw
   (oder aus einer lokal übergebenen Datei),
2. parst die Tabelle `gregobase_chants` → `id → gabc` (der Dump speichert gabc als
   MySQL-escapten JSON-String; beides wird dekodiert),
3. löst `scripts/gregobase-map.json` (Abschnitts-ID → GregoBase-ID) auf und schreibt
   `src/data/gabc/gregobase.json` (Abschnitts-ID → echtes GABC).

`src/data/gabc/index.ts` (`gabcFor`) bevorzugt diese Melodien automatisch vor den
eingebetteten Incipits/Platzhaltern – keine weiteren Code-Änderungen nötig.

Aktuell so gefüllt: **das komplette Kyriale** (Choral-Ordinarien I–XVIII, Credo I–VII,
marianische Antiphonen), soweit im 2019er-Dump enthalten. Nach Oktober 2019 ergänzte
Melodien fehlen im Dump; ihre GregoBase-ID ist hinterlegt.

### GregoBase-IDs pflegen
`scripts/gregobase-map.json` bildet `section.id` → GregoBase-chant-ID ab. Die IDs des
Kyriale werden von `npm run kyriale:fetch` aus `bbloomf/jgabc` automatisch eingetragen;
weitere lassen sich manuell ergänzen (ID = Zahl in der GregoBase-URL `/chant/1234`).

## Alternativer Weg: direkt von GregoBase (falls freigeschaltet)

Ist `gregobase.selapa.net` per Egress-Allowlist der Organisation freigegeben, zieht
`npm run gabc:fetch` die Melodien direkt vom GregoBase-Server. Für den Regelbetrieb ist
der Offline-Weg (`gabc:dump`) jedoch vorzuziehen.
