import { useFetchContactsQuery } from '../../redux/contactsSlice';
import { connect } from 'react-redux';
import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import phonebookOperations from '../../redux/phonebook/phonebook-operations';
import getContacts from '../../redux/phonebook/phonebook-selectors';

const ContactList = ({ filter }) => {
  // const { data } = useFetchContactsQuery();
  // const normalizedFilter = filter.toLowerCase();

  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  console.log(contacts);

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      filtruiii!!
      {contacts && (
        <ul className={s.contactList}>
          {contacts
            // .filter(({ name }) => name.toLowerCase().includes(normalizedFilter))
            .map(({ id, name, phone }) => {
              return (
                <li key={id}>
                  <ContactListItem id={id} name={name} phone={phone} />
                </li>
              );
            })}
        </ul>
      )}
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
