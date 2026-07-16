// Bereinigt GABC aus dem GregoBase-Korpus von Formatierungs-Artefakten, die
// exsurge sonst teils wörtlich anzeigt. Wird zentral in NeumeScore vor dem
// Rendern angewandt, damit alle Quellen sauber dargestellt werden.
//
// Behandelt:
//  - CR-Artefakte (\r)     : Windows-Zeilenenden aus Importen → normalisieren
//  - <v>…</v> / <eu>…</eu> : roher GregorioTeX (z. B. \greheightstar) → entfernen
//  - <alt>…</alt>          : (meist englische) Regieanweisungen → entfernen
//  - \makro-Reste          : entfernen
//  - <sp>…</sp>            : GABC-Sonderzeichen in Unicode auflösen (z. B.
//                            <sp>'ae</sp> → „ǽ") – exsurge kennt nur R/ und V/
//  - {…} in Notengruppen   : editoriale Annotation (z. B. {ix}) → entfernen
//  - Lyric-Initialen X{y}  : Drop-Cap-Kodierung (A{D}, QU{a}) → „Ad", „Qua"
//
// Beibehalten: <i>, <b>, <c> (Kursiv/Fett/Farbe) sowie <sp>R/</sp> und
// <sp>V/</sp> – diese wandelt exsurge selbst in „R/"/„V/" um.
export function cleanGabc(gabc: string): string {
  if (!gabc) return gabc
  let s = gabc

  // 0. Carriage-Return-Artefakte (\r\n aus Importen) entfernen; exsurge trennt
  //    Worte ohnehin an Whitespace, das \n als Trenner bleibt erhalten.
  s = s.replace(/\r/g, '')

  // 1. Editoriale/TeX-Elemente entfernen.
  s = s.replace(/<v>[\s\S]*?<\/v>/g, '')
  s = s.replace(/<eu>[\s\S]*?<\/eu>/g, '')
  s = s.replace(/<alt>[\s\S]*?<\/alt>/g, '')
  s = s.replace(/\\[a-zA-Z]+/g, '')

  // 1b. GABC-Sonderzeichen (<sp>…</sp>) auflösen. exsurge behandelt in makeLyric
  //     nur R/ und V/; jeder andere <sp>-Code würde sonst wörtlich als Markup in
  //     den Neumen erscheinen. Der Apostroph vor der Ligatur kodiert den Akut.
  s = s.replace(/<sp>([^<]*)<\/sp>/g, (match, raw: string) => {
    const code = raw.trim()
    switch (code) {
      case 'R/':
      case 'V/':
        return match // exsurge wandelt diese selbst um → unangetastet lassen
      case "'ae":
      case "'æ":
        return 'ǽ'
      case 'ae':
      case 'æ':
        return 'æ'
      case "'oe":
      case "'œ":
        return 'œ́'
      case 'oe':
      case 'œ':
        return 'œ'
      case '...':
      case '…':
        return '…'
      default:
        return code // Unbekannt: entpacken statt literales Markup zeigen.
    }
  })

  // 2. In Notengruppen (…) verbliebene {…}-Annotationen entfernen.
  s = s.replace(/\(([^)]*)\)/g, (_, inner: string) => '(' + inner.replace(/\{[^}]*\}/g, '') + ')')

  // 3. Lyric-Initialen: X{y} → Drop-Cap sauber (erster Buchstabe groß, Rest klein).
  s = s.replace(
    /([A-Za-zÀ-ÿ])([A-ZÀ-Þ]*)\{([^}]*)\}/g,
    (_, first: string, caps: string, brace: string) =>
      first + caps.toLowerCase() + brace.toLowerCase(),
  )

  // 4. Verbliebene {…} entfernen.
  s = s.replace(/\{[^}]*\}/g, '')

  return s
}
