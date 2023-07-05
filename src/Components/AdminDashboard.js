import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [doctorData, setDoctorData] = useState([]);
  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    // Fetch doctor data
    axios.get('https://localhost:7175/api/Admins/DoctorRequests')
      .then((response) => {
        setDoctorData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching doctor data:', error);
      });

    // Fetch patient data
    axios.get('https://localhost:7175/api/Patient')
      .then((response) => {
        setPatientData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching patient data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Doctor Data:</h2>
      <ul>
        {doctorData.map((doctor) => (
          <li key={doctor.doctor_Id}>
            {doctor.doctor_Name} - {doctor.specialization}
          </li>
        ))}
      </ul>
      <h2>Patient Data:</h2>
      <ul>
        {patientData.map((patient) => (
          <li key={patient.patient_Id}>
            {patient.patient_Name} - {patient.disease}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
