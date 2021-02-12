import React from 'react';
import './Header.css';
import { Link } from 'react-scroll';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="home" activeClass="active" spy={true} smooth={true}>Home</Link>
        </li>
        <li>
          <Link to="projects" smooth={true}>Work</Link>
        </li>
        <li>
          <Link to="about" smooth={true}>About</Link>
        </li>
        <li>
          <Link to="contact" smooth={true}>Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;