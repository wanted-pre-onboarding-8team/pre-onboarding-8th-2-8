import IssueContainer from 'components/IssueContainer';
import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return (
    <MainWrapper>
      <IssueContainer title={'할 일'} />
      <IssueContainer title={'작업 중'} />
      <IssueContainer title={'완료'} />
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  border: 1px solid black;
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 1000px;
`;

export default Main;
