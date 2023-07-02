import React from 'react';
import './PatientLogin.css';
import axios from 'axios';
import { useState } from 'react';
import { useRoutes } from 'react-router-dom';

const PatientLogin = () => {
  const api_url = "https://localhost:7033/api/Login/Patient";

  const [patientEmail, setEmailOrPhone] = useState('');
  const [patientPass, setPassword] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create a payload object with the user input
    const payload = {
      patientEmail,
      patientPass
    };

    console.log(payload);

    axios
      .post(api_url, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        console.log('New item added:', response.data);
        // Perform any necessary actions after successful POST request
      })
      .catch((error) => {
        console.error('Error adding new item:', error);
        // Perform any necessary actions for error handling
      });
  };

  const routes = useRoutes([
    {
      path: '/',
      element: (
        <div>
          <img src="https://i.pinimg.com/564x/35/35/1e/35351edc2a8dc23392089b89a43cad03.jpg" alt="Background" className='image' style={{ marginTop: '1%', marginLeft: '10%', width: '50%' }} />
          <div className="container">
            <div className="form login">
              <header>Patient Login</header>
              <form>
                <input
                  type="text"
                  value={patientEmail}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  required
                  placeholder="Enter your email"
                />
                <input
                  type="password"
                  value={patientPass}
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
                <span className="signup">Don't have an account? <label htmlFor="check">Signup</label></span>
              </div>
            </div>
            <div className="form registration">
              {/* Add your registration form here */}
            </div>
          </div>
        </div>
      )
    }
  ]);

  return routes;
};

export default PatientLogin;
