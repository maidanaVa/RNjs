import  AsyncStorage from '@react-native-async-storage/async-storage' ;  
import { initializeApp } from "firebase/app";
 import {getFirestore} from 'firebase/firestore';
 
import {
  initializeAuth,
  getReactNativePersistence
} from 'firebase/auth/react-native';

const firebaseConfig = {
  apiKey: "AIzaSyAqqxrsvOH4Gjz3JKPPZQvyhSR0ZTMCfko",
  authDomain: "marvel-app-642b9.firebaseapp.com",
  projectId: "marvel-app-642b9",
  storageBucket: "marvel-app-642b9.appspot.com",
  messagingSenderId: "247704650950",
  appId: "1:247704650950:web:1fb4a7d9daf6f0f64c03c7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

/* export const auth=getAuth(firebaseApp); */

export default firebaseApp;

 const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(AsyncStorage)
});
export {auth};

export const db=getFirestore(firebaseApp);
