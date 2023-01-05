import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from 'slices/modalSlice';

const useModal = () => {
  const dispatch = useDispatch();

  return {
    createModalOpen: useSelector(state => state.modal.createModalOpen),
    issueModalOpen: useSelector(state => state.modal.issueModalOpen),
    handleUnmountModal: useCallback(() => dispatch(hideModal()), [dispatch]),
    handleMountModal: useCallback(callback => dispatch(callback()), [dispatch]),
  };
};

export default useModal;
