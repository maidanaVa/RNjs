import React, { Component } from 'react'
import {Text, View,StyleSheet,Image} from 'react-native'


const listLastest=[
   {
       id:1,
       category:'COMICS',
       title:`Celebrate The Heroes Of Star Wars In Peach Momoko's Women's History Month Variant Covers`,
       uri: require('../../assets/last1.jpg')
   },{
      id:2,
      category:'MOVIE',
      title:`'Black Panther: Wakanda Forever' Receives Five Academy Award Nominations`,
      uri: require('../../assets/last2.jpg')
   },{
      id:3,
      category:'COMICS',
      title:`January 25's New Marvel Comics: The Full List`,
      uri: require('../../assets/last3.jpg')
   },{
      id:4,
      category:'CULTURE & LIFESTYLE',
      title:`Next Phase of Ravensburger's Villainous Franchise Begins with MARVEL VILLAINOUS: TWISTED AMBITIONS`,
      uri: require('../../assets/last4.jpg')
   },{
      id:5,
       category:'COMICS',
       title:`Feel The Thunder In Artgerm's New Cover For Storm #1`,
       uri: require('../../assets/last5.jpg')
   },

]

export default function Seccion2 () {
    return(
   <View style={{width:'85%',height:900,marginTop:10}}>
      <Text style={{color:'black',fontSize:20,marginBottom:18}}>THE LASTEST</Text>
    {
      listLastest.map((element)=>(
           <View key={element.id} style={styles.boxElementLastest}>
             {/*   <Image source={{uri:require(`../../assets/${element.img}`)}}/> */}
             <Image style={styles.imgLastest}  source={element.uri}/>
               <View style={{ width:200}}>
                  <Text style={styles.fontCategory}>{element.category}</Text>
                  <Text style={styles.fontTitle}>{element.title}</Text>
               </View>
           </View>
      ))
    }
      
   </View>
    )
}

const styles = StyleSheet.create({
  boxElementLastest:{
   flexDirection:'row',
   
   height:145,
   marginVertical:10,
  borderBottomColor:'grey',
  borderBottomWidth:1,
  paddingBottom:15,
  },
  fontTitle:{
   color:'black',
   fontSize:16,
  },
  fontCategory:{
   fontSize:12,
   fontWeight:'bold',
   color:'grey',
   paddingBottom:3,
  },
  imgLastest:{
   width: 150,
   height:'95%',
   marginRight:10,
  }
  
   })
   