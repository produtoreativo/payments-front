

export default function reducer(state, action) {

  if (action.type === 'SUCCESS') {
    return {
      ...state,
      payments: action.payload,
    }
  }

  return state;
}