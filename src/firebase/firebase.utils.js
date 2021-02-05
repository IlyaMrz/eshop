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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    // console.log(snapShot);
    if (!snapShot.exists) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error while creating user', error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;