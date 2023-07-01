import React from 'react'
import './Doctortable.css'

export default function Doctortable() {
  return (
    <div>
      <table className="doctor-table">
        <thead>
          <tr>
            <th>Doctor Name</th>
            <th>Specialization</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dr. John Doe</td>
            <td>Cardiology</td>
            <td>Monday-Friday</td>
          </tr>
          <tr>
            <td>Dr. Jane Smith</td>
            <td>Dermatology</td>
            <td>Monday, Wednesday, Friday</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  )
}
