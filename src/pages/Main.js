import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  FlatList,
  TextInput,
  ScrollView,
  SafeAreaView,
  ActivityIndicator
} from 'react-native';

import styles from './styles';
import { Icon } from 'react-native-elements';
import Options from '../components/optionBanner/index';
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
      setSearch('');
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
          <TextInput onChangeText={setSearch} clearTextOnFocus={true}
            placeholder="Search" placeholderTextColor="#FFF" value={search}
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

        <FlatList
          data={dados}
          renderItem={renderItem}
          numColumns={2}
          style={styles.pelicula}
        />
    </SafeAreaView>
  );
}

