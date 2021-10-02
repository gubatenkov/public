import * as acTypes from '../types';

const contactReducer = (state, action) => {
  switch (action.type) {
    case acTypes.DELETE_CONTACT_ERROR:
      return { ...state, errors: state.errors.concat(action.payload) };
    case acTypes.CLEAR_STATE_CONTACTS:
      return { ...state, contacts: [] };
    case acTypes.FETCH_INITIAL_CONTACTS:
      return { ...state, contacts: action.payload, loading: false };
    case acTypes.FETCH_INITIAL_CONTACTS_ERROR:
      return {
        ...state,
        errors: state.errors.concat(action.payload),
        loading: false,
      };
    case acTypes.ADD_CONTACT_FAILED:
      return { ...state, errors: state.errors.concat(action.payload) };
    case acTypes.UPDATE_CONTACT_FAILED:
      return { ...state, errors: state.errors.concat(action.payload) };
    case acTypes.UPDATE_CONTACT:
      let contacts = state.contacts.filter((c) => c._id !== action.payload._id);
      return { ...state, contacts: [action.payload, ...contacts] };
    case acTypes.CLEAR_CURRENT_CONTACT:
      return { ...state, editContact: null };
    case acTypes.SET_CURRENT_CONTACT:
      const contact = state.contacts.filter((c) => c._id === action.payload);
      return { ...state, editContact: contact[0] };
    case acTypes.ADD_CONTACT:
      const newContact = { ...action.payload };
      return { ...state, contacts: [newContact, ...state.contacts] };
    case acTypes.DELETE_CONTACT:
      const filteredContacts = state.contacts.filter(
        (c) => c._id !== action.payload
      );
      return { ...state, contacts: filteredContacts };
    default:
      return state;
  }
};

export default contactReducer;
