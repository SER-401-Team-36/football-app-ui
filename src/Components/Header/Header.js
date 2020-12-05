import './Header.css';

import React from 'react';

import logo from '../../images/asuLogo.png';

function Header() {
  return (
    <div className="headerContainer">
      <img className="headerContainer__asuLogo" alt="" src={logo} />
      <h1 className="headerContainer__text">
        ASU Fantasy Football Drafter
      </h1>
      <hr className="headerContainer__rule"></hr>
    </div>
  );
}

export default Header;
