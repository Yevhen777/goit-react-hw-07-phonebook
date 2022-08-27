import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
import { contactsApi } from './getContact';

export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    items: [
      // {
      //   createdAt: '2022-08-23T01:11:14.940Z',
      //   name: 'Antonia Kovacek II',
      //   phone: '1-263-329-5513',
      //   id: '1',
      // },
    ],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },

    filteredItems(state, action) {
      state.filter = action.payload;
    },
    deleteContact(state, action) {
      const filteredContacts = state.items.filter(
        contactEl => contactEl.id !== action.payload
      );
      return { ...state, items: filteredContacts };
    },
  },
});

export const { addContact, filteredItems, deleteContact } =
  counterSlice.actions;

// const persistConfig = {
//   key: 'root',
//   storage,
// };
// const persistContactReducer = persistReducer(
//   persistConfig,
//   counterSlice.reducer
// );

export const store = configureStore({
  reducer: {
    myContacts: counterSlice.reducer,
    // myContacts: persistContactReducer,

    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

// export const persistor = persistStore(store);
