// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_bJ4y8jITc9UjJ0hkDi-BDONBDha1xY4",
  authDomain: "twitter-clone-e0933.firebaseapp.com",
  projectId: "twitter-clone-e0933",
  storageBucket: "twitter-clone-e0933.appspot.com",
  messagingSenderId: "1043217535878",
  appId: "1:1043217535878:web:177719b6a8e7e099449207"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const auth = getAuth(app)