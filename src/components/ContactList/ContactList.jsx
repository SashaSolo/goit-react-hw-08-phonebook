import React from 'react';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';
import { ContactItem } from '../ContactItem/ContactItem';
import { getContacts, getInputFilter } from 'redux/selectors';
import { List } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getInputFilter);

  const dispatch = useDispatch();

  const getContactFromFilter = (contacts, filter) => {
    let normalizedFilter = filter?.toLowerCase();

    return contacts.filter(contact =>
      contact.name?.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getContactFromFilter(contacts, filter);

  return (
    <List>
      <h2>Contacts</h2>
      {visibleContacts &&
        visibleContacts.map(({ id, name, number }) => (
          <ContactItem
            id={id}
            key={id}
            name={name}
            number={number}
            onDeleteContact={() => dispatch(deleteContact(id))}
          ></ContactItem>
        ))}
    </List>
  );
};

ContactList.propTypes = {
  getContactFromFilter: PropTypes.func,
};
