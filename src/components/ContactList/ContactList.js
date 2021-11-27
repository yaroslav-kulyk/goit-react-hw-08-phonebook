import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactListItem from './ContactListItem';
import phonebookOperations from '../../redux/phonebook/phonebook-operations';
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors';
import s from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(phonebookSelectors.getContacts);
  const isLoading = useSelector(phonebookSelectors.getIsLoading);
  const filter = useSelector(phonebookSelectors.getFilter);

  const deleteContact = id => {
    dispatch(phonebookOperations.deleteContact(id));
    dispatch(phonebookOperations.fetchContacts());
  };

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        contacts && (
          <ul className={s.contactList}>
            {contacts
              .filter(({ name }) =>
                name.toLowerCase().includes(filter.toLowerCase()),
              )
              .map(({ id, name, number }) => {
                return (
                  <li key={id}>
                    <ContactListItem
                      name={name}
                      phone={number}
                      onDelete={() => deleteContact(id)}
                    />
                  </li>
                );
              })}
          </ul>
        )
      )}
    </>
  );
};

export default ContactList;
