import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTranslation } from 'react-i18next';

export default function List(props) {
    const { color } = props;
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <Icon name="place-of-worship" color={color} size={25} />
            <Text style={{ color: color, fontSize: 10 }}>
                {t('common:list')}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
