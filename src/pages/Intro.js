import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View, Text
} from 'react-native';

//import Lottie from 'lottie-react-native';
import leprechaun from '../../assets/leprechaun.gif'
//import leprechaun from '../../assets/leprechaun.json'
import { getQuote } from '../../serves/api';

export default function Intro({ navigation }) {

  const [quote, setQuote] = useState('Does she talk to yo? Or just answer you?');


  useEffect(() => {

    setInterval(()=>{
      navigation.navigate('Home')
    }, 5000)
    async function getRandomQuote() {
      const res = await getQuote()
      setQuote(res.data);
    }

    getRandomQuote();

  }, []);




  return (
    <SafeAreaView style={styles.container}>
      {/* <Lottie
        source={leprechaun}
        style={styles.anim}
        autoPlay
        resizeMode="contain"
      /> */}

      <View style={styles.circle}>
        <Image source={leprechaun} style={styles.anim} />
      </View>
      <View style={styles.letter}>
        <Text style={styles.text}>
          {quote.data}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#171738',
  },
  anim: {
    width: 280,
    height: 280,
  },
  circle: {
    height: 300,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#197278",
    borderStyle: 'solid',
    borderWidth: 12,
    borderRadius: 210,
    overflow: 'hidden',
  },
  letter: {
    margin: 30,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 20,
    fontFamily: 'sans-serif'
  }
});