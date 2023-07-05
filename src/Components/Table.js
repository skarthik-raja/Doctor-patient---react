import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
  const api_url = 'https://localhost:7175/api/Patient';
  const localStorageKey = 'doctorId';

  const [patients, setPatients] = useState([]);
  const [error, setError] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const storedDoctorId = localStorage.getItem(localStorageKey);
    if (storedDoctorId) {
      // Fetch patient details based on stored doctor ID
      fetchPatientDetails(storedDoctorId);
    }
  }, []);

  const fetchPatientDetails = async (doctorId) => {
    try {
      const response = await axios.get(`${api_url}?doctor_Id=${doctorId}`);
      const { data } = response;

      setPatients(data);
    } catch (error) {
      console.error('Error fetching patient details:', error);
      setError('An error occurred while fetching patient details.');
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`${api_url}?doctor_Id=${doctorName}`);
      const { data } = response;

      if (data.length > 0) {
        const { doctor_Id } = data[0];

        // Store the doctor's ID in local storage
        localStorage.setItem(localStorageKey, doctor_Id);

        // Fetch patient details based on doctor ID
        fetchPatientDetails(doctor_Id);

        // Redirect to the ActiveDoctor page
        navigate('/patient');
      } else {
        setError('Doctor not found.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <img
        src="https://imageio.forbes.com/specials-images/imageserve/5edaacf9b6ac5c00076559df/A-stethoscope-and-clipboard-in-a-doctor-s-office-/960x0.jpg?format=jpg&width=960"
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
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
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
            <button
              type="button"
              className="button"
              onClick={handleFormSubmit}
            >
              Login
            </button>
            {error && <p className="error-message">{error}</p>}
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
      <div>
        {/* Render patient details here */}
        <h2>Patient Details</h2>
        <ul>
          {patients.map((patient) => (
            <li key={patient.id}>
              <p>Patient ID: {patient.id}</p>
              <p>Patient Name: {patient.patient_Name}</p>
              <p>Disease: {patient.disease}</p>
              <p>Patient Phone Number: {patient.patient_PhNo}</p>
              {/* Add more patient details as needed */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminLogin;
