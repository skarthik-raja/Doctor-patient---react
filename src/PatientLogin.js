import React, { useState } from 'react';
import './Dashboard.css';
import Navbar from './Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Doctorcard from './Doctorcard';
import Doctortable from './Doctortable';
import ActiveDoctor from './ActiveDoctor';
import DeactiveDoctor from './DeactiveDoctor';

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      <div className="dashboard-navbar">
        <Navbar />
      </div>
      <div className="dashboard-sidebar">
        <ul className="dashboard-nav">
          <li className="dashboard-nav-item">
            <a href="#home" className="dashboard-nav-link">
              <i className="fas fa-home"></i> Home
            </a>
          </li>
          <li className="dashboard-nav-item">
            <a href="#about" className="dashboard-nav-link">
              <i className="fas fa-info-circle"></i> About
            </a>
          </li>
          <li className="dashboard-nav-item">
            <a href="#services" className="dashboard-nav-link">
              <i className="fas fa-cogs"></i> Services
            </a>
          </li>
          <li className="dashboard-nav-item">
            <a href="#contact" className="dashboard-nav-link">
              <i className="fas fa-envelope"></i> Contact
            </a>
          </li>
          <li className="dashboard-nav-item">
            <a href="#patients" className="dashboard-nav-link">
              <i className="fas fa-user"></i> Patients
            </a>
          </li>
        </ul>
      </div>
      <div className="dashboard-content">
        <h2>Dashboard</h2>
        <ActiveDoctor/>
        <DeactiveDoctor/>
        {/* <Doctorcard/> */}
        <Doctortable/>
      </div>
      <img
        src="C:\Users\KARTHI\Documents\medicalcenter-master\assets\img\hero\h1_hero.png"
        alt="Background"
        className="image"
        style={{ marginTop: '1%', marginLeft: '10%', width: '50%' }}
      />
    </div>
  );
}
