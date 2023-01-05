import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    createModalOpen: false,
    issueModalOpen: false,
    id: null,
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
    setCurrentIssueId: (state, action) => {
      state.id = Number(action.payload);
    },
  },
});

export default modalSlice.reducer;

export const { showCreateModal, showIssueModal, hideModal, setCurrentIssueId } = modalSlice.actions;
