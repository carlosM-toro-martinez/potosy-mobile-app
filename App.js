import 'react-native-gesture-handler';
import { ImageBackground, StyleSheet } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from './src/context/AppContext';
import useInitialState from './src/hooks/useInitialState';
import DrawerNavigation from './src/containers/DrawerNavigation';
import { NavigationContainer, DarkTheme, LightTheme } from '@react-navigation/native';

function ContainerNavigate() {
  const { darkMode, setDarkMode } = useContext(AppContext);

  return (
    <NavigationContainer theme={darkMode ? { ...DarkTheme, colors: { ...DarkTheme.colors, background: 'rgb(73, 73, 73)' } } : LightTheme}>
      <DrawerNavigation />
    </NavigationContainer>

  );
}

function App() {
  const [aux, setAux] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAux(false);
    }, 3000);
  });
  const initialState = useInitialState();

  return (
    <>
      {aux ? (
        <ImageBackground
          source={require('./src/assets/font.jpg')}
          imageStyle={{}}
          style={styles.image}
          blurRadius={1}
        />
      ) : (
        <AppContext.Provider value={initialState}>
          <ContainerNavigate />
        </AppContext.Provider>
      )}
    </>

  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

export default App;
