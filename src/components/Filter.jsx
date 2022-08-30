import style from './ContactForm.module.css';
import { nanoid } from 'nanoid';

export const Filter = ({ filter, changeFilter }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        className={style.input}
        id={nanoid()}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
        value={filter}
        onChange={e => changeFilter(e.target.value)}
      />
    </>
  );
};
