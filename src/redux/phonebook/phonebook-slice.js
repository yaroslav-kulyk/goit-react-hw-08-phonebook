import { createSlice } from '@reduxjs/toolkit';
import phonebookOperations from './phonebook-operations';

const initialState = {
  contacts: [],
  isLoading: false,
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,

  extraReducers: {
    [phonebookOperations.fetchContacts.fulfilled](state, action) {
      state.contacts = action.payload;
    },
    [phonebookOperations.addContact.pending](state, action) {
      state.isLoading = true;
    },
    [phonebookOperations.addContact.fulfilled](state, action) {
      state.contacts = [...state.contacts, action.payload];
      state.isLoading = false;
    },
  },
});

export default phonebookSlice.reducer;
