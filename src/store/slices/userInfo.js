import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  userId: null,
  username: '',
  email: null,
};

export const { reducer: userReducer } = createSlice({
  initialState,
  name: 'User',
  reducers: {},
});