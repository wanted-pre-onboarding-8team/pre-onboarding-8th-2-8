import styled from 'styled-components';

const Container = styled.div`
  width: 30%;
  height: 80%;

  padding: 10px 20px;

  background-color: ${({ theme }) => theme.backgroundMedium};
`;

const TitleContainer = styled.div`
  margin: 10px 20px;
  padding: 10px 0;
`;

const Title = styled.h2`
  text-align: left;
  font-size: 15px;

  color: ${({ theme }) => theme.textLight};
`;

export { Container, TitleContainer, Title };
