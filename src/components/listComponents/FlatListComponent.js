import React, { useContext } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import ItemCard from './ItemCard';
import { Paragraph } from 'react-native-paper';
import AppContext from '../../context/AppContext';

export default function FlatListComponent(props) {
    const { colors } = useTheme();
    const {
        loading,
    } = useContext(AppContext);
    const { items, sectionDes } = props;
    return (
        <View style={styles.container}>
            {sectionDes ? <Paragraph style={[styles.text, { color: colors.text }]} >{sectionDes}</Paragraph> : <Paragraph style={styles.text} >cargando...</Paragraph>}
            {!loading ? <FlatList
                data={items}
                numColumns={1}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                keyExtractor={item => item.business_id}
                renderItem={({ item }) => <ItemCard item={item} />}
                style={styles.flatListContentContainer}
            /> : <Paragraph style={[styles.text, { color: colors.text }]} >cargando...</Paragraph>}
        </View>
    )
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        gap: 10
    },
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: '5%'
    },
    text: {
        //color: '#FFDAB9',
        paddingHorizontal: 15,
        marginBottom: 15,
        textAlign: 'center',
        fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
        fontSize: 12,
        lineHeight: 15,
        marginBottom: '5%'
    },
});
