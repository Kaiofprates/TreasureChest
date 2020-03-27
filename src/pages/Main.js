import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  FlatList,
  TextInput,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ActivityIndicator
} from 'react-native';

import { Icon } from 'react-native-elements';
import Options from '../components/optionBanner'
import icon from '../../assets/Treasure.png';
import Banner from '../components/banner';
import { getFilmes, getInfo, searchMovie } from '../../serves/api';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RBSheet from "react-native-raw-bottom-sheet";

export default function Main() {

  const [dados, setdados] = useState();
  const [magName, setMagName] = useState(true)
  const [qualit, setQualit] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function extrator() {
      const res = await getFilmes();
      setdados(res.data);
    }
    extrator();
    console.log("---SUCESS---")
  }, []);

  //-------------------------

  async function setInfo(url) {
    await setQualit(false);
    const res = await getInfo(url);
    setQualit(res.data);
    console.log(res.data);
  }

  async function query() {
    console.log('testando ----')
    try {
      const res = await searchMovie(search);
      setdados(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  //-------------------------

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        setMagName(item.nome);
        setInfo(item.url);
        this.RBSheet.open()
      }}>
      <Banner key={item} nome={item.nome} url={item.img} />
    </TouchableOpacity>

  );



  return (
    <SafeAreaView style={styles.container}>

      {/*  ---------- inicio do header ------------- */}
      <View style={styles.header}>
        <Image source={icon} style={styles.icon} />
        <View style={styles.search}>
          <TextInput onChangeText={setSearch}
            placeholder="Search" placeholderTextColor="#FFF"
            style={styles.input}></TextInput>
          <TouchableOpacity onPress={() => {
            query();
          }}>
            <Icon
              raised
              name='search'
              type='font-awesome'
              color='#25A49A'
              size={19}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/*  ---------- fim do header ------------- */}

      { /** ----------------Botton Sheet-------------------- */}

      <RBSheet
        ref={ref => {
          this.RBSheet = ref;
        }}

        height={400}
        duration={200}

        customStyles={{
          container: {
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "'#007245"
          }
        }}
      >
        <ScrollView containerStyle={{ padding: 0 }}>

          {qualit ?
            qualit.map((info) => {
              return (
                <Options key={info.url} qualit={info.name}  magnet={info.url} name={magName}/>
              );
            }) :
            <ActivityIndicator size={60} color="#fff" />}

        </ScrollView>
      </RBSheet>

      {/* ---------------------------------- */}

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
    backgroundColor: '#171738',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 100,
    width: 190,
  },
  input: {
    height: 41,
    backgroundColor: '#171738',
    justifyContent: "center",
    width: 230,
    borderRadius: 15,
    marginTop: 4,
    textAlign: "center",
    color: 'white',
    fontSize: 19

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
    alignItems: "center",
    margin: 5,
    borderWidth: 3,
    borderColor: "#3e6b26",
    borderStyle: "solid",
    borderRadius: 30
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
  },
  modalImage: {
    width: '93%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
    alignContent: "center",
    margin: 20
  },
  cardModal: {
    borderRadius: 20,
    height: 300
  }

});
