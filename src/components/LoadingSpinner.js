import styled, { keyframes } from 'styled-components';

const LoadingSpinner = () => {
  return <Spinner />;
};

const Spin = keyframes`
 to {
    transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  margin: 20px auto;

  ::before,
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: black;
    animation: ${Spin} 0.6s linear infinite;
  }

  ::after {
    animation-delay: 0.2s;
  }
`;

export default LoadingSpinner;
