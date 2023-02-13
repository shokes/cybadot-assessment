import users from '../../data';
import User from '../User';

const Users = () => {
  return (
    <div className='users'>
      {users.map((user) => {
        return <User user={user} />;
      })}
    </div>
  );
};

export default Users;
