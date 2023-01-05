import useSearchBar from 'hooks/useSearchBar';

import * as S from './AutoComplete.style';

const AutoComplete = ({ list, todo, ListComponent }) => {
  const { handleKeyword, handleAutoComplete, handleOnFocus, setIsActive, inputRef, isActive, filteredList } =
    useSearchBar(list);

  return (
    <S.Wrapper>
      <S.InputContainer>
        <S.SearchInput
          ref={inputRef}
          type="text"
          placeholder="목록에서 선택해주세요."
          maxLength={20}
          onChange={e => handleKeyword(e.target.value)}
          onFocus={() => handleOnFocus()}
          onBlur={() => setTimeout(() => setIsActive(!isActive), 150)}
        />
        <S.AutoCompleteContainer isActive={isActive}>
          {filteredList?.length === 0 ? (
            <S.AutoCompleteList>{'검색하신 결과가 없습니다.'}</S.AutoCompleteList>
          ) : (
            filteredList.map((item, idx) => (
              <ListComponent
                key={list.userId ? list.userId : idx}
                item={item}
                users={list}
                todo={todo}
                handleAutoComplete={handleAutoComplete}
              />
            ))
          )}
        </S.AutoCompleteContainer>
      </S.InputContainer>
    </S.Wrapper>
  );
};

export default AutoComplete;
