import { NavLink } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav>
      <NavLink exact="true" to="/" className="link">
        Home
      </NavLink>

      <NavLink to="/login" className="link">
        Login
      </NavLink>

      <NavLink to="/register" className="link">
        Register
      </NavLink>

      <NavLink to="/contacts" className="link">
        Contacts
      </NavLink>
    </nav>
  );
}
