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
import { authReducer } from './auth';
import phonebookReducer from './phonebook/phonebook-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    filter,
    auth: persistReducer(authPersistConfig, authReducer),
    phonebook: phonebookReducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],

  devTools: process.env.NODE_ENV === 'development',
});

export default store;
export const persistor = persistStore(store);
