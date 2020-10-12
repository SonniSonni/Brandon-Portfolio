import React from 'react';
import './ContactPage.css';

const ContactPage = () => (
  <div className="contact-page">
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="email-containers">
        <div className="email">
          <h2>Email Me</h2>
        </div>
        <div className="message">
          <h2>Message Me Here!</h2>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;