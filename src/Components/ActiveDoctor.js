import React, { useEffect, useState } from 'react';
import './ActiveDoctor.css';
import Navbar from './Navbar';

const ActiveDoctor = () => {
  const [doctorData, setDoctorData] = useState([]);

  useEffect(() => {
    // Call the API to retrieve doctor data
    fetch('https://localhost:7175/api/Admins/DoctorRequests')
      .then((response) => response.json())
      .then((data) => setDoctorData(data));
  }, []);

  const handleApproveDoctor = (id) => {
    // Call the API to approve the doctor with the given id
    fetch(`https://localhost:7175/api/Admins/ApproveDoctorRequest/${id}`, {
      method: 'POST',
    })
      .then((response) => {
        if (response.ok) {
          // Refresh the doctor data after successful approval
          fetch('https://localhost:7175/api/Admins/DoctorRequests')
            .then((response) => response.json())
            .then((data) => setDoctorData(data));
        }
      })
      .catch((error) => {
        console.error('Error approving doctor:', error);
      });
  };

  return (
    <div>
      <Navbar/>
      <div className="card active-doctor-card">
        <div className="card-body">
          <h5 className="card-title">Active Doctors</h5>
          <div className="card-list">
            {doctorData.map((doctor) => (
              <div key={doctor.doctor_Id} className="card-item">
                <h6>{doctor.doctor_Name}</h6>
                <p>Specialization: {doctor.specialization}</p>
                <p>Email: {doctor.doctor_Email}</p>
                <p>Phone: {doctor.doctor_PhNo}</p>
                <p>Status: {doctor.status}</p>
                <button
                  onClick={() => handleApproveDoctor(doctor.doctor_Id)}
                  className="approve-button"
                >
                  Approve
                </button>
              </div>
            ))}
          </div>
        </div>+++
      </div>
    </div>
  );
};

export default ActiveDoctor;