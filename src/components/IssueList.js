import React from 'react';
import styled from 'styled-components';

const IssueList = ({ issueInfo }) => {
  const { num, title, contents, deadline, state, person } = issueInfo;

  return (
    <List>
      <div>{num}</div>
      <div>{title}</div>
      <div>{contents}</div>
      <div>{deadline}</div>
      <div>{state}</div>
      <div>{person}</div>
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
