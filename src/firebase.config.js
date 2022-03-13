// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALc3lXwxdjtHLj1pyzobc3Tm9yM32ygbI",
  authDomain: "house-marketplace-app-12345.firebaseapp.com",
  projectId: "house-marketplace-app-12345",
  storageBucket: "house-marketplace-app-12345.appspot.com",
  messagingSenderId: "131510364247",
  appId: "1:131510364247:web:9b6d0df3b8ea7d68f09b12",
  measurementId: "G-QBJ3GTS0EK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();