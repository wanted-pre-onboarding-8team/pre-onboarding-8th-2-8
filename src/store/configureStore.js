import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { apiSlice } from 'apis/apiSlice';
import issueSlice from 'slices/issueSlice';

const rootReducers = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  issue: issueSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);
