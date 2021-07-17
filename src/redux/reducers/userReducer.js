import { SET_CURRENT_USER } from '../action-types/';

const initialState = {
  currentUser: null,
  defaultImg: 'https://via.placeholder.com/100?text=U',
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};

export default userReducer;
