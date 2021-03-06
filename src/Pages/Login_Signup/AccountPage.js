import './AccountPage.css';

import React from 'react';
import sparky from '../../images/Sparky.jpg';
import { Link } from 'react-router-dom';

const AccountPage = () => {
  return (
    <div id="pageHolder">
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <div id="loginBox">
        <img id="sparkyImg" alt="Sparky Background" src={sparky} />
        <h1 id="login">Account</h1>

        
      </div>
    </div>
  );
};

export default AccountPage;