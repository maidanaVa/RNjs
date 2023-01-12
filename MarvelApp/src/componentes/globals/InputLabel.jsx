import React from 'react'
import { Text,TextInput,View,StyleSheet } from 'react-native'

export default function InputLabel ({TextLabel,textPlaceholder,boolTypeText,keyboardType}) {
  
    return (
      <View>
       {/* <Text style={{marginStart:30,color:'black',fontWeight:'bold'}}>{TextLabel}</Text> */}
      <TextInput placeholder={textPlaceholder} style={styles.inputText} placeholderTextColor="white" secureTextEntry={boolTypeText} keyboardType={keyboardType}/>
     
      </View>
    )

}
const styles = StyleSheet.create({
    inputText:{
        color:'white',
        width:300,
        height: 55,
        marginBottom:5,
        padding: 10,
        borderRadius:3,
        borderColor:'white',
        borderWidth:0.5,
      },
}
)
