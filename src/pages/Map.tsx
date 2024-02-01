import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useEffect, useState } from 'react';
import { MapView } from '../components/MapView';
import { Geolocation } from '@capacitor/geolocation';

interface Props {
  newPosition?: Position | null,
  markers: Position[],
  addMarker: (market: Position) => void
}

const Map: React.FC<Props> = ({ markers, addMarker, newPosition = null }) => {
  const [position, setPosition] = useState<Position>([51.505, -0.09])

  useEffect(() => {
    if(!newPosition) {
      Geolocation.getCurrentPosition()
        .then(response => {
          setPosition([response.coords.latitude, response.coords.longitude])
        })
    } else {
      setPosition(newPosition)
    }
  }, [newPosition])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Map</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <MapView position={position} markers={markers} addMarker={addMarker}/>
      </IonContent>
    </IonPage>
  );
};

export default Map;
