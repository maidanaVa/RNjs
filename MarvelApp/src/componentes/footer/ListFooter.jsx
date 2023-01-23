import React, { Component } from 'react'
import { Text, View,StyleSheet,Image } from 'react-native';


const listFooterArray=[
    {
        item:1,
        title:'ABOUT MARVEL',
    },{
        item:2,
        title:'HELP/FAQS',
    },{
        item:3,
        title:'CAREERS',
    },{
        item:4,
        title:'INTERNSHIPS',
    },{
        item:5,
        title:'ADVERTISING',
    },{
        item:6,
        title:'DISNEY+',
    },{
        item:7,
        title:'MARVELHQ.COM',
    },{
        item:8,
        title:'REDEEM DIGITAL COMICS',
    }

]

export default function ListFooter () {
 
    return (
      <View style={styles.boxItems}>
       {
        listFooterArray.map((element)=>(
            <Text key={element.item} style={styles.textItems}>{element.title}</Text>
        ))
       }
    
      </View>
    )

}

const styles = StyleSheet.create({
  boxItems:{
    width:'80%',
    height:160,
    flexWrap:'wrap',
    justifyContent:'space-between',
    alignItems:'center',
   marginTop:30,
   paddingLeft:40,
  },
  textItems:{
    color:'white',
    fontWeight:'bold',
    fontSize:12,
    width:140,
    height:40,
 
  }
})