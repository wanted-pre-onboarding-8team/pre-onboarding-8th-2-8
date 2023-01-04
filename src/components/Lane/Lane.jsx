import Card from 'components/Card/Card';
import { Suspense } from 'react';

import * as S from './Lane.style';

const Lane = ({ todos, title }) => {
  // Lane 에 대한 Skeleton Ui 구현 필요

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>{title}</S.Title>
      </S.TitleContainer>
      <Suspense fallback={<div>loading...</div>}>
        {todos?.map(({ title, id, owner, profileImage }) => (
          <Card key={id} title={title} id={id} owner={owner} profileImage={profileImage} />
        ))}
        {console.log(todos)}
      </Suspense>
    </S.Container>
  );
};

export default Lane;
