import { useAddTodosMutation } from 'apis/apiSlice';
import { Avatar, Button, Input } from 'components/@commons';
import { useForm, useIssueForm, useModal } from 'hooks';
import { useRef } from 'react';

import BodyContent from './Content/BodyContent';
import SideContent from './Content/SideContent';
import UsersList from './Content/UsersList';
import * as S from './Modal.style';

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
          <BodyContent
            formProps={{
              inputProps: {
                type: 'text',
                label: 'title',
                name: 'title',
                placeholder: '제목을 입력해주세요',
                value: formData.title,
                onChange: handleChange,
              },
              textAreaProps: {
                label: 'content',
                name: 'content',
                placeholder: '내용을 입력해주세요',
                value: formData.value,
                onChange: handleChange,
              },
            }}
            dateComponent={<Input ref={dateRef} label="Due Date" name="Due Date" type="datetime-local" />}
          />
        </S.BodyLeft>
        <S.BodyRight>
          <SideContent
            users={users}
            AvatarComponent={<Avatar users={users} owner={issueState?.owner} />}
            ListComponent={UsersList}
          />
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
