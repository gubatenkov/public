import {
  TOGGLE_CART_DROPDOWN,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  UPDATE_QTY_CART_ITEM,
} from '../action-types/';
import { addItemToCart, updatedCartItems } from '../utils/';

const initialState = {
  visible: false,
  cartItems: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_QTY_CART_ITEM:
      return {
        ...state,
        cartItems: updatedCartItems(state.cartItems, payload),
      };

    case REMOVE_CART_ITEM:
      const cart = state.cartItems.filter((item) => item.id !== payload);
      return { ...state, cartItems: cart };

    case ADD_CART_ITEM:
      return { ...state, cartItems: addItemToCart(state.cartItems, payload) };

    case TOGGLE_CART_DROPDOWN:
      return { ...state, visible: !state.visible };
    default:
      return state;
  }
};

export default cartReducer;
