
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

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

export const auth=getAuth(firebaseApp);

export default firebaseApp;