import type { Prayer } from '../types'

// Psalmi ante Missam – die fünf überlieferten Psalmen zur Vorbereitung auf
// die heilige Messe aus dem Missale Romanum (Vulgata; deutsche Übertragung in
// gemeinfreier Allioli-Tradition). Gerahmt von der Antiphon „Ne reminiscaris".
// Nach jedem Psalm wird „Ehre sei dem Vater" gebetet.

const antiphon: Prayer = {
  id: 'ne-reminiscaris',
  title: { la: 'Antiphona · Ne reminiscaris', de: 'Antiphon' },
  rubric: { de: 'Vor und nach den Psalmen.' },
  text: {
    la: 'Ne reminiscáris, Dómine, delícta nostra, vel paréntum nostrórum, neque vindíctam sumas de peccátis nostris.',
    de: 'Gedenke nicht, o Herr, unserer Sünden noch der Sünden unserer Eltern und nimm nicht Rache für unsere Sünden.',
  },
}

const ps83: Prayer = {
  id: 'ps-83',
  title: { la: 'Psalmus 83 · Quam dilecta', de: 'Psalm 83 — Wie lieblich sind deine Wohnungen' },
  text: {
    la: 'Quam dilécta tabernácula tua, Dómine virtútum! * concupíscit et déficit ánima mea in átria Dómini.\nCor meum et caro mea * exsultavérunt in Deum vivum.\nÉtenim passer invénit sibi domum, * et turtur nidum sibi, ubi ponat pullos suos.\nAltária tua, Dómine virtútum, * rex meus et Deus meus.\nBeáti qui hábitant in domo tua, Dómine; * in sǽcula sæculórum laudábunt te.\nBeátus vir cuius est auxílium abs te: * ascensiónes in corde suo dispósuit, in valle lacrimárum, in loco quem pósuit.\nÉtenim benedictiónem dabit legislátor, ibunt de virtúte in virtútem: * vidébitur Deus deórum in Sion.\nDómine Deus virtútum, exáudi oratiónem meam: * áuribus pércipe, Deus Iacob.\nProtéctor noster áspice, Deus, * et réspice in fáciem Christi tui.\nQuia mélior est dies una in átriis tuis * super míllia.\nElégi abiéctus esse in domo Dei mei, * magis quam habitáre in tabernáculis peccatórum.\nQuia misericórdiam et veritátem díligit Deus: * grátiam et glóriam dabit Dóminus.\nNon privábit bonis eos qui ámbulant in innocéntia: * Dómine virtútum, beátus homo qui sperat in te.',
    de: 'Wie lieblich sind deine Wohnungen, o Herr der Heerscharen! * Es verlangt und verschmachtet meine Seele nach den Vorhöfen des Herrn.\nMein Herz und mein Fleisch * frohlocken zu dem lebendigen Gott.\nDenn der Sperling findet ein Haus * und die Turteltaube ein Nest, wohin sie ihre Jungen legt.\nDeine Altäre, o Herr der Heerscharen, * mein König und mein Gott!\nSelig, die in deinem Hause wohnen, o Herr; * sie werden dich loben von Ewigkeit zu Ewigkeit.\nSelig der Mann, dessen Hilfe von dir kommt; * Aufstiege hat er in seinem Herzen geplant, im Tränentale, an dem Orte, den er bestimmt hat.\nDenn der Gesetzgeber wird Segen spenden; sie schreiten von Kraft zu Kraft: * geschaut wird der Gott der Götter auf Sion.\nHerr, Gott der Heerscharen, erhöre mein Gebet, * vernimm es, o Gott Jakobs!\nUnser Beschützer, blicke her, o Gott, * und schau auf das Angesicht deines Gesalbten!\nDenn besser ist ein einziger Tag in deinen Vorhöfen * als tausend andere.\nLieber will ich gering sein im Hause meines Gottes * als wohnen in den Zelten der Sünder.\nDenn Gott liebt Barmherzigkeit und Wahrheit; * Gnade und Herrlichkeit wird der Herr verleihen.\nEr versagt das Gute nicht denen, die in Unschuld wandeln. * Herr der Heerscharen, selig der Mensch, der auf dich hofft!',
  },
}

