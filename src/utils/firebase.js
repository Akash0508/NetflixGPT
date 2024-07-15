// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBibCy01RKZGAPT1cCMgkTfVeXxUT9d7HE",
  authDomain: "netflixgpt-e7d73.firebaseapp.com",
  projectId: "netflixgpt-e7d73",
  storageBucket: "netflixgpt-e7d73.appspot.com",
  messagingSenderId: "1093395250313",
  appId: "1:1093395250313:web:8f261cea151204b7deda58",
  measurementId: "G-KP236RD6CL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const AUTH = getAuth();