import React, { useEffect, useState, useContext } from 'react';
import MapboxDirectionsFactory from '@mapbox/mapbox-sdk/services/directions';
import { lineString as makeLineString } from '@turf/helpers';
import MapboxGL from '@rnmapbox/maps';
import AppContext from '../../context/AppContext';

const accessToken =
  'pk.eyJ1IjoiY2FybG9zdG9ybyIsImEiOiJjbDZkc3JqbHIwYmN3M2xsZ244b2FmcGtpIn0._wNqjRhd9d-QKJBtnG79dQ';

const directionsClient = MapboxDirectionsFactory({ accessToken });

function TraceRoute(props) {
  const { destino } = props;
  const { ubicationDevice } = useContext(AppContext);

  const DestinationLocation = [destino.y, destino.x]; // [longitude, latitude]
  const StartLocation = ubicationDevice;
  let [route, setRoute] = useState(null);
  useEffect(() => {
    const fetchRoute = async () => {
      const reqOptions = {
        waypoints: [
          { coordinates: StartLocation },
          { coordinates: DestinationLocation },
        ],
        profile: 'walking',
        geometries: 'geojson',
      };
      const res = await directionsClient.getDirections(reqOptions).send();
      const newRoute = makeLineString(res.body.routes[0].geometry.coordinates);
      setRoute(newRoute);
    };
    fetchRoute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ubicationDevice]);

  return route ? (
    <MapboxGL.ShapeSource id="routeSource" shape={route}>
      <MapboxGL.LineLayer id="routeFill" style={layerStyles.route} />
    </MapboxGL.ShapeSource>
  ) : null;
}

const layerStyles = {
  route: {
    lineColor: 'black',
    lineCap: MapboxGL.LineJoin.Round,
    lineWidth: 4,
    lineOpacity: 0.5,
  },
};

export default TraceRoute;
