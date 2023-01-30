import React, { Component } from 'react'
import { Text, View,StyleSheet,Image,Pressable} from 'react-native'
import FormRegister from './FormRegister';


export default function Register ({navigation}) {
 
    return (
      <View style={styles.cajaRegister}>

        <Image source={require('../../assets/Marvel-Comics-logo.png')} style={styles.imgRegister}/>
         <FormRegister/>

         <Pressable onPress={()=>navigation.navigate("Login")}  >
          <Text>Tenes cuenta? Logueate </Text>
       </Pressable>
      </View>
    )

}

const styles = StyleSheet.create({
    cajaRegister:{
     
      flex:1,
      backgroundColor:'black',
      justifyContent:'center',
      alignItems:'center',
      paddingTop:110,
      },
      imgRegister:{
        width:230,
        height:100,
       
      }
    })

