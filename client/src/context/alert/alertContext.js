import { createContext, useContext, useReducer, useState } from 'react';

import alertReducer from './alertReducer';
import * as acTypes from '../types';
import { v4 as uuidv4 } from 'uuid';

const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const initialState = {
    alerts: [],
    visible: false,
  };
  const [state, dispatch] = useReducer(alertReducer, initialState);
  const [alertTimeoutId, setAlertTimeoutId] = useState('');

  const removeAlert = () => {
    dispatch({
      type: 'REMOVE_ALERT',
    });
    // end last timeout
    if (typeof alertTimeoutId === Number) {
      clearTimeout(alertTimeoutId);
    }
  };

  const showAlert = (message, type = 'info', ms = 5000) => {
    removeAlert();
    const id = uuidv4();
    dispatch({
      type: acTypes.SET_ALERT,
      payload: {
        id,
        message,
        type,
      },
    });
    const timeoutId = setTimeout(() => {
      dispatch({
        type: acTypes.REMOVE_ALERT,
        // payload: id,
      });
    }, ms);
    setAlertTimeoutId(timeoutId);
  };

  return (
    <AlertContext.Provider value={{ ...state, showAlert, removeAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => {
  return useContext(AlertContext);
};

export { AlertContext, AlertProvider };