const ps84: Prayer = {
  id: 'ps-84',
  title: { la: 'Psalmus 84 · Benedixisti', de: 'Psalm 84 — Du hast dein Land gesegnet' },
  text: {
    la: 'Benedixísti, Dómine, terram tuam: * avertísti captivitátem Iacob.\nRemisísti iniquitátem plebis tuæ: * operuísti ómnia peccáta eórum.\nMitigásti omnem iram tuam: * avertísti ab ira indignatiónis tuæ.\nConvérte nos, Deus salutáris noster: * et avérte iram tuam a nobis.\nNumquid in ætérnum irascéris nobis? * aut exténdes iram tuam a generatióne in generatiónem?\nDeus, tu convérsus vivificábis nos: * et plebs tua lætábitur in te.\nOsténde nobis, Dómine, misericórdiam tuam: * et salutáre tuum da nobis.\nÁudiam quid loquátur in me Dóminus Deus: * quóniam loquétur pacem in plebem suam.\nEt super sanctos suos: * et in eos qui convertúntur ad cor.\nVerúmtamen prope timéntes eum salutáre ipsíus: * ut inhábitet glória in terra nostra.\nMisericórdia et véritas obviavérunt sibi: * iustítia et pax osculátæ sunt.\nVéritas de terra orta est: * et iustítia de cælo prospéxit.\nÉtenim Dóminus dabit benignitátem: * et terra nostra dabit fructum suum.\nIustítia ante eum ambulábit: * et ponet in via gressus suos.',
    de: 'Du hast, o Herr, dein Land gesegnet, * die Gefangenschaft Jakobs gewendet.\nDu hast die Missetat deines Volkes vergeben, * all ihre Sünden zugedeckt.\nDu hast all deinen Zorn gemildert, * abgewandt die Glut deines Grimmes.\nBekehre uns, o Gott, unser Heiland, * und wende deinen Zorn von uns.\nWillst du denn ewig auf uns zürnen, * deinen Zorn ausdehnen von Geschlecht zu Geschlecht?\nO Gott, du wirst dich wenden und uns neu beleben, * und dein Volk wird sich in dir freuen.\nZeige uns, o Herr, deine Barmherzigkeit, * und gib uns dein Heil.\nIch will hören, was der Herr, mein Gott, in mir redet; * denn er verkündet Frieden seinem Volke.\nUnd seinen Heiligen * und denen, die sich von Herzen zu ihm bekehren.\nFürwahr, nahe ist sein Heil denen, die ihn fürchten, * dass Herrlichkeit wohne in unserm Lande.\nBarmherzigkeit und Treue begegnen einander, * Gerechtigkeit und Friede küssen sich.\nTreue sprosst aus der Erde hervor, * und Gerechtigkeit schaut vom Himmel herab.\nDenn der Herr wird Güte spenden, * und unser Land wird seine Frucht bringen.\nGerechtigkeit wird vor ihm einhergehen * und ihre Schritte auf den Weg richten.',
  },
}

