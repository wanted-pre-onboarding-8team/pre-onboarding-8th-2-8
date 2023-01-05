import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  vertical-align: middle;
  line-height: 1;
  padding: 0px 12px;
  white-space: nowrap;
  border-radius: 3px;
  transition: all 0.1s ease 0s;
  appearance: none;
  cursor: pointer;
  user-select: none;
  font-size: 14.5px;
  color: ${({ color }) => (color ? 'gray' : 'rgb(255, 255, 255)')};
  background: ${({ color }) => (color ? color : 'rgb(0, 82, 304)')};
  font-weight: normal;

  border: none;
`;

export default StyledButton;
