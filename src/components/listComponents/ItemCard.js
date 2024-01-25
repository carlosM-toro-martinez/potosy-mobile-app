import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

export default function MuseosCard(props) {
  const navigation = useNavigation();
  const [t] = useTranslation();
  const { item } = props;

  const goToDetail = () => {
    navigation.navigate('Detalles del museo', { item: item, id: item.id });
  };

  return (
    <View style={fondo.wrapper}>
      <ImageBackground
        source={{ uri: item.logo_url }}
        style={fondo.image}
        imageStyle={{ borderRadius: 7 }}>
        <TouchableWithoutFeedback onPress={goToDetail}>
          <View style={fondo.background}>
            <Text style={fondo.text} >{item.business_name}</Text>
            <Text style={fondo.textMore} >{t('common:detailsItems')}</Text>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
}

const fondo = StyleSheet.create({
  wrapper: {

    backgroundColor: '#C0C0C0',
    justifyContent: 'center',
    alignItems: 'center',
    width: 135,
    height: 145,
    marginVertical: 5,
    marginHorizontal: 5,
    borderWidth: 0.8,
    borderRadius: 10
  },
  text: {
    color: '#FFDAB9',
    paddingHorizontal: 25,
    margin: 0,
    textAlign: 'center',
    fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
    fontSize: 13,
    lineHeight: 15,
  },
  textMore: {
    color: '#fff',
    paddingHorizontal: 25,
    margin: 0,
    textAlign: 'center',
    fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
    fontSize: 10,
    lineHeight: 15,
  },
  background: {
    ...StyleSheet.absoluteFillObject,

    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 130,
    height: 140,
    borderRadius: 10
  },
  image: {
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
    height: 140,
    borderRadius: 10
  }
});
