import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDStnFvT_UhysDXc1LO2LvRKlVIzcRglsw",
  authDomain: "kelas-ix.firebaseapp.com",
  databaseURL:
    "https://kelas-ix-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kelas-ix",
  storageBucket: "kelas-ix.appspot.com",
  messagingSenderId: "1063083116187",
  appId: "1:1063083116187:web:8ce337dab6a58fa5d2283e",
  measurementId: "G-ZS0G5JFZPG",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export { db };
