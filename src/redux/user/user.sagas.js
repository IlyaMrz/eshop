import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserActionTypes from './user.types';
import { auth, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';
import {signInWithGoogle as signInWithGoogleFirebase} from '../../firebase/firebase.utils';
import { signInSuccess, signInFailure,
     signOutSuccess, signOutFailure,
    signUpFailure, signUpSuccess } from './user.actions'


export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        console.log('add data', additionalData)
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))    
    } catch(error){
        put(signInFailure(error))
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield signInWithGoogleFirebase();
        console.log("user fro, saga", user )
        yield getSnapshotFromUserAuth(user);
    } catch(error) {
        yield put(signInFailure(error))
    }
}

export function* signInWithEmail({payload: {email, password}}) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password)
        console.log( user )
        yield getSnapshotFromUserAuth(user);    
    } catch(error){
        put(signInFailure(error))
    }
}


export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch(error) {
        yield put(signInFailure(error))
    }
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch(error) {
        yield put(signOutFailure(error))
    }
}


export function* signUP({payload: { displayName, email, password, confirmPassword }}) {
    try {
        if (password!==confirmPassword) {throw new Error('passwords don\'t match')}
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        console.log(user)
        yield put(signUpSuccess({user, additionalData: { displayName }}))
    } catch(error) {
        yield put(signUpFailure(error))
    }
}

export function* signInAfterSignUp({payload: {user, additionalData}}) {
    yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}


export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUP)
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ])
}

