const Avatar = ({ user, url, size = '50px' }) => {
  return (
    <>
      <img src={url} width={size} height={size} alt={user} style={{ borderRadius: '50px' }} />
    </>
  );
};

export default Avatar;
