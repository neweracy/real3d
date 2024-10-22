// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpcv7daCQlAg0QWzeXF5QlmJouLA0-Yuo",
  authDomain: "real3d-256e6.firebaseapp.com",
  projectId: "real3d-256e6",
  storageBucket: "real3d-256e6.appspot.com",
  messagingSenderId: "128107335466",
  appId: "1:128107335466:web:c3770219229838afc39853",
  measurementId: "G-GEJ2Y92EM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);