import React from 'react';
import './AboutPage.css';
import face from "../../Resources/my-face.jpg";
import htmlLogo from "../../Resources/html-logo.png";
import cssLogo from "../../Resources/css-logo.png";
import jsLogo from "../../Resources/javascript-logo.png";
import reactLogo from "../../Resources/react-logo.svg";
import gitLogo from "../../Resources/git-ico.png";
import bashLogo from "../../Resources/bash-logo.png";
import xdLogo from "../../Resources/xd-logo.png";
import photoshopLogo from "../../Resources/photoshop-logo.png";

const AboutPage = () => (
  <section id="about" className="about-page">
    <h2 className="about-title">Me</h2>
    <section className="desc-img">
      <section className="desc">
        <p className="personal">Front-end web designer and developer from 
        <br />
        Baltimore, Maryland.
        </p>
        <p className="personal">Programming for the past 8 years, the last 5 have been dedicated to continuosly learning and developing a passion for various web technologies.</p>
      </section>
      
      <img src={face} alt="Self Portrait"/>
    </section>
    
    <section className="skills">
      <h3 className="skills-title">Skills</h3>
      <ul className="skill-list">
        <li className="skill-icon">
          <img className="skill-img" src={htmlLogo} alt=""/>
          <p className="skill-name">HTML5</p>
        </li>
        <li className="skill-icon">
          <img className="skill-img" src={cssLogo} alt=""/>
          <p className="skill-name">CSS3</p>
        </li>
        <li className="skill-icon">
          <img className="skill-img" src={jsLogo} alt=""/>
          <p className="skill-name">JAVASCRIPT</p>
        </li>
        <li className="skill-icon">
          <img className="skill-img" src={reactLogo} alt=""/>
          <p className="skill-name">REACT</p>
        </li>
        <li className="skill-icon">
          <img className="skill-img" src={gitLogo} alt=""/>
          <p className="skill-name">GIT</p>
        </li>
        <li className="skill-icon">
          <img className="skill-img" src={bashLogo} alt=""/>
          <p className="skill-name">BASH</p>
        </li>
        <li className="skill-icon">
          <img className="skill-img" src={xdLogo} alt=""/>
          <p className="skill-name">ADOBE XD</p>
        </li>
        <li className="skill-icon">
          <img className="skill-img" src={photoshopLogo} alt=""/>
          <p className="skill-name">PHOTOSHOP</p>
          </li>
      </ul>
    </section>
    <a href="#contact">
      <svg className="corner-circ" xmlns="http://www.w3.org/2000/svg" width="155" height="145" viewBox="0 0 155 145">
        <ellipse className="circ-path" id="Ellipse_3" data-name="Ellipse 3" cx="77.5" cy="72.5" rx="77.5" ry="72.5" fill="#212121"/>
      </svg>
    </a>
  </section>
);

export default AboutPage;