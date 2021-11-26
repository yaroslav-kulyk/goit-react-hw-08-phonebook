import { configureStore } from '@reduxjs/toolkit';
// import filterReducer from './phonebook/phonebook-reducer';
import { contactsApi } from './contactsSlice';
import { authAPI } from './authSlice';
import { authReducer } from './auth';
import phonebookReducer from './phonebook/phonebook-slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    phonebook: phonebookReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
    authAPI.middleware,
  ],

  devTools: process.env.NODE_ENV === 'development',
});

export default store;
