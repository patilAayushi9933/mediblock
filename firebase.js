import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAxyt3f8wkf2MZLNCIIMZ_8k1A2hUwtd7U",
  authDomain: "medirec-5d470.firebaseapp.com",
  projectId: "medirec-5d470",
  storageBucket: "medirec-5d470.appspot.com",
  messagingSenderId: "974029278421",
  appId: "1:974029278421:web:17869532ac801d95df665c",
  measurementId: "G-3NPJBH8JBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app,auth};