// import { useDeleteContactMutation } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';
import phonebookOperations from '../../redux/phonebook/phonebook-operations';
import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

const ContactListItem = ({ name, phone, onDelete }) => {
  // const [deleteContact] = useDeleteContactMutation();
  const dispatch = useDispatch();

  return (
    <div className={s.item}>
      {name}: {phone}
      <button
        type="button"
        // onClick={() => dispatch(phonebookOperations.deleteContact(id))}
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactListItem;
