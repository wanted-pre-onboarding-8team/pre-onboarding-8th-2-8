import React from 'react';
import styled from 'styled-components';
import IssueList from './IssueList';

const IssueContainer = ({ title, issueList }) => {
  return (
    <Container>
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
