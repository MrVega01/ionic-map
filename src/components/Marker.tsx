import { Marker, Popup } from "react-leaflet";

interface Props {
  positions: Position[]
}

export default function Markers({ positions }: Props){
  return (
    <>
    {
      positions.map(position => {
        return (
          <Marker position={position} key={`marker${position.toString()}`}>
            <Popup/>
          </Marker>
        )
      })
    }
    </>
  )
}