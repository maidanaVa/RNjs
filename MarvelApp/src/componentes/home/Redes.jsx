import React, { Component } from 'react'
import { Text, View,StyleSheet,Image} from 'react-native'


export default function Redes () {
    return(
   <View style={{width:'100%',height:80, flexDirection:'row',justifyContent:'space-between'}}>
    <Text style={styles.textRedes}>FOLLOW</Text>
    <View style={{flexDirection:'row',width:200,justifyContent:'space-evenly',alignItems:'center'}}>
   
    <Image style={styles.iconRedes} source={require('../../assets/icons8-twitter-30.png')}/>
    <Image style={styles.iconRedes} source={require('../../assets/icons8-facebook-30.png')}/>
    <Image style={styles.iconRedes} source={require('../../assets/icons8-instagram-30.png')}/>
    
    </View>
   </View>
    )
}
const styles = StyleSheet.create({
    textRedes:{
        color:'grey',
        fontWeight:'bold',
        paddingLeft:20,
        paddingTop:30,
        fontSize:15,
    },
    iconRedes:{
        width:25,
        height:25,
    }
})