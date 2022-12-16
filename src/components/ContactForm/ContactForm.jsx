import React, { Component } from 'react';

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

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmitForApp(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Formik validationSchema={schema}>
        <FormStyle autoComplete="off" onSubmit={this.handleSubmit}>
          <Label htmlFor="Name"> Name</Label>
          <Input
            name="name"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleInput}
            value={this.state.name}
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
            onChange={this.handleInput}
            value={this.state.number}
            id="2"
          />
          <ErrorMessage name="telephone" />

          <Button type="submit">Add contact</Button>
        </FormStyle>
      </Formik>
    );
  }
}

export default ContactForm;
