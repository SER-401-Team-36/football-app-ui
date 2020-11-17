import React from "react";
import './Navbar.css';
import {BrowserRouter as Link} from "react-router-dom";
import { TextField } from '@material-ui/core';

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

                    <li>
                        <Link to="#" className="search">Search</Link>
                    </li>

                    <li >
                        <TextField id="searchText" variant="outlined" />
                    </li>

                    <li>
                    <Link to="#"><i class="fas fa-search" id="searchIcon"></i></Link>
                    </li>
                </ul>
            </nav>
        )

}

export default Navbar;