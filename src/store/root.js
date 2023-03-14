import { combineReducers } from '@reduxjs/toolkit';

import {
  userReducer as userInfo,
  globalReducer as global,
  initialReducer as initial,
} from './slices';

export const rootReducer = combineReducers({
	userInfo,
	global,
	initial,
});