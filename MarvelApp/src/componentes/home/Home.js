import React, { Component } from 'react'
import { Text, View,StyleSheet,ScrollView,StatusBar,SafeAreaView,ViewGroup,Button, Pressable} from 'react-native'
import { Link } from 'react-router-native'





export default function Home () {
 
    return (
    
        <ScrollView contentContainerStyle={styles.scrollView}>
         
                <Text>Homeee</Text>
                <Link to="/logIn" underlayColor="#f0f4" >

                <Text>que funcione el react router</Text>
                </Link>
             
                <Text style={{fontSize:20}}>Scroll me plz</Text>  
               
                <Text style={{fontSize:20}}>React Native Example of ScrollView</Text>  
                
                <Text style={{fontSize:20}}>React Native ScrollView Example</Text>  
               
                <Text style={{fontSize:20}}>If you like</Text>  
              
                <Text style={{fontSize:20}}>Scrolling down</Text>  
                
                <Text style={{fontSize:20}}>Scrolling down</Text>  
             
                <Text style={{fontSize:20}}>What's the best</Text>  
             
                <Text style={{fontSize:20}}>What's the best</Text>  
              
                <Text style={{fontSize:20}}>Framework around?</Text>  
               
                <Text style={{fontSize:20}}>Framework around?</Text>  
               
                <Text style={{fontSize:20}}>React Native</Text>  
               
                <Text style={{fontSize:20}}>Scroll me plz5</Text>  
               
                <Text style={{fontSize:20}}>Framework around?</Text>  
              
                <Text style={{fontSize:20}}>React Native</Text>  
                
                <Text style={{fontSize:20}}>Scroll me plz7</Text>  
                 
                <Text style={{fontSize:20}}>Scrolling down</Text>  
             
                <Text style={{fontSize:20}}>What's the best</Text>  
             
                <Text style={{fontSize:20}}>What's the best</Text>  
              
                <Text style={{fontSize:20}}>Framework around?</Text>  
               
                <Text style={{fontSize:20}}>Framework around?</Text>  
               
                <Text style={{fontSize:20}}>React Native</Text>  
               
                <Text style={{fontSize:20}}>Scroll me plz5</Text>  
               
                <Text style={{fontSize:20}}>Framework around?</Text>  
              
                <Text style={{fontSize:20}}>React Native</Text>  
                
                <Text style={{fontSize:20}}>Scroll me plz7</Text>  
                 
                <Text style={{fontSize:20}}>Scrolling down</Text>  
             
                <Text style={{fontSize:20}}>What's the best</Text>  
             
                <Text style={{fontSize:20}}>What's the best</Text>  
              
                <Text style={{fontSize:20}}>Framework around?</Text>  
               
                <Text style={{fontSize:20}}>Framework around?</Text>  
               
                <Text style={{fontSize:20}}>React Native</Text>  
               
                <Text style={{fontSize:20}}>Scroll me plz5</Text>  
               
                <Text style={{fontSize:20}}>Framework around?</Text>  
              
                <Text style={{fontSize:20}}>React Native</Text>  
                
                <Text style={{fontSize:20}}>Scroll me plz15</Text>  
              
        </ScrollView>
       
      
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    
    justifyContent:'center',
    alignItems: 'center',
   
  },
  cajaLogin:{
   
    flex:1,
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems:'center',
    
    },
})
