import { useMyContext } from 'context/useMyContext';
import css from './Card.module.css';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from 'redux/cars/selectors';
import { addToFavorites, removeFromFavorites } from 'redux/cars/slice';

export const Card = props => {
  const dispatch = useDispatch();
  const {
    id,
    make,
    model,
    year,
    type,
    img,
    rentalPrice,
    rentalCompany,
    mileage,
    accessories,
    address,
  } = props;

  const { open, setId } = useMyContext();
  const favorites = useSelector(selectFavorites);
  // const cars = useSele

  const city = address.split(',')[1];
  const country = address.split(',')[2];
  const accessory = accessories[0];
  const checked = favorites.find(item => item.id === id);

  const handleOpen = () => {
    open();
    setId(id);
  };

  const handleAddFavorite = () => {
    dispatch(addToFavorites(props));
  };

  const handleDeleteFavorite = () => {
    dispatch(removeFromFavorites(id));
  };

  return (
    <li className={css.card}>
      <div className={css.imgContainer}>
        <img src={img} alt="" className={css.img} />

        {checked ? (
          <button className={css.favorite} onClick={handleDeleteFavorite}>
            <AiFillHeart className={css.svg} size={18} color={'#3470FF'} />
          </button>
        ) : (
          <button className={css.favorite} onClick={handleAddFavorite}>
            <AiOutlineHeart className={css.svg} size={18} color={'white'} />
          </button>
        )}
      </div>
      <div className={css.description}>
        <div className={css.carHeader}>
          <p className={css.name}>
            {make}
            <span style={{ color: '#3470FF' }}> {model}</span>, {year}
          </p>
          <p className={css.price}>{rentalPrice}</p>
        </div>
        <p
          className={css.tags}
        >{`${city} | ${country} | ${rentalCompany} | ${type} | ${make} | ${mileage} | ${accessory}`}</p>
        <button className={css.button} onClick={handleOpen}>
          Learn more
        </button>
      </div>
    </li>
  );
};
