import './Signup.css';
import React from 'react';
import pitchfork from '../../images/pitchfork.jpg';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div id="pageHolder">
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <div id="signupBox">
        <h1 id="SignupPage">Signup</h1>

        <form id="form">
          <input
            id="firstName"
            type="text"
            placeholder="First Name"
          ></input>

          <input
            id="lastName"
            type="text"
            placeholder="Last Name"
          ></input>
          
          <input
            id="Email"
            type="email"
            placeholder="Email"
            ></input>
          <br></br>
          <input
            id="password1"
            type="password"
            placeholder="Password"
            ></input>
          <br></br>
          <input
            id="password2"
            type="password"
            placeholder="Confirm Password"
            ></input>
          <br></br>
          <button id="signUpButton" align="center">
            Sign Up
          </button>
          <br></br>
          <Link to="#" id="existingAccount">
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
