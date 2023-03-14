import { configureStore } from '@reduxjs/toolkit';

import { rootReducer as reducer } from './root';

export const store = configureStore({
  reducer,
})