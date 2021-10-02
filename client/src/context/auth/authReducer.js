import * as acTypes from '../types';

const authReducer = (state, action) => {
  switch (action.type) {
    case acTypes.LOGOUT_USER:
      localStorage.setItem('currentUser', '');
      localStorage.setItem('authToken', '');
      return { ...state, currentUser: null, isAuthenticated: false, token: '' };
    case acTypes.CHECK_LOCAL_USER:
      const existingUser = localStorage.getItem('currentUser');

      if (existingUser !== '') {
        return {
          ...state,
          currentUser: JSON.parse(existingUser),
          isAuthenticated: true,
          loading: false,
        };
      }
      return state;
    case acTypes.LOGIN_FAILED:
      localStorage.setItem('authToken', '');
      const loginError = action.payload;
      return {
        ...state,
        currentUser: null,
        isAuthenticated: false,
        loading: false,
        errors: state.errors.concat(loginError),
      };
    case acTypes.SET_LOGINED_USER:
      localStorage.setItem('authToken', action.payload.token);
      const loginedUser = {
        id: action.payload.id,
        created: action.payload.created,
        name: action.payload.name,
        email: action.payload.email,
      };
      localStorage.setItem('currentUser', JSON.stringify(loginedUser));
      return {
        ...state,
        currentUser: loginedUser,
        isAuthenticated: true,
        loading: false,
        token: action.payload.token,
      };
    case acTypes.REGISTER_FAILED:
      localStorage.setItem('authToken', '');
      const newError = action.payload;
      return {
        ...state,
        currentUser: null,
        isAuthenticated: false,
        loading: false,
        errors: state.errors.concat(newError),
      };
    case acTypes.SET_NEW_USER:
      localStorage.setItem('authToken', action.payload.token);
      const newUser = {
        id: action.payload.id,
        created: action.payload.created,
        name: action.payload.name,
        email: action.payload.email,
      };
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      // save auth token to local storage
      return {
        ...state,
        currentUser: newUser,
        isAuthenticated: true,
        loading: false,
        token: action.payload.token,
      };
    default:
      return state;
  }
};

export default authReducer;
