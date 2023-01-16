import React, { Component } from 'react'
import { Text, View,TextInput,Button,StyleSheet } from 'react-native'
import { Formik } from 'formik'; 

export default function  FormLogin () {
 
    return (
      <View style={{marginVertical:20,width:320,backgroundColor:'blue',height:240}}>
        <Formik initialValues={{
            username:'',
            password:'',
        }}
        onSubmit={(values)=>{
            console.log(values)
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