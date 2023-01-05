import FlexBox from './FlexBox.style';

const Flex = props => {
  const { children, ...rest } = props;

  return <FlexBox {...rest}>{children}</FlexBox>;
};

export default Flex;
