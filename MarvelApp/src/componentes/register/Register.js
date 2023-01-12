import React, { Component } from 'react'
import { Text, View,StyleSheet,Image,Pressable, TextInput } from 'react-native'
import InputLabel from '../Globals/InputLabel';


export default function Register () {
 
    return (
      <View style={styles.cajaRegister}>

        <Image source={require('../../assets/Marvel-Comics-logo.png')} style={styles.imgLogin}/>
        <InputLabel /* TextLabel='Usuario' */ textPlaceholder='Nombre' boolTypeText={false} keyboardType='default'/>
       <InputLabel /* TextLabel='Contraseña'  */textPlaceholder='Apellido' boolTypeText={false} keyboardType='default'/>
       <InputLabel textPlaceholder="Email"/*  value={email} */  /*  onChangeText={(text) => setEmail(text)} */  keyboardType="email-address" boolTypeText={false}/>

         <Pressable style={{backgroundColor:'#e00000',width:200,height:50,alignItems:'center',justifyContent:'center'}}>
            <Text>Registrarse</Text>
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
      
      },
      imgRegister:{
        width:230,
        height:100,
      }
    })