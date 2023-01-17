import React, { Component } from 'react'
import { Text, View,TextInput,Button,StyleSheet } from 'react-native'
import { Formik } from 'formik'; 
import loginWithEmailAndPass from '../../functions/loginWithEmailAndPass';
import { useNavigate } from 'react-router-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { _fromIdTokenResponse } from '@firebase/auth/dist/rn/src/core/user/additional_user_info';
import firebaseApp from '../../firebase/credentials';


export default function  FormLogin () {
   const navigate=useNavigate();

  /*  const fetchAllItems = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys()
        const items = await AsyncStorage.multiGet(keys)
 
        console.log(items) 
    } catch (error) {
        console.log(error, "problemo")
    }
} */
  
    return (
      <View style={{marginVertical:20,width:320,height:240}}>
        <Formik initialValues={{
            username:'',
            password:'',
        }}
        onSubmit={(values)=>{
            
            loginWithEmailAndPass(values.username,values.password);
          /*   console.log(AsyncStorage.getItem('UserCredentialImpl')) */
            navigate('/characters');
            /* fetchAllItems() */

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
}
})