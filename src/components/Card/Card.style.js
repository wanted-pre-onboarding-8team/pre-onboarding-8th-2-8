import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100px;

  padding: 10px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.backgroundLightest};
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.18);

  cursor: pointer;
`;

// Header
const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 5px;
  padding-top: 5px;

  height: 30%;
`;

// Body
const CardBody = styled.div`
  width: 85%;
  height: 30%;

  margin-left: 10px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// Footer
const CardFooter = styled.div`
  height: 30%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export { CardContainer, CardHeader, CardBody, CardFooter };
