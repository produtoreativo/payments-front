import { takeLatest, put } from "redux-saga/effects";
import axios from 'axios';
import { PAYMENTS_SEARCH, PAYMENTS_SEARCH_SUCCESS } from '../constants';

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true
})

function * prepare(action) {
  const { data: payload } = yield instance.get('/search');
  yield put({
    type: PAYMENTS_SEARCH_SUCCESS,
    payload,
    meta: action.meta,
  })
}

export default function* watchSearch() {
  yield takeLatest(PAYMENTS_SEARCH, prepare)
}