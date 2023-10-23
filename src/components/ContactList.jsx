import { useDispatch, useSelector } from 'react-redux';
import { Contact } from './Contact';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { AddContactForm } from './AddContactForm';
import { Filter } from './Filter';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <AddContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ul>
        {contacts
          ? contacts.map(contact => (
              <Contact
                key={contact.id}
                name={contact.name}
                number={contact.number}
                id={contact.id}
              />
            ))
          : null}
      </ul>
    </div>
  );
};
