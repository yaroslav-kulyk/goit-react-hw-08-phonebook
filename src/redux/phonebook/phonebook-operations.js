import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    console.log(data);
    return data;
    //   token.unset();
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const addContact = createAsyncThunk('contacts/addContact', async newContact => {
  try {
    const { data } = await axios.post('/contacts', newContact);
    // fetchContacts();
    return data;
    //   token.unset();
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);

      return data;
      //   token.unset();
    } catch (error) {
      // TODO: Добавить обработку ошибки error.message
    }
  },
);

const phonebookOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};

export default phonebookOperations;
