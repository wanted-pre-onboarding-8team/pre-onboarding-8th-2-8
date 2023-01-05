import React from 'react';
import useIssue from 'hooks/useIssue';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { SET_SHOW_ISSUE_DETAIL_FLAG } from 'slices/issueSlice';

const IssueList = ({ issueInfo }) => {
  const dispatch = useDispatch();
  const { id, title, contents, deadline, state, person } = issueInfo;
  const { handleShowDetailIssue } = useIssue();

  // 클릭 시 이슈의 상세정보를 보여줌
  const onShowDetail = () => {
    handleShowDetailIssue(id, state);
    dispatch(SET_SHOW_ISSUE_DETAIL_FLAG(true));
  };

  return (
    <List onClick={onShowDetail} draggable>
      <div>고유번호 : {id}</div>
      <div>제목 : {title}</div>
      <div>내용 : {contents}</div>
      <div>마감일 : {deadline}</div>
      <div>상태 : {state}</div>
      <div>담당자 : {person}</div>
    </List>
  );
};

const List = styled.li`
  border: 1px solid blue;
  list-style: none;
  margin: 10px;
  padding: 10px;
`;

export default IssueList;
