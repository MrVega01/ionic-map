import 'leaflet/dist/leaflet.css'
import { useEffect } from 'react'
import { MapContainer, TileLayer } from "react-leaflet"
import MapEvents from './MapEvents'
import Markers from './Marker'

interface Props {
  position: Position,
  markers: Position[],
  addMarker: (market: Position) => void
}

export function MapView({ position, markers, addMarker }: Props) {
  return (
    <MapContainer
      center={position} 
      zoom={13}
      style={{width: '100%', height: '100%'}}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers positions={markers}/>
      <MapEvents position={position} addMarker={addMarker} />
    </MapContainer>
  )
}