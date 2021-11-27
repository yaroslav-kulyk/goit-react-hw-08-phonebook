import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

const ContactListItem = ({ name, phone, onDelete }) => {
  return (
    <div className={s.item}>
      {name}: {phone}
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
