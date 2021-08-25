import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const groupsApi = createApi({
  reducerPath: 'groupsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: (builder) => ({
    getGroups: builder.query({
      query: () => 'groups',
    }),
  }),
});

export const { useGetGroupsQuery } = groupsApi;
