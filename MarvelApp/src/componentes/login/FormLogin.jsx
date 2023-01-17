import React, { Component } from 'react'
import { Text, View,TextInput,Button,StyleSheet } from 'react-native'
import { Formik } from 'formik'; 
import loginWithEmailAndPass from '../../functions/loginWithEmailAndPass';
import { useNavigate } from 'react-router-native';


export default function  FormLogin () {
   const navigate=useNavigate()
    return (
      <View style={{marginVertical:20,width:320,backgroundColor:'blue',height:240}}>
        <Formik initialValues={{
            username:'',
            password:'',
        }}
        onSubmit={(values)=>{
            console.log(values)
           loginWithEmailAndPass(values.username,values.password);
           navigate('/characters')

        }}
        >
         {(props)=>(
            <>
            <View style={{backgroundColor:'orange'}}>
                 <TextInput style={styles.input} placeholder='Usuario' onChangeText={props.handleChange('username')} value={props.values.username}/>
            </View>
            <View style={{backgroundColor:'pink'}}>
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