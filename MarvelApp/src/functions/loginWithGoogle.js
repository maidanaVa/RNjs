import {auth} from '../firebase/credentials';
import {GoogleAuthProvider,signInWithPopup, signInWithRedirect} from 'firebase/auth';

export default async function loginWithGoogle(email,password){
    try {
        const provider= new GoogleAuthProvider();
        signInWithRedirect(auth,provider);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}