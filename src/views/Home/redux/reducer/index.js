
import { PAYMENTS_SEARCH_SUCCESS } from '../constants';

export default function reducer(state, action) {

  if (action.type === PAYMENTS_SEARCH_SUCCESS) {
    return {
      ...state,
      payments: action.payload,
    }
  }

  return state;
}