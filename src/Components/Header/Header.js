import React from 'react';
import './Header.css';
import headerImg from '../../Resources/headerImg.png';

const Header = () => (
  <div className="header">
    <img src={headerImg} alt="Brandon Schaen" className="header-img"/>
    <nav>
      <ul className="nav-list">
        <li>Home</li>
        <li>Portfolio</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </div>
);

export default Header;