import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetalleItem from '../components/screens/DetalleItem';
import ListaNavigator from './ListaNavigation';
import Map from '../components/screens/Map';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Contacts from '../components/screens/Contacts';
import About from '../components/screens/About';

const Stack = createNativeStackNavigator();

export default function Navigation(props) {
  const { navigation } = props;
  const onclickMenu = () => {
    navigation.openDrawer();
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name='Lista De Apartados'
        component={ListaNavigator}
        options={() => ({
          headerShown: false,
          headerLeft: () => (
            <Icon name="bars" size={23} color="white" onPress={onclickMenu} />
          ),
        })}
      />
      <Stack.Screen
        name="Detalles del museo"
        component={DetalleItem}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Contactos"
        component={Contacts}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Acerca De"
        component={About}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Mapa"
        component={Map}
        options={() => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}
