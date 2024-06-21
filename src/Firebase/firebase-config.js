// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2ZJLQ6CIINpi1HStHuLN9plxMmmC8fHE",
  authDomain: "coffee-store-auth-cd537.firebaseapp.com",
  projectId: "coffee-store-auth-cd537",
  storageBucket: "coffee-store-auth-cd537.appspot.com",
  messagingSenderId: "1060011490697",
  appId: "1:1060011490697:web:3c4df8847000ab8070b558",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
