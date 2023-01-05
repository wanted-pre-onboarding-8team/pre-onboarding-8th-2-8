import React, { Suspense, useEffect } from 'react';
import styled from 'styled-components';
import IssueContainer from 'components/IssueContainer';
import { useSelector } from 'react-redux';
import IssueDetailModal from 'components/Modal/IssueDetailModal';
import useIssue from 'hooks/useIssue';

const Main = () => {
  const { handleGetIssue } = useIssue();
  const { ISSUE_LIST, SHOW_ISSUE_DETAIL_FLAG } = useSelector(state => state.issue);

  // 첫 렌더링 시 이슈 가져오기
  useEffect(() => {
    handleGetIssue();
  }, []);

  return (
    <Suspense fallback={'...Loading'}>
      <MainWrapper>
        <IssueContainer title={'할 일'} issueList={ISSUE_LIST.TODOS} />
        <IssueContainer title={'작업 중'} issueList={ISSUE_LIST.WORKINGS} />
        <IssueContainer title={'완료'} issueList={ISSUE_LIST.COMPLETES} />
      </MainWrapper>
      {SHOW_ISSUE_DETAIL_FLAG && <IssueDetailModal />}
    </Suspense>
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
  height: 800px;
`;

export default Main;
