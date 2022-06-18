// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB1Oq0jygwYigJGBje6h3smUBlcT-ILhxY",
  authDomain: "forms-maker.firebaseapp.com",
  projectId: "forms-maker",
  storageBucket: "forms-maker.appspot.com",
  messagingSenderId: "716611356223",
  appId: "1:716611356223:web:921330fe4507f226b79a8a",
  measurementId: "G-WWLF7F8X5Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
