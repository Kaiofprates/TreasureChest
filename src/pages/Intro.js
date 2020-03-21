import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
} from 'react-native';

import Lottie from 'lottie-react-native';
import leprechaun from '../../assets/leprechaun.json';

export default function Intro({ navigation }) {

  setInterval(()=>{
    navigation.navigate('Home')
  }, 4000)

  return(
    <SafeAreaView style={styles.container}>
      <Lottie
        source={leprechaun}
        style={styles.anim}
        autoPlay
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  anim: {
    width: 300,
    height: 300,
  }

});