import { TOGGLE_CART_DROPDOWN, ADD_CART_ITEM } from '../action-types/';
import { addItemToCart } from '../utils/';

const initialState = {
  visible: false,
  cartItems: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CART_ITEM:
      return { ...state, cartItems: addItemToCart(state.cartItems, payload) };
    case TOGGLE_CART_DROPDOWN:
      return { ...state, visible: !state.visible };
    default:
      return state;
  }
};

export default cartReducer;
