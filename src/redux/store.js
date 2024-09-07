import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './user-Slice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
