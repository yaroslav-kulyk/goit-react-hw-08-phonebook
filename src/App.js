import { Routes, Route, Redirect } from 'react-router';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from './redux/auth';

import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ContactsPage from './pages/Contacts';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import s from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  // const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route element={<HomePage />} />
        </Route>

        <Route path="/login" element={<LoginPage />}>
          <Route element={<LoginPage />} />
        </Route>

        <Route path="/register" element={<RegisterPage />}>
          <Route element={<RegisterPage />} />
        </Route>

        <Route path="/contacts" element={<ContactsPage />}>
          <Route element={<ContactsPage />} />
        </Route>
      </Routes>

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
