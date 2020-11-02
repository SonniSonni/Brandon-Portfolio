import React from 'react';
import './Footer.css';
import NavLink from 'react-router-dom';

const Footer = () => (
  <div className="footer-wrap">
    <ul className="footer-nav">
      <li><NavLink exact to="/terms" className="footer-link" activeClassName="active"><h4>Terms of Use</h4></NavLink></li>
      <li><h4>Privacy Policy</h4></li>
      <li><h4>Contact</h4></li>
      <li><h4>Sitemap</h4></li>
      <li><h4>2020 ©</h4></li>
    </ul>
  </div>
);

export default Footer;