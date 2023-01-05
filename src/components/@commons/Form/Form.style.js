import styled from 'styled-components';

const ElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 7px 7px 8px 0px;
  line-height: 1.28;
  resize: none;
  background: transparent;
  border: 1px solid transparent;
  box-shadow: transparent 0px 0px 0px 1px;
  transition: background 0.1s ease 0s;
  font-size: 24px;
`;

const TextArea = styled.textarea`
  padding: 7px 7px 8px 0px;
  line-height: 1.28;
  resize: none;
  background: transparent;
  border: 1px solid transparent;
  box-shadow: transparent 0px 0px 0px 1px;
  transition: background 0.1s ease 0s;
  font-size: 24px;
`;

export { ElementWrapper, TextArea, Input };
