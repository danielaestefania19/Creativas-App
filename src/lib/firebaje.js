// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRofRUtMyYyszxyUKit8su7eCbTCJjXyo",
  authDomain: "creativas-da377.firebaseapp.com",
  projectId: "creativas-da377",
  storageBucket: "creativas-da377.appspot.com",
  messagingSenderId: "1020768025994",
  appId: "1:1020768025994:web:443baabb41877f970c1c73",
  measurementId: "G-6JRFQ57ZNV"
};

// Initialize Firebase y firestore

const appFirebase = initializeApp(firebaseConfig);
export default appFirebase; 
