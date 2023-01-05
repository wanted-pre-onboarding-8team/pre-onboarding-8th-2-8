import useInput from 'hooks/useInput';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import S from './Input.Styled';

const InputTitle = () => {
  const { ISSUE_DETAIL } = useSelector(state => state.issue);
  const [title, setTitle] = useInput(ISSUE_DETAIL.title);

  return (
    <S.FlexContainer>
      <S.DetailTitle>제목</S.DetailTitle>
      <Input name="title" placeholder="이슈 제목.." value={title} onChange={setTitle}></Input>
    </S.FlexContainer>
  );
};

const Input = styled.input.attrs(() => ({ type: 'text' }))`
  flex: 1;
  margin-right: 10px;
  padding: 10px;
`;

export default InputTitle;
