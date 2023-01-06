import { useDeleteTodoMutation } from 'apis/apiSlice';
import useIssue from 'hooks/useIssue';
import React from 'react';
import { useDispatch } from 'react-redux';
import { SET_DRAG_ENTER_ISSUE_INFO, SET_DRAG_ISSUE_INFO, SET_SHOW_ISSUE_DETAIL_FLAG } from 'slices/issueSlice';
import styled from 'styled-components';

const IssueList = ({ issueInfo }) => {
  const dispatch = useDispatch();
  const { id, title, contents, deadline, state, person } = issueInfo;
  const { handleShowDetailIssue } = useIssue();
  const [removeIssue] = useDeleteTodoMutation();

  // 클릭 시 이슈의 상세정보를 보여줌
  const onShowDetail = () => {
    handleShowDetailIssue(id, state);
    dispatch(SET_SHOW_ISSUE_DETAIL_FLAG(true));
  };
  // 이슈 삭제 이벤트
  const onRemoveIssue = () => {
    removeIssue(id);
  };

  // 드래그 시작
  const onDragStart = e => {
    e.dataTransfer.effectAllowed = 'move';
    dispatch(SET_DRAG_ISSUE_INFO(issueInfo));
  };
  // 드래그 겹칠 시
  const onDragEnter = () => {
    dispatch(SET_DRAG_ENTER_ISSUE_INFO(issueInfo));
  };

  return (
    <ListWrapper>
      <List onDragEnter={onDragEnter} onClick={onShowDetail} onDragStart={onDragStart} draggable>
        <div>고유번호 : {id}</div>
        <div>제목 : {title}</div>
        <div>내용 : {contents}</div>
        <div>마감일 : {deadline}</div>
        <div>상태 : {state}</div>
        <div>담당자 : {person}</div>
      </List>
      <RemoveButton onClick={onRemoveIssue}>삭제</RemoveButton>
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  border: 1px solid blue;
  display: flex;
  align-items: flex-end;
  margin: 10px;
`;

const List = styled.li`
  flex: 1;
  position: relative;
  list-style: none;
  margin: 10px;
`;

const RemoveButton = styled.button`
  height: 20px;
  margin: 10px;
`;

export default IssueList;
