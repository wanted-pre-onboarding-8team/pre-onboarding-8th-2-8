import { useUpdateTodoMutation } from 'apis/apiSlice';
import { Avatar, Button, Input } from 'components/@commons';
import { useForm, useModal } from 'hooks';

import BodyContent from './Content/BodyContent';
import SideContent from './Content/SideContent';
import UsersList from './Content/UsersList';
import * as S from './Modal.style';

const IssueModalContent = ({ todos, users }) => {
  const { currentIssueId, handleUnmountModal } = useModal();
  const todo = todos?.find(todo => todo.id === currentIssueId);
  const { content, dueDate, owner, title } = todo;
  const { formData, handleChange, handleSubmit } = useForm({ title, content });

  const [updateTodo] = useUpdateTodoMutation();
  const handleUpdateTodo = () => updateTodo({ ...todo, ...formData, owner });

  return (
    <div>
      <S.Header>
        <S.IssueNumber># {currentIssueId}</S.IssueNumber>
      </S.Header>
      <S.BodyContainer>
        <S.BodyLeft>
          <BodyContent
            formProps={{
              inputProps: {
                type: 'text',
                label: 'title',
                name: 'title',
                value: formData.title,
                onChange: handleChange,
              },
              textAreaProps: {
                label: 'content',
                name: 'content',
                value: formData.content,
                onChange: handleChange,
              },
            }}
            dateComponent={<Input label="Due Date" name="Due Date" type="text" value={dueDate} readonly disabled />}
          />
        </S.BodyLeft>
        <S.BodyRight>
          <SideContent
            users={users}
            todo={todo}
            AvatarComponent={<Avatar users={users} owner={owner} />}
            ListComponent={UsersList}
          />
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
