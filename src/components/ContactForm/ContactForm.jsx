import { useDispatch, useSelector } from 'react-redux';
// import { Button } from 'components/Button/Button';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/contOperations';
import PropTypes from 'prop-types';

import { Form, Label, Input, Wrapper, Title, Btn } from './ContactForm.styled';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements['name'].value;

    const number = String(form.elements['number'].value);

    const normalizedName = name.toLowerCase();

    const compareNames = contacts?.find(
      contactToCompare =>
        contactToCompare.name?.toLowerCase() === normalizedName
    );

    if (compareNames) {
      alert(`${name} is already in the list of contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <Wrapper>
      <div>
        <Title>Add Contacts</Title>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="1">
            {' '}
            Name{' '}
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              id="1"
            />
          </Label>

          <Label htmlFor="2">
            Phone{' '}
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              id="2"
            />
          </Label>

          <Btn type="submit">Add contact</Btn>
        </Form>
      </div>
    </Wrapper>
  );
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};
