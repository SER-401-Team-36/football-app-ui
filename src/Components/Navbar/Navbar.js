import './Navbar.css';

import { TextField } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
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

        <li>
          <Link to="#" className="navbar__search">
            Search
          </Link>
        </li>

        <li>
          <TextField id="navbar__searchText" variant="outlined" />
        </li>

        <li>
          <i
            className="navbar__searchIcon"
            id="navbar__searchIcon"
          ></i>
        </li>

        <li></li><li></li> <li></li> <li></li><li></li> <li></li> <li></li><li></li> <li></li><li></li> <li></li><li></li> <li></li>

        <li>
          <Link
            to="/LoginPage"
            className="loginPage">
              Login
            </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
