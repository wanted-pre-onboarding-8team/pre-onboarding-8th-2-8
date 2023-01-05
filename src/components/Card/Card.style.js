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

  border-bottom: 1px dashed gray;

  height: 30%;

  cursor: auto;
`;

// Body
const CardBody = styled.div`
  display: flex;
  padding-top: 10px;
  align-items: center;
  height: 30%;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// Footer
const CardFooter = styled.div`
  width: 100%;
  height: 40%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export { CardContainer, CardHeader, CardBody, CardFooter };
