import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    createModalOpen: false,
    issueModalOpen: false,
  },
  reducers: {
    showCreateModal: state => {
      state.createModalOpen = true;
      state.issueModalOpen = false;

      console.log('createModal');
    },
    showIssueModal: state => {
      state.issueModalOpen = true;
      state.createModalOpen = false;

      console.log('issueModal');
    },
    hideModal: state => {
      state.issueModalOpen = false;
      state.createModalOpen = false;
    },
  },
});

export default modalSlice.reducer;

export const { showCreateModal, showIssueModal, hideModal } = modalSlice.actions;
