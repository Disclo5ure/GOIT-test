import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

export const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.name.value;
    const number = e.currentTarget.number.value;
    if (contacts.find(contact => contact.name === name))
      alert(`${name} is already in contacts`);
    else dispatch(addContact({ name, number }));
    e.currentTarget.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Name</h3>
      <input type="text" name="name" />
      <h3>Number</h3>
      <input type="tel" name="number" />
      <button type="submit" className="button">
        Add contact
      </button>
    </form>
  );
};
