import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    
    <footer>
        <p>© 2020 Brandon Schaen</p>
        <Link to="/ContactPage" className="footer-link">Contact</Link>
    </footer>

);

export default Footer;