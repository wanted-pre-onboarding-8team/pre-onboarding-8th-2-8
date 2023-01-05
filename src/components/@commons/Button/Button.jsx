import StyledButton from './Button.style';

const Button = ({ type, color, value, onClick, ...rest }) => {
  return (
    <StyledButton type={type} color={color} onClick={onClick} {...rest}>
      {value}
    </StyledButton>
  );
};

export default Button;
