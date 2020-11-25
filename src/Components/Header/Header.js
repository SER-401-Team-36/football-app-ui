import './Header.css';

import React from 'react';

import logo from '../../images/asuLogo.png';

function Header() {
  return (
    <div className="headerContainer">
      <img className="asuLogo" alt="" src={logo} />
      <h1 className="headerText">ASU Fantasy Football Drafter</h1>
      <hr className="headerRule"></hr>
    </div>
  );
}

export default Header;
