import React, { useEffect, useState } from 'react';
import './Doctorcard.css';
import axios from 'axios';

export default function DoctorCard() {
  const [doctors, setDoctors] = useState([]);
  const [newDoctor, setNewDoctor] = useState({
    doctor_Id: '',
    doctor_Name: '',
    specialization: '',
    doctor_Email: '',
    doctor_PhNo: '',
    password: '',
    status: 'Approved',
    imageData: null,
  });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('https://localhost:7175/api/Doctor/ApprovedDoctors');
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const requestData = new FormData();
      requestData.append('doctor_Name', newDoctor.doctor_Name);
      requestData.append('specialization', newDoctor.specialization);
      requestData.append('doctor_Email', newDoctor.doctor_Email);
      requestData.append('doctor_PhNo', newDoctor.doctor_PhNo);
      requestData.append('password', newDoctor.password);
      requestData.append('status', newDoctor.status);
      requestData.append('imageData', newDoctor.imageData);

      await performPostAction(requestData);
    } catch (error) {
      console.error('Failed to add a new doctor:', error);
    }
  };

  const performPostAction = async (requestData) => {
    try {
      const response = await axios.post('https://localhost:7175/api/Doctor', requestData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        const data = response.data;
        setDoctors([...doctors, data]);
        setNewDoctor({
          doctor_Id: '',
          doctor_Name: '',
          specialization: '',
          doctor_Email: '',
          doctor_PhNo: '',
          password: '',
          status: 'Approved',
          imageData: null,
        });
      } else {
        throw new Error('Failed to add a new doctor');
      }
    } catch (error) {
      console.error('Failed to add a new doctor:', error);
    }
  };

  const handleUpdateDoctor = async (doctorId) => {
    try {
      const response = await axios.get(`https://localhost:7175/api/Doctor/${doctorId}`);

      if (response.status === 200) {
        const doctorData = response.data;
        setNewDoctor({
          doctor_Id: doctorData.doctor_Id,
          doctor_Name: doctorData.doctor_Name,
          specialization: doctorData.specialization,
          doctor_Email: doctorData.doctor_Email,
          doctor_PhNo: doctorData.doctor_PhNo,
          password: '', // Remove this line if you want to keep the existing password
          status: 'Approved',
          imageData: null,
        });
      } else {
        throw new Error('Failed to fetch doctor data');
      }
    } catch (error) {
      console.error('Failed to fetch doctor data:', error);
    }
  };

  const handleDelete = async (doctor_Id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this doctor?');
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(`https://localhost:7175/api/Doctor/${doctor_Id}`);

      if (response.status === 200) {
        const updatedDoctors = doctors.filter((doctor) => doctor.doctor_Id !== doctor_Id);
        setDoctors(updatedDoctors);
      } else {
        throw new Error('Failed to delete the doctor');
      }
    } catch (error) {
      console.error('Failed to delete the doctor:', error);
    }
  };

  const handleUpdateSubmit = async (event) => {
    event.preventDefault();
    try {
      const requestData = new FormData();
      requestData.append('doctor_Id', newDoctor.doctor_Id);
      requestData.append('doctor_Name', newDoctor.doctor_Name);
      requestData.append('specialization', newDoctor.specialization);
      requestData.append('doctor_Email', newDoctor.doctor_Email);
      requestData.append('doctor_PhNo', newDoctor.doctor_PhNo);
      requestData.append('password', newDoctor.password);
      requestData.append('status', newDoctor.status);
      requestData.append('imageData', newDoctor.imageData);

      await performUpdateAction(requestData);
    } catch (error) {
      console.error('Failed to update the doctor:', error);
    }
  };

  const performUpdateAction = async (requestData) => {
    try {
      const response = await axios.put(`https://localhost:7175/api/Doctor/${newDoctor.doctor_Id}`, requestData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        const updatedDoctor = response.data;
        const updatedDoctors = doctors.map((doctor) => {
          if (doctor.doctor_Id === updatedDoctor.doctor_Id) {
            return updatedDoctor;
          }
          return doctor;
        });

        setDoctors(updatedDoctors);
        setNewDoctor({
          doctor_Id: '',
          doctor_Name: '',
          specialization: '',
          doctor_Email: '',
          doctor_PhNo: '',
          password: '',
          status: 'Approved',
          imageData: null,
        });
      } else {
        throw new Error('Failed to update the doctor');
      }
    } catch (error) {
      console.error('Failed to update the doctor:', error);
    }
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
      <form onSubmit={handleSubmit}>
        <label>
          Doctor Name:
          <input
            type="text"
            name="doctor_Name"
            value={newDoctor.doctor_Name}
            onChange={(e) => setNewDoctor({ ...newDoctor, doctor_Name: e.target.value })}
          />
        </label>
        <label>
          Specialization:
          <input
            type="text"
            name="specialization"
            value={newDoctor.specialization}
            onChange={(e) => setNewDoctor({ ...newDoctor, specialization: e.target.value })}
          />
        </label>
        <label>
          Doctor Email:
          <input
            type="email"
            name="doctor_Email"
            value={newDoctor.doctor_Email}
            onChange={(e) => setNewDoctor({ ...newDoctor, doctor_Email: e.target.value })}
          />
        </label>
        <label>
          Doctor Phone Number:
          <input
            type="tel"
            name="doctor_PhNo"
            value={newDoctor.doctor_PhNo}
            onChange={(e) => setNewDoctor({ ...newDoctor, doctor_PhNo: e.target.value })}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={newDoctor.password}
            onChange={(e) => setNewDoctor({ ...newDoctor, password: e.target.value })}
          />
        </label>
        <label>
          Profile Picture:
          <input
            type="file"
            accept=".jpg,.jpeg,.png"
            onChange={(e) => setNewDoctor({ ...newDoctor, imageData: e.target.files[0] })}
          />
        </label>
        <button type="submit">Add Doctor</button>
      </form>

      <div className="search-container">
        <input type="text" placeholder="Search" value={searchQuery} onChange={handleSearchChange} />
      </div>

      <div className="card-container">
        {filteredDoctors.map((doctor) => (
          <div className="card" key={doctor.doctor_Id}>
            {doctor.imageData && convertToImage(doctor.imageData)}
            <h2>{doctor.doctor_Name}</h2>
            <p>{doctor.specialization}</p>
            <p>Email: {doctor.doctor_Email}</p>
            <p>Phone: {doctor.doctor_PhNo}</p>
            <button onClick={() => handleUpdateDoctor(doctor.doctor_Id)}>Edit</button>
            <button onClick={() => handleDelete(doctor.doctor_Id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
