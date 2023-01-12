import React, { Component } from 'react'
import { Text, View,StyleSheet,Image,Pressable } from 'react-native'
import InputLabel from '../Globals/InputLabel'


export default function Login () {
 
    return (
      <View style={styles.cajaLogin}>
       <Image source={require('../../assets/Marvel-Comics-logo.png')} style={styles.imgLogin}/>
    
       <Text style={{color:'red',fontSize:18}}>SIGN IN</Text>
    
       <View style={{marginVertical:20}}>
          <InputLabel /* TextLabel='Usuario' */ textPlaceholder='usuario' boolTypeText={false} keyboardType='default'/>
          <InputLabel /* TextLabel='Contraseña'  */textPlaceholder='contraseña' boolTypeText={false} keyboardType='default'/>
       </View>
       
       <Pressable style={styles.btnLogin}>
         <Text style={{fontWeight:'bold',color:'white'}}>SIGN IN</Text>
       </Pressable>
       <Pressable style={styles.btnCreate}>
         <Text style={{fontWeight:'bold',color:'black'}}>CREATE ACCOUNT</Text>
       </Pressable>
      </View>
    )

}

const styles = StyleSheet.create({
  cajaLogin:{
   
    flex:1,
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center',
    
    },
    imgLogin:{
      width:230,
      height:100,
      marginBottom:100,
     
    },
    btnLogin:{
      width: 300,
      height:55,
      marginTop:20,
      backgroundColor:'#e00000',
      alignItems:'center',
      justifyContent:'center',
      elevation: 3,
    },
    btnCreate:{
      backgroundColor:'back',
      width:200,
      height:50,
      alignItems:'center',
      justifyContent:'center',
      borderColor:'grey',
      borderWidth:2,
    }
})
