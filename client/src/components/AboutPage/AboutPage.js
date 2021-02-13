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

const AboutPage = () => (
  <section id="about" className="about-page">
    <h2 className="about-title">Me</h2>
    <section className="desc-img">
      <section className="desc">
        <p className="personal">Just a front-end web developer from 
        <br />
        Baltimore, Maryland.
        </p>
        <p className="personal"> I wrote my first lines of code when I was only 12, but have spent the better part of the last 4 years learning everything I can about the world of the web.</p>
      </section>
      
      <img src={face} alt="Self Portrait"/>
    </section>
    
    <section className="skills">
      <h3 className="skills-title">Skills</h3>
      <ul className="skill-list">
        <li className="skill-icon"><img src={htmlLogo} alt=""/></li>
        <li className="skill-icon"><img src={cssLogo} alt=""/></li>
        <li className="skill-icon"><img src={jsLogo} alt=""/></li>
        <li className="skill-icon"><img src={reactLogo} alt=""/></li>
        <li className="skill-icon"><img src={gitLogo} alt=""/></li>
        <li className="skill-icon"><img src={bashLogo} alt=""/></li>
        <li className="skill-icon"><img src={xdLogo} alt=""/></li>
        <li className="skill-icon"><img src={photoshopLogo} alt=""/></li>
      </ul>
    </section>
  </section>
);

export default AboutPage;