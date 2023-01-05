import { SkeletonAvatar } from '..';

const Avatar = ({ users, owner, size = '50px', ...rest }) => {
  const user = users.find(user => user?.owner === owner);

  if (!user) {
    return <SkeletonAvatar size="50px" />;
  }

  return (
    <>
      <img
        src={user?.profileImage}
        width={size}
        height={size}
        alt={user?.owner}
        style={{ borderRadius: '50px' }}
        {...rest}
      />
    </>
  );
};

export default Avatar;
