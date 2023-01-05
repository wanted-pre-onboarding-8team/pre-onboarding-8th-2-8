import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal, setCurrentIssueId } from 'slices/modalSlice';

const useModal = () => {
  const dispatch = useDispatch();

  return {
    createModalOpen: useSelector(state => state.modal.createModalOpen),
    issueModalOpen: useSelector(state => state.modal.issueModalOpen),
    currentIssueId: useSelector(state => state.modal.id),
    handleUnmountModal: useCallback(() => dispatch(hideModal()), [dispatch]),
    handleMountModal: useCallback(callback => dispatch(callback()), [dispatch]),
    setCurrentIssueId: useCallback(id => dispatch(setCurrentIssueId(id)), [dispatch]),
  };
};

export default useModal;
