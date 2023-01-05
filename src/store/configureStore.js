import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from 'apis/apiSlice';

import modalReducer from '../slices/modalSlice';

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    modal: modalReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
});
