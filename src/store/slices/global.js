import {
  createSlice,
} from '@reduxjs/toolkit';

const initialState = {};

export const { reducer: globalReducer } = createSlice({
  initialState,
  name: 'Global',
  reducers: {},
});