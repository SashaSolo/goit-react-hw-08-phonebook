import { useDispatch, useSelector } from 'react-redux';
import { Btn } from 'components/Button/Button';
import { getContacts } from 'redux/auth/selectors';
import { addContact } from 'redux/contacts/contOperations';

import { FormStyle, Label, Input } from './ContactForm.styled';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements['name'].value;

    const phone = String(form.elements['phone'].value);

    const normalizedName = name.toLowerCase();

    const compareNames = contacts.find(
      contactToCompare => contactToCompare.name.toLowerCase() === normalizedName
    );

    if (compareNames) {
      alert(`${name} is already in the list of contacts`);
      return;
    }

    dispatch(addContact({ name, phone }));
    form.reset();
  };

  return (
    <div>
      <FormStyle onSubmit={handleSubmit}>
        <Label htmlFor="1">Name</Label>

        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="1"
        />
        <Label htmlFor="2">Phone</Label>
        <Input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id="2"
        />
        <Btn type="submit">Add contact</Btn>
      </FormStyle>
    </div>
  );
}
