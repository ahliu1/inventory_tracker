// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {key} from "./api_key"; // Please note that you'll need to get your own API key from Firebase and create an api_key file for this. 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCQMr-NGPanulfOzVbW-KCur_3Z3Wp3HU",
  authDomain: "inventory-tracker-97d37.firebaseapp.com",
  projectId: "inventory-tracker-97d37",
  storageBucket: "inventory-tracker-97d37.appspot.com",
  messagingSenderId: "762622863180",
  appId: "1:762622863180:web:d7d178dcfd3f3db02fd1e9",
  measurementId: "G-1CM30TC8C4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}
