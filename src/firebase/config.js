// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFoIkgAp43CQzXc3HiRZ14f7IoAXg16Ns",
  authDomain: "react-cursos-fb25f.firebaseapp.com",
  projectId: "react-cursos-fb25f",
  storageBucket: "react-cursos-fb25f.appspot.com",
  messagingSenderId: "929179800550",
  appId: "1:929179800550:web:741e1bf867ecbcfe6ffc27"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB   = getFirestore(FirebaseApp);