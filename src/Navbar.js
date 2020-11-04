import React from "react";
import './Navbar.css';
import {NavLink, BrowserRouter as Router, Link, Route} from "react-router-dom";
import ViewPlayers from "./ViewPlayers";

const Navbar = () => {

        return(
            <nav className="NavbarItems">
                <ul className="nav-menu">
                    <li>
                        <Link to="/ViewPlayers" className="nav-links">Players</Link>
                    </li>

                    <li>
                        <Link to="/ViewAnalytics" className="nav-links">Analytics</Link>
                    </li>
                </ul>
            </nav>
        )

}

export default Navbar;