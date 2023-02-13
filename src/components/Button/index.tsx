import { usersInAgeRange } from '../../redux/features/homeSlice';
import { useDispatch } from 'react-redux';
import './index.css';

const Button = () => {
  const dispatch = useDispatch();
  return (
    <button className='button' onClick={() => dispatch(usersInAgeRange())}>
      Users btw 22 - 25
    </button>
  );
};

export default Button;
