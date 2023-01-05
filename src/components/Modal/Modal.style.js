import styled from 'styled-components';

const ModalBackground = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: fixed;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);

  z-index: 99;
`;

const ModalWrapper = styled.div`
  position: absolute;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;

  top: 20%;
  left: 20%;

  width: 60%;
  height: 60%;

  padding: 30px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.backgroundLightest};

  border-radius: 20px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);

  z-index: 1000;
`;

// Header
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 5px;
  padding-top: 5px;

  height: 30%;
`;

// Body
const ModalBody = styled.div`
  width: 85%;
  height: 30%;

  margin-left: 10px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// Footer
const ModalFooter = styled.div`
  height: 30%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export { ModalBackground, ModalWrapper, ModalHeader, ModalBody, ModalFooter };
