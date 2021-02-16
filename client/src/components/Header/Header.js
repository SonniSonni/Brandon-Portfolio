import React from 'react';
import './Header.css';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <a href="#home" className="active">Home</a>
        </li>
        <li>
          <a href="#projects">Work</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;