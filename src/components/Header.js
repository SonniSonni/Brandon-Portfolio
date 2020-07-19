import React from 'react';
import logo from '../../resources/portfolio-logo.svg'

const Header = () => (
  <header>
    <img src={logo} alt="" />
    <div id="header-spacer"></div>
    <nav>
      <ul>
        <li><a href="./HomePage"> <h2>Home</h2> </a></li>
        <li><a href="./PortfolioPage"> <h2>Portfolio</h2> </a></li>
        <li><a href="./AboutPage"> <h2>About</h2> </a></li>
        <li><a href="#"> <h2>Contact</h2> </a></li>
      </ul>
    </nav>
  </header>
);

export default Header;