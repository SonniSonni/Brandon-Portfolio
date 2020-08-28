import React from 'react';
import { Link } from 'react-router-dom';
import GithubLogo from '../../resources/github-logo.png'
import LinkedLogo from '../../resources/linkdin-logo.png';
import TwitterLogo from '../../resources/twitter-logo.png';

const Footer = () => (
    
    <footer>
        <p>© 2020 Brandon Schaen</p>
        <div id="footer-socials">
            <a target="_blank" href="https://github.com/KamajiiSC"><img src={GithubLogo}/></a>
            <a target="_blank" href="https://www.linkedin.com/in/brandon-schaen-53764216a/"><img src={LinkedLogo}/></a>
            <a target="_blank" href="https://twitter.com/KamajiiJeesh"><img src={TwitterLogo}/></a>
        </div>
        <Link to="/ContactPage" id="footer-policy">Privacy Policy</Link>
        <Link to="/ContactPage" id="footer-contact">Contact</Link>     
    </footer>

);

export default Footer;