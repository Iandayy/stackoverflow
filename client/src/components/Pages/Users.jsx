import { useRecoilValue } from 'recoil';
import usersAllState from '../../state/usersAllState';
import UserItem from './UserItem';

const Users = () => {
  const users = useRecoilValue(usersAllState);

  return (
    <div>
      <h1>Users</h1>
      <input placeholder="Filter by user" />
      {users.map((user) => (
        <UserItem key={user.memberId} item={user} />
      ))}
    </div>
  );
};

export default Users;
