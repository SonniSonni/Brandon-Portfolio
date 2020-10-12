import React from 'react';
import './ContactPage.css';
import github from '../../Resources/GitHub-Mark-64px.png';
import link from '../../Resources/LI-In-Bug.png';

const ContactPage = () => (
  <div className="contact-page">
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="email-containers">
        <div className="email">
          <h2>Email Me!</h2>
          <h3>BrandonLSchaen@gmail.com</h3>
          <p>Always looking for new opportunities!</p>
          <div className="contact-socials">
            <a href="https://github.com/KamajiiSC" target="_blank" rel="noopener noreferrer"> <img src={github} alt="Github Logo"/> </a>
            <a> </a>
            <a href="https://www.linkedin.com/in/brandon-schaen/" target="_blank" rel="noopener noreferrer"> <img src={link} alt="Linked-In Logo"/> </a>
          </div>
        </div>
        <div className="message">
          <h2>Message Me Here!</h2>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;