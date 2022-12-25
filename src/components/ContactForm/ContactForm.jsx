import { useState } from 'react';

import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { FormStyle, Label, Input, Button } from './ContactForm.styled.jsx';

const schema = yup.object().shape({
  Name: yup
    .string()
    .min(3, 'Must be 3 characters or more')
    .max(15, 'Must be 15 characters or less')
    .required('Please enter correct name'),
  Phone: yup
    .number()
    .min(6)
    .max(19)
    .required('Enter correct number')
    .positive()
    .integer(),
});

export default function ContactForm({ onSubmitForApp }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmitForApp({ name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Formik validationSchema={schema}>
      <FormStyle onSubmit={handleSubmit}>
        <Label htmlFor="Name"> Name</Label>
        <Input
          name="name"
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
          id="1"
        />
        <ErrorMessage name="name" />

        <Label htmlFor="Telephone">Telephone</Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
          id="2"
        />
        <ErrorMessage name="telephone" />

        <Button type="submit">Add contact</Button>
      </FormStyle>
    </Formik>
  );
}
