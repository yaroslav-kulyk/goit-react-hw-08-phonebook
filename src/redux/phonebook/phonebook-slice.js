import { createSlice } from '@reduxjs/toolkit';
import phonebookOperations from './phonebook-operations';

const initialState = {
  contacts: [],
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  extraReducers: {
    [phonebookOperations.addContact.fulfilled](state, action) {
      state.contacts = [...state.contacts, action.payload.contacts];
    },
    // [phonebookOperations.logIn.fulfilled](state, action) {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLoggedIn = true;
    // },
    // [phonebookOperations.logOut.fulfilled](state, action) {
    //   state.user = { name: null, email: null };
    //   state.token = null;
    //   state.isLoggedIn = false;
    // },
    // [phonebookOperations.fetchCurrentUser.fulfilled](state, action) {
    //   state.user = action.payload;
    //   state.isLoggedIn = true;
    // },
  },
});

export default phonebookSlice.reducer;
