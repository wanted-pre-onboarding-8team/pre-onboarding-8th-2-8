import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_ISSUE_DETAIL } from 'slices/issueSlice';
import styled from 'styled-components';
import S from './Input.Styled';

const InputState = () => {
  const dispatch = useDispatch();
  const { ISSUE_DETAIL } = useSelector(state => state.issue);

  const onChangeState = e => {
    dispatch(SET_ISSUE_DETAIL({ ...ISSUE_DETAIL, state: e.target.value }));
  };

  return (
    <S.FlexContainer>
      <S.DetailTitle>이슈 상태</S.DetailTitle>
      <Input value="todo" onClick={onChangeState} disabled={ISSUE_DETAIL.state === 'todo'} />
      <Input value="working" onClick={onChangeState} disabled={ISSUE_DETAIL.state === 'working'} />
      <Input value="complete" onClick={onChangeState} disabled={ISSUE_DETAIL.state === 'complete'} />
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
