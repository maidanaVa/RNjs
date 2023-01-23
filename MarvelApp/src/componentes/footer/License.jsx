import React, { Component } from 'react'
import { Text, View,StyleSheet,Image } from 'react-native';


export default function License () {
 
    return (
      <View  style={styles.boxLicense}>
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
           <Image style={styles.imgLicense1} source={require('../../assets/Marvel4.png')}/>
           <View>
               <Text>MARVEL INSIDER</Text>
               <Text>Get Rewarded for Being a Marvel Fan</Text>
           </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
        
           <Image style={styles.imgLicense2} source={require('../../assets/marvel2.jpg')} />
           <View>
               <Text>MARVEL UNLIMITED</Text>
               <Text>Access Over 30,000+ Digital Comics</Text>
           </View>
        </View>
        
      </View>
    )

}

const styles = StyleSheet.create({
boxLicense:{
    width:'90%',
    height:200,
   marginTop:20,
    justifyContent:'space-evenly',
    borderTopColor:'grey',
    borderTopWidth:1,
},
imgLicense1:{
    width:70,
    height:50,
},
imgLicense2:{
    width:55,
    height:55,
}
})