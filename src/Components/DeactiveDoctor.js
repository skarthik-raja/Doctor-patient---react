import React from 'react';
import './DeactiveDoctor.css';

export default function DeactiveDoctor() {
  return (
    <div className="card deactive-doctor-card">
      <div className="card-body">
        <h5 className="card-title">Deactive Doctors</h5>
        <table className="deactive-doctor-table">
          <thead>
            <tr>
              <th>Doctor Name</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dr. Mark Johnson</td>
              <td>Not available</td>
            </tr>
            <tr>
              <td>Dr. Sarah Adams</td>
              <td>On leave</td>
            </tr>
            <tr>
              <td>Dr. Sarah Adams</td>
              <td>On leave</td>
            </tr>
            <tr>
              <td>Dr. Sarah Adams</td>
              <td>On leave</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
