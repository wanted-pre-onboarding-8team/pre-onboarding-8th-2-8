import { createSlice } from '@reduxjs/toolkit';

const issueDetailSlice = createSlice({
  name: 'issueDetail',
  initialState: {
    id: null,
    title: '',
    content: '',
    dueDate: null,
    status: 'TODOS',
    owner: '',
  },
  reducers: {
    setIssueDetails: (state, action) => {
      state = action.payload;

      return state;
    },
  },
});

export default issueDetailSlice.reducer;

export const { setIssueDetails } = issueDetailSlice.actions;