const ps85: Prayer = {
  id: 'ps-85',
  title: { la: 'Psalmus 85 · Inclina Domine', de: 'Psalm 85 — Neige, o Herr, dein Ohr' },
  text: {
    la: 'Inclína, Dómine, aurem tuam, et exáudi me: * quóniam inops et pauper sum ego.\nCustódi ánimam meam, quóniam sanctus sum: * salvum fac servum tuum, Deus meus, sperántem in te.\nMiserére mei, Dómine, quóniam ad te clamávi tota die: * lætífica ánimam servi tui, quóniam ad te, Dómine, ánimam meam levávi.\nQuóniam tu, Dómine, suávis et mitis: * et multæ misericórdiæ ómnibus invocántibus te.\nÁuribus pércipe, Dómine, oratiónem meam: * et inténde voci deprecatiónis meæ.\nIn die tribulatiónis meæ clamávi ad te: * quia exaudísti me.\nNon est símilis tui in diis, Dómine: * et non est secúndum ópera tua.\nOmnes gentes quascúmque fecísti vénient, et adorábunt coram te, Dómine: * et glorificábunt nomen tuum.\nQuóniam magnus es tu, et fáciens mirabília: * tu es Deus solus.\nDeduc me, Dómine, in via tua, et ingrédiar in veritáte tua: * lætétur cor meum, ut tímeat nomen tuum.\nConfitébor tibi, Dómine Deus meus, in toto corde meo, * et glorificábo nomen tuum in ætérnum.\nQuia misericórdia tua magna est super me: * et eruísti ánimam meam ex inférno inferióri.\nDeus, iníqui insurrexérunt super me, et synagóga poténtium quæsiérunt ánimam meam: * et non proposuérunt te in conspéctu suo.\nEt tu, Dómine Deus, miserátor et miséricors, * pátiens, et multæ misericórdiæ, et verax.\nRéspice in me, et miserére mei, * da impérium tuum púero tuo: et salvum fac fílium ancíllæ tuæ.\nFac mecum signum in bonum, ut vídeant qui odérunt me, et confundántur: * quóniam tu, Dómine, adiuvísti me, et consolátus es me.',
    de: 'Neige, o Herr, dein Ohr und erhöre mich, * denn ich bin arm und elend.\nBewahre meine Seele, denn ich bin dir geweiht; * hilf deinem Knechte, mein Gott, der auf dich hofft.\nErbarme dich meiner, o Herr, denn den ganzen Tag rufe ich zu dir; * erfreue die Seele deines Knechtes, denn zu dir, o Herr, erhebe ich meine Seele.\nDenn du, o Herr, bist gütig und milde * und reich an Erbarmen für alle, die dich anrufen.\nVernimm, o Herr, mein Gebet * und achte auf die Stimme meines Flehens.\nAm Tage meiner Bedrängnis rufe ich zu dir, * denn du erhörst mich.\nKeiner ist dir gleich unter den Göttern, o Herr, * und nichts gleicht deinen Werken.\nAlle Völker, die du geschaffen, werden kommen und vor dir anbeten, o Herr, * und deinen Namen preisen.\nDenn groß bist du und tust Wunder; * du allein bist Gott.\nFühre mich, o Herr, auf deinem Wege, dass ich wandle in deiner Wahrheit; * es freue sich mein Herz, dass es deinen Namen fürchte.\nPreisen will ich dich, Herr, mein Gott, aus meinem ganzen Herzen * und deinen Namen verherrlichen in Ewigkeit.\nDenn groß ist deine Barmherzigkeit über mir, * und du hast meine Seele errettet aus der tiefsten Unterwelt.\nO Gott, Freche haben sich gegen mich erhoben, und eine Rotte von Gewaltigen trachtete mir nach dem Leben, * und sie hatten dich nicht vor Augen.\nDu aber, Herr, mein Gott, bist barmherzig und gnädig, * langmütig, reich an Erbarmen und wahrhaftig.\nBlicke auf mich und erbarme dich meiner; * gib deine Macht deinem Knechte und hilf dem Sohne deiner Magd.\nGib mir ein Zeichen zum Guten, dass es sehen, die mich hassen, und zuschanden werden, * weil du, o Herr, mir geholfen und mich getröstet hast.',
  },
}

