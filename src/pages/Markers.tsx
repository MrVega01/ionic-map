import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { useHistory } from 'react-router'
import { Button, Card } from 'react-bootstrap';
import useMarkers from '../hooks/useMarkers';

interface Props {
  markers: Position[],
  addGlobalPosition: (position: Position) => void
}

const Markers: React.FC<Props> = ({ markers, addGlobalPosition }) => {
  const router = useIonRouter();
  const markersFetched = useMarkers()
  const handleViewMap = (position: Position) => {
    addGlobalPosition(position)
    router.push('/');
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Markers</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <main className="container justify-content-md-center">
          <div className="row">
          {
            markersFetched.map(marker => {      
              return (
                <div className="col-md-auto mt-3" key={`markerPage${marker.altgeocode}`}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{marker.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {`${Number(marker.latt)}, ${Number(marker.longt)}`}
                      </Card.Subtitle>
                      <Card.Text>
                        {marker.city}
                      </Card.Text>
                      <Button 
                        variant="primary"
                        onClick={() => handleViewMap([Number(marker.latt), Number(marker.longt)])}
                      >View in the map</Button>
                    </Card.Body>
                  </Card>
                </div>
              )
            })
          }
          </div>
             
        </main>
      </IonContent>
    </IonPage>
  );
};

export default Markers;
