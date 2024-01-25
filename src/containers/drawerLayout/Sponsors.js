import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import { Svg, Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import React from 'react';

export default function Sponsors() {
    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={styles.containerTourism} >
                <Image
                    source={require('../../assets/potosyMas.jpg')}
                    imageStyle={{}}
                    style={styles.imagetourism}
                    blurRadius={1}
                />
            </View>
            <View style={styles.containerTourism} >
                <Image
                    source={require('../../assets/infotur.jpg')}
                    imageStyle={{}}
                    style={styles.imagetourism}
                    blurRadius={1}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerTourism: {
        width: 130,
        height: 110,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    imagetourism: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
});