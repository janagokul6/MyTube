// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZgr47KkaZDN3t6R0ExX-U8wntl_2dkGI",
  authDomain: "mytube-7b9b5.firebaseapp.com",
  projectId: "mytube-7b9b5",
  storageBucket: "mytube-7b9b5.appspot.com",
  messagingSenderId: "743079768698",
  appId: "1:743079768698:web:9703dfe6435cab625001c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const googleProvider = new GoogleAuthProvider();
const metaProvider = new FacebookAuthProvider();

export {auth,googleProvider,metaProvider};

export default app;