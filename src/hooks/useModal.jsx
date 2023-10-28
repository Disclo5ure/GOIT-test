import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState('');
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return { open, close, isOpen, id, setId };
};
