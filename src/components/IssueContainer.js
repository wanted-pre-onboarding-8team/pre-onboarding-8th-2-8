import useIssue from 'hooks/useIssue';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import IssueList from './IssueList';

const IssueContainer = ({ id, title, issueList }) => {
  const { DRAG_ISSUE_INFO } = useSelector(state => state.issue);
  const { handlePatchIssue } = useIssue();

  // 드래그 놓는 영역 만들기
  const onDragOver = e => {
    e.preventDefault();
  };
  // 드래그 놓을 때
  const onDrop = e => {
    e.preventDefault();
    const dropState = e.currentTarget.id;
    handlePatchIssue({ ...DRAG_ISSUE_INFO, state: dropState });
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
