import { TOGGLE_CART_DROPDOWN } from '../action-types/';

const initialState = {
  visible: false,
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_CART_DROPDOWN:
      return { ...state, visible: !state.visible };
    default:
      return state;
  }
};

export default cartReducer;
