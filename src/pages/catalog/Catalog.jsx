import { Card } from 'components/card/Card';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCars,
  fetchFilteredCars,
  fetchNewCars,
} from 'redux/cars/operations';
import { selectCars, selectNewCarsNumber } from 'redux/cars/selectors';
import css from './Catalog.module.css';
import { useMyContext } from 'context/useMyContext';
import { Modal } from 'components/modal/Modal';
import { ModalCard } from 'components/modal/ModalCard';
import Select from 'react-select';
import { fetchMakes } from 'redux/makes/operations';
import { selectMakes } from 'redux/makes/selectors';

export const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const { isOpen } = useMyContext();
  const [page, setPage] = useState(1);
  const [options, setOptions] = useState([]);
  const makes = useSelector(selectMakes);
  const newCarsNumber = useSelector(selectNewCarsNumber);
  const limit = 12;
  const [showLoadMore, setShowLoadMore] = useState(true);

  useEffect(() => {
    dispatch(fetchCars({ page: 1, limit }));
    dispatch(fetchMakes());
  }, [dispatch]);

  useEffect(() => {
    const optionsArray = makes.map(make => {
      return { value: make, label: make };
    });
    optionsArray.unshift({ value: '', label: 'None...' });
    setOptions(optionsArray);
  }, [makes]);

  const handleSubmit = e => {
    e.preventDefault();
    const make = e.currentTarget.make.value;
    if (make) {
      dispatch(fetchFilteredCars(make));
      setShowLoadMore(false);
    } else {
      dispatch(fetchCars({ page: 1, limit }));
      setShowLoadMore(true);
      setPage(1);
    }
  };

  const loadMore = () => {
    setPage(page + 1);
    dispatch(fetchNewCars({ page: page + 1, limit }));
    if (newCarsNumber < 12) setShowLoadMore(false);
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <Select
          options={options}
          name="make"
          placeholder="Enter the text"
          className={css.select}
        />
        <button className={css.searchButton} type="submit">
          Search
        </button>
      </form>
      <ul className={css.catalog}>
        {cars.map((car, index) => (
          <Card key={index} {...car} />
        ))}
      </ul>
      {isOpen ? (
        <Modal>
          <ModalCard />
        </Modal>
      ) : null}
      {showLoadMore ? (
        <div className={css.loadMoreButtonContainer}>
          <button className={css.loadMoreButton} onClick={loadMore}>
            Load more
          </button>
        </div>
      ) : null}
    </>
  );
};
