import './SignoutPage.css';

import React from 'react';
import sparky from '../../images/Sparky.jpg';
import { Link } from 'react-router-dom';

const SignoutPage = () => {
  return (
    <div id="pageHolder">
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <div id="loginBox">
        <img id="sparkyImg" alt="Sparky Background" src={sparky} />
        <h1 id="login">Login</h1>

        <form id="form">
          <input
            id="username"
            type="text"
            align="center"
            placeholder="Username"
          ></input>

          <input
            id="password"
            type="password"
            align="center"
            placeholder="Password"
          ></input>

          <button id="submit" align="center">
            Sign in
          </button>
          <Link to="ForgotPassword" id="forgot">
            Forgot Password?
          </Link>

          <Link to="Signup" id="signup">
            Need to Sign up?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignoutPage;