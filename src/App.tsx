import Button from './components/Button';
import Search from './components/Search';
import Users from './components/Users';
import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { RootState } from './redux/store';
import { refresh, filterUsers } from './redux/features/homeSlice';

function App() {
  const { searchJob } = useSelector((store: RootState) => store.home);
  const searchValue = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    searchValue.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (searchJob === '') {
      dispatch(refresh());
    } else {
      dispatch(filterUsers(searchJob));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchJob]);

  return (
    <div className='container'>
      <div className='top'>
        <Search searchValue={searchValue} />
        <Button />
      </div>
      <Users />
    </div>
  );
}

export default App;
