import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
  const api_url = 'https://localhost:7175/api/Token/Admin';

  const [admin_Name, setAdminName] = useState('');
  const [admin_Password, setAdminPassword] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      admin_Name,
      admin_Password,
    };

    axios
      .post(api_url, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('Login successful:', response.data);
        navigate('/navigate');
      })
      .catch((error) => {
        console.error('Error during login:', error);
      });
  };

  return (
    <div>
      <img
        src="https://thumbs.dreamstime.com/z/healthcare-medicine-finance-organization-data-stethoscope-graph-plan-63116304.jpg"
        alt="Background"
        className="image"
        style={{ marginTop: '1%', marginLeft: '10%', width: '50%' }}
      />
      <div className="container">
        <div className="form login">
          <header>Admin Login</header>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              value={admin_Name}
              onChange={(e) => setAdminName(e.target.value)}
              required
              placeholder="Enter your Name"
            />
            <input
              type="password"
              value={admin_Password}
              onChange={(e) => setAdminPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
            <a href="#">Forgot password?</a>
            <input type="submit" className="button" value="Login" />
          </form>
          <div className="signup">
            <span className="signup">
              Don't have an account? <label htmlFor="check">Signup</label>
            </span>
          </div>
        </div>
        <div className="form registration">{/* Add your registration form here */}</div>
      </div>
    </div>
  );
};

export default AdminLogin;
