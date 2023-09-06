import firebase from "firebase/app"
import "firebase/firestore"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_Qduhjpk_BiLHrnzjb_UIfdZnxAQpIxc",
  authDomain: "invoiceapp-vue3.firebaseapp.com",
  projectId: "invoiceapp-vue3",
  storageBucket: "invoiceapp-vue3.appspot.com",
  messagingSenderId: "1074703537340",
  appId: "1:1074703537340:web:154e6646c5b1daf2efacb9",
  measurementId: "G-3H1DJNNW69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app.firestore();