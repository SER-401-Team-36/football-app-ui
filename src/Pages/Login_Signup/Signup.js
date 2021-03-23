import './Signup.css';
import React from 'react';
import pitchfork from '../../images/pitchfork.jpg';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div id="signup">
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <div id="signupBox">
        <h1 id="SignupPage">Signup</h1>

        <form id="form">
          <input
            id="firstName"
            type="text"
            placeholder="First Name"
            required
          ></input>

          <input
            id="lastName"
            type="text"
            placeholder="Last Name"
            required
          ></input>
          
          <input
            id="Email"
            type="email"
            placeholder="Email"
            required
            ></input>
          <br></br>
          <input
            id="password1"
            type="password"
            placeholder="Password"
            required
            ></input>
          <br></br>
          <input
            id="password2"
            type="password"
            placeholder="Confirm Password"
            required
            ></input>
          <br></br>
          <Link to="LoginPage" id="signUpButton">
            Sign Up
          </Link>
          <br></br>
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
