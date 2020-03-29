import {
StyleSheet
} from 'react-native';

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


    module.exports = styles;