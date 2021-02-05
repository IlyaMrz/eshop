import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDLpBSJQ0vVwkV0tu0g0ocEeXEPy-PxxI8",
    authDomain: "eshop-d706b.firebaseapp.com",
    projectId: "eshop-d706b",
    storageBucket: "eshop-d706b.appspot.com",
    messagingSenderId: "285748473475",
    appId: "1:285748473475:web:f36ad7c25c67a4725635b6",
    measurementId: "G-EGZD0ZGZJR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;