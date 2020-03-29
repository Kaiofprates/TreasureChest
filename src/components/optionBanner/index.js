import React, {
  useState
} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Modal,  TextInput, Alert
} from 'react-native'

import styles from './styles';

import {downloadMovie} from '../../../serves/api'


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
        'Download Info:',
        'Your movie will be downloaded soon.',
        [],
        {cancelable: true}
      )
    } else{
      Alert.alert(
        'Download Info:',
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
          <TextInput  clearButtonMode="always" placeholder="User Name" onChangeText={setUser} style={styles.textInput}>
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






 