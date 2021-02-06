import './LoginPage.css';

import React from 'react';
import sparky from '../../images/Sparky.jpg';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div id="login">
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <div id="login__loginBox">
        <img
          id="login__sparkyImg"
          alt="Sparky Background"
          src={sparky}
        />
        <h1 id="login__login">Login</h1>

        <form id="form">
          <input
            id="login__username"
            type="text"
            align="center"
            placeholder="Username"
          ></input>

          <input
            id="login__password"
            type="password"
            align="center"
            placeholder="Password"
          ></input>

          <button id="login__submit" align="center">
            Sign in
          </button>
          <Link to="ForgotPassword" id="login__forgot">
            Forgot Password?
          </Link>

          <Link to="Signup" id="login__signup">
            Need to Sign up?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
