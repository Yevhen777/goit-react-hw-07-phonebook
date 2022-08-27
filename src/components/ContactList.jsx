import { nanoid } from 'nanoid';
import style from './ContactForm.module.css';
// import { deleteContact } from '../redux/store';
import { useDispatch } from 'react-redux';
import { useDeleteContactMutation } from '../redux/getContact';
import { useGetContactsQuery } from '../redux/getContact';
export const ContactList = ({ visibleContacts }) => {
  const { data, error, isLoading } = useGetContactsQuery();
  const dispatch = useDispatch();

  const [deleteContact] = useDeleteContactMutation();

  return (
    <ul>
      {data.map(contact => {
        return (
          <li className={style.addContact} key={nanoid()}>
            {contact.name}: {contact.number}
            <button
              className={style.btn}
              onClick={() => dispatch(visibleContacts(contact.id))}
              type="button"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
