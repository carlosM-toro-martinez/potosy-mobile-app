import { View, Modal, ImageBackground, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react';
import { Button, Paragraph, Title } from 'react-native-paper';
import ContactDetails from '../contactsComponents/ContactDetails';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';

export default function About() {

    const [t] = useTranslation();

    return (
        <ImageBackground
            source={require('../../assets/cerro.jpg')}
            style={style.background}
            blurRadius={5}>
            <View style={style.container}>
                <Title style={style.title}>
                    {t('common:greeting')}
                </Title>
                <Paragraph style={style.paragraph}>
                    {t('common:welcome')}
                </Paragraph>
            </View>
        </ImageBackground>
    )
}

const style = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
    },
    container: {
        marginTop: 40,
        backgroundColor: 'white',
        opacity: 0.8
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10,
        padding: 20,
        fontSize: 25
    },
    paragraph: {
        padding: 20,
        fontSize: 18,
    }
});
