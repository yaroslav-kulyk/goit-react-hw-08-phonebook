import { configureStore } from '@reduxjs/toolkit';
import filter from './phonebook/phonebook-reducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsApi } from './contactsSlice';
import { authAPI } from './authSlice';
import { authReducer } from './auth';
import phonebookReducer from './phonebook/phonebook-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// export const store = configureStore({
//   reducer: {
//     auth: persistReducer(authPersistConfig, authReducer),
//     todos: todosReducer,
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

const store = configureStore({
  reducer: {
    // auth: authReducer,
    filter,
    auth: persistReducer(authPersistConfig, authReducer),
    phonebook: phonebookReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
    authAPI.middleware,
  ],

  devTools: process.env.NODE_ENV === 'development',
});

export default store;
export const persistor = persistStore(store);
