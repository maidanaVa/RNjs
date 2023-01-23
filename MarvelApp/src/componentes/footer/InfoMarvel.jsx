import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native';


export default function InfoMarvel () {
 
    return (
      <View  style={styles.boxInfoCopyR}>
        <Text style={styles.colorText}>Terms of Use</Text>
        <Text style={styles.colorText}>Your US State</Text>
        <Text style={[{width:130,heigth:100,paddingTop:10,color:'grey'}]}>Children's Online Privacy Policy</Text>
        <Text style={styles.colorText}>License Agreement</Text>
        <Text style={styles.colorText}>Marvel Insider Terms</Text>
        <Text style={styles.colorText}>Privacy Policy</Text>
        <Text style={styles.colorText}>Privacy Rigths</Text>
        <Text style={styles.colorText}>Interest-Based Ads</Text>
        <Text style={styles.colorText}>2023 MARVEL</Text>
      </View>
    )

}

const styles = StyleSheet.create({
 boxInfoCopyR:{
    width:'75%',
    height:150,
    flexWrap:'wrap',
    justifyContent:'center',
    paddingLeft:30,
 },
colorText:{
    color:'grey',
    paddingTop:10,
    paddingRight:15,
 }
})