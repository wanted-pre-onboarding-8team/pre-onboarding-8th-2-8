import * as S from './Skeleton.style';

const SkeletonAvatar = ({ ...rest }) => {
  return <S.SkeletonAvatar type="image" alt="skeleton-image" {...rest} />;
};

export default SkeletonAvatar;
