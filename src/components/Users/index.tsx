import User from '../User';
import { useSelector } from 'react-redux/es/exports';
import { RootState } from '../../redux/store';
import './index.css';

const Users = () => {
  const { users } = useSelector((store: RootState) => store.home);

  if (users.length === 0) {
    return <div className='no-users'>No User Available.</div>;
  }
  return (
    <div className='users'>
      {users.map((user) => {
        return <User user={user} key={user.id} />;
      })}
    </div>
  );
};

export default Users;
