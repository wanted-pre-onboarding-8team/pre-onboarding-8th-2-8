import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { apiSlice } from 'apis/apiSlice';
import issueSlice from 'slices/issueSlice';

const rootReducers = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  issue: issueSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducers,
});
