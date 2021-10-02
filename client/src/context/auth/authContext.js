import { createContext, useContext, useReducer } from 'react';
import authReducer from './authReducer';
import * as acTypes from '../types';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initialState = {
    currentUser: null,
    loading: true,
    isAuthenticated: false,
    errors: [],
    token: '',
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const logoutUser = () => {
    dispatch({
      type: acTypes.LOGOUT_USER,
    });
  };

  const checkLocalUser = () => {
    dispatch({
      type: acTypes.CHECK_LOCAL_USER,
    });
  };

  const setLoginedUserToState = (userDataObj) => {
    dispatch({
      type: acTypes.SET_LOGINED_USER,
      payload: userDataObj,
    });
  };

  const setLoginFailed = (error) => {
    dispatch({
      type: acTypes.LOGIN_FAILED,
      payload: error,
    });
  };

  const setRegisterFailed = (error) => {
    dispatch({
      type: acTypes.REGISTER_FAILED,
      payload: error,
    });
  };

  const setNewUserToState = (userDataObj) => {
    dispatch({
      type: acTypes.SET_NEW_USER,
      payload: userDataObj,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        setNewUserToState,
        setRegisterFailed,
        setLoginFailed,
        setLoginedUserToState,
        checkLocalUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider };
