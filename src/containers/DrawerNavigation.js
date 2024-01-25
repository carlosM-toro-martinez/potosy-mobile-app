import React, { useContext, useState } from 'react';
import { Button, Title, List, useTheme, Divider, Checkbox } from 'react-native-paper';
import { View, StyleSheet, Image, ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Navigation from './Navigation';
import { useNavigation } from '@react-navigation/native';
import AppContext from '../context/AppContext';
import Footer from './drawerLayout/Footer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTranslation } from 'react-i18next';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation(props) {
  const { apartados } = useContext(AppContext);
  return (
    <Drawer.Navigator
      drawerContent={props => <Layout {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name='museos' component={Navigation} />
    </Drawer.Navigator>
  );
}
function Layout({ navigation }) {
  const [language, setLanguage] = React.useState('spanish');
  const navigationScreen = useNavigation();
  const { setRoute } = useContext(AppContext);
  const { t, i18n } = useTranslation();

  const theme = useTheme();

  const updateData = (screen, ruta) => {
    if (!ruta)
      navigationScreen.navigate(screen);
    else {
      setRoute(ruta);
      navigation.navigate(screen);
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    if (lng === 'es') {
      setLanguage('spanish');
    } else {
      setLanguage('english');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: '#333333' }} >
      <View style={{ flex: 0.8 }}>
        {/* <View style={style.titleContainer}>
          <Title style={style.title}>
            <Icon name="language" size={25} />
            {'  '}
            {t('common:language')}
          </Title>
        </View> */}
        {/* <View style={{ width: 120, marginLeft: 30 }}>
          <TouchableWithoutFeedback onPress={() => changeLanguage('es')}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={style.containerLanguageItem}>
                <Image
                  source={require('../assets/spain.png')}
                  imageStyle={{}}
                  style={style.imagetourism}
                  blurRadius={1}>

                </Image>
                <Text style={{ color: 'white' }}>
                  {t('common:spanish')}
                </Text>
              </View>
              <Checkbox
                status={language === 'spanish' ? 'checked' : 'uncheked'}
              />
            </View >
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => changeLanguage('en')}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={style.containerLanguageItem}>
                <Image
                  source={require('../assets/england.png')}
                  imageStyle={{}}
                  style={style.imagetourism}
                  blurRadius={1}>

                </Image>
                <Text style={{ color: 'white', marginLeft: 6 }}>
                  {t('common:english')}
                </Text>
              </View>
              <Checkbox
                status={language === 'english' ? 'checked' : 'uncheked'}
              />
            </View >
          </TouchableWithoutFeedback>
        </View> */}
        <View style={style.titleContainer}>
          <Title style={style.title}>
            {/* <Icon name="info" size={25} /> */}
            {'  '}
            {t('common:more')}
          </Title>
        </View>
        <View style={{ marginLeft: 20, alignItems: 'flex-start' }}>
          <Button
            onPress={() => updateData('Lista De Apartados')}
            color="white"
            icon={({ size, color }) => (
              <Icon name="home" color={color} size={20} />
            )}
          >
            <Text style={style.button}>Inicio</Text>
          </Button>

          <Button
            onPress={() => updateData('Contactos')}
            color="white"
            icon={({ size, color }) => (
              <Icon name="phone" color={color} size={20} />
            )}
          >
            <Text style={style.button}>Contactos</Text>
          </Button>
        </View>
      </View >
      <View style={{ flex: 0.2 }}>
        <Footer />
      </View>
    </View >
  );
}

const style = StyleSheet.create({
  titleContainer: {
    marginBottom: 10,
    marginTop: 20
  },
  title: {
    color: 'white',
    marginLeft: 25,
    fontSize: 25
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginLeft: 30,
    marginBottom: 10,
    backgroundColor: 'rgba(0,0,0,.70)',
  },
  imagetourism: {
    height: 50,
    width: 50,
    marginTop: 10
  },
  divider: {
    backgroundColor: 'gray'
  },
  button: {
    fontSize: 20,
    marginLeft: 5,
    fontWeight: 'bold'
  }
});
