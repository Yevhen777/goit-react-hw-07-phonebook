import { configureStore } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62fdfb2a41165d66bfb58828.mockapi.io',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),
    createContact: builder.mutation({
      query: value => ({
        url: `/contacts`,
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

export const {
  useGetContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
} = contactsApi;

// export const counterSlice = createSlice({
//   name: 'user',
//   initialState: {
//     items: [],
//     filter: '',
//   },
//   reducers: {
//     addContact(state, action) {
//       state.items.push(action.payload);
//     },

//     filteredItems(state, action) {
//       state.filter = action.payload;
//     },
//     deleteContact(state, action) {
//       const filteredContacts = state.items.filter(
//         contactEl => contactEl.id !== action.payload
//       );
//       return { ...state, items: filteredContacts };
//     },
//   },
// });

// export const { addContact, filteredItems, deleteContact } =
//   counterSlice.actions;
