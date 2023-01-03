import React, { useEffect } from 'react';
import styled from 'styled-components';
import { getIssue } from 'apis/issue';

const IssueContainer = ({ title }) => {
  useEffect(() => {
    getIssue();
  }, []);

  return (
    <Container>
      <Title>{title}</Title>
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
