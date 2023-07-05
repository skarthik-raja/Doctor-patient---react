import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import DoctorLogin from './Components/DoctorLogin';
import Doctorcard from './Components/Doctorcard';
import Doctortable from './Components/Doctortable';
import ActiveDoctor from './Components/ActiveDoctor';
import DeactiveDoctor from './Components/DeactiveDoctor';
import Patientcard from './Components/patientcard';
import AdminLogin from './Components/AdminLogin';
import PatientLogin from './Components/PatientLogin';
import AdminPanel from './Components/AdminPanel';
import PatientTable from './Components/PatienTable';
import PatientRegister from './Components/PatientRegister';
import PatientDetails from './Components/PatientDetails';
import AppointmentList from './Components/AppointmentList';
import Navigation from './Components/Navigation';
import DoctorView from './Components/DoctorView';
import Home from './Components/Home';
import Table from './Components/Table';
import DoctorActivePage from './Components/DoctorActive';
import DRegister from './Components/DRegister';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<DoctorLogin />} />
        <Route path="/Doctor" element={<Doctorcard />} />
        <Route path="/table" element={<Doctortable />} />
        <Route path="/active" element={<ActiveDoctor />} />
        <Route path="/deactive" element={<DeactiveDoctor />} />
        <Route path="/patient" element={<Patientcard />} />
        <Route path="/Admin" element={<AdminLogin />} />
        <Route path='/Admins' element={<AdminPanel/>}/>
        <Route path="/Patientlogin" element={<PatientLogin />} />
        <Route path='/details' element={<PatientTable/>}/>
        <Route path='/patientregister' element={<PatientRegister/>}/>
        <Route path='/patientdetails' element={<PatientDetails/>}/>
        <Route path='/appointment' element={<AppointmentList/>}/>
        <Route path='/navigate' element={<Navigation/>}/>
        <Route path='/view' element={<DoctorView/>}/>
        <Route path='/tables' element={<Table/>}/>
        <Route path='/approve' element={<DoctorActivePage/>}/>
        <Route path='registers'  element={<DRegister/>}/>
        
      
      </Routes>
    </Router>
  );
}



export default App;
