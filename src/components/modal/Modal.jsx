import { useMyContext } from 'context/useMyContext';
import { useEffect } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import css from './Modal.module.css';

export const Modal = ({ children }) => {
  const { close } = useMyContext();
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        close();
      }
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [close]);
  const handleClick = e => {
    if (e.currentTarget === e.target) {
      close();
    }
  };
  const handleClickClose = e => {
    close();
  };
  return (
    <div className={css.overlay} onClick={handleClick}>
      <div className={css.content}>
        <button className={css.button} onClick={handleClickClose}>
          <IoCloseSharp
            style={{
              color: 'black',
              width: '28',
              height: '28',
            }}
          />
        </button>
        {children}
      </div>
    </div>
  );
};
