import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <div className="footer-wrap">
    <ul className="footer-nav">
      <li><NavLink exact to="/terms" className="footer-link" activeClassName="active"><h4>Terms of Use</h4></NavLink></li>
      <li><NavLink exact to="/privacy" className="footer-link" activeClassName="active"><h4>Privacy Policy</h4></NavLink></li>
      <li><NavLink exact to="/contact" className="footer-link" activeClassName="active"><h4>Contact</h4></NavLink></li>
      <li><h4>2020 ©</h4></li>
    </ul>
  </div>
);

export default Footer;