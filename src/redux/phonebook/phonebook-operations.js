import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    console.log('Error');
  }
});

const addContact = createAsyncThunk('contacts/addContact', async newContact => {
  try {
    const { data } = await axios.post('/contacts', newContact);

    return data;
  } catch (error) {
    console.log('Error');
  }
});

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);

      return data;
    } catch (error) {}
  },
);

const phonebookOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};

export default phonebookOperations;
