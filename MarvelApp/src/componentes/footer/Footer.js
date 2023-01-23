import React, { Component } from 'react'
import { Text, View,StyleSheet,Image } from 'react-native';
import InfoMarvel from './InfoMarvel';
import License from './License';
import ListFooter from './ListFooter';
import RedesFooter from './RedesFooter';

export default function Footer () {
 
    return (
      <View style={styles.boxFooter}>
       <Image source={require('../../assets/marvel3.png')} style={styles.imgLMarvel3}/>
        <ListFooter/>
        <License/>
        <RedesFooter/>
        <InfoMarvel/>
      </View>
    )

}

const styles = StyleSheet.create({
    boxFooter:{
         width:'100%',
         height:820,
         backgroundColor:'#151515',
         alignItems:'center',
         paddingTop:30,
    },
    imgLMarvel3:{
         width:40,
         height:60,
    }
})