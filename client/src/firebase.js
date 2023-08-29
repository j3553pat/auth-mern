// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: "musicmate-47367.firebaseapp.com",
  projectId: "musicmate-47367",
  storageBucket: "musicmate-47367.appspot.com",
  messagingSenderId: "738827556102",
  appId: "1:738827556102:web:440d1cd431f8db2537ba87"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);