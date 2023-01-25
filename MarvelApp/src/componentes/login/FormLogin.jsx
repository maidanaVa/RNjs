import React, { Component } from 'react'
import { Text, View,TextInput,Button,StyleSheet } from 'react-native'
import { Formik } from 'formik'; 
import loginWithEmailAndPass from '../../functions/loginWithEmailAndPass';

import { _fromIdTokenResponse } from '@firebase/auth/dist/rn/src/core/user/additional_user_info';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function  FormLogin ({isLoged2,setIsLoged2 }) {
 
 async function condition(){
   const okUser= await AsyncStorage.getItem('usuarioT');
   if(okUser!==null){
    setIsLoged2(true) 
   }
 }

 console.log(isLoged2)

    return (
      <View style={{marginVertical:20,width:320,height:240}}>
        <Formik initialValues={{
            username:'',
            password:'',
        }}
        onSubmit={(values)=>{
          loginWithEmailAndPass(values.username,values.password);
           condition();
        
        }}
        >
         {(props)=>(
            <>
            <View >
                 <TextInput style={styles.input} placeholder='Username' onChangeText={props.handleChange('username')} value={props.values.username}/>
            </View>
            <View >
                 <TextInput style={styles.input} placeholder='Password' onChangeText={props.handleChange('password')} value={props.values.password}/>
            </View>
            <Button title='sign in' color='red' onPress={props.handleSubmit}/>
            
            </>
         )}
        </Formik>

   
      </View>
    )

}
const styles = StyleSheet.create({
input:{
    borderWidth:1,
    borderColor:'white',
    marginBottom:10,
    height:65,
    borderRadius:5,
    paddingLeft:20,
}
})