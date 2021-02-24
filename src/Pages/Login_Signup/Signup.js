import './Signup.css';
import React from 'react';
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <div id="signup">
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <div id="signup__signupBox">
        <h1 id="signup__signupPage">Signup</h1>

        <form id="form">
          <input
            id="signup__firstName"
            type="text"
            placeholder="First Name"
            required
          ></input>

          <input
            id="signup__lastName"
            type="text"
            placeholder="Last Name"
            required
          ></input>
          <br></br>
          <input
            id="signup__email"
            type="email"
            placeholder="Email"
            required
          ></input>
          <br></br>
          <input
            id="signup__password1"
            type="password"
            placeholder="Password"
            required
          ></input>
          <br></br>
          <input
            id="signup__password2"
            type="password"
            placeholder="Confirm Password"
            required
          ></input>
          <br></br>
          <Link to="LoginPage" id="signup__signUpButton">
            Sign Up
          </Link>
          <br></br>
          <Link to="LoginPage" id="signup__existingAccount">
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
