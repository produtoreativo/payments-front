import { PAYMENTS_INVOICE_CHANGE } from '../constants';

export default function reducer(state, action) {

  if (action.type === PAYMENTS_INVOICE_CHANGE) {
    return {
      ...state,
      invoice: {
        ...state.invoice,
        ...action.payload,
      }
    }
  }

  return state;

}