import { Card } from 'components/card/Card';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/cars/selectors';
import css from '../catalog/Catalog.module.css';
import { useMyContext } from 'context/useMyContext';
import { Modal } from 'components/modal/Modal';
import { ModalCard } from 'components/modal/ModalCard';

export const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  const { isOpen } = useMyContext();

  return (
    <>
      <ul className={css.catalog} style={{ listStyle: 'none' }}>
        {favorites.length === 0
          ? `You haven't added any favorite cars yet`
          : favorites.map((car, index) => <Card key={index} {...car} />)}
      </ul>
      {isOpen ? (
        <Modal>
          <ModalCard />
        </Modal>
      ) : null}
    </>
  );
};
