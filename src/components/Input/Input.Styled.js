import styled from 'styled-components';

const S = {};

S.FlexContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  margin: 5px;
  padding: 5px;
`;

S.DetailTitle = styled.h4`
  width: 100px;
  height: 30px;
  line-height: 30px;
  font-weight: 400;
  margin: 5px 10px;
`;

export default S;
