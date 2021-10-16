import { connectRouter, LOCATION_CHANGE } from 'connected-react-router'

const initialState = {
  layout: null, 
  user: null,
  payments: [],
  invoice: {
    name: '',
    amount: 0,
    taxId: '',
    orderId: ''
  },
}

export default function createReducer(history) {
  const routerWithHistory = connectRouter(history);

  const initialStateWithRouter = {
    ...initialState,
    router: routerWithHistory(),
  }

  return (state = initialStateWithRouter, action) => {

    if (action.type === LOCATION_CHANGE) {
      return {
        ...state,
        router: routerWithHistory({
          ...action.payload,
        })
      }
    }

    if (action.meta && action.meta.reducer) {
      return action.meta.reducer(state, action);
    }

    return state;
  }
  
}