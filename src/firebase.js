import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBBgtXOWLXtCKO-VW3XtZhWE_VmtgoDRU0',
  authDomain: 'premium-clothes.firebaseapp.com',
  projectId: 'premium-clothes',
  storageBucket: 'premium-clothes.appspot.com',
  messagingSenderId: '1655380082',
  appId: '1:1655380082:web:4bdcb0c6fc6379f0194aeb',
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export { db, auth, firebase };
