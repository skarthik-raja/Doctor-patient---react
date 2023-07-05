import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DoctorPatients = () => {
  const api_url = 'https://localhost:7175/api/Patient'; // API URL for fetching patient details

  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Fetch patient details for the doctor
    const fetchPatients = async () => {
      try {
        const doctorId = localStorage.getItem('doctorId');
        if (!doctorId) {
          // Doctor ID not found in local storage
          return;
        }

        const response = await axios.get(`${api_url}?doctorId=${doctorId}`);
        const { data } = response;
        setPatients(data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div>
      <h2>Doctor's Patients</h2>
      <table>
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Name</th>
            <th>Disease</th>
            <th>Phone Number</th>
            {/* Add more patient details columns as needed */}
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.patient_Id}>
              <td>{patient.patient_Id}</td>
              <td>{patient.patient_Name}</td>
              <td>{patient.disease}</td>
              <td>{patient.patient_PhNo}</td>
              {/* Add more patient details cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorPatients;
