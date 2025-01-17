// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflixgpt-764f0.firebaseapp.com",
  projectId: "netflixgpt-764f0",
  storageBucket: "netflixgpt-764f0.appspot.com",
  messagingSenderId: "1044561072666",
  appId: "1:1044561072666:web:a73740b8a38c9d00f737a3",
  measurementId: "G-P654H9NLGZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
