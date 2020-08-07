import React from 'react';
import logo from '../../resources/portfolio-logo.svg'
import { NavLink, Link } from 'react-router-dom'

const Header = () => (
  <header>
    <Link to="/">
      <img src={logo} alt="" />
    </Link>
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