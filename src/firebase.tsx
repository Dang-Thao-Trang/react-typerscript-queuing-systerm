// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3R_mvFU_RpFkHyISm_3KXr4FKpxr-XUw",
  authDomain: "queuing-system-c4baa.firebaseapp.com",
  projectId: "queuing-system-c4baa",
  storageBucket: "queuing-system-c4baa.appspot.com",
  messagingSenderId: "621233689409",
  appId: "1:621233689409:web:34e3af1520b1e132f807c0",
  measurementId: "G-TSK3NHB405"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);