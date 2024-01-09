// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXG3b1Jov56bciqDhkkr7kfqBc2zDgHdI",
  authDomain: "post-sharing-app.firebaseapp.com",
  projectId: "post-sharing-app",
  storageBucket: "post-sharing-app.appspot.com",
  messagingSenderId: "85930620196",
  appId: "1:85930620196:web:6983187a07dcea4e126fb1",
  measurementId: "G-NFJMM5EWGT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);