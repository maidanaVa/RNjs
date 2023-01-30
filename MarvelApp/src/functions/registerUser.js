import {auth} from '../firebase/credentials';
import { AuthErrorCodes, createUserWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

 export default async function registerUser(email,password) {
    
    try {
        const user= await createUserWithEmailAndPassword(auth,email,password);
        await AsyncStorage.setItem('usuarioTR',JSON.stringify(user._tokenResponse));
        
    } catch (error) {
        console.log(error);
        var errorCode= AuthErrorCodes;
       
        if(errorCode==='auth/email-already-in-use)'){
            var errormessage='el email ya se encuentra utilizado';
        }
    }
}