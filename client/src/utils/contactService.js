import axios from 'axios';

class ContactService {
  modifyContact = async (contact) => {
    const config = {
      'Content-Type': 'application/json',
    };

    try {
      const res = await axios.put(
        `/api/contacts/${contact._id}`,
        contact,
        config
      );
      return res.data;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  };

  deleteContact = async (id) => {
    const config = {
      'Content-Type': 'application/json',
    };

    try {
      const res = await axios.delete(`/api/contacts/${id}`, config);
      return res.data;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  };

  loadContacts = async () => {
    const config = {
      'Content-Type': 'application/json',
    };

    try {
      const res = await axios.get('/api/contacts', config);
      return res.data;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  };

  createContact = async (cData) => {
    const config = {
      'Content-Type': 'application/json',
    };

    try {
      const res = await axios.post('/api/contacts', cData, config);
      return res.data;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  };

  updateContact = async () => {};
}

export default new ContactService();
