import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;

  background-color: white;
`;

const InputContainer = styled.div`
  background: ${({ theme }) => theme.WHITE};
  width: 100%;
  border-radius: 5px;
  position: relative;
  box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.12);
`;

const SearchInput = styled.input`
  height: 30px;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0 60px 0 20px;
  font-size: 13px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);

  &:active {
    border-radius: 5px 5px 0 0;
  }
`;

const AutoCompleteContainer = styled.ul`
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  padding: 0 20px 5px 0;
  max-height: 100px;
  overflow-y: auto;
  margin-top: 10px;
  cursor: pointer;
`;

const AutoCompleteList = styled.li`
  display: block;
  list-style: none;
  padding: 10px 20px;
  width: 100%;
  border-radius: 3px;

  font-size: 13px;

  background-color: white;

  cursor: pointer;
`;

export { Wrapper, InputContainer, SearchInput, AutoCompleteContainer, AutoCompleteList };
