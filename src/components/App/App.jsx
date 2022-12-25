import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import ContactForm from '../ContactForm/ContactForm';

import { Container } from './App.styled';

import { GlobalStyle } from '../GlobalStyle';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  const formSubmitForApp = ({ name, number }) => {
    console.log({ name, number });

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const normalizedName = contact.name.toLowerCase();
    const compareNames = contacts.find(
      contactToCompare => contactToCompare.name.toLowerCase() === normalizedName
    );

    if (compareNames) {
      alert(`${contact.name} is already in the list of contacts`);
      return;
    }

    setContacts(prevState => [...prevState, contact]);
  };

  const findNameByFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const normalizedFilter = filter.toLowerCase();
  const contactsForFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmitForApp={formSubmitForApp} />
      <h2>Contacts</h2>
      <Filter value={filter} onChangeForFilter={findNameByFilter} />
      <ContactList
        contacts={contactsForFilter}
        onGenerateList={formSubmitForApp}
        onDeleteContact={deleteContact}
      />
      <GlobalStyle />
    </Container>
  );
}
