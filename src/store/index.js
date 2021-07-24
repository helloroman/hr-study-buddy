import { configureStore } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const notesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  tagTypes: ['Notes'],
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: () => 'notes',
      providesTags: ['Notes'],
    }),
    addNote: builder.mutation({
      query: (body) => ({
        url: 'notes',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Notes'],
    }),
    removeNote: builder.mutation({
      query: (body) => ({
        url: 'notes',
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['Notes'],
    }),
  }),
});

export const { useGetNotesQuery, useAddNoteMutation, useRemoveNoteMutation } = notesApi;

export const store = configureStore({
  reducer: {
    [notesApi.reducerPath]: notesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(notesApi.middleware),
});
