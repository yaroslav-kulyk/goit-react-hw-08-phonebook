import { useFetchContactsQuery } from '../../redux/contactsSlice';
import { connect } from 'react-redux';
import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import phonebookOperations from '../../redux/phonebook/phonebook-operations';
// import getContacts from '../../redux/phonebook/phonebook-selectors';
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors';

const ContactList = () => {
  // const { data } = useFetchContactsQuery();

  const dispatch = useDispatch();
  const contacts = useSelector(phonebookSelectors.getContacts);
  const isLoading = useSelector(phonebookSelectors.getIsLoading);
  const filter = useSelector(phonebookSelectors.getFilter);
  // const normalizedFilter = filter.toLowerCase();
  // console.log(contacts);

  const deleteContact = id => {
    dispatch(phonebookOperations.deleteContact(id));
    // dispatch(phonebookOperations.fetchContacts());
  };

  const loadContacts = () => dispatch(phonebookOperations.fetchContacts());

  // const deleteContact = dispatch(phonebookOperations.deleteContact(id));

  // useEffect(() => {
  //   dispatch(phonebookOperations.fetchContacts());
  // }, []);

  return (
    <>
      filtruiii!!
      <button type="button" onClick={loadContacts}>
        Load contacts
      </button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        contacts && (
          <ul className={s.contactList}>
            {contacts
              .filter(({ name }) => name.toLowerCase().includes(filter))
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
      {/* {contacts && (
        <ul className={s.contactList}>
          {contacts
            // .filter(({ name }) => name.toLowerCase().includes(normalizedFilter))
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
      )} */}
    </>
  );
};

// const mapStateToProps = state => ({
//   filter: state.contacts.filter,
// });

// ContactList.propTypes = {
//   filter: PropTypes.string,
// };

// export default connect(mapStateToProps)(ContactList);
export default ContactList;
