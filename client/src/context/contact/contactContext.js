import React, { useContext, useReducer } from 'react';

import contactReducer from './contactReducer';
import * as acTypes from '../types';
import ContactService from '../../utils/contactService';
import setAuthGlobalHeader from '../../utils/setAuthHeaders';

const ContactContext = React.createContext();

const ContactProvider = ({ children }) => {
  const initialState = {
    contacts: [
      // {
      //   id: 1,
      //   name: 'Jhon Doe',
      //   email: 'jhon@gmail.com',
      //   phone: '9379992',
      //   type: 'personal',
      // },
      // {
      //   id: 2,
      //   name: 'Jhon Doe',
      //   email: 'jhon@gmail.com',
      //   phone: '9379992',
      //   type: 'personal',
      // },
      // {
      //   id: 3,
      //   name: 'Jhon Doe',
      //   email: 'jhon@gmail.com',
      //   phone: '9379992',
      //   type: 'business',
      // },
    ],
    editContact: null,
    loading: true,
    errors: [],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  const clearContacts = () => {
    dispatch({
      type: acTypes.CLEAR_STATE_CONTACTS,
    });
  };

  const fetchInitialContacts = async () => {
    setAuthGlobalHeader(localStorage.getItem('authToken'));
    try {
      const { data } = await ContactService.loadContacts();
      dispatch({
        type: acTypes.FETCH_INITIAL_CONTACTS,
        payload: data.contacts,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: acTypes.FETCH_INITIAL_CONTACTS_ERROR,
        payload: err.message,
      });
    }
  };

  const setEditContact = (id) => {
    dispatch({
      type: acTypes.SET_CURRENT_CONTACT,
      payload: id,
    });
  };

  const clearEditContact = () => {
    dispatch({
      type: acTypes.CLEAR_CURRENT_CONTACT,
    });
  };

  const updateContact = async (cData) => {
    try {
      const res = await ContactService.modifyContact(cData);
      if (res.status === 'success') {
        dispatch({
          type: acTypes.UPDATE_CONTACT,
          payload: res.data.contact,
        });
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: acTypes.UPDATE_CONTACT_FAILED,
        payload: err,
      });
    }
  };

  const addContact = async (cData) => {
    try {
      const { data } = await ContactService.createContact(cData);
      dispatch({
        type: acTypes.ADD_CONTACT,
        payload: data.contact,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: acTypes.ADD_CONTACT_FAILED,
        payload: err,
      });
    }
  };

  const deleteContact = async (id) => {
    try {
      const res = await ContactService.deleteContact(id);
      if (res.status === 'success') {
        dispatch({
          type: acTypes.DELETE_CONTACT,
          payload: id,
        });
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: acTypes.DELETE_CONTACT_ERROR,
        payload: err,
      });
    }
  };

  return (
    <ContactContext.Provider
      value={{
        ...state,
        addContact,
        deleteContact,
        updateContact,
        setEditContact,
        clearEditContact,
        fetchInitialContacts,
        clearContacts,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContactContext = () => {
  return useContext(ContactContext);
};

export { ContactContext, ContactProvider };
