import React, { useState,useEffect} from 'react'
import { Text, View,FlatList,Image,StyleSheet} from 'react-native'
import axios from 'axios';


export default function ListComics () {

    const [comics,setComics]=useState([]);


    const URI=`https://gateway.marvel.com/v1/public/comics?orderBy=modified&limit=8&ts=1&apikey=004104608ad6bd7d045785785a005368&hash=505c49da30b89378529a41687b761e85`;

        const getComics= async()=>{
            try{
                const resComics = await axios.get (URI)
              
                setComics(resComics.data.data.results); 
                
            }catch(error){// en caso de fallar 
                console.log (error)
            }
        }
                  
        useEffect(()=>{
            getComics();
            console.log(comics)
        },[])



    return (

     <FlatList  data={comics}   keyExtractor={(item)=>item.id}
      renderItem={({item})=>(
       <View style={[styles.boxComic,styles.shadowProp]} > 
           < Image source={{uri:`${item.thumbnail.path}.jpg`}} style={{width:'100%',height:350,elevation:3}}/>
           <Text style={{color:'black',paddingLeft:10,paddingTop:10,fontWeight:'bold',color:'grey'}}>{item.title}</Text> 
       </View> 
     )}
     showsHorizontalScrollIndicator={true} 
     horizontal={true}
     indicatorStyle={{backgroundColor:'red'}}
    ItemSeparatorComponent={()=>(
        <View style={{marginHorizontal:8}}></View>
    )}
    contentContainerStyle={{ marginLeft:15}}
     />
    )
  
}
const styles = StyleSheet.create({
    boxComic:{
        
        width:250,
        height:400,
    },
 
})

