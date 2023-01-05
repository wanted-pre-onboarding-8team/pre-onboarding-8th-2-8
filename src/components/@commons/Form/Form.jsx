import Input from './Input';
import TextArea from './TextArea';

const Form = ({ inputProps, textAreaProps, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <Input {...inputProps} />
      <TextArea {...textAreaProps} />
    </form>
  );
};

export default Form;
