import React from 'react';
import { Input } from '../ContactForm/ContactForm.styled';
import { InputFilter } from './Filter.styled';

export const Filter = ({ value, onChangeForFilter }) => {
  return (
    <InputFilter>
      Find contacts by name
      <Input type="text" value={value} onChange={onChangeForFilter} />
    </InputFilter>
  );
};
