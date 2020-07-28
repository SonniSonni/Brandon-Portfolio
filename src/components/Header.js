import React from 'react';
import logo from '../../resources/portfolio-logo.svg'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <img src={logo} alt="" />
    <div id="header-spacer"></div>
    <nav>
      <ul>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/PortfolioPage" className="nav-link">Portfolio</NavLink>
        <NavLink to="/AboutPage" className="nav-link">About</NavLink>
        <NavLink to="/ContactPage" className="nav-link">Contact</NavLink>
      </ul>
    </nav>
  </header>
);

export default Header;