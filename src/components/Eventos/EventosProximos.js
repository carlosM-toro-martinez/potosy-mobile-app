import { View, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import Eventos from './Eventos';

export default function EventosProximos(props) {
  const { navigation, route } = props;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View style={styles.container}>
      <Eventos />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'black',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
