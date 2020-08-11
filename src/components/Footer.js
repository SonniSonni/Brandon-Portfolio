import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    
    <footer>
        <p>© 2020 Brandon Schaen</p>
        <Link to="/ContactPage" id="footer-policy">Privacy Policy</Link>
        <Link to="/ContactPage" id="footer-contact">Contact</Link>     
    </footer>

);

export default Footer;