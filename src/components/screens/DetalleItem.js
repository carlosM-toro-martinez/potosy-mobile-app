import {
  StyleSheet,
  ScrollView,
  ImageBackground,
  Text,
  View,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Button, Card, Paragraph, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AppContext from '../../context/AppContext';
import { useTranslation } from 'react-i18next';
import Carousel from './Carousel';

const LeftContent = () => (
  <Avatar.Icon
    size={40}
    icon="clipboard-list"
    color="black"
    style={fondo.title}
  />
);

export default function DetalleMuseo(props) {
  const { setPress, setEventToMap, eventToMap } = useContext(AppContext);
  const { route } = props;
  const item = route.params.item;
  const { business_name, business_description, days_attention, logo_url, phone_number, website_url, mail, address, coordinates, state, section_title, section_description, section_image, socialnetworks, promotions, products, openinghours, images } = item;
  const idMuseo = route.params.id;
  const navigation = useNavigation();
  const { t } = useTranslation();

  if (eventToMap) setEventToMap(false);

  const goToMap = () => {
    navigation.navigate('Mapa', { id: idMuseo, item: item });
    setPress(true);
  };

  function handleweb(item) {
    const web = item;
    Linking.openURL(web);
  }

  const openLink = (url) => {
    if (url && typeof url === 'string' && url.trim() !== '') {
      Linking.openURL(url).catch((err) => console.error('Error opening link: ', err));
    } else {
      alert('El establecimiento aún no cuenta con esta red social o la URL es inválida');
    }
  };

  return (
    <View style={fondo.background}>
      <ScrollView>
        <Text style={fondo.textTitle}>
          {t('common:details')}
        </Text>
        <Card.Title
          title={business_name}
          left={LeftContent}
        />
        <Card.Content>
          <Carousel images={images} />
          <Paragraph>{business_description}</Paragraph>
        </Card.Content>

        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <Title>Información</Title>

          <Title style={{ marginBottom: 5, marginTop: 5, fontSize: 15 }}>
            Horarios de Atención
          </Title>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {openinghours && openinghours.length > 0 && (
              <Text style={{ color: 'black' }}>
                {openinghours.map((hours, index) => (
                  <React.Fragment key={index}>
                    Mañana: {hours.morning_hours.join(' - ')} {'   '}
                    Tarde: {hours.afternoon_hours.join(' - ')}
                  </React.Fragment>
                ))}
              </Text>
            )}
          </View>
          <Title style={{ marginBottom: 5, marginTop: 5, fontSize: 15 }}>
            Contactos
          </Title>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            <View>
              {phone_number && (
                <Text style={{ color: 'black' }}>
                  <Icon name="phone" size={20} color="#00C617" /> {'    '}
                  {phone_number}
                </Text>
              )}

              {mail ? (
                <Text style={{ color: 'black' }}>
                  <Icon name="envelope" size={20} color="#FF3232" /> {'    '}
                  {mail}
                </Text>
              ) : null}
              {website_url ? (
                <TouchableOpacity onPress={() => handleweb(website_url)}>
                  <View style={{ flexDirection: 'row' }}>
                    <Icon name="globe" size={20} color="#43007C" />
                    <Text style={{ color: 'black' }}>
                      {'    '}{website_url}
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : null}
            </View>
          </View>
          <View style={fondo.socialNetContainer}>
            <TouchableOpacity onPress={() => openLink(socialnetworks[0].facebook_url)}>
              <Icon name="facebook-square" size={50} color="#3b5998" style={fondo.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink(socialnetworks[0].instagram_url)}>
              <Icon name="instagram-square" size={50} color="#F58529" style={fondo.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink(`https://wa.me/${socialnetworks[0].whatsapp_number}`)}>
              <Icon name="whatsapp-square" size={50} color="green" style={fondo.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <Card.Actions>
          {<Button
            style={fondo.button}
            icon="map-marker"
            onPress={goToMap}
            color="#000541">
            {t('common:howToGet')}
          </Button>}
        </Card.Actions>
      </ScrollView>
    </View>
  );
}

const fondo = StyleSheet.create({
  image: {
    flex: 1
  },
  background: {
    height: '100%',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
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
  },
  textTitle: {
    paddingHorizontal: 20,
    marginTop: 10,
    textAlign: 'center',
    color: 'black',
    fontSize: 28,
    letterSpacing: 3,
    fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
    textTransform: 'uppercase',
  },
  socialNetContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    marginLeft: 20
  }
});
