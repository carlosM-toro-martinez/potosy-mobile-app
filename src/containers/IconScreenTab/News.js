import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTranslation } from 'react-i18next';

export default function News(props) {
  const { color, count } = props;
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Icon name="calendar" color={color} size={29} />
      <View
        style={styles.containerCount}>
        <Text
          style={{
            color: count === 0 ? 'white' : 'red',
            fontSize: 25, marginLeft: 58,
            marginTop: 5,
          }}>
          {count}
        </Text>
      </View>
      <Text style={{ color: color, fontSize: 10 }}>
        {t('common:news')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCount: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
})
