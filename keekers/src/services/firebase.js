// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2Sr5v6vFLGbiyGY6H0fjJbHOuwDn90Rc",
  authDomain: "the-keekers-project.firebaseapp.com",
  projectId: "the-keekers-project",
  storageBucket: "the-keekers-project.appspot.com",
  messagingSenderId: "309254144726",
  appId: "1:309254144726:web:ba64ea51d0cce0aeb27f77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();