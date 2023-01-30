import React, { Component } from 'react'
import { Text, View,StyleSheet,Image,Pressable } from 'react-native'
/* import * as Animatable from 'react-native-animatable'; */
import FormLogin from './FormLogin'



export default function Login ({navigation}) {

    return (
      <View style={styles.cajaLogin}>
       <Image  source={require('../../assets/Marvel-Comics-logo.png')} style={styles.imgLogin}/>
       {/* <Animatable.Text animation={fadeInLeftBig} > HOLI</Animatable.Text> */}
       <Text style={{color:'red',fontSize:18}}>SIGN IN</Text>
    
         <FormLogin  />
       
      <Pressable onPress={()=>navigation.navigate("Register")}  >
       <Text>No tenes cuenta? Registrate </Text>
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
      marginBottom:70,
     
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



