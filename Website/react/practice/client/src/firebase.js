// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjsFeyS2VDu4wwXqKcb2K79Uvv05JM4MM",
  authDomain: "firbase-first-project-db99e.firebaseapp.com",
  projectId: "firbase-first-project-db99e",
  storageBucket: "firbase-first-project-db99e.appspot.com",
  messagingSenderId: "135782480275",
  appId: "1:135782480275:web:a24a8bb995436e3e385066",
  measurementId: "G-DWFM24HZXJ",
  databaseURL : "https://firbase-first-project-db99e-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);