import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import firebase from "firebase/app";
// import firebase from 'firebase/compat/firebase';
// import { getAnalytics } from "firebase/analytics";
// import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx3uFY4tc7ABK1TunIpAe7afaak3TDHfI",
  authDomain: "manchester-city-app-cb8dd.firebaseapp.com",
  projectId: "manchester-city-app-cb8dd",
  storageBucket: "manchester-city-app-cb8dd.appspot.com",
  messagingSenderId: "129296156684",
  appId: "1:129296156684:web:9b94723c2e975d078a4629",
  measurementId: "G-HGNM0QRRSS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export { firebase };