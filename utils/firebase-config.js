// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyCAfhDbYhM5oGBQ3sxsH_S1H8-ZsnWgKo4",
  authDomain: "solution-93da0.firebaseapp.com",
  projectId: "solution-93da0",
  storageBucket: "solution-93da0.appspot.com",
  messagingSenderId: "632922406192",
  appId: "1:632922406192:web:762d5ff9f9715853a9dcf5",
  measurementId: "G-VFNSHMLQS8"
};



/*
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};


*/

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
