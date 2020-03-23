import React from 'react'
import OptionBanner from './optionBanner';
import {
    Text, StyleSheet, 
    ImageBackground,
    Modal, FlatList
} from 'react-native'

export default function ModalBanner(props) {

    return (
        <>
            <Modal visible={props.visible} transparent={true} animationType="slide">
                <ImageBackground source={{
                    uri: props.img
                }} style={styles.modalImage}>
                    <Text>Inside</Text>
        <FlatList
          data={[
            {name: "WEB-DL 720p Dual Áudio"},
            {name: "WEB-DL 1080p Dual Áudio"},
            {name: "WEB-DL 720p Legendado"},
            {name: "WEB-DL 1080p Legendado"},
          ]}
          renderItem={({item}) => <OptionBanner qualit={item.name}/>}
        />

                </ImageBackground>
            </Modal>
        </>
    );

}

const styles = StyleSheet.create({
    modalImage: {
        width: '93%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center",
        alignContent: "center",
        margin: 20
    }
});