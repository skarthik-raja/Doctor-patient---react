import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar-nav">
       
      <ul>
      <div class="loading">
  <svg width="64px" height="48px">
      <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
    <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
  </svg>
</div>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Doctor
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Patient
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Services
          </a>
        </li>
        <li className="nav-item">
          <div className="dropdown-container">
            <button className="dropdown-btn" onClick={handleDropdownToggle}>
              <i className="fas fa-user"></i>
            </button>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <a href="#">Logout</a>
              </div>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
