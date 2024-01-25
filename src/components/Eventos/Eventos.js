import { View, StyleSheet, FlatList, Text, ScrollView } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import EventoCard from './EventoCard';
import { useNavigation, useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTranslation } from 'react-i18next';

export default function Eventos(props) {
  const { colors } = useTheme();
  const { evento } = useContext(AppContext);

  const { t } = useTranslation();

  const navigation = useNavigation();

  const onclickMenu = () => {
    navigation.openDrawer();
  };

  return evento.length > 0 ? (
    <View style={styles.container}>
      <View style={{ marginLeft: 20, marginTop: 20 }} >
        <Icon
          name="bars"
          size={27}
          color={colors.text}
          onPress={onclickMenu} />
      </View>
      <Text style={[styles.textTitle, { color: colors.text }]} >
        {t('common:newsTitle')}
      </Text>
      <FlatList
        data={evento}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        keyExtractor={evento => evento.novelty_id}
        renderItem={({ item }) => <EventoCard evento={item} />}
        contentContainerStyle={styles.flatListContentContainer}
      />
    </View>
  ) : (
    <View style={styles.contenedor}>
      <Text style={styles.text}>
        No existen noticias en este momento
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: 20,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contenedor: {
    flex: 1,
    alignItems: 'center',
  },
  textTitle: {
    marginTop: -10,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: 'white',
    fontSize: 28,
    letterSpacing: 3,
    fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
    textTransform: 'uppercase',
  },
});
