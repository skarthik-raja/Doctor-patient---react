import React from 'react';
import './DoctorRegister.css';
import Navbar from './Navbar';

export default function DoctorRegister() {
  return (
    <div>
      <img src="https://techcrunch.com/wp-content/uploads/2020/09/GettyImages-1211152561.jpg?w=713" alt="Background" className='image' style={{ marginTop: '7%', marginLeft: '10%', width: '50%' }} />
      <div className="container">
        <div className="registration-form">
          <header>Signup</header>
          <form action="#">
            <input type="text" placeholder="Enter your email" />
            <input type="password" placeholder="Create a password" />
            <input type="password" placeholder="Confirm your password" />
            <input type="button" className="button" value="Signup" />
          </form>
          <div className="signup">
            <span className="signup-text">Already have an account? <label htmlFor="check">Login</label></span>
          </div>
        </div>
      </div>
    </div>
  );
}
