// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCt-hFs6PibjGUizOcYkkYH8gwTeTDcAo",
  authDomain: "netflix-33c07.firebaseapp.com",
  projectId: "netflix-33c07",
  storageBucket: "netflix-33c07.appspot.com",
  messagingSenderId: "369733462286",
  appId: "1:369733462286:web:26e57f07b6281439a80f5f",
  measurementId: "G-1W3FVC3DCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();