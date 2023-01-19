import React, { useEffect,useState } from 'react'
import { Text, View,StyleSheet, Button,Image, TouchableHighlight} from 'react-native';
import axios from 'axios';




export default function ListCharacters () {
    const [characters,setCharacters]=useState([]);
     
    const URI=`https://gateway.marvel.com:443/v1/public/characters?limit=6&ts=1&apikey=004104608ad6bd7d045785785a005368&hash=505c49da30b89378529a41687b761e85`;

        const getCharacters= async()=>{
            try{
                const resCharacters = await axios.get (URI)
              
                setCharacters(resCharacters.data.data.results); 
                console.log(characters);
            }catch(error){// en caso de fallar 
                console.log (error)
            }
        }
                  
        useEffect(()=>{
            getCharacters();
        },[])
            
       
       
   
    return (
        <View style={{width:'100%',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}} >
     {
        characters.map((charMarvel)=>(
            <View key={charMarvel.id} style={{backgroundColor:'black',width:180,marginBottom:12}}>
                <Image style={{width:180,height:180}} source={{uri:`${charMarvel.thumbnail.path}.${charMarvel.thumbnail.extension}`}}/>
                

                <View style={{width:180,height:110,backgroundColor:'black',borderTopColor:'red',borderTopWidth:5}}>
                       <Text style={{color:'white',padding:10}} key={charMarvel.id}>{charMarvel.name}</Text>
                </View>
              
            </View>
            
        ))
     }
     </View>
    )

}

const styles = StyleSheet.create({
 
})


