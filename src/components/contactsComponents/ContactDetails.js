import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

export default function ContactDetails() {
    const openLink = (url) => {
        Linking.openURL(url).catch((err) => console.error('Error opening link: ', err));
    };
    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.title} >INFOTUR INFORMACIÓN</Text>
                <Image
                    source={require('../../assets/infotur.jpg')}
                    style={styles.image}
                    blurRadius={1}>
                </Image>
                <Text style={styles.text} >
                    Números de Infotur: 6231021
                </Text>
                <Text style={styles.text} >
                    Dirección: Calle Ayacucho s/n Potosí, Bolivia
                </Text>
                <Text style={styles.text} >
                    Asesorar en el manejo del tiempo al visitante nacional e internacional, brindando información de manera clara y cordial a quien así lo requiera acerca de los servicios y oferta turística con la que se cuenta a nivel departamental y nacional.
                </Text>
                <View style={styles.socialNetContainer}>
                    <TouchableOpacity onPress={() => openLink('https://www.facebook.com')}>
                        <Icon name="facebook-square" size={50} color="#3b5998" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openLink('https://www.instagram.com')}>
                        <Icon name="instagram-square" size={50} color="#F58529" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openLink('https://wa.me')}>
                        <Icon name="whatsapp-square" size={50} color="green" style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'black',
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
    text: {
        color: 'black',
        marginTop: 10
    },
    title: {
        color: 'black',
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 20
    },
    socialNetContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon: {
        marginLeft: 20
    }
});