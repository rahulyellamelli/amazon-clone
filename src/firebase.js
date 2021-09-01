// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAkT5YKjyWiJMA_4_tJl1WObSgNRMj30Uk",
  authDomain: "clone-11d44.firebaseapp.com",
  projectId: "clone-11d44",
  storageBucket: "clone-11d44.appspot.com",
  messagingSenderId: "502348893381",
  appId: "1:502348893381:web:4b47b210ad5fe990da74ac",
  measurementId: "G-4SW9RV1KZR",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