const ps115: Prayer = {
  id: 'ps-115',
  title: { la: 'Psalmus 115 · Credidi', de: 'Psalm 115 — Ich habe geglaubt' },
  text: {
    la: 'Crédidi, propter quod locútus sum: * ego autem humiliátus sum nimis.\nEgo dixi in excéssu meo: * Omnis homo mendax.\nQuid retríbuam Dómino, * pro ómnibus quæ retríbuit mihi?\nCálicem salutáris accípiam: * et nomen Dómini invocábo.\nVota mea Dómino reddam coram omni pópulo eius: * pretiósa in conspéctu Dómini mors sanctórum eius.\nO Dómine, quia ego servus tuus: * ego servus tuus, et fílius ancíllæ tuæ.\nDirupísti víncula mea: * tibi sacrificábo hóstiam laudis, et nomen Dómini invocábo.\nVota mea Dómino reddam in conspéctu omnis pópuli eius: * in átriis domus Dómini, in médio tui, Ierúsalem.',
    de: 'Ich habe geglaubt, darum habe ich geredet; * ich aber wurde tief gedemütigt.\nIch sprach in meiner Bestürzung: * Jeder Mensch ist Lügner.\nWas soll ich dem Herrn vergelten * für alles, was er mir erwiesen hat?\nDen Kelch des Heiles will ich nehmen * und den Namen des Herrn anrufen.\nMeine Gelübde will ich dem Herrn erfüllen vor seinem ganzen Volke; * kostbar ist vor dem Herrn der Tod seiner Heiligen.\nO Herr, ich bin ja dein Knecht, * dein Knecht und der Sohn deiner Magd.\nDu hast meine Fesseln gelöst; * dir will ich das Opfer des Lobes darbringen und den Namen des Herrn anrufen.\nMeine Gelübde will ich dem Herrn erfüllen vor seinem ganzen Volke, * in den Vorhöfen des Hauses des Herrn, in deiner Mitte, Jerusalem.',
  },
}

const ps129: Prayer = {
  id: 'ps-129',
  title: { la: 'Psalmus 129 · De profundis', de: 'Psalm 129 — Aus der Tiefe' },
  text: {
    la: 'De profúndis clamávi ad te, Dómine: * Dómine, exáudi vocem meam.\nFiant aures tuæ intendéntes: * in vocem deprecatiónis meæ.\nSi iniquitátes observáveris, Dómine: * Dómine, quis sustinébit?\nQuia apud te propitiátio est: * et propter legem tuam sustínui te, Dómine.\nSustínuit ánima mea in verbo eius: * sperávit ánima mea in Dómino.\nA custódia matutína usque ad noctem: * speret Israel in Dómino.\nQuia apud Dóminum misericórdia: * et copiósa apud eum redémptio.\nEt ipse rédimet Israel, * ex ómnibus iniquitátibus eius.',
    de: 'Aus der Tiefe rufe ich zu dir, o Herr; * Herr, erhöre meine Stimme.\nLass deine Ohren aufmerken * auf die Stimme meines Flehens.\nWenn du die Sünden anrechnest, o Herr, * Herr, wer kann bestehen?\nDoch bei dir ist Vergebung, * und um deines Gesetzes willen harre ich auf dich, o Herr.\nMeine Seele harrt auf sein Wort; * meine Seele hofft auf den Herrn.\nVon der Morgenwache bis zur Nacht * hoffe Israel auf den Herrn.\nDenn beim Herrn ist Barmherzigkeit * und reiche Erlösung bei ihm.\nUnd er selbst wird Israel erlösen * aus allen seinen Sünden.',
  },
}

const gloriaPatri: Prayer = {
  id: 'psalmi-gloria',
  title: { la: 'Gloria Patri', de: 'Ehre sei dem Vater' },
  rubric: { de: 'Nach jedem Psalm.' },
  text: {
    la: 'Glória Patri, et Fílio, et Spirítui Sancto. * Sicut erat in princípio, et nunc, et semper, et in sǽcula sæculórum. Amen.',
    de: 'Ehre sei dem Vater und dem Sohn und dem Heiligen Geist. * Wie im Anfang, so auch jetzt und allezeit und in Ewigkeit. Amen.',
  },
}

/** Die fünf überlieferten Psalmen zur Vorbereitung, mit Antiphon. */
export const psalmiAnteMissam: Prayer[] = [
  antiphon,
  ps83,
  ps84,
  ps85,
  ps115,
  ps129,
  gloriaPatri,
]
