import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_ISSUE_DETAIL } from 'slices/issueSlice';
import styled from 'styled-components';
import S from './Input.Styled';

const InputDeadline = () => {
  const dispatch = useDispatch();
  const { ISSUE_DETAIL } = useSelector(state => state.issue);

  const onChangeTime = useCallback(e => {
    dispatch(SET_ISSUE_DETAIL({ ...ISSUE_DETAIL, deadline: e.target.value }));
  }, []);

  return (
    <S.FlexContainer>
      <S.DetailTitle>이슈 마감일</S.DetailTitle>
      <Input value={ISSUE_DETAIL.deadline} onChange={onChangeTime}></Input>
    </S.FlexContainer>
  );
};

const Input = styled.input.attrs(() => ({
  type: 'datetime-local',
}))`
  flex: 1;
  margin-right: 10px;
  padding: 10px;
`;

export default InputDeadline;
