import React from 'react';

import PropTypes from 'prop-types';
import { Item, Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, phone, onDeleteContact }) => {
  return (
    <Item id={id} key={name}>
      {name} : {phone}
      <Button onClick={() => onDeleteContact(id)}>Delete</Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onDeleteContact: PropTypes.func,
};
