import { createContext } from 'react';

import { useModal } from '../hooks/useModal';

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const { isOpen, open, close, id, setId } = useModal();

  const value = {
    isOpen,
    open,
    close,
    id,
    setId,
  };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
