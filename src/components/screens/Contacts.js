import { View, Modal, ImageBackground, StyleSheet, Image, TouchableWithoutFeedback, Text } from 'react-native'
import React, { useState } from 'react';
import ContactDetails from '../contactsComponents/ContactDetails';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

export default function Contacts() {
    const [modalVisible, setModalVisible] = useState(false);
    const [contact, setContact] = useState('alcaldia');
    const navigation = useNavigation();
    const onclickMenu = () => {
        navigation.openDrawer();
    };

    const gotoModal = (contact) => {
        setModalVisible(!modalVisible);
        setContact(contact)
    }
    return (
        <>
            <View style={{ marginLeft: 15, marginTop: 15 }} >
                <Icon name="bars" size={27} color="white" onPress={onclickMenu} />
            </View>
            <View style={style.background}>
                <Text style={styles.text} >
                    Contactos
                </Text>
                <View style={style.imageContainer}>
                    <TouchableWithoutFeedback onPress={() => gotoModal('secretaria')}>
                        <Image
                            source={require('../../assets/infotur.jpg')}
                            style={style.image}
                            blurRadius={1}>
                        </Image>
                    </TouchableWithoutFeedback>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <ContactDetails contact={contact} />
                </Modal>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
    },
    imageContainer: {
        flexDirection: 'row',
        marginTop: 40,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 30,
        marginLeft: 10,
        borderWidth: 4,
        borderColor: '#CC3700',
    },
    button: {
        width: 200,
    }
});

const styles = StyleSheet.create({
    text: {
        paddingHorizontal: 35,
        textAlign: 'center',
        color: 'white',
        letterSpacing: 3,
        fontSize: 26,
        fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
        textTransform: 'uppercase',
    },
});
