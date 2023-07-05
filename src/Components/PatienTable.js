import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PatientTable.css'; // Import the CSS file

export default function PatientTable() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await axios.get('https://localhost:7175/api/Patient');
      setPatients(response.data);
    } catch (error) {
      console.error('Failed to fetch patients:', error);
    }
  };

  const renderPatients = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Disease</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.patient_Id}>
              <td>{patient.patient_Name}</td>
              <td>{patient.disease}</td>
              <td>{patient.patient_PhNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return <div className="patient-table">{renderPatients()}</div>;
}
