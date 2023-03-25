// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRw1nhbadSbou8Zo_zMLxqqblMRVh3xGo",
  authDomain: "miniproj2-5e36e.firebaseapp.com",
  projectId: "miniproj2-5e36e",
  storageBucket: "miniproj2-5e36e.appspot.com",
  messagingSenderId: "833609349354",
  appId: "1:833609349354:web:fd16b3b9b9c6ea2d10ff93",
  measurementId: "G-0D3GY04VBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;