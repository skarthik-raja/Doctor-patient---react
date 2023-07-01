import React from 'react';
import './DoctorLogin.css';

export default function DoctorLogin() {
  return (
    <div>
      <img src="https://techcrunch.com/wp-content/uploads/2020/09/GettyImages-1211152561.jpg?w=713" alt="Background" className='image' style={{marginTop:'7%', marginLeft:'10%', width:'50%'}}/>
      <div className="container">
        <div className="login form">
          <header>Login</header>
          <form action="#">
            <input type="text" placeholder="Enter your email" />
            <input type="password" placeholder="Enter your password" />
            <a href="#">Forgot password?</a>
            <input type="button" className="button" value="Login" />
          </form>
          <div className="signup">
            <span className="signup">Don't have an account? <label htmlFor="check">Signup</label></span>
          </div>
        </div>
      </div>
    </div>
  );
}
