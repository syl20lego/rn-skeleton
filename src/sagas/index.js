import {fork} from 'redux-saga/effects';
import users from './users.saga';

const sagas = [
    ...users
];

export default function* root() {
    yield sagas.map(saga => fork(saga));
}