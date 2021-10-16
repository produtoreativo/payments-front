import { PAYMENTS_INVOICE_CHANGE } from '../constants';
import reducer from '../reducer';

export function updateInvoice(payload) {
  return {
    type: PAYMENTS_INVOICE_CHANGE,
    payload, 
    meta: {
      reducer,
    }
  }
}