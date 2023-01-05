import { useDeleteTodoMutation, useGetUsersQuery } from 'apis/apiSlice';
import { Avatar, SkeletonAvatar } from 'components/@commons';
import { CloseIcon } from 'components/Icons';
import { useModal } from 'hooks';
import { showIssueModal } from 'slices/modalSlice';

import * as S from './Card.style';

const Card = ({ id, title, owner, handleDragging, setReplaceId }) => {
  const { data: users, isLoading } = useGetUsersQuery();
  const [deleteTodo] = useDeleteTodoMutation();
  const { handleMountModal, setCurrentIssueId } = useModal();

  const handleDragStart = e => {
    e.dataTransfer.setData('text', `${id}`);
    handleDragging(true);
  };
  const handleDragEnd = () => handleDragging(false);
  const handleSubmit = () => deleteTodo(id);

  return (
    <>
      <S.CardContainer
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragEnter={() => setReplaceId(id)}
      >
        {/* IssueCard Header */}
        <S.CardHeader>
          <span># {id}</span>
          <div onClick={() => handleSubmit()}>
            <CloseIcon />
          </div>
        </S.CardHeader>
        {/* Issue Body */}
        <S.CardBody
          onClick={() => {
            handleMountModal(showIssueModal);
            setCurrentIssueId(id);
          }}
        >
          <span>{title}</span>
        </S.CardBody>
        {/* Issue Footer */}
        <S.CardFooter
          onClick={() => {
            handleMountModal(showIssueModal);
            setCurrentIssueId(id);
          }}
        >
          {isLoading ? <SkeletonAvatar /> : <Avatar users={users} owner={owner} size="30px" />}
        </S.CardFooter>
      </S.CardContainer>
    </>
  );
};

export default Card;
