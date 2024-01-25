import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { Card, Paragraph, Title, DataTable, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function EventosDetails(props) {
  const { evento, setModalVisible, modalVisible } = props;

  return (
    <View style={styles.centeredView}>
      <Card style={styles.modalView}>
        <View style={styles.closeButtonContainer}>
          <Button
            title=""
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Icon name="arrow-left" size={27} color={'black'} />
          </Button>
        </View>
        <Paragraph style={styles.title}>{evento.title}</Paragraph>
        <Card.Cover
          style={{ height: 200, marginBottom: 20, borderRadius: 10 }}
          source={{ uri: evento.promotional_image_url }}
        />
        <Card.Content>
          <Paragraph>{evento.description}</Paragraph>
        </Card.Content>
        <Card.Content>
          <Title>INFORMACION</Title>
          <Paragraph >Dirección: {evento.address}</Paragraph>
          <Paragraph>Hora: {evento.time}</Paragraph>
          <Paragraph>Fecha: {evento.date}</Paragraph>
          {/* Puedes agregar más detalles según tu estructura de datos */}
          {/* <Paragraph>Otro detalle: {evento.otroDetalle}</Paragraph> */}
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 23,
    padding: 15
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  modalView: {
    width: '90%',
    maxHeight: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 10,
  },
  closeButtonContainer: {
    position: 'absolute',
    zIndex: 1,
  },
  modalText: {
    textAlign: 'center',
    color: 'black',
  },
});

const fondo = StyleSheet.create({
  background: {
    background: '#17202A',
    textAlign: 'center',
    opacity: 0.85,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    flex: 1,
  },
  title: {
    backgroundColor: 'white',
    marginTop: 20

  },
});
