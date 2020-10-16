import React from 'react';
import './AboutPage.css';
import Portrait from '../../Resources/profile.jpg';
import Resume from '../../Resources/BrandonSchaen.docx';

const AboutPage = () => (
  <div className="about-page">
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-content">
        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tortor lorem, tempus vitae lorem at, lacinia cursus massa. Nulla facilisi. Vivamus accumsan mi non porttitor tempor. In egestas eu purus vel gravida. Aenean bibendum, sem nec auctor convallis, est ligula aliquam risus, in convallis ligula enim ut metus. Nam eu tellus rhoncus, eleifend risus vel, ullamcorper nunc. Phasellus nec turpis sit amet lacus accumsan vehicula. Quisque pharetra aliquam arcu nec imperdiet.</p>
        <div className="portrait-container">
          <img className="portrait" src={Portrait} alt=""/>
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