import React from 'react'
import logo from './images/asuLogo.png';

function Header () {
    return (
        <div className="headerContainer">
            <img className="asuLogo" src={logo} />
            <h1 className="headerText">ASU Fantasy Football Drafter</h1>
            <br /><br /><br /><br /><br /><hr className="headerRule"></hr>
        </div>
    )
}

export default Header