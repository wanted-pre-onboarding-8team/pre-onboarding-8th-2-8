import styled from 'styled-components';

const S = {};

S.DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 600px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 0 0 9999px;
  background-color: white;
`;

S.SubmitButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0 5px 5px 0;
  padding: 10px 20px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
`;

export default S;
