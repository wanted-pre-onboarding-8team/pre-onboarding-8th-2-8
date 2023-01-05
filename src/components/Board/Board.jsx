import { useAddTodosMutation } from 'apis/apiSlice';
import { PlusIcon } from 'components/Icons';
import Lane from 'components/Lane/Lane';
import { CreateTodoContent, IssueModalContent, Modal } from 'components/Modal';
import { STATUS_TYPES } from 'constants';
import { useDragAndDrop, useModal } from 'hooks';
import { showCreateModal } from 'slices/modalSlice';

import * as S from './Board.style';

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

  handleSubmit;

  const { createModalOpen, issueModalOpen, handleMountModal } = useModal();
  const { isDragging, handleDragging, handleUpdateList, setReplaceId } = useDragAndDrop(todos);

  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <S.Header>Kanban board</S.Header>
        <PlusIcon onClick={() => handleMountModal(showCreateModal)} />
        <span style={{ marginLeft: '10px' }}>Create Issue</span>
      </S.HeaderContainer>
      <S.KanbanContainer>
        {STATUS_TYPES.map((title, i) => (
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
      <Modal>
        {createModalOpen ? <CreateTodoContent /> : issueModalOpen ? <IssueModalContent todos={todos} /> : null}
      </Modal>
    </S.Wrapper>
  );
};

export default Board;
