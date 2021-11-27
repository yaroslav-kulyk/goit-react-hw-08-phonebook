import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register" exact="true" className="link">
        Register
      </NavLink>
      <NavLink to="/login" exact="true" className="link">
        Login
      </NavLink>
    </div>
  );
}
