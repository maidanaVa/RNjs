import React, { useState,useEffect } from 'react';
import { Text, View,StyleSheet,Image} from 'react-native';
import axios from 'axios';
import { TextInput } from 'react-native-gesture-handler';




export default function SearchChar() {

    const [characters,setCharacters]=useState([]);
    const [charac,setCharac]=useState([]);
    const [busqueda,setBusqueda]=useState("");



 const filtrar=(buscado)=>{
    var resultado=charac.filter((elemFiltrado)=>{
       const string1=`${elemFiltrado.name}`.toString().toLowerCase();

        if(string1.includes(buscado.toLowerCase())){
            console.log('corta')
            console.log(string1 + 'eeeeeeste es el personaje');
            return string1;
            
        }
        
    })
    setCharacters(resultado);
 }





 const URI=`https://gateway.marvel.com:443/v1/public/characters?&ts=1&apikey=004104608ad6bd7d045785785a005368&hash=505c49da30b89378529a41687b761e85`;

        const getTotalCharacters= async()=>{
            try{
                const resTotalCharacters = await axios.get (URI)
              
                setCharacters(resTotalCharacters.data.data.results); 
              
                setCharac(resTotalCharacters.data.data.results);
                
            }catch(error){// en caso de fallar 
                console.log (error)
            }
        }
                  
        useEffect(()=>{
            getTotalCharacters();
        },[])
       
       
       
    return (
        <View style={{flexDirection:'column',alignItems:'center'}}>

            <TextInput style={styles.inputSearch} inlineImagePadding={8} inlineImageLeft='search' placeholder='SEARCH' placeholderTextColor={'black'}  
            onChangeText={(text)=>{
               setBusqueda(text);
               filtrar(text)
            }}   />
          
            <View style={{width:400,height:3050,flexDirection:'row',flexWrap:'wrap',justifyContent:'center',}}>
            {characters?.length === 0 && <Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>No se encontró la búsqueda.</Text>}
            {
               characters && characters.map((elementChar)=>(
                    <View key={elementChar.name} style={{backgroundColor:'black',width:180,marginBottom:12,borderBottomRightRadius:25,marginHorizontal:10}}>
                        <Image style={{width:180,height:180}} source={{uri:`${elementChar.thumbnail.path}.${elementChar.thumbnail.extension}`}}/>
                        
                        <View style={{width:180,height:110,backgroundColor:'#151515',borderTopColor:'red',borderTopWidth:5, borderBottomRightRadius:25}}>
                            <Text style={{color:'white',padding:10}} key={elementChar.id}>{elementChar.name}</Text>
                        </View>
                    
                    </View> 
                ))
            }
            </View>
      </View>
    )
}

const styles = StyleSheet.create({
    inputSearch:{
        borderWidth:3,
        borderColor:'black',
        width:380,
        height:65,
        paddingLeft:20,
        marginBottom:20,
        color:'black'
    }
})
