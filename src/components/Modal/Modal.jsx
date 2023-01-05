import useModal from 'hooks/useModal';

import * as S from './Modal.style';

const Modal = ({ children }) => {
  const { createModalOpen, issueModalOpen, handleUnmountModal } = useModal();

  return (
    <>
      <S.ModalBackground open={createModalOpen || issueModalOpen} onClick={() => handleUnmountModal()} />
      <S.ModalWrapper open={createModalOpen || issueModalOpen}>{children}</S.ModalWrapper>
    </>
  );
};

export default Modal;
