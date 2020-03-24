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
import icon from '../../assets/TreasureChest.png';
import Banner from '../components/banner';
import { getFilmes, getInfo } from '../../serves/api';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RBSheet from "react-native-raw-bottom-sheet";

export default function Main() {

  const [dados, setdados] = useState();
  const [loading, setLoading] = useState(true)
  const [qualit, setQualit] = useState([]);


  useEffect(() => {
    async function extrator() {
      const res = await getFilmes();
      setdados(res.data);
    }
    extrator();
    console.log("---SUCESS---")
  },[]);

 //-------------------------

  async function setInfo(url){
  await setQualit(false);  
  const res = await getInfo(url); 
  setQualit(res.data);
  console.log(res.data); 
  }

  //-------------------------

  renderItem = ({ item }) => (
    <TouchableOpacity 
    onPress={() => {
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
          <TextInput placeholder="Search" placeholderTextColor="#FFF" style={styles.input}></TextInput>
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

      { /** ----------------Botton Sheet-------------------- */}

      <RBSheet
        ref={ref => {
          this.RBSheet = ref;
        }}

        height={800}
        duration={200}
        customStyles={{
          container: {
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "'#007245"
          }
        }}
      >
        <View containerStyle={{ padding: 0 }}>

          {qualit? 
          qualit.map((info) => {return ( <Options key={info.url} qualit={info.name} /> );}) : 
          <ActivityIndicator size={60} color="#fff" />}

        </View>
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
    backgroundColor: '#007245',
    justifyContent: "center",
    width: 230,
    borderRadius: 15,
    marginTop: 4,
    textAlign: "center",
    color: 'white'

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
    borderColor: "white",
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
