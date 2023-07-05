import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminPanel.css';

const AdminPanel = () => {
  // Admin state
  const [admins, setAdmins] = useState([]);
  const [newAdmin, setNewAdmin] = useState({
    admin_Name: '',
    admin_Password: '',
  });

  // Doctor state
  const [doctors, setDoctors] = useState([]);

  // Patient state
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Fetch admin data
    const fetchAdmin = async () => {
      try {
        const response = await axios.get('https://localhost:7175/api/Admin');
        const adminData = response.data;
        setAdmins(adminData);
      } catch (error) {
        console.error('Failed to fetch admin:', error);
      }
    };

    // Fetch doctors data
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('https://localhost:7175/api/Doctor');
        const doctorsData = response.data;
        setDoctors(doctorsData);
      } catch (error) {
        console.error('Failed to fetch doctors:', error);
      }
    };

    // Fetch patients data
    const fetchPatients = async () => {
      try {
        const response = await axios.get('https://localhost:7175/api/Patient');
        const patientsData = response.data;
        setPatients(patientsData);
      } catch (error) {
        console.error('Failed to fetch patients:', error);
      }
    };

    fetchAdmin();
    fetchDoctors();
    fetchPatients();
  }, []);

  // Add admin
  const addAdmin = async () => {
    try {
      const response = await axios.post('https://localhost:7175/api/Admin', newAdmin);
      const addedAdmin = response.data;
      setAdmins([...admins, addedAdmin]);
      setNewAdmin({ admin_Name: '', admin_Password: '' });
    } catch (error) {
      console.error('Failed to add admin:', error);
    }
  };

  // Update admin
  const updateAdmin = async (adminId, updatedAdmin) => {
    try {
      const response = await axios.put(
        `https://localhost:7175/api/Admin/${adminId}`,
        updatedAdmin
      );
      const updatedAdminData = response.data;
      const updatedAdminIndex = admins.findIndex((a) => a.admin_Id === adminId);
      if (updatedAdminIndex !== -1) {
        const updatedAdminList = [...admins];
        updatedAdminList[updatedAdminIndex] = updatedAdminData;
        setAdmins(updatedAdminList);
      }
    } catch (error) {
      console.error('Failed to update admin:', error);
    }
  };

  // Delete admin
  const deleteAdmin = async (adminId) => {
    try {
      await axios.delete(`https://localhost:7175/api/Admin/${adminId}`);
      const updatedAdminList = admins.filter((a) => a.admin_Id !== adminId);
      setAdmins(updatedAdminList);
    } catch (error) {
      console.error('Failed to delete admin:', error);
    }
  };

  // Add doctor
  const addDoctor = async (newDoctor) => {
    try {
      const response = await axios.post('https://localhost:7175/api/Doctor', newDoctor);
      const addedDoctor = response.data;
      setDoctors([...doctors, addedDoctor]);
    } catch (error) {
      console.error('Failed to add doctor:', error);
    }
  };

  // Update doctor
  const updateDoctor = async (doctorId, updatedDoctor) => {
    try {
      const response = await axios.put(
        `https://localhost:7175/api/Doctor/${doctorId}`,
        updatedDoctor
      );
      const updatedDoctorData = response.data;
      const updatedDoctorIndex = doctors.findIndex((d) => d.doctor_Id === doctorId);
      if (updatedDoctorIndex !== -1) {
        const updatedDoctorList = [...doctors];
        updatedDoctorList[updatedDoctorIndex] = updatedDoctorData;
        setDoctors(updatedDoctorList);
      }
    } catch (error) {
      console.error('Failed to update doctor:', error);
    }
  };

  // Delete doctor
  const deleteDoctor = async (doctorId) => {
    try {
      await axios.delete(`https://localhost:7175/api/Doctor/${doctorId}`);
      const updatedDoctorList = doctors.filter((d) => d.doctor_Id !== doctorId);
      setDoctors(updatedDoctorList);
    } catch (error) {
      console.error('Failed to delete doctor:', error);
    }
  };

  // Add patient
  const addPatient = async (newPatient) => {
    try {
      const response = await axios.post('https://localhost:7175/api/Patient', newPatient);
      const addedPatient = response.data;
      setPatients([...patients, addedPatient]);
    } catch (error) {
      console.error('Failed to add patient:', error);
    }
  };

  // Update patient
  const updatePatient = async (patientId, updatedPatient) => {
    try {
      const response = await axios.put(
        `https://localhost:7175/api/Patient/${patientId}`,
        updatedPatient
      );
      const updatedPatientData = response.data;
      const updatedPatientIndex = patients.findIndex((p) => p.patient_Id === patientId);
      if (updatedPatientIndex !== -1) {
        const updatedPatientList = [...patients];
        updatedPatientList[updatedPatientIndex] = updatedPatientData;
        setPatients(updatedPatientList);
      }
    } catch (error) {
      console.error('Failed to update patient:', error);
    }
  };

  // Delete patient
  const deletePatient = async (patientId) => {
    try {
      await axios.delete(`https://localhost:7175/api/Patient/${patientId}`);
      const updatedPatientList = patients.filter((p) => p.patient_Id !== patientId);
      setPatients(updatedPatientList);
    } catch (error) {
      console.error('Failed to delete patient:', error);
    }
  };

  const renderAdminCard = (admin) => (
    <div key={admin.admin_Id} className="card">
      <div className="card-body">
        <h5 className="card-title">{admin.admin_Name}</h5>
        <p className="card-text">ID: {admin.admin_Id}</p>
        <p className="card-text">Password: {admin.admin_Password}</p>
        <button className="btn btn-danger" onClick={() => deleteAdmin(admin.admin_Id)}>
          Delete
        </button>
      </div>
    </div>
  );

  // Doctor Card View
  const renderDoctorCard = (doctor) => (
    <div key={doctor.doctor_Id} className="card">
      <div className="card-body">
        <h5 className="card-title">{doctor.doctor_Name}</h5>
        <p className="card-text">ID: {doctor.doctor_Id}</p>
        <p className="card-text">Specialization: {doctor.specialization}</p>
        <p className="card-text">Email: {doctor.doctor_Email}</p>
        <button className="btn btn-danger" onClick={() => deleteDoctor(doctor.doctor_Id)}>
          Delete
        </button>
      </div>
    </div>
  );
  // Patient Card View
  const renderPatientCard = (patient) => (
    <div key={patient.patient_Id} className="card">
      <div className="card-body">
        <h5 className="card-title">{patient.patient_Name}</h5>
        <p className="card-text">ID: {patient.patient_Id}</p>
        <p className="card-text">Age: {patient.patient_Age}</p>
        <p className="card-text">Gender: {patient.patient_Gender}</p>
        <button className="btn btn-danger" onClick={() => deletePatient(patient.patient_Id)}>
          Delete
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <h2>Admin Panel</h2>

      {/* Admins */}
      <h3>Admins</h3>
      <div className="card-container">
        {admins.map((admin) => renderAdminCard(admin))}
      </div>

      {/* Add Admin Form */}
      <h4>Add Admin</h4>
      <div className="form-group">
        <label htmlFor="adminName">Name:</label>
        <input
          type="text"
          className="form-control"
          id="adminName"
          value={newAdmin.admin_Name}
          onChange={(e) =>
            setNewAdmin({ ...newAdmin, admin_Name: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="adminPassword">Password:</label>
        <input
          type="password"
          className="form-control"
          id="adminPassword"
          value={newAdmin.admin_Password}
          onChange={(e) =>
            setNewAdmin({ ...newAdmin, admin_Password: e.target.value })
          }
        />
      </div>
      <button className="btn btn-primary" onClick={addAdmin}>
        Add Admin
      </button>

      {/* Doctors */}
      <h3>Doctors</h3>
      <div className="card-container flex-container">
        {doctors.map((doctor) => renderDoctorCard(doctor))}
      </div>

      {/* Patients */}
      <h3>Patients</h3>
      <div className="card-container flex-container">
        {patients.map((patient) => renderPatientCard(patient))}
      </div>
    </div>
  );
};

export default AdminPanel;
