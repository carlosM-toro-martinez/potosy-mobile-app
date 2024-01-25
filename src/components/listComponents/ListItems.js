import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AppContext from '../../context/AppContext';
import Header from './Header';
import FlatListComponent from './FlatListComponent';

export default function ListaMuseos() {
  const [items, setItems] = useState([]);

  const {
    data,
    route,
    loading,
    sectionDes,
  } = useContext(AppContext);

  useEffect(() => {
    if (loading) {
      const filtered = data.filter(item => item.state === true);
      setItems(filtered);
    }
  }, [loading, data])

  return (
    <View style={{ flex: 1, }}>
      <View style={styles.container}>
        <Header screen={route} />
        {data.length > 0 || !loading ?
          <FlatListComponent
            sectionDes={sectionDes} items={items} />
          : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',

  }
});


