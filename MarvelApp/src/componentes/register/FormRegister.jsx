import React, { Component } from 'react'
import { Text, View,TextInput,Button,StyleSheet } from 'react-native'
import { Formik } from 'formik'; 
import registerUser from '../../functions/registerUser';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function  FormRegister ({isLoged2,setIsLoged2}) {

 async function condition2(){
     const okUser2= await AsyncStorage.getItem('usuarioTR');
       if(okUser2!==null){
        setIsLoged2(true) 
        }
     }

    return (
      <View style={{marginVertical:20,width:320,height:450,alignItems:'center'}}>
        <Text style={{color:'red',marginVertical:20}}>CREATE YOUR ACCOUNT</Text>
        <Formik initialValues={{
         /*    name:'',
            lastName:'', */
            email:'',
            password:'',
         /*    bday:'', */
        }}
        onSubmit={(values)=>{
           registerUser(values.email,values.password);
            condition2();
        }}
        >
         {(props)=>(
            <View style={{width:300,flex:1}}>
        {/*     <View >
                 <TextInput style={styles.input} placeholder='Name' onChangeText={props.handleChange('name')} value={props.values.name}/>
            </View>
            <View >
                 <TextInput style={styles.input} placeholder='Lastname' onChangeText={props.handleChange('lastName')} value={props.values.lastName}/>
            </View> */}
            <View >
                 <TextInput style={styles.input} placeholder='Email' onChangeText={props.handleChange('email')} value={props.values.email}/>
            </View>
            <View >
                 <TextInput style={styles.input} placeholder='Password' onChangeText={props.handleChange('password')} value={props.values.password}/>
            </View>
     {/*        <View>
                 <TextInput style={styles.input} placeholder='Bday' onChangeText={props.handleChange('bday')} value={props.values.bday}/>
            </View> */}


            <Button title='sign Up' color='red' onPress={props.handleSubmit}/>
            </View>
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