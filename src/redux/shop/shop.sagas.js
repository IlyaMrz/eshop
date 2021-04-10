import { takeLatest, put, call, all } from 'redux-saga/effects';
import ShopActionsTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFailure }from './shop.actions';

export function* fetchCollectionsAsync() {
    yield console.log('gen gen async');
    
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error))
    }
    
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionsTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync)
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart)
    ])
}