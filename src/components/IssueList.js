import useIssue from 'hooks/useIssue';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_DRAG_ISSUE_INFO, SET_SHOW_ISSUE_DETAIL_FLAG } from 'slices/issueSlice';
import styled from 'styled-components';

const IssueList = ({ issueInfo }) => {
  const dispatch = useDispatch();
  const { DRAG_ISSUE_INFO } = useSelector(state => state.issue);
  const { id, title, contents, deadline, state, person } = issueInfo;
  const { handleShowDetailIssue, handlePatchIssue } = useIssue();

  // 클릭 시 이슈의 상세정보를 보여줌
  const onShowDetail = () => {
    handleShowDetailIssue(id, state);
    dispatch(SET_SHOW_ISSUE_DETAIL_FLAG(true));
  };

  // 드래그 시작
  const onDragStart = e => {
    e.dataTransfer.effectAllowed = 'move';
    dispatch(SET_DRAG_ISSUE_INFO(issueInfo));
  };
  // 드래그 놓는 영역 만들기
  const onDragOver = e => {
    e.preventDefault();
  };
  // 드래그 놓을 때
  const onDrop = e => {
    e.preventDefault();
    const dropState = e.currentTarget.parentNode.id;
    handlePatchIssue({ ...DRAG_ISSUE_INFO, state: dropState });
  };

  return (
    <List onClick={onShowDetail} onDragStart={onDragStart} onDragOver={onDragOver} onDrop={onDrop} draggable>
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
