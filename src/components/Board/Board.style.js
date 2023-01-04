import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 5% 10%;
  padding: 0 5%;
  border: 1px solid;
  width: 80%;
  height: 80vh;

  border-radius: 30px;

  background-color: ${({ theme }) => theme.backgroundLightest};
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  margin: 30px;
  font-size: 35px;

  color: ${({ theme }) => theme.textDark};
`;

const KanbanContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  overflow-y: auto;
`;

export { Wrapper, HeaderContainer, Header, KanbanContainer };
