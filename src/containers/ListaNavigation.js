/* eslint-disable react/no-unstable-nested-components */
import React, { useContext, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppContext from '../context/AppContext';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EventosNavigator from './EventosNavigation';
import ListItems from '../components/listComponents/ListItems';
import News from './IconScreenTab/News';
import List from './IconScreenTab/List';

const Tab = createBottomTabNavigator();

export default function ListaNavigation(props) {
  const [countEvents, setCountEvents] = useState(0);
  const { evento, loading, filterEvents, setFilterEvents, route } =
    useContext(AppContext);

  const evento1 = evento;

  useEffect(() => {
    const count = evento1.length;
    setCountEvents(count);
  }, [loading, evento]);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#333333',
          height: 70,
        },
        tabBarActiveTintColor: '#FFDAB9',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Museo"
        component={ListItems}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <List color={color} />
          ),
          tabBarColor: 'white',
        }}
      />

      <Tab.Screen
        name="Eventos"
        component={EventosNavigator}
        initialParams={{
          nameItem: route,
          evento: filterEvents,
        }}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <News color={color} count={countEvents} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
