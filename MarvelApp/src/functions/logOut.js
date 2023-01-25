import {auth} from '../firebase/credentials';
import {signOut} from'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function logOut(){
    try {
        await signOut(auth);
        await AsyncStorage.removeItem('usuarioT');
    } catch (error) {
        console.log(error);
    }
}