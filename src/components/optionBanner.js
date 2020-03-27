import React, {
  useState
} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Modal, StyleSheet, TextInput, Alert
} from 'react-native'

import {downloadMovie} from '../../serves/api'


export default function OptionBanner(props) {


  const [modalVisible, setModalVisible] = useState(false)
  const [user, setUser] = useState('');

  async function leprechaun(){
    const body = {
      user,
      name: props.name,
      link: props.magnet,
      type: "movie"
    }
    const res  = await downloadMovie(body);
    if(res.status == 201){
      Alert.alert(
        'Donwload Info:',
        'Your movie will be downloaded soon.',
        [],
        {cancelable: true}
      )
    } else{
      Alert.alert(
        'Donwload Info:',
        'Something went wrong, try again.',
        [],
        {cancelable: true}
      )
    }
  }


  function setModal() {
    setModalVisible(!modalVisible);
  }


  return (
    <View >
      {/** -----------------------------  inicio do modal -------------------- */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModal();
        }}

        style={styles.modal}
      >
       <View style={styles.container}>

       <View style={styles.inputM}>
          <TextInput placeholder="User Name" onChangeText={setUser} style={styles.textInput}>
          </TextInput>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            leprechaun();
          }}  >
          <Text style={styles.text} >
            Download
            </Text>
        </TouchableOpacity>

       </View>
  
      </Modal>
      {/** ------------------------------------------------ */}
      <TouchableOpacity onPress={() => {
        setModal()
      }}>
        <View style={{
          backgroundColor: '#E6E6FA',
          height: 40,
          justifyContent: "center",
          width: 200,
          borderRadius: 20,
          margin: 8
        }}>
          <Text
            numberOfLines={1}
            style={{
              justifyContent: "center",
              textAlign: "center"
            }}>
            {props.qualit}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
 justifyContent: "center",
 alignContent: "center",
 textAlign: "center",
 margin: 20,
 backgroundColor: "#171738",
 borderRadius: 20,
 padding: 25,
 alignItems: "center",
 shadowColor: "#000",
 shadowOffset: {
   width: 0,
   height: 2
 },
 shadowOpacity: 0.25,
 shadowRadius: 3.84,
 elevation: 5,
  },
  button:{
     backgroundColor: "#7180B9",
     height: 60,
     width: 200,
     borderRadius: 4,
     justifyContent: 'center',
     alignItems: 'center'
  },
  text: {
   color: "white",
   fontSize: 30
  },
  modal: {
  flex: 1,
  backgroundColor: "#197278",
  height: "50%",
  width: "50%"
  },
  inputM: {
     backgroundColor: "#7180B9",
     height: 60,
     width: 200,
     borderRadius: 4,
     justifyContent: 'center',
     alignItems: 'center',
     margin: 10,
     
  },
  textInput: {
   backgroundColor: "#Fff",
    textAlign: "center",
    fontSize: 13,
    height: 50,
    borderRadius: 5,
    color: "indigo",
    width: 190
  }
  });



 