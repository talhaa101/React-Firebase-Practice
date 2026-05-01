// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPsa5PAeokWByiAMH2O1sUdsAbx6_6EbI",
  authDomain: "react-firebase-practice-3c44c.firebaseapp.com",
  projectId: "react-firebase-practice-3c44c",
  storageBucket: "react-firebase-practice-3c44c.firebasestorage.app",
  messagingSenderId: "294710016592",
  appId: "1:294710016592:web:99f1e593f73d32fbfeef55",
  measurementId: "G-YCTYYZLYLM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);