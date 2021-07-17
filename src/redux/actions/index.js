import { SET_CURRENT_USER } from '../action-types/';

const setCurrentUser = (incomingUser) => ({
  type: SET_CURRENT_USER,
  payload: incomingUser,
});

export { setCurrentUser };
