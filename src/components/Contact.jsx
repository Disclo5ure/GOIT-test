import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const Contact = props => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      {props.name}: {props.number}
      <button
        className="delete-button"
        onClick={() => handleDeleteContact(props.id)}
      >
        Delete
      </button>
    </li>
  );
};
