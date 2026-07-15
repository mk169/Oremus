// Bereinigt GABC aus dem GregoBase-Korpus von Formatierungs-Artefakten, die
// exsurge sonst teils wörtlich anzeigt. Wird zentral in NeumeScore vor dem
// Rendern angewandt, damit alle Quellen sauber dargestellt werden.
//
// Behandelt:
//  - <v>…</v> / <eu>…</eu> : roher GregorioTeX (z. B. \greheightstar) → entfernen
//  - <alt>…</alt>          : (meist englische) Regieanweisungen → entfernen
//  - \makro-Reste          : entfernen
//  - {…} in Notengruppen   : editoriale Annotation (z. B. {ix}) → entfernen
//  - Lyric-Initialen X{y}  : Drop-Cap-Kodierung (A{D}, QU{a}) → „Ad", „Qua"
//
// Beibehalten: <i>, <b>, <c> (Kursiv/Fett/Farbe) und <sp>…</sp> (Sonderzeichen
// wie ℣ ℟ ǽ) – diese rendert exsurge korrekt.
export function cleanGabc(gabc: string): string {
  if (!gabc) return gabc
  let s = gabc

  // 1. Editoriale/TeX-Elemente entfernen.
  s = s.replace(/<v>[\s\S]*?<\/v>/g, '')
  s = s.replace(/<eu>[\s\S]*?<\/eu>/g, '')
  s = s.replace(/<alt>[\s\S]*?<\/alt>/g, '')
  s = s.replace(/\\[a-zA-Z]+/g, '')

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
