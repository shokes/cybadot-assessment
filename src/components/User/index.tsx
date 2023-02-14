import { deleteUser } from '../../redux/features/homeSlice';
import { FiDelete } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import './index.css';

interface UserProps {
  user: {
    name: string;
    id: number;
    image: string;
    age: number;
    country: string;
    hobby: string;
    job: string;
  };
}

const User = ({ user }: UserProps) => {
  const { id, name, image, age, country, hobby, job } = user;

  const dispatch = useDispatch();

  return (
    <div className='user'>
      <img src={image} alt={name} className='image' />
      <h2>{name}</h2>
      <p>
        <span className='highlight'>{age}</span> years old.
      </p>
      <p>
        From <span className='highlight'>{country}</span>.
      </p>
      <p>
        <span className='highlight'>{job}</span> at Cybadot.
      </p>
      <p>
        I enjoy <span className='highlight'> {hobby}</span>.
      </p>
      <div className='delete'>
        <FiDelete className='icon' onClick={() => dispatch(deleteUser(id))} />
      </div>
    </div>
  );
};

export default User;
