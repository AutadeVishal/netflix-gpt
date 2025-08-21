// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLEf91rL-DVUodVFQ93YCrVe79-y1HVzM",
  authDomain: "netflix-ui-gpt.firebaseapp.com",
  projectId: "netflix-ui-gpt",
  storageBucket: "netflix-ui-gpt.firebasestorage.app",
  messagingSenderId: "849269443922",
  appId: "1:849269443922:web:6dac0c300763bb5270fe8b",
  measurementId: "G-6Z0XPT9SZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); 

export { auth }; //this is used by login