import { forwardRef } from 'react';

import * as S from './Form.style';

const Input = forwardRef(({ type, label, name, value, onChange, error, ...rest }, ref) => {
  return (
    <S.ElementWrapper>
      <label htmlFor={name}>{label}</label>
      <S.Input ref={ref} type={type} name={name} value={value} onChange={onChange} {...rest} />
      {error && <span>{error}</span>}
    </S.ElementWrapper>
  );
});

Input.displayName = 'Input';

export default Input;
