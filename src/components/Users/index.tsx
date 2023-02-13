import User from '../User';
import { useSelector } from 'react-redux/es/exports';
import { RootState } from '../../redux/store';
import './index.css';
import { Fade } from 'react-awesome-reveal';

const Users = () => {
  const { users } = useSelector((store: RootState) => store.home);

  if (users.length === 0) {
    return <div className='no-users'>No User Available.</div>;
  }
  return (
    <div className='users'>
      <Fade cascade triggerOnce duration={600}>
        {users.map((user) => {
          return <User user={user} key={user.id} />;
        })}
      </Fade>
    </div>
  );
};

export default Users;
