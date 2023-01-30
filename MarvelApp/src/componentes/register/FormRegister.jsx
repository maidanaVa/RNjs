import React, { Component } from 'react'
import { Text, View,TextInput,Button,StyleSheet } from 'react-native'
import { Formik } from 'formik'; 
import registerUser from '../../functions/registerUser';
import * as yup from 'yup';

const schemaRegister= yup.object().shape({
     email: yup.string().email().required(),
     password: yup.string().min(6).required(),
   });
   
export default function  FormRegister () {

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
        validationSchema={schemaRegister}
        onSubmit={(values)=>{
           registerUser(values.email,values.password);
           
        }}
        >
         {(props)=>(
            <View style={{width:'100%',flex:1}} >
    
            <View >
                 <TextInput style={styles.input} placeholder='Email' onChangeText={props.handleChange('email')} value={props.values.email}/>
                 <Text style={styles.textErrors}>{props.errors.email}</Text>
           </View>
            <View >
                 <TextInput style={styles.input} placeholder='Password' onChangeText={props.handleChange('password')} value={props.values.password}/>
                 <Text style={styles.textErrors}>{props.errors.password}</Text>
            </View>
 
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