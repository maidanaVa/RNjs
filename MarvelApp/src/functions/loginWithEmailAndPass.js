import {auth} from '../firebase/credentials';
import {signInWithEmailAndPassword} from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';


 export default async function loginWithEmailAndPass (email,password){
  
    try {
        const user= await signInWithEmailAndPassword(auth,email,password)
        
        await AsyncStorage.setItem('usuarioT',JSON.stringify(user._tokenResponse));
        console.log(user)
       
    } catch (error) {
        console.log(error);
    }
}