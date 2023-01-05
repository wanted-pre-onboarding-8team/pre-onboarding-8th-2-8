import { useAddTodosMutation } from 'apis/apiSlice';
import { AutoComplete, Avatar, Button, Flex, Form, Input } from 'components/@commons';
import { useForm, useIssueForm, useModal } from 'hooks';
import { useRef } from 'react';

import * as S from './Modal.style';
import UsersList from './UsersList';

const CreateTodoContent = ({ todos, users }) => {
  const dateRef = useRef(null);
  const [addTodo] = useAddTodosMutation();
  const { formData, handleChange } = useForm({});
  const { handleUnmountModal } = useModal();
  const { issueState } = useIssueForm();

  const lastIndex =
    todos
      .slice()
      .sort((a, b) => a.id - b.id)
      ?.at(-1)?.id + 1 || 1;

  return (
    <div>
      <S.Header />
      <S.BodyContainer>
        <S.BodyLeft>
          <div>
            <Form
              inputProps={{
                type: 'text',
                label: 'title',
                name: 'title',
                placeholder: '제목을 입력해주세요',
                value: formData.title,
                onChange: handleChange,
              }}
              textAreaProps={{
                label: 'content',
                name: 'content',
                placeholder: '내용을 입력해주세요',
                value: formData.value,
                onChange: handleChange,
              }}
            />
          </div>
          <Input ref={dateRef} label="Due Date" name="Due Date" type="datetime-local" />
        </S.BodyLeft>
        <S.BodyRight>
          <Flex flexDirection="column" alignItems="center" css={{ marginBottom: '100px' }}>
            <span>현재 상태</span>
            <span>STATUS</span>
          </Flex>
          <Flex flexDirection="column" alignItems="center">
            <span>담당자 선택</span>
            <AutoComplete list={users} ListComponent={UsersList} />
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="flex-end"
            alignItems="center"
            css={{ position: 'absolute', bottom: '80px', right: '40px' }}
          >
            <span>{issueState.owner || 'Assignee'}</span>
            <Avatar users={users} owner={issueState?.owner} />
          </Flex>
        </S.BodyRight>
      </S.BodyContainer>
      <S.Footer>
        <Button
          type="submit"
          value="Save"
          onClick={() => {
            addTodo({ ...issueState, id: lastIndex, dueDate: dateRef.current.value });
            handleUnmountModal();
          }}
        />
        <Button type="button" color="transparent" value="Cancel" onClick={() => handleUnmountModal()} />
      </S.Footer>
    </div>
  );
};

export default CreateTodoContent;
