import React, { Component } from 'react'
import { Text, View,StyleSheet,Image } from 'react-native';


export default function RedesFooter () {
 
    return (
      <View  style={styles.boxRedes}>
        <Text style={{fontWeight:'bold',color:'white', fontSize:17,paddingLeft:25}}>FOLLOW MARVEL</Text>
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
            <Image style={styles.imgIcons} source={require('../../assets/icons8-facebook-30.png')}/>
            <Image style={styles.imgIcons} source={require('../../assets/icons8-twitter-30.png')}/>
            <Image style={styles.imgIcons} source={require('../../assets/icons8-instagram-30.png')}/>
            <Image style={styles.imgIcons} source={require('../../assets/icons8-tumblr-30.png')}/>
            <Image style={styles.imgIcons} source={require('../../assets/icons8-youtube-play-30.png')}/>
            <Image style={styles.imgIcons} source={require('../../assets/icons8-snapchat-30.png')}/>
            <Image style={styles.imgIcons} source={require('../../assets/icons8-pinterest-30.png')}/>
        </View>
      </View>
    )

}

const styles = StyleSheet.create({
boxRedes:{
    width:'90%',
    height:150,
    justifyContent:'space-evenly',
   
    borderBottomColor:'grey',
    borderBottomWidth:1,
    borderTopColor:'grey',
    borderTopWidth:1,
    paddingVertical:20
},
imgIcons:{
    width:25,
    height:25,
}
})