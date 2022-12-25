import { useEffect, useState } from 'react';
// import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import ContactForm from '../ContactForm/ContactForm';

import { Container } from './App.styled';

import { GlobalStyle } from '../GlobalStyle';

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };
export function App() {
  // formSubmitForApp = ({ name, number }) => {
  //   console.log({ name, number });
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

    // console.log(contact);
    // this.setState(prevState => ({
    //   contacts: [contact, ...prevState.contacts],
    // }));
    setContacts(prevState => [...prevState, contact]);
  };

  const findNameByFilter = event => {
    // console.log(event.currentTarget.value);
    // this.setState({ filter: event.currentTarget.value });
    setFilter(event.currentTarget.value);
  };

  const normalizedFilter = filter.toLowerCase();
  const contactsForFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const deleteContact = id => {
    // this.setState(prevState => ({
    //   contacts: prevState.contacts.filter(contact => contact.id !== id),
    // }));
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const updatedContacts = JSON.parse(contacts);
  //   if (updatedContacts) {
  //     this.setState({ contacts: updatedContacts });
  //   }
  // }

  // componentDidUpdate(_, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // render() {
  //   const { contacts, filter } = this.state;

  //   const normalizedFilter = filter.toLowerCase();
  //   const contactsForFilter = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
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

// export default App;
