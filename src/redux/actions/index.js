import {
  SET_CURRENT_USER,
  ADD_CART_ITEM,
  TOGGLE_CART_DROPDOWN,
} from '../action-types/';

const setCurrentUser = (incomingUser) => ({
  type: SET_CURRENT_USER,
  payload: incomingUser,
});

const toggleCartDropdown = () => ({
  type: TOGGLE_CART_DROPDOWN,
});

const addCartItem = (item) => ({
  type: ADD_CART_ITEM,
  payload: item,
});

export { setCurrentUser, toggleCartDropdown, addCartItem };
