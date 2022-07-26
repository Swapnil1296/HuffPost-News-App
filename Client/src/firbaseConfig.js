// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnYsoKmDibuNl8eU2frwdVNjRvqyb6Kug",
  authDomain: "huffpost-3f0bd.firebaseapp.com",
  projectId: "huffpost-3f0bd",
  storageBucket: "huffpost-3f0bd.appspot.com",
  messagingSenderId: "524590444751",
  appId: "1:524590444751:web:4b7addf36cc33613d9c7ba",
  measurementId: "G-N3XV5MF9SQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app)
// const analytics = getFirestore(app);
