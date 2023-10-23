import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const filter = e.currentTarget.value;
    dispatch(setFilter(filter));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleFilterChange} />
    </>
  );
};
