import React, { useEffect, useState } from 'react';
import './DoctorView.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function DoctorView() {
  const [doctors, setDoctors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const token = localStorage.getItem('token');


  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('https://localhost:7175/api/Doctor/ApprovedDoctors', {
        headers: {
          Authorization: `Bearer ${token}`,
          
        },
      })
      const data = response.data;
      setDoctors(data);
    } catch (error) {
      console.error('Failed to fetch doctors:', error);
    }
  };

  const convertToImage = (imageData) => {
    const base64Image = `data:image/jpeg;base64,${imageData}`;
    return <img src={base64Image} alt="Doctor" className="docimg" />;
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredDoctors = doctors.filter((doctor) => {
    return (
      doctor.doctor_Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by name or specialization"
        />
      </div>

      <div className="card-container">
        {filteredDoctors.map((doctor) => (
          <div className="card" key={doctor.doctor_Id}>
            {doctor.imageData && convertToImage(doctor.imageData)}
            <h2>{doctor.doctor_Name}</h2>
            <p>{doctor.specialization}</p>
            <p>Email: {doctor.doctor_Email}</p>
            <p>Phone: {doctor.doctor_PhNo}</p>
            <Link to={`/appointment/${doctor.doctor_Id}`} className="button">
              Book Appointment
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
