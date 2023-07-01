import React from 'react';
import { useState } from 'react';

const Otp = () => {
  const [otp, setOtp] = useState('');

  const handleChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <header>
        <i className="bx bxs-check-shield"></i>
      </header>
      <h4>Enter OTP Code</h4>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            type="number"
            value={otp}
            onChange={handleChange}
            maxLength={1}
            required
          />
          <input type="number" disabled />
          <input type="number" disabled />
          <input type="number" disabled />
        </div>
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
};

export default Otp;
