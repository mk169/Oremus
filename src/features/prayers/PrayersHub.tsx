import { Tile } from '../../components/Tile'
import { PageHeader } from '../../components/PageHeader'
import { RosaryIcon, CrossIcon, ChaliceIcon, CandleIcon, BookIcon } from '../../components/Icons'
import { novenas } from '../../data/novenas'
import './PrayersHub.css'

export function PrayersHub() {
  return (
    <div>
      <PageHeader
        title="Gebete"
        latin="Orationes"
        subtitle="Gebete zur heiligen Messe, allgemeine Gebete, der Rosenkranz, Novenen und eine Anleitung zum meditativen Gebet."
      />

      <div className="prayers-tiles">
        <Tile to="/gebete/vorbereitung" title="Vorbereitung vor der Messe" latin="Praeparatio ad Missam" description="Gebete zur Vorbereitung auf das heilige Opfer" icon={<ChaliceIcon size={26} />} />
        <Tile to="/gebete/kommunion" title="Kommuniongebet" latin="Ad Communionem" description="Gebete zum Empfang der heiligen Kommunion" icon={<CrossIcon size={26} />} />
        <Tile to="/gebete/nach-der-messe" title="Gebete nach der Messe" latin="Gratiarum actio" description="Danksagung nach dem heiligen Opfer" icon={<CandleIcon size={26} />} />
        <Tile to="/gebete/allgemein" title="Allgemeine Gebete" latin="Orationes communes" description="Vaterunser, Ave Maria, Credo, Salve Regina, Angelus …" icon={<BookIcon size={26} />} />
        <Tile to="/rosenkranz" title="Rosenkranz" latin="Rosarium" description="Alle vier Geheimnis-Sätze – einzeln mit Bibelstelle" icon={<RosaryIcon size={26} />} />
        <Tile to="/novene" title="Novenen" latin="Novenæ" description={`${novenas.length} neuntägige Andachten – Herz Jesu, Heiliger Geist, Maria, hl. Josef …`} icon={<CandleIcon size={26} />} />
        <Tile to="/meditation" title="Meditatives Gebet" latin="Lectio divina" description="Anleitung mit auswählbaren Bibelstellen" icon={<CrossIcon size={26} />} />
      </div>
    </div>
  )
}
