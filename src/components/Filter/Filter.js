import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { selectFilter } from 'redux/selectors';
import { BsSearch } from 'react-icons/bs';
import s from './Filter.module.css';

function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.target.value.toLowerCase().trim()));
  };
  return (
    <label className={s.label}>
      <p className={s.title}>
        <BsSearch size="24" className={s.icon} />{' '}
      </p>
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
}

export default Filter;
