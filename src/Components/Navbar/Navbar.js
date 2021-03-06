import './Navbar.css';

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../images/asuLogo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li>
          <img className="navbar__asuLogo" alt="" src={logo} />
        </li>
        <li>
          <NavLink
            to="/ViewPlayers"
            className="navbar__links navbar__links--hover"
            activeClassName="underline"
          >
            Players
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Team"
            className="navbar__links navbar__links--hover"
            activeClassName="underline"
          >
            Team
          </NavLink>
        </li>
        {/* 
        <li>
          <NavLink
            to="/ViewAnalytics"
            className="navbar__links navbar__links--hover"
            activeClassName="underline"
          >
            Analytics
          </NavLink>
        </li>
*/}
        <li>
          <NavLink
            to="/Draft"
            className="navbar__links navbar__links--hover"
            activeClassName="underline"
          >
            Draft
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Upload"
            className="navbar__links navbar__links--hover"
            activeClassName="underline"
          >
            Upload
          </NavLink>
        </li>
        <li>
          <Link to="/LoginPage" className="navbar__loginPage">
            <i
              id="navbar__accountimg"
              className="fas fa-user-circle fa-lg"
            ></i>
            <br></br>
            Login
          </Link>
        </li>
        <li>
          <Link to="/LoginPage" className="navbar__logout">
            <i
              id="navbar__logout"
              className="fas fa-user-circle fa-lgo"
            ></i>
            <br></br>
            Logout
          </Link>
        </li>
        <li>
          <Link to="/Signup" className="navbar__signup">
            <i
              id="navbar__signupimg"
              className="fas fa-user-plus"
            ></i>
            <br></br>
            Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
