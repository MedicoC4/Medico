import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCX4jPxFJQC5T1zDPzrKz3HRYQdeps2St4",
  authDomain: "medico-5add3.firebaseapp.com",
  projectId: "medico-5add3",
  storageBucket: "medico-5add3.appspot.com",
  messagingSenderId: "468442720217",
  appId: "1:468442720217:web:4346fe0419451e1fe39bc8",
  measurementId: "G-V475XKKJSM"
};

const app = initializeApp(firebaseConfig);

export const DB = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
