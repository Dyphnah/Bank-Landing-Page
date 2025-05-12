
import "./Footer.css";
import logo from './assets/images/logo.svg';
import Pinterest from './assets/images/icon-pinterest.svg';
import Twitter from './assets/images/icon-twitter.svg';
import YouTube from './assets/images/icon-youtube.svg';
import Facebook from './assets/images/icon-facebook.svg';
import Instagram from './assets/images/icon-instagram.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
    
    return (
        < div className="footer-section">
            <div className="footer-items">
                <img src={logo} className = 'logo'alt="logo" />
                <div className="social-icons">
                    <img src={Facebook} alt="facebook" />
                    <img src={YouTube} alt="youtube" />
                    <img src={Twitter} alt="twitter" />
                    <img src={Pinterest} alt="pinterest" />
                    <img src={Instagram} alt="instagram" />
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
                <button className="btn">Request Invite</button>
                <p>Easybank. All Rights Reserved</p>
            </div>
        
        </div>
    )
}