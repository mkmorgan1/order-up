export default function cartReducer(state, action) {
  switch (action.type) {
    case 'GET_CART_ITEMS':
      return [...state, ...action.payload];
    case 'ADD_TO_CART':
      return [action.payload, ...state];
    default:
      return state;
  }
}
