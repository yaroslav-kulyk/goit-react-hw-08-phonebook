import { Routes, Route, Navigate } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from './redux/auth';

import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ContactsPage from './pages/Contacts';

export default function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

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

        <Route
          path="/login"
          element={
            isLoggedIn ? <Navigate to="/contacts" replace /> : <LoginPage />
          }
        />

        <Route path="/register" element={<RegisterPage />}>
          <Route element={<RegisterPage />} />
        </Route>

        <Route
          path="/contacts"
          element={
            isLoggedIn ? <ContactsPage /> : <Navigate to="/login" replace />
          }
        />

        <Route path="*" element={<h2>Not Found Page</h2>} />
      </Routes>
    </Container>
  );
}
