import React from "react";
import './Navbar.css';
import {NavLink, BrowserRouter as Router, Link, Route} from "react-router-dom";
import { TextField } from '@material-ui/core';

const Navbar = () => {

        return(
            <nav className="navbar">
                <ul className="navbar__menu">
                    <li>
                        <Link to="/ViewPlayers" className="navbar__links navbar__links--hover">Players</Link>
                    </li>

                    <li>
                        <Link to="/ViewAnalytics" className="navbar__links navbar__links--hover">Analytics</Link>
                    </li>

                    <li>
                        <Link to="#" className="navbar__search">Search</Link>
                    </li>

                    <li >
                        <TextField id="navbar__searchText" variant="outlined" />
                    </li>

                    <li>
                        <i class="fas fa-search" id="navbar__searchIcon"></i>
                    </li>
                </ul>
            </nav>
        )

}

export default Navbar;