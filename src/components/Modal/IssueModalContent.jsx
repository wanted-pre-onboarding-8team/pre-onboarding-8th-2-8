import { useGetUsersQuery, useUpdateTodoMutation } from 'apis/apiSlice';
import { AutoComplete, Avatar, Button, Flex, Form } from 'components/@commons';
import { useForm, useModal } from 'hooks';

import * as S from './Modal.style';
import UsersList from './UsersList';

const IssueModalContent = ({ todos }) => {
  const { data: users } = useGetUsersQuery();
  const { currentIssueId, handleUnmountModal } = useModal();
  const todo = todos.find(todo => todo.id === currentIssueId);
  const { content, deadline, owner, status, title } = todo;
  const { formData, handleChange, handleSubmit } = useForm({ title, content });

  const [updateTodo] = useUpdateTodoMutation();
  const handleUpdateTodo = () => updateTodo({ ...todo, ...formData });

  return (
    <div>
      <S.Header>
        <S.IssueNumber># {currentIssueId}</S.IssueNumber>
      </S.Header>
      <S.BodyContainer>
        <S.BodyLeft>
          <div>
            <Form
              inputProps={{
                type: 'text',
                label: 'title',
                name: 'title',
                value: formData.title,
                onChange: handleChange,
              }}
              textAreaProps={{
                label: 'content',
                name: 'content',
                value: formData.content,
                onChange: handleChange,
              }}
            />
          </div>
          <span>{deadline}</span>
        </S.BodyLeft>
        <S.BodyRight>
          <span>현재 상태</span>
          <span>{status}</span>
          <span>담당자 선택</span>
          <AutoComplete list={users} ListComponent={UsersList} todo={todo} />
          <Flex
            flexDirection="column"
            justifyContent="flex-end"
            alignItems="center"
            css={{ position: 'absolute', bottom: '80px', right: '40px' }}
          >
            <span>{owner}</span>
            <Avatar users={users} owner={owner} />
          </Flex>
        </S.BodyRight>
      </S.BodyContainer>
      <S.Footer>
        <Button
          type="submit"
          value="Save"
          onClick={e => {
            handleSubmit(e, handleUpdateTodo);
            handleUnmountModal();
          }}
        />
        <Button type="button" color="transparent" value="Cancel" onClick={() => handleUnmountModal()} />
      </S.Footer>
    </div>
  );
};

export default IssueModalContent;
