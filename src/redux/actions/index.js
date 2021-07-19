import { SET_CURRENT_USER } from '../action-types/';
import { TOGGLE_CART_DROPDOWN } from '../action-types/';

const setCurrentUser = (incomingUser) => ({
  type: SET_CURRENT_USER,
  payload: incomingUser,
});

const toggleCartDropdown = () => ({
  type: TOGGLE_CART_DROPDOWN,
});

export { setCurrentUser, toggleCartDropdown };
