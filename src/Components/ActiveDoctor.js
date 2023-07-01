import React from 'react';
import './ActiveDoctor.css';

export default function ActiveDoctor() {
  return (
    <div className="card active-doctor-card">
      <div className="card-body">
        <h5 className="card-title">Active Doctors</h5>
        <table className="active-doctor-table">
          <thead>
            <tr>
              <th>Doctor Name</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dr. John Doe</td>
              <td>Monday-Friday</td>
            </tr>
            <tr>
              <td>Dr. Jane Smith</td>
              <td>Monday, Wednesday, Friday</td>
            </tr>
            <tr>
              <td>Dr. Jane Smith</td>
              <td>Monday, Wednesday, Friday</td>
            </tr>
            <tr>
              <td>Dr. Jane Smith</td>
              <td>Monday, Wednesday, Friday</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
