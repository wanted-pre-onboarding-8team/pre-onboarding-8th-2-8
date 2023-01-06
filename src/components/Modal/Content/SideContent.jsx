import { AutoComplete, Flex } from 'components/@commons';

const SideContent = ({ users, todo, AvatarComponent, ListComponent }) => {
  return (
    <>
      <Flex flexDirection="column" alignItems="center" css={{ marginBottom: '100px' }}>
        <span style={{ marginBottom: '15px' }}>현재 상태</span>
        <span>STATUS</span>
      </Flex>
      <Flex flexDirection="column" alignItems="center">
        <span style={{ marginBottom: '15px' }}>담당자 선택</span>
        <AutoComplete list={users} ListComponent={ListComponent} todo={todo} />
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="center"
        css={{ position: 'absolute', bottom: '80px', right: '40px' }}
      >
        {AvatarComponent}
      </Flex>
    </>
  );
};

export default SideContent;
