import { useAddTodosMutation } from 'apis/apiSlice';
import { PlusIcon } from 'components/Icons';
import Lane from 'components/Lane/Lane';
import { useDragAndDrop } from 'hooks/useDragAndDrop';
import { useState } from 'react';

import * as S from './Board.style';

const TYPES = ['TODOS', 'IN PROGRESS', 'DONE'];

const Board = ({ todos, children }) => {
  const [_, setNewTodo] = useState('');
  _;
  const [addTodo] = useAddTodosMutation();
  const handleSubmit = () => {
    addTodo({
      id: 23,
      title: 'new',
      contents: 'dasd',
      deadline: 'sd-MM-DDhh:mm',
      status: 'sd',
      owner: 'Keonhee Lee',
      profileImage: '',
    });

    setNewTodo('');
  };
  const { isDragging, listItems, handleDragging, handleUpdateList } = useDragAndDrop(todos);

  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <S.Header>Kanban board</S.Header>
        <PlusIcon onClick={() => handleSubmit()} />
        <span>create</span>
      </S.HeaderContainer>
      <S.KanbanContainer>
        {TYPES.map((title, i) => (
          <Lane
            key={i}
            currentStatus={title}
            todos={todos}
            isDragging={isDragging}
            listItems={listItems}
            handleDragging={handleDragging}
            handleUpdateList={handleUpdateList}
          />
        ))}
      </S.KanbanContainer>
      {children}
    </S.Wrapper>
  );
};

export default Board;
