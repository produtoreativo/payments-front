import { takeEvery } from "redux-saga/effects";
import { LOCATION_CHANGE } from 'connected-react-router'

function * prepare(action) {
  console.log('analytics', action);
}

export default function* watchAnalytics() {
  yield takeEvery(LOCATION_CHANGE, prepare)
}