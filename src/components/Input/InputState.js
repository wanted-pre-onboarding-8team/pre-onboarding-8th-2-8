import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import S from './Input.Styled';

const InputState = () => {
  const { ISSUE_DETAIL } = useSelector(state => state.issue);
  const [issueState, setIssueState] = useState(ISSUE_DETAIL.state);

  // 클릭 시 이슈 상태 변경
  const onClickChangeState = e => {
    setIssueState(e.target.value);
  };

  return (
    <S.FlexContainer>
      <S.DetailTitle>이슈 상태</S.DetailTitle>
      <Input value="todo" onClick={onClickChangeState} disabled={issueState === 'todo'} />
      <Input value="working" onClick={onClickChangeState} disabled={issueState === 'working'} />
      <Input value="complete" onClick={onClickChangeState} disabled={issueState === 'complete'} />
    </S.FlexContainer>
  );
};

const Input = styled.input.attrs(() => ({ type: 'button' }))`
  border: 1px solid black;
  flex: 1;
  margin: 0 10px;
  padding: 5px 10px;
`;

export default InputState;
