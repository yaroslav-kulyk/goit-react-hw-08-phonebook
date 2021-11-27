import { createSlice } from '@reduxjs/toolkit';
import phonebookOperations from './phonebook-operations';

const initialState = {
  contacts: [],
  // filter: '',
  isLoading: false,
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  // reducers: {
  //   changeFilter: (state, { payload }) => (state.filter = payload),
  // },
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

// export const { changeFilter } = phonebookSlice.actions;
export default phonebookSlice.reducer;
