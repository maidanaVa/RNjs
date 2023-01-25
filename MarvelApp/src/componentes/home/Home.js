import React, { Component } from 'react'
import { Text, View,StyleSheet,ScrollView,StatusBar,Image} from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
/* import { Link } from 'react-router-native' */
import Footer from '../footer/Footer'
import ListComics from './ListComics'
import Redes from './Redes'
import Seccion1 from './Seccion1'
import Seccion2 from './Seccion2'
import Slider from './Slider'





export default function Home (props) {

 
    return (
    
        <ScrollView  contentContainerStyle={styles.scrollView}>
                <View style={{flexDirection:'row',backgroundColor:'black',width:'100%',height:40,justifyContent:'center',alignItems:'center',justifyContent:'space-evenly'}}>
                   <Text >STREAM THE GOTG: HOLIDAY SPECIAL ON</Text>
                   <Image style={styles.imgDisney}  source={require('../../assets/disney2.jpg')}/>
                </View>
                <Slider/>
                <Redes/>
                <Seccion1/>
                <ListComics/>
                 {/* <Pressable onPress={() => props.navigation.navigate("Login")} >
                <Text style={{color:'black'}}>Homeee</Text>
                </Pressable> */}
    
                <Seccion2/>
                <Footer/>
        </ScrollView>
       
      
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor:'white',
    
    justifyContent:'center',
    alignItems: 'center',
   
  },
  cajaLogin:{
   
    flex:1,
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems:'center',
    
    },
    imgDisney:{
     width:80,
      height:35,
    
    }
})
