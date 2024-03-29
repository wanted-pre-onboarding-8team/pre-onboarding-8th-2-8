import { useGetTodosQuery } from 'apis/apiSlice';
import IssueContainer from 'components/IssueContainer';
import LoadingSpinner from 'components/LoadingSpinner';
import IssueAddModal from 'components/Modal/IssueAddModal';
import IssueDetailModal from 'components/Modal/IssueDetailModal';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_ADD_ISSUE_FLAG, SET_ISSUE_LIST } from 'slices/issueSlice';
import styled from 'styled-components';

const Main = () => {
  const dispatch = useDispatch();
  const { ISSUE_LIST, SHOW_ISSUE_DETAIL_FLAG, SHOW_ADD_ISSUE_FLAG } = useSelector(state => state.issue);
  const { data: issueList, isLoading, isSuccess } = useGetTodosQuery();

  // 첫 렌더링 시 이슈 가져오기
  useEffect(() => {
    if (isSuccess) dispatch(SET_ISSUE_LIST(issueList));
  }, [issueList]);

  // 이슈 추가 창 띄우기
  const onClickAddIssueModal = () => {
    dispatch(SET_ADD_ISSUE_FLAG(true));
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : isSuccess ? (
        <>
          <MainWrapper>
            <IssueContainer id="todo" title={'할 일'} issueList={ISSUE_LIST.TODOS} />
            <IssueContainer id="working" title={'작업 중'} issueList={ISSUE_LIST.WORKINGS} />
            <IssueContainer id="complete" title={'완료'} issueList={ISSUE_LIST.COMPLETES} />
          </MainWrapper>
          <ShowAddIssue onClick={onClickAddIssueModal}>이슈 추가하기</ShowAddIssue>
          {SHOW_ISSUE_DETAIL_FLAG && <IssueDetailModal />}
          {SHOW_ADD_ISSUE_FLAG && <IssueAddModal />}
        </>
      ) : null}
    </>
  );
};

const MainWrapper = styled.main`
  border: 1px solid black;
  display: flex;
  margin: 0 auto;
  margin-top: 100px;
  width: 1000px;
  height: 800px;
`;

const ShowAddIssue = styled.button`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
  padding: 10px 20px;
`;

export default Main;
