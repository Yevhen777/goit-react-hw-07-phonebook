import { nanoid } from 'nanoid';
import style from './ContactForm.module.css';
import { useDeleteContactMutation } from '../redux/store';

export const ContactList = ({ visibleContacts }) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <ul>
      {visibleContacts.map(contact => {
        return (
          <li className={style.addContact} key={nanoid()}>
            {contact.name}: {contact.number}
            <button
              className={style.btn}
              onClick={() => deleteContact(contact.id)}
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

let all;
