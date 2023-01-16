import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAx4AB4OUMyA_2ed8ixYYX4kIREiN0_pW4",
    authDomain: "clone-636e8.firebaseapp.com",
    projectId: "clone-636e8",
    storageBucket: "clone-636e8.appspot.com",
    messagingSenderId: "1072324339906",
    appId: "1:1072324339906:web:068640edddd68b5b80735b",
    measurementId: "G-J6LFWJCZY3"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();

   export { auth, provider };
   export default db;