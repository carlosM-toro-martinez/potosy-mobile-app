import React from 'react';
import MapboxGL from '@rnmapbox/maps';
import Icon from 'react-native-vector-icons/FontAwesome5';

function DestinationIcon(props) {
  const { destino } = props;
  const DestinationLocation = [destino.y, destino.x]; // [longitude, latitude]

  return DestinationLocation ? (
    <MapboxGL.PointAnnotation
      id="destination"
      title="destination location"
      coordinate={DestinationLocation}>
      <Icon name="place-of-worship" color="#000" size={30} />
    </MapboxGL.PointAnnotation>
  ) : null;
}

export default DestinationIcon;
