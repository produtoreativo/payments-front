import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import { PAYMENTS_INVOICE_CREATE, PAYMENTS_INVOICE_CREATE_SUCCESSFUL } from "../constants";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true,
});

function* prepare(action) {
  const invoice = action.payload;
  const { data: payload } = yield instance.post("/invoice", { ...invoice });
  yield put({
    type: PAYMENTS_INVOICE_CREATE_SUCCESSFUL,
    payload,
    meta: action.meta,
  });
}

export default function* watchCreateInvoice() {
  console.log("Saga started");
  yield takeLatest(PAYMENTS_INVOICE_CREATE, prepare);
}
