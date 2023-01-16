import React, { Component } from 'react'
import { Text, View,TextInput,Button,StyleSheet } from 'react-native'
import { Formik } from 'formik'; 

export default function  FormRegister () {
 
    return (
      <View style={{marginVertical:20,width:320,backgroundColor:'blue',height:450}}>
        <Formik initialValues={{
            name:'',
            lastName:'',
            email:'',
            password:'',
            bday:'',
        }}
        onSubmit={(values)=>{
            console.log(values)
        }}
        >
         {(props)=>(
            <>
            <View style={{backgroundColor:'orange'}}>
                 <TextInput style={styles.input} placeholder='Name' onChangeText={props.handleChange('name')} value={props.values.name}/>
            </View>
            <View style={{backgroundColor:'green'}}>
                 <TextInput style={styles.input} placeholder='Lastname' onChangeText={props.handleChange('lastName')} value={props.values.lastName}/>
            </View>
            <View style={{backgroundColor:'yellow'}}>
                 <TextInput style={styles.input} placeholder='Email' onChangeText={props.handleChange('email')} value={props.values.email}/>
            </View>
            <View style={{backgroundColor:'brown'}}>
                 <TextInput style={styles.input} placeholder='Password' onChangeText={props.handleChange('password')} value={props.values.password}/>
            </View>
            <View style={{backgroundColor:'violet'}}>
                 <TextInput style={styles.input} placeholder='Bday' onChangeText={props.handleChange('bday')} value={props.values.bday}/>
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