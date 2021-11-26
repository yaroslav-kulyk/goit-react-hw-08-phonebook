import { useFetchContactsQuery } from '../../redux/contactsSlice';
import { connect } from 'react-redux';
import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

import { useDispatch } from 'react-redux';
import phonebookOperations from '../../redux/phonebook/phonebook-operations';

const ContactList = ({ filter }) => {
  // const { data } = useFetchContactsQuery();
  // const normalizedFilter = filter.toLowerCase();

  const dispatch = useDispatch();
  const data = dispatch(phonebookOperations.fetchContacts());
  console.log(data);

  return (
    <>
      contacts
      {/* {data && (
        <ul className={s.contactList}>
          {data
            .filter(({ name }) => name.toLowerCase().includes(normalizedFilter))
            .map(({ id, name, phone }) => {
              return (
                <li key={id}>
                  <ContactListItem id={id} name={name} phone={phone} />
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
