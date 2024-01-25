import {Searchbar} from 'react-native-paper';
import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import AppContext from '../../context/AppContext';

export default function Search() {
  const {setSearch} = useContext(AppContext);
  return (
    <View>
      <Searchbar
        onChangeText={text => setSearch(text)}
        iconColor="black"
        placeholder="ENCUENTRA!"
        clearAccessibilityLabel="clear"
        clearIcon="alpha-x-circle-outline"
        style={style.container}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginLeft: 88,
    marginTop: -30,
    marginBottom: 40,
    width: 250,
    height: 40,
    borderRadius: 15,
  },
});
