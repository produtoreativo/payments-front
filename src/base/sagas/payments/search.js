import { takeLatest, put } from "redux-saga/effects";
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true
})

function * prepare(action) {
  const { data: payload } = yield instance.get('/search');
  yield put({
    type: 'SUCCESS',
    payload,
    meta: action.meta,
  })
}

export default function* watchSearch() {
  yield takeLatest('SEARCH', prepare)
}