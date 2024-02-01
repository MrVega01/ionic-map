import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Map from './pages/Map';
import Markers from './pages/Markers';
import { useState } from 'react';

setupIonicReact();

const App: React.FC = () => {
  const [position, setPosition] = useState<Position>()
  const [markers, setMarkers] = useState<Position[]>([])

  const addMarker = (market: Position) => {
    setMarkers(markers => [...markers, market])
  }
  const addGlobalPosition = (position: Position) => {
    setPosition(position)
  }
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/map">
              <Map markers={markers} newPosition={position} addMarker={addMarker} />
            </Route>
            <Route exact path="/markers">
              <Markers markers={markers} addGlobalPosition={addGlobalPosition} />
            </Route>
            <Route exact path="/">
              <Redirect to="/map" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="map" href="/map">
              <IonIcon aria-hidden="true" icon={triangle} />
              <IonLabel>Map</IonLabel>
            </IonTabButton>
            <IonTabButton tab="markers" href="/markers">
              <IonIcon aria-hidden="true" icon={ellipse} />
              <IonLabel>Markers</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  )
}

export default App;
