// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbUkYp5Fnuzj0_K6Sre3yrEZOaZ_jdKCE",
  authDomain: "flashcardsaas-f9f77.firebaseapp.com",
  projectId: "flashcardsaas-f9f77",
  storageBucket: "flashcardsaas-f9f77.appspot.com",
  messagingSenderId: "1093934640905",
  appId: "1:1093934640905:web:22b4359a74a467901e6dd8",
  measurementId: "G-0VX8J9XFVE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
