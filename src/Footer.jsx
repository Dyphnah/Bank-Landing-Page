import React from "react";
import "./Footer.css";
import logo from './assets/images/logo.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
    
    return (
        <>
            <div className="footer-items">
                <img src={logo} alt="logo" />
                <div className="social-icons">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
            <div className="footer-items">
                <ul>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li> 
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </div>
            <div className="footer-items">
                <ul>
                    <li>
                        <Link to="/careers">Careers</Link>
                    </li>
                    <li>
                        <Link to="/support">Support</Link>
                    </li> 
                    <li>
                        <Link to="/policy">Privacy Policy</Link>
                    </li>
                </ul>
            </div>
            <div className="footer-items">
                <button>Request Invite</button>
                <p>Easybank. All Rights Reserved</p>
            </div>
        
        </>
    )
}