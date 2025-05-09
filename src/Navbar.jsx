import React from "react";
import "./Navbar.css";
import logo from './assets/images/logo.svg';
import { Link } from 'react-router-dom';


function Navbar() {
    
    return (

        <nav className="nav-items">
            <div className="logo">
                <img src={logo} alt="bank_logo" />
            </div>
            <div className="nav-li">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li> 
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/careers">Careers</Link>
                    </li>
                    <li className="last">
                        <Link to="/request">Request Invite</Link>
                    </li>
                </ul>
             </div>   
            </nav>
    )
}

export default Navbar;