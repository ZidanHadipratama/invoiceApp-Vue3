import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBlIU9aY-0_0FR_O1xAx-CaRTc9To7hAZU",
  authDomain: "invoiceapp-vue3-a9fd8.firebaseapp.com",
  projectId: "invoiceapp-vue3-a9fd8",
  storageBucket: "invoiceapp-vue3-a9fd8.appspot.com",
  messagingSenderId: "80118618460",
  appId: "1:80118618460:web:4f384063f591d13a2c0999"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
