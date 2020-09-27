import React from 'react';
import './Header.css';
import headerImg from '../../Resources/headerImg.png';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <img src={headerImg} alt="Brandon Schaen" className="header-img"/>
    <nav>
      <ul className="nav-list">
        <li> <NavLink to="/" className="nav-link">Home</NavLink> </li>
        <li> <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink> </li>
        <li> <NavLink to="/about" className="nav-link">About</NavLink> </li>
        <li> <NavLink to="/contact" className="nav-link">Contact</NavLink> </li>
      </ul>
    </nav>
  </div>
);

export default Header;