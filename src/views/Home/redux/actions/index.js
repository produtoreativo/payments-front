import { PAYMENTS_SEARCH } from '../constants';
import reducer from '../reducer'; 

export function find(payload) {
  return {
    type: PAYMENTS_SEARCH,
    payload, 
    meta: {
      reducer,
    }
  }
}