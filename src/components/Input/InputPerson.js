import { PERSON } from 'constants/person';
import useInput from 'hooks/useInput';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import S from './Input.Styled';

const InputPerson = () => {
  const { ISSUE_DETAIL } = useSelector(state => state.issue);
  const [person, setPerson] = useInput(ISSUE_DETAIL.person);
  const [searchResult, setSearchResult] = useState([]);

  // 담당자 이름 바뀔 시 담당자 검색
  useEffect(() => {
    const filterPerson = PERSON.filter(name => name.includes(person));
    setSearchResult(filterPerson);
  }, [person]);

  return (
    <>
      <S.FlexContainer>
        <S.DetailTitle>이슈 담당자</S.DetailTitle>
        <Input name="person" placeholder="이슈 담당자.." value={person} onChange={setPerson} />
      </S.FlexContainer>
      {searchResult !== (null || undefined) && (
        <PersonContainer>
          {searchResult.map(person => (
            <PersonDiv key={person}>{person}</PersonDiv>
          ))}
        </PersonContainer>
      )}
    </>
  );
};

const Input = styled.input.attrs(() => ({ type: 'text' }))`
  flex: 1;
  margin-right: 10px;
  padding: 10px;
`;

const PersonContainer = styled.div`
  border: 1px solid lightgray;
  padding: 10px;
  margin-right: 5px;
  margin-left: 132px;
`;

const PersonDiv = styled.div`
  border: 1px solid black;
  padding: 2px;
  margin: 4px;
`;

export default InputPerson;
