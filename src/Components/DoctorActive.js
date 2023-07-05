import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorActivePage = () => {
  const api_url = 'https://localhost:7175/api/Doctor/ApprovedDoctors';
  const localStorageKey = 'doctorId';

  const [doctorId, setDoctorId] = useState('');
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedDoctorId = localStorage.getItem(localStorageKey);
    if (storedDoctorId) {
      setDoctorId(storedDoctorId);
      fetchPatients(storedDoctorId);
    }
  }, []);

  const fetchPatients = async (doctorId) => {
    try {
      const response = await axios.get(`${api_url}/${doctorId}/patients`);
      const { data } = response;
      setPatients(data);
    } catch (error) {
      console.error('Error fetching patients:', error);
      setError('An error occurred while fetching patient list.');
    }
  };

  return (
    <div>
      <h1>Welcome, Doctor!</h1>
      <h2>Patient List</h2>
      {error && <p className="error-message">{error}</p>}
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>{patient.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorActivePage;
