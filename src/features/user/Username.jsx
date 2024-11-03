import { useSelector } from 'react-redux';

function Username() {
  // 'userName' state extraction
  const userName = useSelector((state) => state.user.username);
  console.log(userName);

  if (!userName) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{userName}</div>
  );
}

export default Username;
