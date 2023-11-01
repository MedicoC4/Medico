import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, createUserWithEmailAndPassword , GoogleAuthProvider } from "firebase/auth";
// import {GoogleSignin} from '@react-native-google-signin/google-signin'

const firebaseConfig = {
  apiKey: "AIzaSyCX4jPxFJQC5T1zDPzrKz3HRYQdeps2St4",
  authDomain: "medico-5add3.firebaseapp.com",
  projectId: "medico-5add3",
  storageBucket: "medico-5add3.appspot.com",
  messagingSenderId: "468442720217",
  appId: "1:468442720217:web:4346fe0419451e1fe39bc8",
  measurementId: "G-V475XKKJSM",
};

const app = initializeApp(firebaseConfig);

export default getFirestore(app);
export const auth = getAuth(app);


// GoogleSignin.configure({
//   webClientId: "468442720217-82eb2l2uo3vhmo7k42sn2a9htlnhrpk4.apps.googleusercontent.com",
// });


export const googleProvider = new GoogleAuthProvider();