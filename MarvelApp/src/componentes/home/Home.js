import React, { Component } from 'react'
import { Text, View,StyleSheet} from 'react-native'
import { Link } from 'react-router-native'





export default function Home () {
 
    return (
      <View style={styles.cajaLogin}>
       <Text>Homeee</Text>
       <Link to="/logIn" underlayColor="#f0f4" >

            <Text>que funcione el react router</Text>
        </Link>
      </View>
    )

}

const styles = StyleSheet.create({
  cajaLogin:{
   
    flex:1,
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems:'center',
    
    },
})
