import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View>
      
     <View>
        <Text>SIGN IN|JOIN</Text>
     </View>

     <Image source={require('../../assets/Marvel-Comics-logo.png')} style={styles.imgHeader}/>

     <Text>buscar</Text>

    </View>
  )
}
const styles = StyleSheet.create({
    imgHeader:{
        width:100,
        height:40,
    }
})