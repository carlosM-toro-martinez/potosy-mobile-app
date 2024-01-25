import { TouchableWithoutFeedback, StyleSheet, Modal, View } from 'react-native';
import React, { useState } from 'react';
import { Avatar, Button, Card, Text, Title, IconButton } from 'react-native-paper';
import EventosDetails from './EventosDetails';
import { useTheme } from '@react-navigation/native';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function EventoCard(props) {
  const { colors } = useTheme();
  const { evento } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const gotoModal = () => setModalVisible(!modalVisible);

  return (
    <TouchableWithoutFeedback onPress={gotoModal}>
      <View style={styles.container} >
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <EventosDetails setModalVisible={setModalVisible} modalVisible={modalVisible} evento={evento} />
            <Button
              title="Cerrar"
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </Modal>
        <View style={{ flex: 1, flexDirection: 'row', }}>
          <Card.Cover
            source={{ uri: evento.promotional_image_url }}
            style={{
              height: 100,
              width: 100,
              marginRight: 10
            }}
          />
          <View>
            <Text style={[styles.title, { color: colors.text }]} numberOfLines={1} ellipsizeMode="tail" >{evento.title}</Text>
            <Text numberOfLines={4} ellipsizeMode="tail" style={styles.subtitle} >{evento.description}</Text>
          </View>
        </View>
      </View>


    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    margin: 15,
  },
  containerCard: {
    width: 300,
    marginBottom: 20
  },
  title: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 18,
    width: 220
  },
  subtitle: {
    textTransform: 'capitalize',
    color: '#7E7E7E',
    fontSize: 14,
    width: 240,
  }

});
