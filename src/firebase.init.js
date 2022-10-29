// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_STORAGEBUCKET,
  storageBucket: process.env.REACT_APP_MESSAGINGSENDERID,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID


  // apiKey: "AIzaSyAACu1njiylKI6w6HowIoLWIoh8EtYo1UQ",
  // authDomain: "my-doctors-125623.firebaseapp.com",
  // projectId: "my-doctors-125623",
  // storageBucket: "my-doctors-125623.appspot.com",
  // messagingSenderId: "909568209102",
  // appId: "1:909568209102:web:23ccaca20b79574e7ca09f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;