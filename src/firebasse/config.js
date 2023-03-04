// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDieV4bjs9B3HAuZESiVlrd5tBHiMyQA5A",
  authDomain: "api-zing-firebase.firebaseapp.com",
  projectId: "api-zing-firebase",
  storageBucket: "api-zing-firebase.appspot.com",
  messagingSenderId: "140362101243",
  appId: "1:140362101243:web:8a57b8ded3082d8e3ddb5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
