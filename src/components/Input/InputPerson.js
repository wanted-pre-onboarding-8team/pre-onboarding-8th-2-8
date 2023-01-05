import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import S from './Input.Styled';
import { PERSON } from 'constants/person';

const InputPerson = () => {
  const { ISSUE_DETAIL } = useSelector(state => state.issue);
  const [person, setPerson] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  // 이슈 상세정보 담당자 value 정하기
  useEffect(() => {
    setPerson(ISSUE_DETAIL.person);
  }, []);

  // 담당자 검색어 입력
  const onInputPerson = useCallback(e => {
    e.preventDefault();
    setPerson(e.target.value);
    onSearchPerson(e.target.value);
  }, []);

  // 담당자 찾기
  const onSearchPerson = searchValue => {
    const filteringPerson = PERSON.filter(name => name.includes(searchValue));
    setSearchResult(filteringPerson);
  };

  // 담당자 박스 클릭
  const onClickChangeInputValue = e => {
    setPerson(e.target.innerHTML);
  };

  return (
    <>
      <S.FlexContainer>
        <S.DetailTitle>이슈 담당자</S.DetailTitle>
        <Input placeholder="이슈 담당자.." value={person} onChange={onInputPerson} />
      </S.FlexContainer>
      {searchResult !== (null || undefined) && (
        <PersonContainer>
          {searchResult.map(person => (
            <PersonDiv key={person} onClick={onClickChangeInputValue}>
              {person}
            </PersonDiv>
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
