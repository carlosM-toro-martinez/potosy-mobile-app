import { TouchableWithoutFeedback, StyleSheet, Modal, View } from 'react-native';
import React from 'react';
import ContactDetails from './ContactDetails';

export default function Modal() {
    const [modalVisible, setModalVisible] = useState(false);
    const gotoModal = () => setModalVisible(!modalVisible);
    return (
        <TouchableWithoutFeedback onPress={gotoModal}>
            <View style={styles.container}>
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
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 10,
    },
    centeredView: {
        borderRadius: 10,
        flex: 1,
    },
    show: {
        flex: 1,
        justifyContent: 'center',
    },
});
