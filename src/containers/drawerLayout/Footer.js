import React, { useEffe } from 'react';
import { Button, View } from 'react-native';
import Animated, { useSharedValue } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Sponsors from './Sponsors';

export default function Footer() {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = width.value - 50;
  };

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Sponsors />
    </View>
  );
}

