import {db} from '../firebase/credentials';
import { collection,addDoc } from 'firebase/firestore';
 

export default async function crearUserdb(data){

try {
    const collectiondb= collection(db,'users');
    const userId=await addDoc(collectiondb,data);
    console.log(userId)
} catch (error) {
    console.log(error);
}
 }