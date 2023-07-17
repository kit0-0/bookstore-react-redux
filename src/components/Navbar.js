import React from 'react';
import { NavLink } from 'react-router-dom';
import { User } from 'react-feather';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <h1 className="text-primary">Bookstore CMS</h1>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link" activeClassName="active">BOOKS</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/categories" className="nav-link" activeClassName="active">CATEGORIES</NavLink>
          </li>
        </ul>
      </div>
      <button
        type="button"
        className="btn user-button border rounded-circle border-blue"
      >
        <User
          style={{
            width: '30px',
            height: '25px',
          }}
        />
      </button>
    </div>
  </nav>
);

export default Navbar;
