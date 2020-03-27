import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View
} from 'react-native';

//import Lottie from 'lottie-react-native';
import leprechaun from '../../assets/leprechaun.gif'
//import leprechaun from '../../assets/leprechaun.json'
export default function Intro({ navigation }) {


useEffect(()=>{

  setInterval(()=>{
    navigation.navigate('Home')
  }, 4000)


},[]);


  

  return(
    <SafeAreaView style={styles.container}>
      {/* <Lottie
        source={leprechaun}
        style={styles.anim}
        autoPlay
        resizeMode="contain"
      /> */}
      <Image source={leprechaun}  style={styles.anim}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  anim: {
    width: 350,
    height: 350
  }
});