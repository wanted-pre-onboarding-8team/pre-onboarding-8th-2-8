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
const Header = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 30px;

  height: 10%;
`;

const IssueNumber = styled.span`
  font-size: 25px;
  margin-right: 30px;
`;

// Body

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const BodyLeft = styled.div`
  width: 70%;
  height: 70%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

const BodyRight = styled(BodyLeft)`
  width: 30%;

  justify-content: flex-start;
  align-items: center;
  min-height: 300px;
`;

// Footer
const Footer = styled.div`
  height: 30%;

  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export { ModalBackground, IssueNumber, ModalWrapper, Header, BodyContainer, BodyLeft, BodyRight, Footer };
