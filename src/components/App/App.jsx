import { Component } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  addContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };
    const { contacts } = this.state;
    const hasSameName = contacts.some(({ name }) => name === newContact.name);
    hasSameName
      ? Notiflix.Notify.warning(`${newContact.name} is already in contacts`, {
          position: 'center-center',
          cssAnimationStyle: 'zoom',
        })
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, newContact],
        }));
  };
  handleSearch = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleDelete = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div className={css.wrapper}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2 className={css.subtitle}>Contacts</h2>
        <div className={css.container}>
          <Filter onChange={this.handleSearch} value={filter} />
          <ContactList>
            <ContactItem
              contacts={filterContacts}
              onDelete={this.handleDelete}
            />
          </ContactList>
        </div>
      </div>
    );
  }
}
