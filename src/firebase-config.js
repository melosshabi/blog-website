// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyApQL6vxY1dJ1frpEG6x8wgBan5U5zylZE",
  authDomain: "blog-website-f854e.firebaseapp.com",
  databaseURL: "https://blog-website-f854e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "blog-website-f854e",
  storageBucket: "blog-website-f854e.appspot.com",
  messagingSenderId: "1006994120199",
  appId: "1:1006994120199:web:22f0b21f42dad8a6b754a2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore();