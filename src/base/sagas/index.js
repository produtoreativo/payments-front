import { fork } from 'redux-saga/effects';

import watchSearch from './payments/search';

export default function* rootSaga() {
  yield fork(watchSearch);
}