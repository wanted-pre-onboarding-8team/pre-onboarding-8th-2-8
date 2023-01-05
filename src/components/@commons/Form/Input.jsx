import * as S from './Form.style';

const Input = ({ type, label, name, value, onChange, error, ...rest }) => {
  return (
    <S.ElementWrapper>
      <label htmlFor={name}>{label}</label>
      <S.Input type={type} name={name} value={value} onChange={onChange} {...rest} />
      {error && <span>{error}</span>}
    </S.ElementWrapper>
  );
};

export default Input;
