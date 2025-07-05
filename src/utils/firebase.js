// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDE3_TS_gXA_cddsfO_iwfZgloLzP7dvU",
  authDomain: "netflixgpt-e4f5e.firebaseapp.com",
  projectId: "netflixgpt-e4f5e",
  storageBucket: "netflixgpt-e4f5e.firebasestorage.app",
  messagingSenderId: "281229377773",
  appId: "1:281229377773:web:0bb923070cf8e3abbf4ce4",
  measurementId: "G-1Q43WRGQ4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); 

export { auth }; //this is used by login