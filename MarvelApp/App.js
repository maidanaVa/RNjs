import 'react-native-gesture-handler';

import React,{useState} from 'react';
import { StyleSheet,Image, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import Characters from './src/componentes/characters/Characters.js';
import Home from './src/componentes/home/Home.js'
import Login from './src/componentes/login/Login.js';
import Register from './src/componentes/register/Register.js';  
 import logOut from './src/functions/logOut';

 import {onAuthStateChanged } from '@firebase/auth';
import { auth } from './src/firebase/credentials.js';


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
 const [isLoged,setIsLoged]=useState(false);

 onAuthStateChanged(auth,userF=>{
  if(userF!==null){
    setIsLoged(true)
  }else{
    setIsLoged(false)
  }
 })

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
                 {
                  !isLoged ? 
                   <DrawerItem labelStyle={{color:'white',backgroundColor:'red',fontSize:18,fontWeight:'bold',width:150,height:30, borderBottomRightRadius:20,borderTopLeftRadius:20, textAlign:'center'}} label="Login" onPress={() => props.navigation.navigate("Login")} />
                    :
                    <DrawerItem labelStyle={{color:'white',backgroundColor:'red',fontSize:18,fontWeight:'bold',width:150,height:30, borderBottomRightRadius:20,borderTopLeftRadius:20, textAlign:'center'}} label="Logout" 
                    onPress={() =>{
                      logOut();
                      props.navigation.closeDrawer();
                    } } />
                  }
   
            </DrawerContentScrollView>
          )
        }}  
        
        >
          {
            !isLoged ? 
            
         <Drawer.Group screenOptions={{  drawerItemStyle: { display: "none" }}}  >
            <Drawer.Screen name="Login">
                {(props) => <Login {...props}  />}
            </Drawer.Screen>
            <Drawer.Screen name="Register">
               {(props) => <Register {...props} />}
            </Drawer.Screen>
         </Drawer.Group>
          :
          <Drawer.Group>
            <Drawer.Screen name="Home" component={Home}  options={{ headerTitle: (props) => <LogoTitle {...props} /> }} />
            <Drawer.Screen name="Characters" component={Characters}  options={{ headerTitle: (props) => <LogoTitle {...props} /> }} />
          </Drawer.Group>
          }
      
         
        
         
       
      </Drawer.Navigator>
      </NavigationContainer>

  
    )
  }
 /*  const styles = StyleSheet.create({
 
   
  })
 */
