
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmOZ1xUSVXrx19_qEfMycKJKDWPrIjOMg",
  authDomain: "medico-admin-b4179.firebaseapp.com",
  projectId: "medico-admin-b4179",
  storageBucket: "medico-admin-b4179.appspot.com",
  messagingSenderId: "194175206371",
  appId: "1:194175206371:web:c480c171ab02404cd856d6",
  measurementId: "G-LCF8CJCHTB"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);