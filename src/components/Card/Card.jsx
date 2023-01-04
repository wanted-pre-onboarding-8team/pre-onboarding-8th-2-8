import { useDeleteTodoMutation, useGetUsersQuery } from 'apis/apiSlice';
import Avatar from 'components/Avatar/Avatar';
import { CloseIcon } from 'components/Icons';
import SkeletonAvatar from 'components/Skeleton/SkeletonAvatar';

import * as S from './Card.style';

// Card 에 대한 Skeleton Ui 구현 필요

const Card = ({ id, title, owner, handleDragging, setReplaceId }) => {
  const { data: users, isLoading } = useGetUsersQuery();

  const [deleteTodo] = useDeleteTodoMutation();

  const handleSubmit = () => deleteTodo(id);

  const handleDragStart = e => {
    e.dataTransfer.setData('text', `${id}`);
    handleDragging(true);
  };
  const handleDragEnd = () => handleDragging(false);

  return (
    <S.CardContainer
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragEnter={() => setReplaceId(id)}
    >
      {/* IssueCard Header */}
      <S.CardHeader>
        <span># {id}</span>
        <CloseIcon onClick={() => handleSubmit()} />
      </S.CardHeader>
      {/* Issue Body */}
      <S.CardBody>
        <span>{title}</span>
      </S.CardBody>
      {/* Issue Footer */}
      <S.CardFooter>{isLoading ? <SkeletonAvatar /> : <Avatar users={users} owner={owner} size="30px" />}</S.CardFooter>
    </S.CardContainer>
  );
};

export default Card;
