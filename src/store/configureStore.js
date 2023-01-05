import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from 'apis/apiSlice';

import issueDetailReducer from '../slices/issueDetailSlice';
import modalReducer from '../slices/modalSlice';

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    modal: modalReducer,
    issueDetail: issueDetailReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
});
