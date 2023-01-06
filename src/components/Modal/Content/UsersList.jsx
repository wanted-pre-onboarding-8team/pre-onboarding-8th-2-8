import { useUpdateTodoMutation } from 'apis/apiSlice';
import { Avatar } from 'components/@commons';
import { AutoCompleteList } from 'components/@commons/AutoComplete/AutoComplete.style';
import { useIssueForm } from 'hooks';

const UsersList = ({ item, users, todo, handleAutoComplete }) => {
  const [updateTodo] = useUpdateTodoMutation();
  const handleUpdateTodo = owner => updateTodo({ ...todo, owner });
  const { issueState, handleSetIssueDetail } = useIssueForm();

  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', padding: '0 2px' }}>
      <AutoCompleteList
        onClick={() => {
          handleAutoComplete();

          if (todo) {
            handleUpdateTodo(item.owner);
          } else {
            handleSetIssueDetail({ ...issueState, owner: item.owner });
          }
        }}
      >
        {item.owner}
      </AutoCompleteList>
      <Avatar users={users} owner={item.owner} size="20px" />
    </div>
  );
};

export default UsersList;
