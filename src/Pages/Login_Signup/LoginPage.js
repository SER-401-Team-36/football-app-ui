import './LoginPage.css';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { useLocalStorage } from '../../hooks';
import sparky from '../../images/Sparky.jpg';
import { loginFormSchema } from './schema';

const LoginPage = () => {
  const [loginFailed, setLoginFailed] = useState(false);
  const [loginComplete, setLoginComplete] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [accessToken, setAccessToken] = useLocalStorage(
    'ACCESS_TOKEN',
  );

  const handleSubmit = (values) => {
    setLoginFailed(false);
    fetch(`${process.env.REACT_APP_API_HOST}/auth`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((body) => {
          setAccessToken(body.access_token);
          setLoginComplete(true);
        });
      } else {
        setLoginFailed(true);
      }
    });
  };

  return (
    <div id="pageHolder">
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      {loginComplete && <Redirect to="/ViewPlayers" />}
      <div id="loginBox">
        <img id="sparkyImg" alt="Sparky Background" src={sparky} />
        <h1 id="login">Login</h1>
        {loginFailed && <p>Login failed, please try again</p>}

        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={loginFormSchema}
        >
          {() => (
            <Form id="form">
              <Field
                id="username"
                name="email"
                type="text"
                align="center"
                placeholder="email"
              />
              <ErrorMessage name="email" />
              <Field
                id="password"
                name="password"
                type="password"
                align="center"
                placeholder="Password"
              />
              <ErrorMessage name="password" />
              <button id="submit" type="submit" align="center">
                Sign in
              </button>
            </Form>
          )}
        </Formik>
        <Link to="/ForgotPassword" className="login_page__link">
          Forgot Password?
        </Link>

        <Link to="/Signup" className="login_page__link">
          Need to Sign up?
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
