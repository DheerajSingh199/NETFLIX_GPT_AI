// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByS-4JYePSXaoDns-VwYP_Wx219jreee8",
  authDomain: "netflixgpt-fde63.firebaseapp.com",
  projectId: "netflixgpt-fde63",
  storageBucket: "netflixgpt-fde63.appspot.com",
  messagingSenderId: "61820348013",
  appId: "1:61820348013:web:570a57272f335271ef0164",
  measurementId: "G-RFYB3F1451"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
