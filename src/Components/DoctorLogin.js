import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './DoctorLogin.css';

const AdminLogin = () => {
  const api_url = 'https://localhost:7175/api/Token';

  const [doctor_Name, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create a payload object with the user input
    const payload = {
      doctor_Name,
      password,
    };

    console.log(payload);

    axios
      .post(api_url, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('New item added:', response.data);
        // Redirect to the ActiveDoctor page
        navigate('/patient');
      })
      .catch((error) => {
        console.error('Error adding new item:', error);
        // Perform any necessary actions for error handling
      });
  };

  return (
    <div>
      <img
        src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/10/23170032/Medical-Science-Courses.jpg"
        alt="Background"
        className="image"
        style={{ marginTop: '5%', marginLeft: '10%', width: '53%' }}
      />
      <div className="container">
        <div className="form login">
          <header>Doctor Login</header>
          <form>
            <input
              type="text"
              value={doctor_Name}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              required
              placeholder="Enter your Name"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
            <a href="#">Forgot password?</a>
            <input
              type="button"
              className="button"
              onClick={handleFormSubmit}
              value="Login"
            />
          </form>
          <div className="signup">
            <span className="signup">
              Don't have an account? <label htmlFor="check">Signup</label>
            </span>
          </div>
        </div>
        <div className="form registration">
          {/* Add your registration form here */}
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
