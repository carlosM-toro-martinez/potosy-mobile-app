import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const Carousel = ({ images }) => {
    return (
        <Swiper
            style={styles.wrapper}
            showsButtons={false}
            autoplay={true}
        >
            {images.map((image, index) => (
                <View key={index} style={styles.slide}>
                    <Image source={{ uri: image.image_url }} style={styles.image} />
                </View>
            ))}
        </Swiper>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        height: 250,
        marginBottom: 20
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});

export default Carousel;
