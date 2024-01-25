import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import React, { useContext, useRef, useState } from 'react';
import AppContext from '../../context/AppContext';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useTheme } from '@react-navigation/native';
import {
  Dimensions,
  Animated,
} from "react-native";

const width = Dimensions.get("window").width;

const ANCHO_CONTENEDOR = width * .6;
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 2;
const ESPACIO = 2;

export default function Header() {
  const { colors } = useTheme();
  const scrollX = useRef(new Animated.Value(0)).current;
  const { darkMode, setDarkMode, setRoute, route, loadingSection, setIdSection, apartados, setSectionDes } = useContext(AppContext);
  const navigation = useNavigation();
  const updateData = (screen, idSection, description) => {
    setSectionDes(description);
    setIdSection(idSection);
    setRoute(screen);
  };

  const onclickMenu = () => {
    navigation.openDrawer();
  };
  const handleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={{ marginLeft: 20, marginRight: 20, flexDirection: 'row', justifyContent: 'space-between' }} >
          <Icon
            name="bars"
            size={27}
            color={colors.text}
            onPress={onclickMenu} />
          {darkMode ? <Icon name="sun" size={27} color={colors.text} onPress={handleTheme} /> :
            <Icon name="moon" size={27} color={colors.text} onPress={handleTheme} />}
        </View>
        {!loadingSection ?
          <View style={{ marginTop: 20 }}>
            <Text style={[styles.text, { color: colors.text }]} >
              {route}
            </Text>

            <Animated.FlatList
              data={apartados}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: true }
              )}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              snapToAlignment="start"
              contentContainerStyle={{
                paddingTop: 25,
                paddingHorizontal: ESPACIO_CONTENEDOR,
              }}
              snapToInterval={ANCHO_CONTENEDOR}
              decelerationRate={0}
              scrollEventThrottle={15}
              renderItem={({ item, index }) => {
                const inputRange = [
                  (index - 1) * ANCHO_CONTENEDOR,
                  index * ANCHO_CONTENEDOR,
                  (index + 1) * ANCHO_CONTENEDOR,
                ];

                const scrollY = scrollX.interpolate({
                  inputRange,
                  outputRange: [0, -20, 0],
                });
                return (
                  <TouchableWithoutFeedback
                    onPress={() => updateData(item.title, item.section_id, item.description)} >
                    <View style={{ width: ANCHO_CONTENEDOR }}>
                      <Animated.View
                        style={{
                          marginHorizontal: ESPACIO,
                          padding: ESPACIO,
                          borderRadius: 34,
                          alignItems: "center",
                          transform: [{ translateY: scrollY }],
                        }}
                      >
                        <Image
                          source={{ uri: item.image_url }}
                          style={styles.posterImage}
                        />
                        <Text style={[styles.titleSecctions, { color: colors.text }]} >{item.title}</Text>
                      </Animated.View>
                    </View>
                  </TouchableWithoutFeedback>
                )
              }}
            />
          </View>
          :
          <Text style={[styles.text, { color: colors.text }]} >
            Cargando...
          </Text>
        }
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  posterImage: {
    width: "100%",
    height: ANCHO_CONTENEDOR * .8,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
  container: {
    paddingTop: 20,
  },
  text: {
    marginBottom: 10,
    paddingHorizontal: 35,
    textAlign: 'center',
    color: 'white',
    letterSpacing: 3,
    fontSize: 25,
    fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
    textTransform: 'uppercase',
  },
  titleSecctions: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
    fontSize: 15,
    textTransform: 'capitalize'
  },
});
