import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLo8buMoOl0Ru8qnqMV44CHG2HQaBy9hQ", 
  authDomain: "prueba-de-subida-de-archivos.firebaseapp.com", 
  projectId: "prueba-de-subida-de-archivos",
  storageBucket: "prueba-de-subida-de-archivos.appspot.com",
  messagingSenderId: "527532550769",
  appId: "1:527532550769:web:338ce25117a0d6efb8c9d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);