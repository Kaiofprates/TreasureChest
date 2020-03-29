import { StyleSheet} from 'react-native';

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

  
  module.exports = styles;