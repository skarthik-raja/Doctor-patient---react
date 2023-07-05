import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImage from './navlogo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-corner-image">
        <img src={logoImage} alt="navlogo" />
      </div>
      <div className="navbar-right">
        <ul className="navbar-nav center-items">
          <li className="nav-item">
            <NavLink to="/doctor" activeClassName="active">Doctors</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/patient" activeClassName="active">Patients</NavLink>
          </li>
        </ul>
        <div class="loader"></div>
      </div>
    </nav>
  );
};

export default Navbar;
