import './Navbar.css';

import React from 'react';
import { NavLink } from 'react-router-dom';
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
            to="/ViewAnalytics"
            className="navbar__links navbar__links--hover"
            activeClassName="underline"
          >
            Analytics
          </NavLink>
        </li>
        <li>
          <Link to="/LoginPage" className="navbar__loginPage">
            <i
              id="navbar__accountimg"
              class="fas fa-user-circle fa-lg"
            ></i>
            <br></br>
            Login
          </Link>
        </li>
        <li>
          <Link to="/Signup" className="navbar__signup">
            <i id="navbar__signupimg" class="fas fa-user-plus"></i>
            <br></br>
            Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
