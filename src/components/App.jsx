import { useState } from 'react';
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';
import { ContactForm } from 'components/ContactForm';
import { DeleteContact } from 'components/deleteContact';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { addContact, filteredItems } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useGetContactsQuery } from '../redux/getContact';
import { useCreateContactMutation } from '../redux/getContact';

export function App() {
  const [name] = useState('');
  const [number] = useState('');
  // const [isLoading] = useState(false);

  const dispatch = useDispatch();
  const items = useSelector(state => state.myContacts.items);
  const filter = useSelector(state => state.myContacts.filter);

  const [createContact, result] = useCreateContactMutation();
  const { data, error, isLoading } = useGetContactsQuery();
  console.log(isLoading);

  const handleSubmit = (evt, actions) => {
    if (items.find(el => el.name === evt.name)) {
      alert(`${evt.name} is already in contacs`);
      actions.resetForm();

      return;
    }

    const contactInput = {
      id: evt.name,
      name: evt.name,
      number: evt.number,
    };
    const contacts = {
      id: evt.name,
      name: evt.name,
      phone: evt.number,
    };

    dispatch(addContact(contactInput));

    dispatch(createContact(contacts));

    actions.resetForm();
  };

  const changeFilter = e => {
    dispatch(filteredItems(e.target.value));
  };

  const getVisibleContacts = () => {
    const filteredArr = items.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredArr;
  };
  // const getFilterContacts = () => {
  //   const filteredArr = items.filter(el =>
  //     el.name.toLowerCase().includes(filter.toLowerCase())
  //   );

  //   return filteredArr;
  // };

  const visibleContacts = getVisibleContacts();
  // const getContacts = getFilterContacts();

  return (
    <div className={style.allForm}>
      <h1>Phonebook</h1>
      <ContactForm
        initialValues={{ items, name, number, filter }}
        handleSubmit={handleSubmit}
      />
      <h2>Contacts</h2>
      <Filter contact={items} filter={filter} changeFilter={changeFilter} />
      {!isLoading && <ContactList visibleContacts={visibleContacts} />}
      {/* {!isLoading && <DeleteContact visibleContacts={visibleContacts} />} */}
    </div>
  );
}
ContactForm.propTypes = {
  initialValues: PropTypes.object,
  handleSubmit: PropTypes.func,
};

Filter.propTypes = {
  contact: PropTypes.array,
  filterState: PropTypes.string,
  handleFilter: PropTypes.func,
};

ContactList.propTypes = {
  visibleContacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
