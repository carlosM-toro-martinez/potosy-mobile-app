import React, { useContext, useState, useEffect, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Button, Text } from 'react-native-paper';
import MapboxGL, { UserLocationRenderMode } from '@rnmapbox/maps';
import Geolocation from '@react-native-community/geolocation';
import AppContext from '../../context/AppContext';
import StartIcon from '../mapsComponents/StartIcon';
import DestinationIcon from '../mapsComponents/DestinationIcon';
import TraceRoute from '../mapsComponents/TraceRoute';
import Place from '../mapsComponents/Place';
import { useTranslation } from 'react-i18next';

const accessToken =
  'pk.eyJ1IjoiY2FybG9zdG9ybyIsImEiOiJjbDZkc3JqbHIwYmN3M2xsZ244b2FmcGtpIn0._wNqjRhd9d-QKJBtnG79dQ';

MapboxGL.setAccessToken(accessToken);

function Map(props) {
  const { ubicationDevice, press, setPress, setUbicationDevice } =
    useContext(AppContext);

  const { t } = useTranslation();

  const { route, navigation } = props;
  const item = route.params.item;
  const StartLocation = ubicationDevice;
  const CenterCoordinate = StartLocation;

  useFocusEffect(
    useCallback(() => {
      // From a Stack screen, the Drawer is accessed.
      const parent = navigation.getParent();
      parent?.setOptions({ swipeEnabled: false });
      // It returns to the initial state.
      return () => parent?.setOptions({ swipeEnabled: true });
    }, [navigation]),
  );

  const config = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 3600000,
  };

  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => setUbicationDevice([info.coords.longitude, info.coords.latitude]),
      error => console.log('ERROR', error),
      config,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [press]);
  //if (!carga) console.log(ubicationDevice.length);
  const recalcular = () => {
    setPress(!press);
  };

  return (
    <View style={style.page}>
      <View style={style.container}>
        {ubicationDevice.length > 1 ?
          <MapboxGL.MapView
            style={style.map}
            logoEnabled={false}
            attributionEnabled={false}
            compassEnabled={true}>
            <MapboxGL.Camera
              zoomLevel={14}
              animationDuration={0}
              centerCoordinate={CenterCoordinate}
              followUserLocation={false}
            />
            <MapboxGL.UserLocation
            //onUpdate={(data) => console.log(data)}
            />
            <TraceRoute destino={item.coordinates} />
            <DestinationIcon destino={item.coordinates} />
            <StartIcon />
          </MapboxGL.MapView>
          : <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }} >
            <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>Verifica que la ubicación de tu dispositivo esté activada</Text>
          </View>}
      </View>
      <View style={buton.container}>
        <Place item={item} />
        <Button
          labelStyle={{ fontSize: 18 }}
          onPress={recalcular}
          color="white"
          icon={{
            source: 'source-branch-sync',
            direction: 'ltl',
          }}>
          {t('common:recalculate')}
        </Button>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 0.65,
    width: 400,
  },
  map: {
    flex: 1,
    position: 'relative',
  },
});

const buton = StyleSheet.create({
  container: {
    flex: 0.35,
    marginBottom: 5,
    backgroundColor: '#333333',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 7,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
});

export default Map;
