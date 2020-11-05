import React from 'react';
import './Header.css';
import headerImg from '../../Resources/headerImg.png';
import ham from '../../Resources/ham.png';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <img src={headerImg} alt="Brandon Schaen" className="header-img"/>
    <nav>
      <ul className="nav-list">
        <li> <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink> </li>
        <li> <NavLink to="/portfolio" className="nav-link" activeClassName="active">Portfolio</NavLink> </li>
        <li> <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink> </li>
        <li> <NavLink to="/contact" className="nav-link contact" activeClassName="active">Contact</NavLink> </li>
      </ul>
    </nav>
    <button id="ham-btn" aria-expanded="false" aria-controls="menu"> 
      <img src={ham} alt="menu" className="ham" />
    </button> 
  </div>
);

export default Header;