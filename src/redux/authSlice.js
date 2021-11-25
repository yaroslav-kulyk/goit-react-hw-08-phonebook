import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  // tagTypes: ['Contact'],
  endpoints: builder => ({
    register: builder.mutation({
      query: newUser => ({
        url: `/users/signup`,
        method: 'POST',
        body: newUser,
      }),
    }),

    login: builder.mutation({
      query: user => ({
        url: `/users/login`,
        method: 'POST',
        body: user,
      }),
    }),

    // fetchContacts: builder.query({
    //   query: () => `/contacts`,
    //   providesTags: ['Contact'],
    // }),

    // deleteContact: builder.mutation({
    //   query: contactId => ({
    //     url: `/contacts/${contactId}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['Contact'],
    // }),

    // addContact: builder.mutation({
    //   query: newContact => ({
    //     url: `/contacts`,
    //     method: 'POST',
    //     body: newContact,
    //   }),
    //   invalidatesTags: ['Contact'],
    // }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authAPI;
