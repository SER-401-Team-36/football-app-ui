import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css';

const { ImportContacts } = require("@material-ui/icons");

class Navbar extends Component {
    render() {
        return(
            <nav className="NavbarItems">
                <ul>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;