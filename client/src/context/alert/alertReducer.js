import * as acTypes from '../types';

const alertReducer = (state, action) => {
  switch (action.type) {
    case acTypes.SET_CLEANUP_ID:
      return { ...state, cleanupId: action.payload };
    case acTypes.REMOVE_ALERT:
      return { ...state, visible: false };
    case acTypes.SET_ALERT:
      const newAlerts = [...state.alerts, action.payload];
      return { ...state, alerts: newAlerts, visible: true };
    default:
      return state;
  }
};

export default alertReducer;
