import { Switch, Route, Redirect } from 'react-router';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import Contacts from './pages/Contacts';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import s from './App.module.css';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Contacts />

      {/* <div className={s.container}>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div> */}
    </Container>
  );
}
