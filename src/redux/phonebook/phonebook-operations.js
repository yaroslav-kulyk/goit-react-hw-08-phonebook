import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
    //   token.unset();
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const addContact = createAsyncThunk('contacts/addContact', async newContact => {
  try {
    const { data } = await axios.post('/contacts', newContact);
    return data;
    //   token.unset();
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const phonebookOperations = {
  addContact,
  fetchContacts,
};

export default phonebookOperations;
