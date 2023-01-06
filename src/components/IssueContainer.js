import { useUpdateTodoMutation } from 'apis/apiSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import IssueList from './IssueList';

const IssueContainer = ({ id, title, issueList }) => {
  const { DRAG_ISSUE_INFO, DRAG_ENTER_ISSUE_INFO } = useSelector(state => state.issue);
  const [update] = useUpdateTodoMutation();

  // 드래그 놓는 영역 만들기
  const onDragOver = e => {
    e.preventDefault();
  };
  // 드래그 놓을 때
  const onDrop = e => {
    e.preventDefault();

    const dropState = e.currentTarget.closest('article').id;
    console.log(DRAG_ENTER_ISSUE_INFO.id + ' ' + DRAG_ISSUE_INFO.id);
    update({ ...DRAG_ISSUE_INFO, state: dropState, id: DRAG_ENTER_ISSUE_INFO.id });
    update({ ...DRAG_ENTER_ISSUE_INFO, state: dropState, id: DRAG_ISSUE_INFO.id });
  };

  return (
    <Container id={id} onDragOver={onDragOver} onDrop={onDrop}>
      <Title>{title}</Title>
      {issueList.map(issue => (
        <IssueList key={issue.id} issueInfo={issue} />
      ))}
    </Container>
  );
};

const Container = styled.article`
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Title = styled.h4`
  text-align: center;
  border: 1px solid black;
`;

export default IssueContainer;
