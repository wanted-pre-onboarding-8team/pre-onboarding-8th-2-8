import { useAddTodosMutation } from 'apis/apiSlice';
import { PlusIcon } from 'components/Icons';
import Lane from 'components/Lane/Lane';
import { useDragAndDrop } from 'hooks/useDragAndDrop';

import * as S from './Board.style';

const TYPES = ['TODOS', 'IN PROGRESS', 'DONE'];

const Board = ({ todos, children }) => {
  const arr = Object.assign([], todos);
  const lastIndex = arr.sort((a, b) => a.id - b.id).at(-1).id + 1;
  const [addTodo] = useAddTodosMutation();
  const handleSubmit = () => {
    addTodo({
      id: lastIndex,
      title: 'title',
      contents: 'contents',
      deadline: 'YYYY-MM-DDhh:mm',
      status: 'TODOS',
      owner: 'JunHyuck Lim',
      profileImage: '',
    });
  };
  const { isDragging, handleDragging, handleUpdateList, setReplaceId } = useDragAndDrop(todos);

  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <S.Header>Kanban board</S.Header>
        <PlusIcon onClick={() => handleSubmit()} />
        <span style={{ marginLeft: '10px' }}>Create Issue</span>
      </S.HeaderContainer>
      <S.KanbanContainer>
        {TYPES.map((title, i) => (
          <Lane
            key={i}
            currentStatus={title}
            todos={todos}
            isDragging={isDragging}
            handleDragging={handleDragging}
            handleUpdateList={handleUpdateList}
            setReplaceId={setReplaceId}
          />
        ))}
      </S.KanbanContainer>
      {children}
    </S.Wrapper>
  );
};

export default Board;
