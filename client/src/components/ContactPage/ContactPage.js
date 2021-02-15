import React from 'react';
import './ContactPage.css';
import git from '../../resources/git-ico.png';
import linkedin from '../../resources/linked-logo.png';
import twitter from '../../resources/twitter-icon.png';

const ContactPage = () => (
  <section id="contact" className="contact-page">
    <h2 className="contact-title">Contact</h2>
    <section className="form-container">
      <form className="contact-form" action="">
        <div className="input-container">
          <label htmlFor="name-input">Name</label>
          <input required type="text" name="name-input" id="name-input"/>
        </div>
        <div className="input-container">
          <label htmlFor="email-input">Email</label>
          <input required type="email" name="email-input" id="email-input"/>
        </div>
        <div className="input-container">
          <label htmlFor="message-input">Message</label>
          <textarea required name="message-input" id="message-input" cols="10" rows="5"></textarea>
        </div>
        <section className="social-submit">
          <section className="socials">
            <a rel="noopener noreferrer" href="https://github.com/KamajiiSC" target="_blank"><img src={git} alt=""/></a>  
            <a href="https://www.linkedin.com/in/brandon-schaen/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt=""/></a>
            <a href="https://twitter.com/KamajiiJeesh" target="_blank" rel="noopener noreferrer"><img src={twitter} alt=""/></a>
          </section>
          
          <input type="submit" id="submit-btn" value="SEND"></input>
        </section>
      </form>
    </section>
  </section>
);

export default ContactPage;