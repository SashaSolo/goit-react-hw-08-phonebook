import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contOperations';
import { deleteContact } from 'redux/contacts/contOperations';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectContacts, selectInputFilter } from 'redux/contacts/selectors';
import { List, Title } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  console.log(contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filter = useSelector(selectInputFilter);

  const getContactFromFilter = (contacts, filter) => {
    let normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getContactFromFilter(contacts, filter);

  return (
    <List>
      <Title>CONTACTS</Title>
      {visibleContacts.length > 0 &&
        visibleContacts.map(({ id, name, number }) => (
          // <Item>
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={() => dispatch(deleteContact(id))}
          ></ContactItem>
          // </Item>
        ))}
    </List>
  );
};

ContactList.propTypes = {
  getContactFromFilter: PropTypes.func,
};
