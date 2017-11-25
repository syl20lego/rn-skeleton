import {put, call, takeEvery} from 'redux-saga/effects'

import {fetchUsers} from '../api/users.api'
import {ActionCreators} from '../actions';
import {
    FETCH_USERS
} from '../actions/type';

function* fetchUsersEffect(action) {
    try {
        const response = yield call(fetchUsers, action.data);
        yield put(ActionCreators.fetchUsersSuccess(response))
    } catch (e) {
        yield put(ActionCreators.fetchUsersFailure(e))
    }
}

function* fetchUsersSaga() {
    yield takeEvery(FETCH_USERS, fetchUsersEffect)
}


export default [fetchUsersSaga];
  