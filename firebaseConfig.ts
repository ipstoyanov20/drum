import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLgepC1AYigwJm1GUOektdGk3GaAREuWA",
  authDomain: "test-22e10.firebaseapp.com",
  databaseURL: "https://test-22e10-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-22e10",
  storageBucket: "test-22e10.firebasestorage.app",
  messagingSenderId: "916672266585",
  appId: "1:916672266585:web:722d0670912ff8bc38cc48",
  measurementId: "G-7MC7T38QJB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
