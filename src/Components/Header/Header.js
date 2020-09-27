import React from 'react';
import './Header.css';
import headerImg from '../../Resources/headerImg.png';

const Header = () => (
  <div className="header">
    <img src={headerImg} alt="Brandon Schaen" className="header-img"/>
  </div>
);

export default Header;