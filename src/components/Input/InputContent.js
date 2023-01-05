import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_ISSUE_DETAIL } from 'slices/issueSlice';
import styled from 'styled-components';
import S from './Input.Styled';

const InputContent = () => {
  const dispatch = useDispatch();
  const { ISSUE_DETAIL } = useSelector(state => state.issue);

  const onChangeContent = useCallback(e => {
    dispatch(SET_ISSUE_DETAIL({ ...ISSUE_DETAIL, contents: e.target.value }));
  }, []);

  return (
    <S.FlexContainer>
      <S.DetailTitle>이슈 내용</S.DetailTitle>
      <Input placeholder="이슈 내용.." value={ISSUE_DETAIL.contents} onChange={onChangeContent}></Input>
    </S.FlexContainer>
  );
};

const Input = styled.textarea`
  flex: 1;
  margin-right: 10px;
  padding: 10px;
`;

export default InputContent;
