import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  FlatList,
  TextInput,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import { Icon } from 'react-native-elements';

import icon from '../../assets/TreasureChest.png';
import Banner from '../components/banner';
import { getFilmes } from '../../serves/api';

export default function Main() {

  const [dados, setdados] = useState();

  useEffect(() => {

    async function extrator() {
      const res = await getFilmes();
      setdados(res.data);

    }

    extrator();
    console.log(dados)
  });


  renderItem = ({ item }) => (<Banner key={item} nome={item.nome} url={item.img} />);

  return (
    <SafeAreaView style={styles.container}>
      {/*  ---------- inicio do header ------------- */}
      <View style={styles.header}>
        <Image source={icon} style={styles.icon} />
        <View style={styles.search}>
          <TextInput placeholder="search" style={styles.input}></TextInput>
          <Icon
            raised
            name='search'
            type='font-awesome'
            color='#25A49A'
            size={19}
            onPress={() => console.log('hello')} />
        </View>
      </View>
      {/*  ---------- fim do header ------------- */}
      <ScrollView style={styles.pelicula}>
        <FlatList
          data={dados}
          renderItem={renderItem}
          numColumns={2}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007245',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 100,
    width: 190,
  },
  input: {
    height: 41,
    fontSize: 19,
    backgroundColor: '#25A49A',
    justifyContent: "center",
    width: 230,
    borderRadius: 5,
    marginTop: 4,
    textAlign: "center",

  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40
  },
  search: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  banner: {
    backgroundColor: "#3F2992",
    height: 90,
    margin: 5,
    width: 100,
    borderRadius: 5,
    justifyContent: "center",

  },
  pelicula: {
    padding: 9
  }

});
