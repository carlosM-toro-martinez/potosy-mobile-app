import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventosProximos from '../components/Eventos/EventosProximos';
const Stack = createNativeStackNavigator();

export default function EventosNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Evento"
        component={EventosProximos}
        options={{ title: 'Proximos Eventos' }}
      />
    </Stack.Navigator>
  );
}
