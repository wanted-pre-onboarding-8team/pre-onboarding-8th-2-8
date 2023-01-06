import useInput from 'hooks/useInput';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import S from './Input.Styled';

const InputContent = () => {
  const { ISSUE_DETAIL } = useSelector(state => state.issue);
  const [content, setContent] = useInput(ISSUE_DETAIL.contents);

  return (
    <S.FlexContainer>
      <S.DetailTitle>이슈 내용</S.DetailTitle>
      <Input name="content" placeholder="이슈 내용.." value={content} onChange={setContent}></Input>
    </S.FlexContainer>
  );
};

const Input = styled.textarea`
  flex: 1;
  margin-right: 10px;
  padding: 10px;
`;

export default InputContent;
