import { connect } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';

import { useDispatch, useSelector } from 'react-redux';
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors';

import PropTypes from 'prop-types';
import s from './Filter.module.css';

// const Filter = ({ value, onChange }) => (
//   <label className={s.filter}>
//     Find contacts by name
//     <input
//       type="text"
//       value={value}
//       onChange={onChange}
//       className={s.filterInput}
//     ></input>
//   </label>
// );

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(phonebookSelectors.getFilter);

  return (
    <label className={s.filter}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
        className={s.filterInput}
      ></input>
    </label>
  );
}

// const mapStateToProps = state => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: event => dispatch(changeFilter(event.target.value)),
// });

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
// export default Filter;
