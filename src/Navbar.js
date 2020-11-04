import React from "react";
import './Navbar.css';
import {NavLink, BrowserRouter as Router, Link, Route} from "react-router-dom";
import ViewPlayers from "./ViewPlayers";

const Navbar = () => {

        return(
            <nav className="NavbarItems">
                <ul className="nav-menu">
                    <li className="nav-links">
                        <Link to="/ViewPlayers" id="playersLink">Players</Link>
                    </li>
                </ul>
            </nav>
        )

}

export default Navbar;