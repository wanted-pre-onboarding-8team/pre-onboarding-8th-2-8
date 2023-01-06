import useInput from 'hooks/useInput';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import S from './Input.Styled';

const InputDeadline = () => {
  const { ISSUE_DETAIL } = useSelector(state => state.issue);
  const [deadline, setDeadline] = useInput(ISSUE_DETAIL.deadline);

  return (
    <S.FlexContainer>
      <S.DetailTitle>이슈 마감일</S.DetailTitle>
      <Input name="deadline" value={deadline} onChange={setDeadline}></Input>
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
