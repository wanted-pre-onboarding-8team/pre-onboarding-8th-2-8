import { combineReducers, configureStore } from '@reduxjs/toolkit';
import issueSlice from 'slices/issueSlice';

const rootReducers = combineReducers({
  issue: issueSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducers,
});
