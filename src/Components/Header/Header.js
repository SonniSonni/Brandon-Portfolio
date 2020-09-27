import React from 'react';
import './Header.css';
import headerImg from '../../Resources/headerImg.png';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <img src={headerImg} alt="Brandon Schaen" className="header-img"/>
    <nav>
      <ul className="nav-list">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  </div>
);

export default Header;