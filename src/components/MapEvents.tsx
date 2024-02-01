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
    setTimeout(function () {
        map.invalidateSize(true);
    }, 1000);
    map.flyTo(position, map.getZoom())
  }, [position])
  return <></>
}