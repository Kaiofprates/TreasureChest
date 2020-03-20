import * as React from 'react'
import{
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';


export default function Banner(props){

return(
<>
<View style={styles.container}>
<View style={styles.banner}>
<Image source={{uri: props.url}} style={styles.imageBanner} resizeMode="stretch"/>
</View>
<View>
<Text numberOfLines={2} style={styles.textBanner}>
{props.nome}
</Text>
</View>
</View> 
</>
);}

const styles  = {
    container: {
     margin: 10
    },
     banner: {
     backgroundColor: 'rgba(70, 20, 20, 0.7)',
     height: 250,
     margin: 5,
     width: "100%",
     borderRadius: 5,
     justifyContent: "center",
     flexDirection: "column"
   },
   imageBanner: {
     height: 230,
     margin: 3,
   },
   textBanner:{
     width: 120,
     margin: 5
   }
 };