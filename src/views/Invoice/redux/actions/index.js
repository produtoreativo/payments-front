import { PAYMENTS_INVOICE_CHANGE, PAYMENTS_INVOICE_CREATE } from "../constants";
import reducer from "../reducer";

export function updateInvoice(payload) {
  return {
    type: PAYMENTS_INVOICE_CHANGE,
    payload,
    meta: {
      reducer,
    },
  };
}

export function createInvoice(payload) {
  return {
    type: PAYMENTS_INVOICE_CREATE,
    payload,
    meta: {
      reducer,
    },
  };
}
