import { configureStore } from '@reduxjs/toolkit';
import { notesApi } from 'store/api/notes';
import { groupsApi } from 'store/api/groups';

export * from './api/notes';
export * from './api/groups';

export const store = configureStore({
  reducer: {
    [notesApi.reducerPath]: notesApi.reducer,
    [groupsApi.reducerPath]: groupsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(notesApi.middleware),
});
