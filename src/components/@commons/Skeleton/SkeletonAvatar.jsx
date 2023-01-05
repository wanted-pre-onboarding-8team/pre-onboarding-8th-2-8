import * as S from './Skeleton.style';

const SkeletonAvatar = ({ size = '30px', ...rest }) => {
  return <S.SkeletonAvatar type="image" alt="" width={size} height={size} {...rest} />;
};

export default SkeletonAvatar;
