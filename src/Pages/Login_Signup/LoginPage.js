import './LoginPage.css';

import React from 'react';
import { Button } from 'react-bootstrap';
import sparky from '../../images/Sparky.jpg';

const LoginPage = () => {
    return (
        <div id="pageHolder">
            <div id="loginBox">
                <img id="sparkyImg" alt="Sparky Background" src={sparky} />
                <h1 id="login">Login</h1>
            </div>
        </div>
    );
  };
  
  export default LoginPage;