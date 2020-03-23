import * as React from 'react'
import{
View,
Text
}from 'react-native'

export default function OptionBanner(props){

    return(
        <>
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
        </>
          );
}