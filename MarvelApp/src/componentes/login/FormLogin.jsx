import React, { Component } from 'react'
import { Text, View,TextInput,Button,StyleSheet } from 'react-native'
import { Formik } from 'formik'; 
import loginWithEmailAndPass from '../../functions/loginWithEmailAndPass';
import * as yup from 'yup';

const schemaLogin = yup.object().shape({
  username: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export default function  FormLogin () {
 

    return (
      <View style={{marginVertical:20,width:320,height:240}}>
        <Formik initialValues={{
            username:'',
            password:'',
        }}
        validationSchema={schemaLogin}
        onSubmit={(values)=>{
            loginWithEmailAndPass(values.username,values.password);
        
        }}
        >
         {(props)=>(
            <>
            <View >
                 <TextInput style={styles.input} placeholder='Username' onChangeText={props.handleChange('username')} value={props.values.username}/>
                 <Text style={styles.textErrors}>{props.errors.username}</Text>
            </View>
            <View >
                 <TextInput style={styles.input} placeholder='Password' onChangeText={props.handleChange('password')}  value={props.values.password}/>
                 <Text style={styles.textErrors}>{props.errors.password}</Text>
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
    marginBottom:2,
    height:65,
    borderRadius:5,
    paddingLeft:20,
},
textErrors:{
  color:'red',
  fontSize:12,
  marginBottom:5,

}
})