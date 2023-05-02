import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCb0v27sf-OK4tNfWBUySwcuC2RHR6T2uI",
  authDomain: "easylogin-bf06a.firebaseapp.com",
  projectId: "easylogin-bf06a",
  storageBucket: "easylogin-bf06a.appspot.com",
  messagingSenderId: "528292098604",
  appId: "1:528292098604:web:8f57dfcc9d2bd7ef13d789",
  measurementId: "G-W603TEFCWE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
