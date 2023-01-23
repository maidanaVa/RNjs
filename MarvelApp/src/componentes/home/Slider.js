import React, { Component } from 'react'
import { Text, View,StyleSheet,Image, TouchableHighlight} from 'react-native'
import Swiper from 'react-native-swiper'


export default function Slider () {
 
    return (
      <Swiper style={styles.swiper} loop autoplay centeredSlides={true} activeDot={<View style={styles.activeDot}/>} dot={<View style={styles.dot}/>}>
       <View>
        <Image style={styles.imgSwiper}  source={require('../../assets/imagen2.jpg')}/>
        <View style={styles.boxSlideText}>
            <Text style={styles.textMarvelComic}>MARVEL COMICS</Text>
            <Text style={styles.textTitle}>FREE COMIC BOOK DAY</Text>
            <Text style={styles.textStyle}>Learn more about the four 'Free Comic Book Day' titles coming to your local comic shop on May 6.</Text>
            <TouchableHighlight style={styles.btns} >
              <Text style={styles.bold}>Learn More</Text>
            </TouchableHighlight>
        </View>
       
       </View>
        
        <View>
          <Image style={styles.imgSwiper} source={require('../../assets/imagen3.jpg')}/>
          <View style={styles.boxSlideText}>
            <Text style={styles.textMarvelComic}>MARVEL COMICS</Text>
            <Text style={styles.textTitle}>THIS WEEK'S NEW COMICS</Text>
            <Text style={styles.textStyle}>Discover the true identy of Avanger Prime, check out the finale of 'Strange', get tangled in a 'Dark Web', and more in this week's comics!</Text>
            <TouchableHighlight style={styles.btns} >
              <Text style={styles.bold}>Learn More</Text>
            </TouchableHighlight>
          </View>
        
        </View>
        
       < View>
        <Image style={styles.imgSwiper} source={require('../../assets/imagen5.jpg')}/>
        <View style={styles.boxSlideText}>
            <Text style={styles.textMarvelComic}>MARVEL COMICS</Text>
            <Text style={styles.textTitle}>CAPITAN AMERICA: COLD WAR BEGINS</Text>
            <Text style={styles.textStyle}>Tensions erupt between Steve Rogers and Sam Wilson in the upcominf crossover, kicking off this April!</Text>
          
            <TouchableHighlight style={styles.btns} >
              <Text style={styles.bold}>Learn More</Text>
            </TouchableHighlight>
        </View>
       

       </View>
      </Swiper>
      
    )

}

const styles = StyleSheet.create({
  swiper:{
    backgroundColor:'black',
    height:700,
  },
 imgSwiper:{
   width:'100%',
   height:300, 
  
   
 },
 btns:{
    backgroundColor:'red',
    width: 150,
    height:40,
    borderRadius:3,
   alignContent:'flex-end',
    marginTop:10, 
    paddingVertical:8,
    paddingLeft:30,
 },
 bold:{
  fontWeight:'bold',
  fontSize:15,
 },
 textStyle:{
  marginTop:20,
  width:350,
 },
 boxSlideText:{
  height:300,
  marginTop:50,
  paddingTop:18,
 paddingLeft:20,
},
dot:{
  width:40,
  height:3,
  margin:10,
  backgroundColor:'grey',
  position:'relative',
  bottom:330,
},
activeDot:{
  width:40,
  height:3,
  margin:10,
  backgroundColor:'red',
  position:'relative',
  bottom:330,
},
textMarvelComic:{
  fontWeight:'bold',
  color:'white',
  paddingTop:20,
  
},
textTitle:{
  fontWeight:'bold',
  fontSize:25,
}
})
