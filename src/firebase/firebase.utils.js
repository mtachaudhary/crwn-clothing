import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyAlxD0CbdhhnnMtWqLn_o-0vjecjuqTMxA",
  authDomain: "crwn-clothing-aaf5a.firebaseapp.com",
  projectId: "crwn-clothing-aaf5a",
  storageBucket: "crwn-clothing-aaf5a.appspot.com",
  messagingSenderId: "215781925192",
  appId: "1:215781925192:web:e781a096a3cc68ce4f137d",
  measurementId: "G-YXGER2SSQD"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;