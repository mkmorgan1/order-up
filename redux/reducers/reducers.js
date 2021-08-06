import { combineReducers } from 'redux';

const INITIAL_STATE = {
  current: [],
  possible: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { current, possible } = state;
      const addedItem = possible.splice(action.payload);
      current.push(addedItem);
      const newState = { current, possible };
      return newState;
    default:
      return state;
  }
};

export default combineReducers({
  cart: cartReducer,
});
