import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_ISSUE_DETAIL } from 'slices/issueSlice';
import styled from 'styled-components';
import S from './Input.Styled';

const InputTitle = () => {
  const dispatch = useDispatch();
  const { ISSUE_DETAIL } = useSelector(state => state.issue);

  const onChangeTitle = useCallback(e => {
    dispatch(SET_ISSUE_DETAIL({ ...ISSUE_DETAIL, title: e.target.value }));
  }, []);

  return (
    <S.FlexContainer>
      <S.DetailTitle>제목</S.DetailTitle>
      <Input placeholder="이슈 제목.." value={ISSUE_DETAIL.title} onChange={onChangeTitle}></Input>
    </S.FlexContainer>
  );
};

const Input = styled.input.attrs(() => ({ type: 'text' }))`
  flex: 1;
  margin-right: 10px;
  padding: 10px;
`;

export default InputTitle;
