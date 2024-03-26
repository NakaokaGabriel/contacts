import { Contact } from '@/types/contacts.types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/contacts' }),
  tagTypes: ['Contacts'],
  endpoints: (builder) => ({
    getContacts: builder.query<Contact[], void>({
      query: () => `?_sort=name`,
      providesTags: ['Contacts']
    }),
    getContactByGroup: builder.query<Contact[], string>({
      query: (group) => `?group=${group}`,
      providesTags: ['Contacts']
    }),
    getContactById: builder.query<Contact, string>({
      query: (id) => `/${id}`,
      providesTags: ['Contacts']
    }),
    createContact: builder.mutation<Contact[], Contact>({
      query: (body) => ({
        url: '',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation<Contact[], string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Contacts'],
    }),
    updateContact: builder.mutation<Contact[], Contact>({
      query: ({ id, ...body }) => ({
        url: `/${id}`,
        method: 'PATCH',
        body
      }),
      invalidatesTags: ['Contacts'],
    }),
  })
});

export const { 
  useGetContactsQuery, 
  useGetContactByGroupQuery,
  useGetContactByIdQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation
} = contactsApi;