// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5TJuaM-k2VqEtoCh6ALBEDFajMVsAedQ",
  authDomain: "sir-patrick.firebaseapp.com",
  projectId: "sir-patrick",
  storageBucket: "sir-patrick.firebasestorage.app",
  messagingSenderId: "653283563901",
  appId: "1:653283563901:web:73525a036c62c7f3869414"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;