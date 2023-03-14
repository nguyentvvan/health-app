import { combineReducers } from '@reduxjs/toolkit';

import {
  userReducer as user,
  globalReducer as global,
  initialReducer as initial,
} from './slices';

export const rootReducer = combineReducers({
	user,
	global,
	initial,
});