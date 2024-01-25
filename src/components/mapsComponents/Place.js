import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

export default function Place(props) {
  0
  const { item } = props;
  return Object.entries(item).length > 0 ? (
    <ImageBackground source={{ uri: item.logo_url }} style={styles.font} blurRadius={1}>
      <ScrollView style={{ flex: 1, backgroundColor: 'rgba(255,255,255,.5)' }}>
        <View style={styles.content}>
          <View
            style={{
              marginTop: 3,
              flex: 0.8,
              alignItems: 'center',
            }}>
            <Text style={styles.title}>{item.business_name}</Text>
            <Text style={styles.text}>CALLE: {item.address}</Text>
            <Text style={styles.text}>
              LAT: {item?.coordinates?.x}
            </Text>
            <Text style={styles.text}>
              {' '}
              LONG: {item?.coordinates?.y}
            </Text>
          </View>
          <View
            style={{
              marginTop: 3,
              flex: 0.2,
              flexDirection: 'row',
            }}>
            <Icon name="user" size={30} color="black"></Icon>
            <Icon
              name="arrow-right"
              size={30}
              color="blue"
              style={{ marginEnd: 50, marginStart: 50 }}></Icon>
            <Icon name="church" size={30} color="black"></Icon>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  ) : null;
}

const styles = StyleSheet.create({
  font: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  content: {
    background: '#17202A',
    flex: 1,
    alignItems: 'center',
    width: 400,
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  text: {
    maxWidth: 300,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
