import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Components/DoctorRegister';
import Login from './Components/DoctorLogin';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
// import Otp from './Components/Otp';
import Doctorcard from './Components/Doctorcard';
import Doctortable from './Components/Doctortable';
import ActiveDoctor from './Components/ActiveDoctor';
import DeactiveDoctor from './Components/DeactiveDoctor';
import Patientcard from './Components/patientcard';
import Billing from './Components/Billing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/OTP" element={<Otp />} /> */}
        <Route path="/Doctor" element={<Doctorcard />} />
        <Route path="/table" element={<Doctortable />} />
        <Route path="/active" element={<ActiveDoctor />} />
        <Route path="/deactive" element={<DeactiveDoctor />} />
        <Route path="/patient" element={<Patientcard />} />
        <Route path="/billing" element={<Billing />} />
      </Routes>
    </Router>
  );
}

export default App;
