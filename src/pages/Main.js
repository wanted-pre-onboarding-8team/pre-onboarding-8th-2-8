import IssueContainer from 'components/IssueContainer';
import useIssue from 'hooks/useIssue';
import React from 'react';
import styled from 'styled-components';

const Main = () => {
  const { issueList } = useIssue();
  const todos = issueList.filter(issueList => issueList.state === 'todo');
  const workings = issueList.filter(issueList => issueList.state === 'working');
  const completes = issueList.filter(issueList => issueList.state === 'complete');

  return (
    <MainWrapper>
      <IssueContainer title={'할 일'} issueList={todos} />
      <IssueContainer title={'작업 중'} issueList={workings} />
      <IssueContainer title={'완료'} issueList={completes} />
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
