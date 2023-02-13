import { createSlice } from '@reduxjs/toolkit';
import users from '../../data';

const initialState = {
  users: users,
  searchJob: '',
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    inputHandler: (state, action) => {
      state.searchJob = action.payload;
    },
    refresh: (state) => {
      state.users = users;
    },
    filterUsers: (state, action) => {
      state.users = state.users.filter((user) =>
        user.job.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    usersInAgeRange: (state) => {
      state.users = users.filter((user) => user.age >= 22 && user.age <= 25);
    },
  },
});

export const {
  deleteUser,
  inputHandler,
  refresh,
  filterUsers,
  usersInAgeRange,
} = homeSlice.actions;

export default homeSlice.reducer;
