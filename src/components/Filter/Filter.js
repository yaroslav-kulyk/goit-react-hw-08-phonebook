import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import { useDispatch, useSelector } from 'react-redux';
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors';
import s from './Filter.module.css';

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
