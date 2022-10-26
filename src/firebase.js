import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBwlbhjCkJmCb4v9XsuVjZUT0-I1eP3iek",
    authDomain: "linkedin-clone-9dbcd.firebaseapp.com",
    projectId: "linkedin-clone-9dbcd",
    storageBucket: "linkedin-clone-9dbcd.appspot.com",
    messagingSenderId: "837210694087",
    appId: "1:837210694087:web:839e0fe8ad914f65e179e2",
    measurementId: "G-XVTTCEVMNP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};

