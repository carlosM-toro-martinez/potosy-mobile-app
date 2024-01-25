import React, {useContext} from 'react';
import MapboxGL from '@rnmapbox/maps';
import AppContext from '../../context/AppContext';
import Icon from 'react-native-vector-icons/FontAwesome5';

function StartIcon() {
  const {ubicationDevice} = useContext(AppContext);
  const StartLocation = ubicationDevice;

  return StartLocation.length > 0 ? (
    <MapboxGL.PointAnnotation
      id="start"
      title="start location"
      coordinate={StartLocation}>
      <Icon name="user" color="#000" size={30} />
    </MapboxGL.PointAnnotation>
  ) : null;
}

export default StartIcon;
