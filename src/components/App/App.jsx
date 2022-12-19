import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import ContactForm from '../ContactForm/ContactForm';

import { Container } from './App.styled';

import { GlobalStyle } from '../GlobalStyle';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contact');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
    //  else {
    //   this.setState({
    //     contacts: this.props.initialContacts,
    //   });
    // }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitForApp = ({ name, number }) => {
    console.log({ name, number });

    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const normalizedName = contact.name.toLowerCase();
    const compareNames = this.state.contacts.find(
      contactToCompare => contactToCompare.name.toLowerCase() === normalizedName
    );

    if (compareNames) {
      alert(`${contact.name} is already in the list of contacts`);
      return;
    }

    console.log(contact);
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  findNameByFilter = event => {
    console.log(event.currentTarget.value);
    this.setState({ filter: event.currentTarget.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const contactsForFilter = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmitForApp={this.formSubmitForApp} />
        <h2>Contacts</h2>
        <Filter value={filter} onChangeForFilter={this.findNameByFilter} />
        <ContactList
          contacts={contactsForFilter}
          onGenerateList={this.formSubmitForApp}
          onDeleteContact={this.deleteContact}
        />
        <GlobalStyle />
      </Container>
    );
  }
}

export default App;
