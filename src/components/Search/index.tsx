import { inputHandler } from '../../redux/features/homeSlice';
import { useDispatch } from 'react-redux';
import './index.css';

interface SearchProps {
  searchValue: React.RefObject<HTMLInputElement>;
}

const Search = ({ searchValue }: SearchProps) => {
  const dispatch = useDispatch();
  return (
    <div className='search'>
      <input
        type='text'
        ref={searchValue}
        placeholder='Search job role'
        className='input'
        onChange={(e) => dispatch(inputHandler(e.target.value))}
      />
    </div>
  );
};

export default Search;
