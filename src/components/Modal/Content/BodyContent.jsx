import { Flex, Form } from 'components/@commons';

const BodyContent = ({ formProps, dateComponent }) => {
  return (
    <>
      <div>
        <Form {...formProps} />
      </div>
      <Flex flexDirection="column">{dateComponent}</Flex>
    </>
  );
};

export default BodyContent;
