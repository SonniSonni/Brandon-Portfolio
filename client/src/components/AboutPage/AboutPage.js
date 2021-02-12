import React from 'react';
import './AboutPage.css';
import face from "../../resources/my-face.jpg";

const AboutPage = () => (
  <section id="about" className="about-page">
    <h2 className="about-title">Me</h2>
    <section className="desc-img">
      <p className="personal">Just a front-end web developer from 
Baltimore, Maryland. I wrote my first lines of code when I was only 12, but have spent the better part of the last 4 years learning everything I can about the world of the web.</p>
      <img src={face} alt=""/>
    </section>
  </section>
);

export default AboutPage;