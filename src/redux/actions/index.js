import {
  SET_CURRENT_USER,
  ADD_CART_ITEM,
  TOGGLE_CART_DROPDOWN,
  REMOVE_CART_ITEM,
  UPDATE_QTY_CART_ITEM,
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

const removeCartItem = (id) => ({
  type: REMOVE_CART_ITEM,
  payload: id,
});

const updateQtyCartItem = (id, type) => ({
  type: UPDATE_QTY_CART_ITEM,
  payload: { id, type },
});

export {
  setCurrentUser,
  toggleCartDropdown,
  addCartItem,
  removeCartItem,
  updateQtyCartItem,
};
