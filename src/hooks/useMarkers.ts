import { useEffect, useState } from "react"

export default function useMarkers() {
  const [markers, setMarkers] = useState([])

  useEffect(() => {
    fetch('places.json')
      .then((response) => response.json())
      .then(({ data }) => {
        setMarkers(data)
      })
  }, [])

  return markers
}