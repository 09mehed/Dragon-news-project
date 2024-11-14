// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXtACH_llWdEYr2vT2oNKpwnIcupXgDzY",
  authDomain: "dragon-news-project-f012a.firebaseapp.com",
  projectId: "dragon-news-project-f012a",
  storageBucket: "dragon-news-project-f012a.firebasestorage.app",
  messagingSenderId: "447574537901",
  appId: "1:447574537901:web:b06824baaa79e7bacdb824"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth