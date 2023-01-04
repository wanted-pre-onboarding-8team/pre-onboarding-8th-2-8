import { useDeleteTodoMutation } from 'apis/apiSlice';
import Avatar from 'components/Avatar/Avatar';
import { CloseIcon } from 'components/Icons';

import * as S from './Card.style';

const Card = ({ id, title, owner, profileImage }) => {
  const [deleteTodo] = useDeleteTodoMutation();
  // Card 에 대한 Skeleton Ui 구현 필요

  const handleSubmit = () => {
    deleteTodo(id);
  };

  return (
    <S.CardContainer>
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
      <S.CardFooter>
        <Avatar url={profileImage} alt={owner} size="30px" />
      </S.CardFooter>
    </S.CardContainer>
  );
};

export default Card;
