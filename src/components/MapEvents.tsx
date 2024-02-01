import { useEffect } from "react"
import { useMapEvents } from "react-leaflet"

interface Props {
  position: Position,
  addMarker: (market: Position) => void
}

export default function MapEvents({ position, addMarker }: Props){
  const map = useMapEvents({
    click(e) {
      console.log()
      addMarker([e.latlng.lat, e.latlng.lng])
    }
  })
  useEffect(() => {
    map.flyTo(position, map.getZoom())
  }, [position])
  return <></>
}