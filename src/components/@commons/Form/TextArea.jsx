import * as S from './Form.style';

const TextArea = ({ label, name, value, onChange, error, ...rest }) => {
  return (
    <S.ElementWrapper>
      <label htmlFor={name}>{label}</label>
      <S.TextArea name={name} value={value} onChange={onChange} {...rest} />
      {error && <span>{error}</span>}
    </S.ElementWrapper>
  );
};

export default TextArea;
