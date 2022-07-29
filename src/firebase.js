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
// import initializeApp from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyA3XoXom4H6QfnRcRVo22iL4nUUSCFhWEs',
  authDomain: 'linkedin-clone-yt-19e25.firebaseapp.com',
  projectId: 'linkedin-clone-yt-19e25',
  storageBucket: 'linkedin-clone-yt-19e25.appspot.com',
  messagingSenderId: '323939673569',
  appId: '1:323939673569:web:6d3bf1aa5aa0afcc8e1ea0',
};

// const app = finitializeApp(firebaseConfig);
// const db = getFirestore(app);
// // const auth = getAuth();
// const storage = getStorage(app);
//const provider=new GoogleAuthProvider()

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
