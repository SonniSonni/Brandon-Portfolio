import React from 'react';
import './AboutPage.css';
import Portrait from '../../Resources/profile.jpg';
import Resume from '../../Resources/BrandonSchaen.docx';

const AboutPage = () => (
  <div className="about-page">
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-content">
        <p className="desc">Enthusiastic front-end web developer eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Clear understanding of Html, CSS, JavaScript, and training in React. Motivated to learn, grow and excel in web development. In my freetime I also enjoy gaming, anime, photography, and many more hobbies I've picked up over the years.</p>
        <div className="portrait-container">
          <img className="portrait" src={Portrait} alt="Picture of Brandon"/>
        </div>
      </div>
      <div className="resume">
        <p>See my resume here:</p>
        <a href={Resume}>Resume</a>
      </div>
    </div>
  </div>
);

export default AboutPage;