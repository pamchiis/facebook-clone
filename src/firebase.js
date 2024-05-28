import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBEg1jSFDlFj3XfazsWglVKgpEkBCtpkz8",
    authDomain: "facebook-clone-87c69.firebaseapp.com",
    projectId: "facebook-clone-87c69",
    storageBucket: "facebook-clone-87c69.appspot.com",
    messagingSenderId: "654470832489",
    appId: "1:654470832489:web:63eab0b0dd33f562f51df8",
    measurementId: "G-XFEP8WWGS6"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;