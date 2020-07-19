import React from 'react';
import logo from '../../resources/portfolio-logo.svg'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <img src={logo} alt="" />
    <div id="header-spacer"></div>
    <nav>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/PortfolioPage">Portfolio</NavLink>
        <NavLink to="/AboutPage">About</NavLink>
        <NavLink to="/ContactPage">Contact</NavLink>
      </ul>
    </nav>
  </header>
);

export default Header;