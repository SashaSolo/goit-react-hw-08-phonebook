import React from 'react';
import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          id={id}
          key={name}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        ></ContactItem>
      ))}
    </ul>
  );
};
