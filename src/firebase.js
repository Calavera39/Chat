// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJcOVCfipVTOasUot8RNXVy4gm8h1rhv8",
  authDomain: "chat-app-e08f0.firebaseapp.com",
  projectId: "chat-app-e08f0",
  storageBucket: "chat-app-e08f0.appspot.com",
  messagingSenderId: "395987726336",
  appId: "1:395987726336:web:9d3e7687fbdb84fd8f68e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
