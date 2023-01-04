import { useAddTodosMutation } from 'apis/apiSlice';
import { PlusIcon } from 'components/Icons';
import Lane from 'components/Lane/Lane';
import { useState } from 'react';

import * as S from './Board.style';

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

  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <S.Header>Kanban board</S.Header>
        <PlusIcon onClick={() => handleSubmit()} />
        <span>create</span>
      </S.HeaderContainer>
      <S.KanbanContainer>
        <Lane title="TODOS" todos={todos} />
        <Lane title="IN PROGRESS" />
        <Lane title="DONE" />
      </S.KanbanContainer>
      {children}
    </S.Wrapper>
  );
};

export default Board;
