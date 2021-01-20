import './Navbar.css';

import { TextField } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/asuLogo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li>
          <img className="navbar__asuLogo" alt="" src={logo} />
        </li>
        <li>
          <Link
            to="/ViewPlayers"
            className="navbar__links navbar__links--hover"
          >
            Players
          </Link>
        </li>

        <li>
          <Link
            to="/ViewAnalytics"
            className="navbar__links navbar__links--hover"
          >
            Analytics
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
