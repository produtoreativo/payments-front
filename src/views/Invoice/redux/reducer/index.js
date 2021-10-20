import { PAYMENTS_INVOICE_CHANGE, PAYMENTS_INVOICE_CREATE_SUCCESSFUL } from "../constants";

export default function reducer(state, action) {
  if (action.type === PAYMENTS_INVOICE_CHANGE) {
    return {
      ...state,
      invoice: {
        ...state.invoice,
        ...action.payload,
      },
    };
  }

  if (action.type === PAYMENTS_INVOICE_CREATE_SUCCESSFUL) {
    return {
      ...state,
      payments: [...state.payments, action.payload],
      invoice: {
        name: "",
        amount: 0,
        taxId: "",
        orderId: "",
      },
    };
  }

  return state;
}
