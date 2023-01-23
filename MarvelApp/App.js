import 'react-native-gesture-handler';
/* 
 import { Text, View } from 'react-native';
 import { NativeRouter,Routes, Route} from "react-router-native"; */
import React,{useState} from 'react';
import { StyleSheet,Image, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import Characters from './src/componentes/characters/Characters.js';
import Home from './src/componentes/home/Home.js'
import Login from './src/componentes/login/Login.js';
import Register from './src/componentes/register/Register.js';  

function LogoTitle() {
  return (
    <Image
      style={{ width: 70, height: 40 }}
      source={require('./src/assets/Marvel-Comics-logo.png')}
    />
  );
};





const Drawer = createDrawerNavigator();

export default function App () {

    return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={ {  drawerStyle: {
          backgroundColor: 'black',
          width: 240,
        },
        headerTintColor:'#B11313',
        headerTitleAlign:'center',
        headerStyle: {
          backgroundColor: 'black',
        },
        drawerLabelStyle:{
          fontWeight:'bold',
          color:'white',
          marginVertical:10,
          fontSize:14,
        },
        drawerActiveBackgroundColor:'red',
        }}
        drawerContent={props => {
          return (
            <DrawerContentScrollView content {...props}>
              <DrawerItemList {...props}  />
            
              <DrawerItem labelStyle={{color:'white',backgroundColor:'blue'}} label="Login" onPress={() => props.navigation.navigate("Login")} />
              
           
            </DrawerContentScrollView>
          )
        }}
        >
          <Drawer.Group>
            <Drawer.Screen name="Home" component={Home}  options={{ headerTitle: (props) => <LogoTitle {...props} /> }} />
            <Drawer.Screen name="Characters" component={Characters}  options={{ headerTitle: (props) => <LogoTitle {...props} /> }}/>
           
         </Drawer.Group>
         <Drawer.Group screenOptions={{  drawerItemStyle: { display: "none" }}}>
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Register" component={Register} />
         </Drawer.Group>
      </Drawer.Navigator>
      </NavigationContainer>

   /*    <NativeRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/logIn" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/characters" element={<Characters/>} />
        </Routes>
      </NativeRouter> */
    )
  }
 /*  const styles = StyleSheet.create({
 
   
  })
 */
