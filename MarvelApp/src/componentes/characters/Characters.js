import React, { useEffect } from 'react'
import { Text, ViewGroup,StyleSheet,ScrollView,ImageBackground, View} from 'react-native';
import CharactersImg from '../../assets/characters.jpg'
import ListCharacters from './ListCharacters';



export default function Characters ({navigation,isLoged}) {
  
  useEffect(()=>{
        if(isLoged){
             navigation.navigate('Home');
        }
  },[navigation,isLoged])

    return (
      <ScrollView contentContainerStyle={styles.scrollView}>
   
       <ImageBackground  source={CharactersImg} style={[styles.imgBackG]}>
      
            <Text style={{color:'white',fontSize:30,fontWeight:'900',fontFamily:'lucida grande'}}> MARVEL CHARACTERS</Text>
            <Text style={{paddingHorizontal:20,fontFamily:'lucida grande'}}>Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!</Text>
        
       </ImageBackground>
       <Text style={{color:'black',fontFamily:'lucida grande',fontSize:17,marginVertical:18,paddingLeft:20}}>FEATURED CHARACTERS</Text>
       <ListCharacters/> 
       <Text style={{color:'black',fontFamily:'lucida grande',fontSize:17,marginVertical:18,paddingLeft:20}}>CHARACTER SPOTLIGHT</Text>
       <Text style={{color:'black',fontFamily:'lucida grande',fontSize:17,marginVertical:18,paddingLeft:20}}>otra cosaasaaaeeeeeeeeeeeeeeeeeeeee</Text>
      </ScrollView>
    )

}

const styles = StyleSheet.create({
  scrollView: {
   
    backgroundColor: 'white',
    
    justifyContent:'center',
    
   
  },
  imgBackG:{
    width:'100%',
    height:350,
    alignItems:'center',
    justifyContent:'center',
    
    
  },
 
})
