// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "easymoovin-oauth.firebaseapp.com",
  projectId: "easymoovin-oauth",
  storageBucket: "easymoovin-oauth.appspot.com",
  messagingSenderId: "543492758901",
  appId: "1:543492758901:web:5e1f4c5b5dde57fbdb873c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);