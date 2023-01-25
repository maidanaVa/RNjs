import React, { Component } from 'react'
import { Image, Text, View,StyleSheet,TouchableHighlight} from 'react-native'

export default function Seccion1 () {
    return(
   <View style={{width:'100%',height:650}}>
       <Image style={{width:'100%',height:250}}  source={require('../../assets/image4.jpg')}/>
      
       <View style={styles.secc1}>
            <Image style={[styles.marvel2,styles.marBottom]} source={require('../../assets/marvel2.jpg')} />
           <View style={styles.marBottom}>
           <Text style={[styles.bold]}>NEW ON MARVEL UNLIMITED</Text>
            <Text style={{width:330}}>Read these plus 30,000+ digital comics for $9.99 a month!</Text>
           </View>
            

            <TouchableHighlight style={styles.btn} >
              <Text>GET MARVEL UNLIMITED</Text>
            </TouchableHighlight>
       </View>

   </View>
    )
}

const styles = StyleSheet.create({
  btn:{
    width:250,
    height:40,
    borderColor:'white',
    borderWidth:2,
    alignItems:'center',
    justifyContent:'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 0,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:15,
  },
    marvel2:{
      width:80,
      height:80,
    },
    bold:{
      fontWeight:'bold',
      fontSize:20,
     },
     secc1:{
      width:'100%',
      height:350,backgroundColor:'#151515',
      paddingLeft:20,
      paddingTop:30,
     
     },
     marBottom:{
      marginBottom:20,
     }
   })
   