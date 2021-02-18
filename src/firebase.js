import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDLY3mC9DCQA0sFAqhtYdZhR6X718PBKes",
    authDomain: "crud-f1da6.firebaseapp.com",
    projectId: "crud-f1da6",
    storageBucket: "crud-f1da6.appspot.com",
    messagingSenderId: "679022675556",
    appId: "1:679022675556:web:cf099cad6ed70f89f08171"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig)