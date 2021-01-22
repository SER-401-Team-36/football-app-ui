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
