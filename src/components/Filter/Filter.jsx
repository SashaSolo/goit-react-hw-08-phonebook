import React from 'react';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filterSlice';
import PropTypes from 'prop-types';
import { InputFilter } from './Filter.styled';

import { Input } from 'components/ContactForm/ContactForm.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterCheck = event =>
    dispatch(setStatusFilter(event.currentTarget.value));

  return (
    <InputFilter>
      Find contacts by name
      <Input type="text" onChange={handleFilterCheck} />
    </InputFilter>
  );
};

Filter.propTypes = {
  handleFilterCheck: PropTypes.func,
};
