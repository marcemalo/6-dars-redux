import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.list.push(action.payload);
    },
    setUsers: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addUser, setUsers } = usersSlice.actions;
export default usersSlice.reducer;
