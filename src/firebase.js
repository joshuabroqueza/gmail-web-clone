// import { initializeApp } from 'firebase/app';
// // import { getStorage } from 'firebase/storage';
// // import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// const {
//   getFirestore,
//   collection,
//   getDocs,
//   getStorage,
// } = require('firebase/firestore');
import firebase from 'firebase';
import 'firebase/firestore';
require('firebase/auth');

const firebaseConfig = {
  apiKey: 'AIzaSyDVvns628a3cyNcWNkOBy6yWKRqYJn0zSY',
  authDomain: 'clone-9c8b1.firebaseapp.com',
  projectId: 'clone-9c8b1',
  storageBucket: 'clone-9c8b1.appspot.com',
  messagingSenderId: '894227783063',
  appId: '1:894227783063:web:6e71e9f8013d0d62b2f8d2',
};

// const app = finitializeApp(firebaseConfig);
// const db = getFirestore(app);
// // const auth = getAuth();
// const storage = getStorage(app);
//const provider=new GoogleAuthProvider()

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
