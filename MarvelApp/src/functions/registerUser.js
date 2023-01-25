import {auth} from '../firebase/credentials';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

 export default async function registerUser(email,password) {
    
    try {
        const user= await createUserWithEmailAndPassword(auth,email,password);
        await AsyncStorage.setItem('usuarioTR',JSON.stringify(user._tokenResponse));
        
    } catch (error) {
        console.log(error);
    }
}