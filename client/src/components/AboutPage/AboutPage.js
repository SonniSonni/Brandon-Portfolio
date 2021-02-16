import React from 'react';
import './AboutPage.css';
import face from "../../resources/my-face.jpg";
import htmlLogo from "../../resources/html-logo.png";
import cssLogo from "../../resources/css-logo.png";
import jsLogo from "../../resources/javascript-logo.png";
import reactLogo from "../../resources/react-logo.svg";
import gitLogo from "../../resources/git-ico.png";
import bashLogo from "../../resources/bash-logo.png";
import xdLogo from "../../resources/xd-logo.png";
import photoshopLogo from "../../resources/photoshop-logo.png";
import corner from '../../resources/cornercircle.svg';

const AboutPage = () => (
  <section id="about" className="about-page">
    <h2 className="about-title">Me</h2>
    <section className="desc-img">
      <section className="desc">
        <p className="personal">Just a front-end web developer from 
        <br />
        Baltimore, Maryland.
        </p>
        <p className="personal"> I wrote my first lines of code when I was only 12, but have spent the better part of the last 4 years learning everything I can about <br /> the world of the web.</p>
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
    <img src={corner} alt="circle decoartion" className="corner-circ"/>
  </section>
);

export default AboutPage;